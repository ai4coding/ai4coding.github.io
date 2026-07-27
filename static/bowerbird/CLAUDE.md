# BowerBird PRO — 실시간 데이터 로거 & 플로터 (CLAUDE.md)

> 이 폴더 작업 전 필독. 루트 `CLAUDE.md`(전체 지도) → 이 파일(BowerBird 상세)의 2단 계층.
> 작업하며 새 사실을 알게 되면 **이 파일을 갱신**한다.

## 0. 한 줄 정체
BowerBird는 **독립 정적 웹앱**이다(확장 안에 그려지는 게 아님). **DSL 데이터사이언스랩 확장 4종**(dsl_esp32·dsl_uno·dsl_mini·dsl_mabit)이 `window.open`으로 띄우는 **차트/플로터 팝업**. 센서 값을 실시간 라인차트로 그리고 CSV 저장·분석(미분/적분/스무딩/이상치)을 제공한다.

- **빌드 불필요**: dev서버(8601)가 `static/`를 직접 서빙 → **파일 수정 후 브라우저 새로고침 + 플로터 재실행**이면 반영.
- ⚠️ **배포 시**: 프로덕션 배포는 `build/static/bowerbird/`(webpack이 static/→build/ 자동복사)를 쓴다. 깃허브 배포 전 scratch-gui `npm run build`로 `build/` 동기화 필수(안 하면 배포본만 옛 버전).

## 1. 폴더 구조
```
static/bowerbird/
├── index.html            ← UI 마크업 (data-translate 속성으로 i18n)
├── css/style.css         ← 레이아웃. #page-app 이 앱 화면. 임베드는 body.brixel-embed
├── js/
│   ├── main.js           ← 진입점: DOMContentLoaded, 언어로드, 임베드 브리지, 이벤트, CSV
│   ├── visualization/
│   │   └── chart-handler.js  ← Chart.js 래핑: 데이터버퍼→렌더루프→chart.update
│   └── utils/
│       ├── i18n.js       ← languages맵·loadLanguage·translate·updatePageText·resolveLang
│       └── helpers.js    ← logMessage(콘솔로그), 시각포맷 등
└── translations/*.json   ← 21개 언어 (ko 기준 111키). ko en ja zh-CN zh-TW de es fr it pt ru nl ar tr fa uz id ms th vi tl
```

## 2. 확장 ↔ BowerBird 계약 (★중요)
확장(scratch-vm) `openChart()`가 여는 URL: **`static/bowerbird/index.html?embed=1&lang=<에디터로케일>`**, 창이름 `'brixel_bowerbird'`.
- `?embed=1` → 임베드 모드(`main.js:embedMode`). 연결/로깅/센서설정 패널 숨김(`.embed-hide`), 차트만.
- `&lang=` → 에디터 로케일. 확장이 `formatMessage.setup().locale`를 **열 때마다** 읽어 붙임(4종 openChart 동일). **열려있는 창은 focus만 하니 언어 바꾸려면 닫고 재실행.**
- **postMessage 프로토콜** (부모 확장 ↔ 팝업):
  - 팝업→부모: `{type:'BRIXEL_BOWERBIRD_READY'}` (준비완료, 부모가 이걸 받고 CONFIG/START 전송)
  - 부모→팝업: `BRIXEL_CONFIG{sensorNames}` · `BRIXEL_START{sensorNames}` · `BRIXEL_DATA{line}` · `BRIXEL_STOP` · `BRIXEL_CLEAR` · `BRIXEL_EXPORT`
  - `BRIXEL_DATA.line`은 문자열(구분자로 나뉜 센서값). `processDataLine`이 파싱→`addDataPoint`.

