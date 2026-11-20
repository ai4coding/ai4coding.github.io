# tasks-vision/models — MediaPipe Tasks 모델 자체 호스팅

> ⚠️ 지도이지 정답이 아니다 — 파일 크기·존재는 `ls -la` 로 재확인. 이 폴더를 만지면 이 파일을 갱신할 것.

비전 워커(`scratch-vm/src/extensions/shared/vision-worker-entry.js`)가 **same-origin** 으로 받는 모델들.
학교 방화벽이 `storage.googleapis.com` 을 막아도 동작해야 하므로 CDN 이 아니라 여기서 서빙한다
(`webpack.config.js` 가 `static/` 전체를 `build/static/` 으로 복사 → 배포본에도 포함). wasm 은 형제 폴더 `../wasm`.

| 파일 | 용량 | 쓰는 곳(kind) | 출처 |
|---|---|---|---|
| `hand_landmarker.task` | 7,819,105 | `hand` (손 4카드) | Google 스토리지 `mediapipe-models/hand_landmarker/hand_landmarker/float16/1/` (워커 이관 2026-08-11 수동) |
| `pose_landmarker_lite.task` | 5,777,746 | `pose` (포즈 3카드) | `mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/` (〃) |
| `face_landmarker.task` | 3,758,596 | `faceMesh` (얼굴 3카드) | `mediapipe-models/face_landmarker/face_landmarker/float16/1/` (〃) |
| `blaze_face_short_range.tflite` | 229,746 | `faceDet` (얼굴 감지) | `mediapipe-models/face_detector/blaze_face_short_range/float16/1/` (〃) |
| **`magic_touch.tflite`** | 6,227,884 | **`segTouch`** — `InteractiveSegmenterLegacy`, 「AI 이미지 인식」 배경 제거 | `https://storage.googleapis.com/mediapipe-models/interactive_segmenter/magic_touch/float32/1/magic_touch.tflite` (2026-09-13) |
| **`selfie_multiclass_256x256.tflite`** | 16,371,837 | **`segPerson`** — `ImageSegmenter`, 사람(머리카락·피부·옷) 조건부 제외 | `https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_multiclass_256x256/float32/latest/selfie_multiclass_256x256.tflite` (2026-09-13) |
| **`efficientdet_lite0.tflite`** | 7,254,339 | 사물 인식(`objectdetector`) 빠른 모드 — 화면 쪽 `ObjectDetector`(COCO 80가지) | `mediapipe-models/object_detector/efficientdet_lite0/float16/1/` (2026-11-18) |
| **`efficientdet_lite2.tflite`** | 12,138,859 | 사물 인식 정확 모드 | `mediapipe-models/object_detector/efficientdet_lite2/float16/1/` (2026-11-18) |
| **`selfie_segmenter_landscape.tflite`** | 250,177 | **`segSelfie`** — `ImageSegmenter`(확신도 마스크 0~255), 바디 세그먼테이션 스튜디오·효과 | `mediapipe-models/image_segmenter/selfie_segmenter_landscape/float16/latest/` (2026-11-18) |
| **`mobilenet_v3_large.tflite`** | 10,889,458 | **`embed`** — `ImageEmbedder`(1280차원 · L2 정규화), 사물 학습·이미지 분류모델 학습 특징 추출 | `mediapipe-models/image_embedder/mobilenet_v3_large/float32/1/` (2026-11-18) |

- 2026-09-13 두 줄과 2026-11-18 네 줄(efficientdet 2 · selfie_segmenter · mobilenet_v3)은 `../fetch_vendor.py tasks` 로 다시 받을 수 있다(`TASKS_MODELS`). 앞 4종은 스크립트에 없다 —
  추가하려면 같은 표 형식으로 넣되 **URL 을 먼저 curl 로 재확인**(경로의 버전 세그먼트가 바뀌는 일이 있다).
- 2026-11-19: 형제 위치 `../vision_bundle.mjs`(155,439B)는 npm `@mediapipe/tasks-vision` 1.0.1 의 복사다 — 모양 탭 「배경 지우기 › 사물 고르기(AI)」(`src/lib/bg-remove/click-segmenter.js`)가 webpack 을 거치지 않고 이 파일을 직접 불러온다. `../wasm/` 과 **같은 판**이어야 하므로 판을 올릴 때 둘을 함께 다시 복사.
- 라이선스: MediaPipe 모델 = Apache 2.0(모델 카드 참조). 재배포 가능.
- ★`magic_touch.tflite` 는 **Legacy 판**이다. tasks-vision 1.0.1 의 새 `InteractiveSegmenter` 는 `.task` 번들만 받으며
  실측 CPU 6.5초/프레임·GPU 값 깨짐이라 쓰지 않는다(정본 = `dev-logs/proto_objectlearn/CLAUDE.md`).
  Legacy 마스크는 **0 = 사물, >0 = 배경**(뒤집혀 있다) — 워커가 1 = 배경으로 정규화해 보내고 확장이 `v === 0` 을 사물로 읽는다.
- `selfie_multiclass` 카테고리: 0 배경 · 1 머리카락 · 2 몸 피부 · 3 얼굴 피부 · 4 옷 · 5 기타(들고 있는 물건이 들어갈 수 있어 사람에서 뺀다).
- 파일을 지우면 워커 `createTask` 가 실패하고 확장은 **배경 제거를 끄고 화면 안내** 후 예전 방식(화면 전체)으로 계속한다 — 조용히 죽지 않는다.
- ★`mobilenet_v3_large` 특징은 옛 TF.js MobileNet v2 와 **다른 공간**이다(차원은 같은 1280). 옛 학습 파일은 카드가 encoder 필드로 가려 거절한다 — 섞으면 에러 없이 인식만 틀린다.
  확신도 기준값 대응(실측 · 옛 → 새): 0.35→0.14 · 0.45→0.27 · 0.65→0.49 · 0.75→0.67 · 0.95→0.955. 측정 = V2 `dev-logs/실측_Holistic_20261118/calib.html`.