## 3. i18n 시스템 (★자주 건드림)
- **DOM 텍스트**: `index.html`의 `data-translate="key"` → `updatePageText`가 `translations[key]` 있을 때만 교체. **키 없으면 HTML의 원래(한글) 텍스트 잔존**(= 미번역의 주원인).
- **JS 문자열**: `translate('key')`(없으면 key 자체 반환) / `logMessage('key', {params})`(콘솔로그, `{param}` 치환).
- **언어 선택**(main.js DOMContentLoaded): `?lang`(에디터) 있으면 `resolveLang(rawLang) || 'en'`(**미지원=영어 폴백, 한국어 아님**). 없으면 `localStorage > navigator > 'en'`. `loadLanguage`는 선택값을 localStorage에 저장.
- **resolveLang**(i18n.js): 에디터코드→BB코드 정규화(exact→대소문자/지역 `zh-cn`→`zh-CN`→base `es-419`→`es`), 미지원 null.
- **★규칙**: 새 UI 문자열 추가 시 (1) `data-translate` 부여 또는 `translate()`/`logMessage()` 사용, (2) **ko.json에 키 추가**(기준), (3) **21개 파일 전부 채움**(누락 시 한글 노출). (4) `{placeholder}`는 모든 언어에서 그대로 보존.
- 코드-vs-ko 감사법: `data-translate="..."`(html)+`logMessage('..')`/`translate('..')`(js) 키를 ko와 대조.

## 4. 데이터·렌더 파이프라인 (★성능)
`addDataPoint(values, timeInfo)` → `dataPointBuffer`에 push (50ms마다 flush) → `renderLoop()`가 flush + x축창 계산 + **`chart.update('none')`**.
- **구동**: main.js `animate()`가 rAF(~60fps)로 renderLoop 반복(`isLogging` 동안).
- **★렌더 스로틀(2026-07-20)**: renderLoop의 `chart.update`를 **30fps로 제한**(`RENDER_INTERVAL=33ms`). 이유: 전체화면 캔버스를 60fps로 리드로우하면 메인스레드 포화→수신 postMessage 지연·버스트→점 뭉침/벌어짐(뚝뚝). `flushDataPoints`는 매 프레임 유지(데이터 손실 없음), 무거운 리드로우만 게이팅.
- 타임스탬프: `mcuTimestamp` 있으면 그것, 없으면 `currentTime`(수신시각). 마이크로비트 raw값은 후자→렌더지연이 x간격 왜곡했었음(스로틀로 완화).
- 메모리: `MAX_DATA_POINTS`(10만) 초과 시 downsample. SHIFTING 모드에서 뷰 밖 점 trim.
- **★렌더 dirty-게이트(2026-07-25)**: `dataDirty` 플래그 — `flushDataPoints`가 실제 새 점을 받으면 true, `renderLoop`은 30fps 게이트 통과 후 **dataDirty일 때만 `chart.update`**(그 후 false). 이유: `isLogging`이 true인 한 `animate()` rAF가 계속 도는데, 송신이 멈춰도(무한루프 블록 정지·**메인창 새로고침** 등으로 `BRIXEL_STOP` 미수신) 팝업이 누적 차트를 30fps로 **영원히 리드로우**해 메인스레드(같은 렌더러 프로세스)까지 계속 느리게 만들던 문제(=창을 닫아야만 빨라짐) 해결. zoom/pan·resize·분석은 각자 `chart.update`를 직접 부르므로 무관.
- **★fullDataStore 상한(2026-07-25)**: 분석용 `fullDataStore[i]`도 `flushDataPoints`에서 `MAX_DATA_POINTS` 초과 시 downsample. 기존엔 trim이 없어 no-wait 스트림에서 세션 내내 무한 증가→메모리·GC 누수였음(차트 표시배열만 downsample됐었음).
- **★송신측 throttle(2026-07-25, DSL확장 4종)**: 근원 방지는 송신측 — `chartAdd`/`chartFlush`가 `this.runtime.requestRedraw()` 호출→ scratch `forever` 루프를 **프레임당 1회(~30fps)** 로 제한. 없으면 no-wait 루프가 초당 수천 `postMessage`를 쏴 홍수(게다가 vm 스텝루프가 Worker타이머라 가려져도 전속력, 5.5절). pen/motion 관용구와 동일. dsl_esp32/uno/mabit/mini 공통.
- Chart 설정: `responsive:true, maintainAspectRatio:false, animation:false`, zoom/pan 플러그인, y1 보조축.

## 5. 반응형 레이아웃 (★2026-07-20)
- `#page-app .main-layout`: grid `350px 1fr`, `height: calc(100vh - 40px)`.
- **차트 캔버스**: `<canvas id="dataChart">`를 **`.chart-canvas-wrap`(position:relative·flex:1·min-height/width:0)로 감싸고 캔버스는 `position:absolute·100%`**. 이유: 래퍼 없이 `flex:1`만이면 Chart.js가 캔버스에 px크기를 baking→창 축소 시 안 줄어듦→스크롤바. (Chart.js shrink 고질버그의 표준 해법.)
- `initializeChart`에 `window resize → chart.resize()`. 임베드 모드 `html/body{overflow:hidden;height:100vh}`(main.js 주입)로 스크롤바 원천차단.

## 5.5 송신측 스로틀 문제 (★엔진 수정으로 해결, 2026-07-20)
- 증상: 플로터를 **최대화**하면 데이터가 1개/초로 급감(드래그로 키우면 정상). 원인은 BowerBird가 아니라 **송신측 에디터**: 팝업이 에디터 창을 100% 가리면 Chrome이 occluded 창의 메인스레드 타이머를 1Hz로 스로틀 → scratch-vm 스텝루프(`setInterval 33ms`)가 1스텝/초 → chartSend 블록이 1회/초.
- 해결: **scratch-vm `engine/runtime.js` `start()`의 스텝 타이머를 inline Blob Worker로 이전**(워커 타이머는 가시성 스로틀 면제). Worker 불가 시 setInterval 폴백. → 에디터가 가려져도/최소화돼도 블록 전속 실행(하드웨어 제어 끊김 고질병 동시 해결). 실기 검증 완료.
- 이 수정은 vm 엔진 소속(vm 빌드 필요). 상세는 메모리 `reference_bowerbird_plotter` 참조.

## 6. 함정·규칙 요약
- 정적파일=빌드 불필요·새로고침이면 반영. 단 **배포는 build/ 동기화** 필요.
- 21개 언어는 **ko 기준으로 항상 동기화**(누락 키=한글 노출). es-419 없음(BB는 es).
- 초기화 순서: **`loadLanguage`가 `initializeChart`보다 먼저**여야 초기 로그(logChartInit)가 번역됨(main.js DOMContentLoaded).
- 렌더가 33ms 초과할 초대형 캔버스면 `devicePixelRatio` 캡 추가 여지(현재 스로틀만).

## 7. 지능형 과학실 ON 전송 패널 (★2026-07-25 내장)
차트에 그려지는 값을 그대로 한국과학창의재단 **지능형 과학실 ON**으로 실시간 업로드하는 UI. 확장 블록(DSL 4종 son* 카테고리)과 **별개**로 팝업 자체에서 동작.
- **배치**: **왼쪽 사이드바 CSV 저장 버튼 아래 새 `.section`**(index.html). `.embed-hide`가 아니라 **팝업(embed)에서도 표시**. 시나리오=①차트 데이터 출력→②시리즈별 물리량 선택(#sonTypeRows)→③모둠코드(#sonModumCode)→④전송 시작(#sonToggleBtn 토글).
- **파일**: `js/core/science-on.js`(신규 ES모듈: `SON_TYPES` 30종·`sonTypeLabel`·`ScienceOnUploader`) + `main.js`(setupScienceOn/updateSonTypeRows/toggleScienceOn/sonT). VM `shared/science-on-api.js`는 require 불가라 검증 로직을 이식(내용 동일). 상세·API 규칙은 메모리 [[project_science_on_integration]].
- **전송 모델**: `processDataLine`의 addDataPoint 직후 `sonLatestValues`에 최신 프레임 저장(+dirty 플래그). 전송 시작하면 **setInterval 1초**(플랫폼 초 단위 하한)로, 새 값이 있을 때만 `uploader.sendFrame(series)`. 정지 시 stale 반복 안 함. 차트 렌더(30fps)와 무관하게 독립 동작.
- **버튼 색**: `.btn-primary`는 `#page-index` 스코프라 `#page-app`에선 무색 → **`btn-start`(초록)/`btn-stop`(빨강)** 토글. `.btn-xs`와 함께.
- **i18n**: 새 키 5개(sonPanelTitle/sonStartBtn/sonStopBtn/sonModumPlaceholder/sonNeedModum)를 **ko/en/es.json에만** 추가(사용자 지시=나머지 나중 일괄). 나머지 18언어는 `sonT(key,fallback)` 헬퍼가 한국어 폴백(translate가 키 미존재 시 **키 자체를 반환**하는 특성 때문에 `v!==key`로 판별 후 폴백). h3 title은 `data-translate`라 updatePageText가 미존재 시 HTML 한국어 유지. **버튼/placeholder는 상태·언어 의존이라 data-translate 안 붙이고 JS(sonT)로 관리**(updatePageText가 sonActive 무시하고 덮어쓰는 것 방지).

## 8. 실시간 게이지 대시보드 (★2026-07-27 신설)

라인차트는 **시간에 따른 변화**를 보여주지만 "지금 값이 얼마인지"는 눈으로 읽기 어렵다. 자동차 속도계 모양 원형 게이지가 그 반대 역할을 한다(현재값 하나를 크게).

- **파일**: `js/visualization/gauge-dash.js`(신규, **import 없는 독립 ES모듈**) + `css/style.css` 끝의 `.gauge-*` 블록 + `index.html` 의 `<div id="gaugeDash">`.
- **배치**: 왼쪽 사이드바의 **독립 섹션 `실시간 게이지`**(i18n 키 `realtimeGauge`, 21개 언어 전부 보유), **데이터 분석 도구 바로 위**. `.embed-hide` 아님 = 팝업(embed)에서도 보인다. (처음엔 데이터 분석 섹션 *안*에 넣었다가 사용자 지시로 별도 섹션으로 분리 — 미분/적분과 성격이 다르다.)
- ★**크기 함정**: `grid-template-columns` 를 `repeat(auto-fit, minmax(88px,1fr))` 로 두면 **시리즈가 1개일 때 열이 하나로 합쳐져 사이드바 폭(≈328px) 전체를 차지**해 게이지가 거대해진다(실제 발생). **`repeat(2, 1fr)` 고정 + `.gauge-svg{max-width:118px; margin:0 auto}`** 로 해결. 350px 사이드바 기준 열폭 162px·실게이지 118px·셀높이 ≈124px → `max-height:268px` 면 **2줄(센서 4개)까지 보이고 그 이상만 스크롤**.
- 시리즈가 아직 없을 때 제목만 남은 빈 상자가 되지 않도록 `.section:has(> .gauge-dash:empty){display:none}`(Chrome 105+; 미지원 브라우저에선 그냥 빈 상자라 안전).
- **연결점 6곳**(main.js): `updateSensorInputs` 끝 → `buildGauges(sensorNames)` / **센서 이름 입력칸 `input` 리스너 → `buildGauges(sensorNames)`** / `processDataLine` → `pushValues(values)` / `startLogging` → `resetGauges`+`startGaugeTimer` / `stopLogging` → `stopGaugeTimer` / `BRIXEL_CLEAR` → `resetGauges`.
  - ★**이름 입력 리스너를 빠뜨렸었다**(2026-07-27 사용자 지적). 그 리스너는 `sensorNames[i]` 와 차트만 갱신하고 게이지는 안 건드려서 **이름을 바꿔도 게이지 이름표가 옛 이름 그대로**였다. 새 UI 가 시리즈 이름을 쓰면 **차트 갱신하는 자리를 전부 찾아 같이 부를 것**.
  - ★**`buildGauges` 는 개수가 같으면 다시 만들지 않고 이름표만 교체**한다. 이름 입력칸은 글자 하나마다 호출되는데 매번 SVG 를 새로 만들면 **바늘이 최솟값으로 튀었다가 100ms 뒤 제자리로 돌아가 깜빡인다**(언어 변경 때도 같은 경로).
  - 이름은 사용자가 블록에 적는 문자열이라 **`innerHTML` 보간 금지·`textContent` 로만** 넣는다(따옴표 하나에 마크업이 깨진다).
- **기본 센서 개수 = 2**(`index.html #sensorCount value`, 구 1). 과학실 계측은 보통 2개 이상을 함께 보는데 1이면 데이터 오기 전 게이지가 하나만 떴다(사용자 지적). 실제 데이터가 오면 `processDataLine` 의 자동감지가 **위·아래 양방향**으로 실제 개수에 맞추므로(`values.length !== currentCount`) 1개짜리 프로젝트도 문제없다.
- ★**값이 올 때마다 DOM 을 만지지 않는다.** `pushValues` 는 `pending` 에 최신 프레임만 덮어쓰고, **10fps `setInterval`(`UPDATE_MS=100`)** 이 그린다. 차트가 이미 30fps 로 메인스레드를 쓰므로(4절) 게이지까지 매 프레임 돌리면 안 된다. 바늘은 **SVG `transform` 회전만** 바꿔 리플로우가 없다.
- ★**눈금 범위(min~max)는 자동이고 "넓어지기만" 한다.** 값이 흔들릴 때마다 눈금이 같이 출렁이면 학생이 크기를 비교할 수 없다. `niceBounds()` 가 1·2·5×10ⁿ 로 반올림. **로깅을 새로 시작하면 초기화**(`resetGauges`).
- ★**도형 좌표는 반드시 검산할 것**(실제로 두 번 겹쳤다): 중심 (50,52)·반지름 38·선폭 9 → 호는 **−120°~+120°**(`START_DEG`/`SWEEP_DEG`), 양 끝이 (17.1, 71)·(82.9, 71), 선폭 때문에 **실제 하단은 y=75.5**. 그래서 현재값 텍스트는 y=72(호가 없는 x 25~75 구간), 눈금 라벨은 **y=86**(viewBox 높이를 80→**88**로 키워 확보). 처음엔 y=66/78 로 뒀다가 호 끝 캡과 겹쳤다.
- 호 채우기는 `pathLength="100"` + `stroke-dasharray="<백분율> 100"` — 호 길이를 계산할 필요가 없다.
- 색은 차트 시리즈와 맞춘다(`GAUGE_COLORS` = chart-handler 의 `sensorColors` 와 **같은 순서**. ★둘 중 하나만 고치면 색이 어긋난다).
- 레이아웃: `grid-template-columns: repeat(auto-fit, minmax(88px,1fr))` → 350px 사이드바에 3개/줄, `max-height:230px` 넘으면 스크롤. `.gauge-dash:empty{display:none}` 로 데이터 오기 전엔 자리를 안 먹는다.

## 9. 사이드바 섹션 순서 (★2026-07-27 변경)
연결 설정 → 센서 설정 → **⏱ 실시간 게이지** → **데이터 분석 도구(미분/적분/스무딩/이상치)** → 🔬 지능형 과학실 ON 전송 → **데이터 관리**(맨 아래).
- 구 **"데이터 가져오기"** 를 **"데이터 관리"** 로 개명하고 **맨 아래로** 내렸다(사용자 지시). 내용물(CSV 저장/불러오기 + 안내·바로가기 3개)은 그대로. 실제로 저장·불러오기를 다 하는 자리라 "가져오기"가 이름값을 못 했다.
- ★**새 i18n 키 `dataManage` 를 21개 언어 전부에 넣었다**(구 `dataImport` 키는 파일에 남아 있으나 이제 쓰이지 않음 — 되돌릴 때 필요). 키가 없으면 그 언어에서 HTML 원문(한국어)이 그대로 노출된다(3절).

_최종: 2026-07-27 · 관련 메모리 [[reference_bowerbird_plotter]] [[project_science_on_integration]] · 소비확장 dsl_esp32/uno/mini/mabit_
