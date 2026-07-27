# Scratch 신규 확장 블록 가이드

> **작성일:** 2026-02-25
> **대상:** Scratch 3.0 기반 커스텀 확장 블록

---

## 목차

1. [개요](#개요)
2. [IoT & 하드웨어 통신](#iot--하드웨어-통신)
3. [AI & 머신러닝](#ai--머신러닝)
4. [컴퓨터 비전 & 인식](#컴퓨터-비전--인식)
5. [데이터 과학 & 시각화](#데이터-과학--시각화)
6. [기존 확장 개선](#기존-확장-개선) ⭐ NEW
7. [유틸리티 & 기타](#유틸리티--기타)
8. [전체 확장 목록](#전체-확장-목록)

---

## 개요

이 문서는 Scratch VM에 신규로 추가되거나 개선된 **70개 이상의 확장 블록**의 기능을 설명합니다 (표준 Scratch 내장 포함 총 79개 확장 등록).

**확장 구성:**
- ✨ **신규 추가:** IoT·라이브모드 하드웨어 보드·AI·컴퓨터 비전·MLOps 파이프라인·데이터 과학·TTS 등
- ⭐ **기존 개선:** Pen, Translate, Video Sensing
- 🔌 **라이브모드 하드웨어 보드 (v1.6):** 리치실드, 메가 슈퍼리치, micro:bit V2 + ma:bit, ESP32 풀키트 — 시리얼/블루투스로 실물 보드 라이브 제어(펌웨어 디스패처 패턴)
- 📷 **핸드폰 카메라 (v1.6):** WebRTC P2P로 폰 카메라를 무대에 주입 — 모든 AI 비전 확장과 자동 연동
- 🧩 **MLOps 파이프라인 (v1.6):** 8단계 ML 워크플로(데이터 → 미디어 → AutoML → 신경망빌더 → 실험추적 → 평가 → 책임성 → 모델허브)

## 전체 확장 목록

| No |        EXT ID      |       확장명      | 카테고리 | 주요 기술 | 상태 |
|----|--------------------|------------------|---------|----------|------|
| 01 | `howtouse`         | 사용법 안내      . | 유틸리티 | Hyperlinks | 신규 |
| 02 | `webserial`        | 웹 시리얼 (IoT)    | IoT 통신 | Web Serial API | 신규 |
| 03 | `webble`           | 웹 블루투스        | IoT 통신 | Web Bluetooth API | 신규 |
| 04 | `scratch3wifi`     | 와이파이 (웹소켓)   | IoT 통신 | WebSocket | 신규 |
| 05 | `speechrecognition`| 음성 인식          | AI | Web Speech API | 신규 |
| 06 | `facerecognition`  | 얼굴 인식          | 컴퓨터 비전 | face-api.js | 신규 |
| 07 | `countingfingers`  | 손가락 개수 세기    | 컴퓨터 비전 | MediaPipe Hands | 신규 |
| 08 | `handtracking`     | 손 특징점 추적      | 컴퓨터 비전 | MediaPipe Hands | 신규 |
| 09 | `facetracking`     | 얼굴 특징점 추적    | 컴퓨터 비전 | MediaPipe Face Mesh | 신규 |
| 10 | `posetracking`     | 몸 특징점 추적      | 컴퓨터 비전 | MediaPipe Pose | 신규 |
| 11 | `tmimage`          | 티처블머신 이미지   | AI | Teachable Machine | 신규 |
| 12 | `tmpose`           | 티처블머신 포즈     | AI | Teachable Machine | 신규 |
| 13 | `tmsound`          | 티처블머신 사운드   | AI | Teachable Machine | 신규 |
| 14 | `allinonehand`     | 손 인식 올인원      | 컴퓨터 비전 | MediaPipe + Gesture | 신규 |
| 15 | `allinoneface`     | 얼굴 인식 올인원    | 컴퓨터 비전 | MediaPipe + Metrics | 신규 |
| 16 | `datavisualization`| 데이터 시각화       | 데이터 과학 | Chart.js | 신규 |
| 17 | `rlmachine`        | 강화학습 자율주행   | AI & 제어 | Q-learning | 신규 |
| 18 | `peopletracking`   | 사람 추적          | 컴퓨터 비전 | PoseNet | 신규 |
| 19 | `blockrecorder`    | 블록 조립 레코더    | 유틸리티 | Blockly API | 신규 |
| 20 | `weather`          | 실시간 날씨        | 유틸리티 | Open-Meteo API | 신규 |
| 21 | `lanerecognition`  | 자율주행 비전       | 제어 | Computer Vision + PID | 신규 |
| 22 | `handwriting`      | 손글씨 인식        | AI | MyScript API | 신규 |
| 23 | `datascience`      | 데이터 과학        | 데이터 과학 | jExcel + Chart.js | 신규 |
| 24 | `esp32cam`         | ESP32-CAM 비디오   | IoT 통신 | WebSocket + Python | 신규 |
| 25 | `colorsensing`     | 스마트 컬러 센싱    | 컴퓨터 비전 | Webcam + Color Analysis | 신규 |
| 26 | `chatterboxtts`    | 브릭셀AI TTS       | AI | Local TTS Agent + Multi-Voice | 신규 |
| 27 | `pen`              | 펜 (그리기 + 레이더)| 그래픽 | Canvas Rendering | ⭐ 개선 |
| 28 | `translate`        | 번역 (다중 프록시)  | 유틸리티 | Google Translate + Proxy | ⭐ 개선 |
| 29 | `videoSensing`     | 비디오 감지 (개선)  | 컴퓨터 비전 | Stage Video Detection | ⭐ 개선 |
| 30 | `imageclassifier`  | AI 이미지 분류 학습 | AI & 컴퓨터 비전 | MobileNet + KNN | 신규 |
| 31 | `objectdetector`   | 사물 인식 AI | 컴퓨터 비전 | MediaPipe EfficientDet | 신규 |
| 32 | `allinonehand`     | 손 인식 올인원 (KNN 제스처) | AI & 컴퓨터 비전 | MediaPipe + KNN | ⭐ 개선 |
| 33 | `faceSensing` | 얼굴 감지 | 컴퓨터 비전 | MediaPipe Face Detection | 신규 |
| 34 | `imageModel` | 이미지 분류모델 학습 | AI & ML | MobileNet v2 + TF.js | 신규 |
| 35 | `soundclassifier` | 소리 분류모델 학습 | AI & ML | Web Audio FFT + TF.js | 신규 |
| 36 | `textclassifier` | 텍스트 분류모델 학습 | AI & ML | BoW + TF.js MLP | 신규 |
| 37 | `logisticregression` | 숫자 분류모델(확률) 학습 | AI & ML | Sigmoid + TF.js | 신규 |
| 38 | `linearregression` | 선형 회귀 학습 | AI & ML | 최소자승법 | 신규 |
| 39 | `polynomialregression` | 다항 회귀 학습 | AI & ML | 다항 피팅 + TF.js | 신규 |
| 40 | `knn` | KNN 분류 학습 | AI & ML | 거리 기반 분류 | 신규 |
| 41 | `kmeans` | K-means 군집화 학습 | AI & ML | 중심점 기반 군집화 | 신규 |
| 42 | `svm` | SVM 분류 학습 | AI & ML | Linear/RBF 커널 + ml-svm | 신규 |
| 43 | `decisiontree` | 의사결정나무 학습 | AI & ML | 트리 기반 분류 | 신규 |
| 44 | `behaviorcloning` | 행동 복제(모방학습) | AI & ML | 모방 학습 + TF.js | 신규 |
| 45 | `datascience` | 데이터 사이언스 (개선) | 데이터 과학 | jExcel + ML 알고리즘 | ⭐ 개선 |
| 46 | `brixelai` | 브릭셀AI 어시스턴트 | AI | LLM 에이전트 | 신규 |
| 47 | `facefeature` | 얼굴 특징 | 컴퓨터 비전 | MediaPipe Face Mesh | 신규 |
| 48 | `faceidentification` | 얼굴 식별 | 컴퓨터 비전 | face-api.js | 신규 |
| 49 | `faceexpression` | 얼굴 표정 | 컴퓨터 비전 | MediaPipe + 감정 | 신규 |
| 50 | `handfeature` | 손 특징 | 컴퓨터 비전 | MediaPipe Hands | 신규 |
| 51 | `handgesture` | 손 제스처 | 컴퓨터 비전 | MediaPipe + 제스처 | 신규 |
| 52 | `posefeature` | 자세 특징 | 컴퓨터 비전 | MediaPipe Pose | 신규 |
| 53 | `bodysegmentation` | 인체 분할 | 컴퓨터 비전 | MediaPipe Selfie Seg | 신규 |
| 54 | `poselearning` | 자세 학습 | AI & 컴퓨터 비전 | KNN 자세 분류 | 신규 |
| 55 | `objecttracking` | 객체 추적 | 컴퓨터 비전 | MediaPipe + 추적 | 신규 |
| 56 | `colorregion` | 색 영역 | 컴퓨터 비전 | 색 영역 분석 | 신규 |
| 57 | `personfollow` | 사람 따라가기 | 컴퓨터 비전 | 자세 기반 추적 | 신규 |
| 58 | `robotarm6axis` | 6축 로봇팔 | 제어 | 역기구학 | 신규 |
| 59 | `ifttt` | IFTTT 웹훅 | IoT / 유틸 | Webhook API | 신규 |
| 60 | `googlegemini` | 구글 제미나이 | AI | Gemini API | 신규 |
| 61 | `localllm` | 로컬 LLM | AI | 로컬 LLM 에이전트 | 신규 |
| 62 | `qrbarcode` | QR / 바코드 | 컴퓨터 비전 | QR/바코드 디코드 | 신규 |
| 63 | `tagrecognition` | AR 태그 인식 | 컴퓨터 비전 | AR 마커 인식 | 신규 |
| 64 | `mapviewer` | 지도 뷰어 | 유틸 | 지도 API | 신규 |
| 65 | `text2speech` | 텍스트 음성변환 | AI | 음성 합성 | 신규 |
| 66 | `datapipeline` | 데이터 파이프라인 (MLOps 1) | MLOps | 표 데이터셋 빌더 | 신규 |
| 67 | `mediapipeline` | 미디어 파이프라인 (MLOps 2) | MLOps | 이미지/오디오 데이터셋 | 신규 |
| 68 | `automl` | AutoML (MLOps 3) | MLOps | 자동 학습 | 신규 |
| 69 | `nnbuilder` | 신경망 빌더 (MLOps 4) | MLOps | 신경망 구조 설계 | 신규 |
| 70 | `exptracking` | 실험 추적 (MLOps 5) | MLOps | 실행/지표 로깅 | 신규 |
| 71 | `modeleval` | 모델 평가 (MLOps 6) | MLOps | 지표 / 혼동행렬 | 신규 |
| 72 | `responsibleai` | 책임성 AI (MLOps 7) | MLOps | 공정성 / 편향 점검 | 신규 |
| 73 | `modelhub` | 모델 허브 (MLOps 8) | MLOps | Firebase 모델 공유 | 신규 |
| 74 | `richshield` | 리치실드 (라이브모드) | 하드웨어 | 우노 + 라이브 펌웨어 (시리얼/BLE) | 신규 |
| 75 | `superrich` | 메가 슈퍼리치 (라이브모드) | 하드웨어 | 메가 + 라이브 펌웨어 (시리얼/BLE) | 신규 |
| 76 | `microbitv2` | micro:bit V2 + ma:bit (라이브모드) | 하드웨어 | MakeCode 펌웨어 + 시리얼/BLE | 신규 |
| 77 | `esp32fullset` | ESP32 풀키트 (라이브모드) | 하드웨어 | ESP32 펌웨어 + esptool-js (시리얼/BLE) | 신규 |
| 78 | `phonecam` | 핸드폰 카메라 | 컴퓨터 비전 / IoT | WebRTC P2P → 무대 영상 | 신규 |

> 표준 Scratch 내장(`makeymakey`, `microbit`, `ev3`, `boost`, `wedo2`, `gdxfor`, `music`, `pen`, `translate`, `videoSensing`, `text2speech`)도 함께 번들됩니다.

---
## IoT & 하드웨어 통신

### 1. 웹 시리얼 (Web Serial)

**주요 기술:** Web Serial API

**기능:**
- Arduino, Micro:bit 등 시리얼 장치와 유선 통신
- 송신 모드: 한 번 보내기, 계속 보내기, 이름:값 형식 전송
- 수신 모드: 줄바꿈 기준 데이터 파싱, 쉼표 구분 파싱
- 통신 속도 설정 (9600 ~ 115200 baud)
- 중복 데이터 전송 방지, 스로틀링 (30ms)

**주요 블록:**
- `웹시리얼 연결하기`
- `[TEXT] 한 번 보내기 (줄바꿈 포함)`
- `[TEXT] 계속 보내기`
- `수신된 데이터 (한 줄 읽기)`
- `수신 데이터 [DELIMITER](으)로 분리하기`

**사용 예시:**
```
웹시리얼 연결하기
속도 115200 (으)로 바꾸기
LED:ON 한 번 보내기 (줄바꿈 포함)
```

---

### 2. 웹 블루투스 (Web Bluetooth) 

**주요 기술:** Web Bluetooth API (BLE)

**기능:**
- Micro:bit, Arduino, ESP32 등 블루투스 장치와 무선 통신
- 장치 타입 자동 인식 (Nordic UART, JDY-33, HM-10)
- 20바이트 청크 분할 전송 (BLE MTU 대응)
- 송신/수신 프로토콜은 웹 시리얼과 동일

**주요 블록:**
- `[DEVICE_TYPE] 장치에 연결하기 (기본)`
- `서비스 UUID [SERVICE] TX [TX] RX [RX] 장치 연결하기`
- `블루투스가 연결되었는가?`
- `이름 [LABEL] : 값 [VALUE] 계속 보내기`

**지원 장치:**
- BBC micro:bit
- Arduino/ESP32 (Nordic UART)
- JDY-33/HM-10 (AT Mode)
- 기타 모든 BLE 장치 (자동 탐지)

---

### 3. 와이파이 (WebSocket) 

**주요 기술:** WebSocket (ws:// / wss://)

**기능:**
- ESP8266, ESP32 등 WiFi 장치와 WebSocket 통신
- 프로토콜 자동 선택 (HTTPS 환경에서는 wss://)
- 스트리밍 모드: Raw 전송, CSV 다중 전송, 라벨:값 전송
- 스로틀링 50ms (웹 시리얼보다 빠름)

**주요 블록:**
- `[IP]:[PORT] 와이파이 장치에 연결하기`
- `[PROTOCOL] [ADDRESS] 보안 연결하기`
- `[DATA] (Raw) 계속 보내기 (줄바꿈 없음)`
- `[NUM_FIELDS]개 변수 계속 보내기: [DATA]`

**사용 예시:**
```
192.168.1.10:8080 와이파이 장치에 연결하기
3개 변수 계속 보내기: 100, 200, 300
```

---

### 4. ESP32-CAM 비디오 


**주요 기술:** WebSocket + Python 브리지

**기능:**
- ESP32-CAM 카메라 영상을 Scratch 무대에 실시간 표시
- 로컬 Python 브리지 프로그램을 통한 WebSocket 통신
- 영상 반전, 스냅샷 저장 기능

**주요 블록:**
- `브리지 프로그램 다운로드 사이트 열기`
- `ESP32-CAM 에이전트에 연결하기`
- `ESP32-CAM 비디오 표시 [ON_OFF]`
- `ESP32-CAM 스냅샷 저장하기`

---

## AI & 머신러닝

### 5. 티처블머신 이미지 


**주요 기술:** Teachable Machine Image Model

**기능:**
- Google Teachable Machine으로 학습한 이미지 분류 모델 사용
- 모델 URL 입력으로 커스텀 분류기 로드
- 임계값 설정 (0.0 ~ 1.0)으로 인식 정확도 조절

**주요 블록:**
- `티처블머신 사이트 가기`
- `모델 주소를 [URL](으)로 바꾸기`
- `임계값을 [THRESHOLD](으)로 바꾸기`
- `모델 시작하기`
- `인식 결과`

**사용 예시:**
```
모델 주소를 https://teachablemachine.withgoogle.com/models/ABC123/(으)로 바꾸기
임계값을  0.8(으)로 바꾸기
모델 시작하기
만약 (인식 결과) = [고양이] 라면
  "고양이 발견!" 말하기
```

---

### 6. 티처블머신 포즈 

**주요 기술:** Teachable Machine Pose Model

**기능:**
- 신체 포즈 기반 분류 (예: 팔 들기, 앉기, 서기 등)
- 키포인트 좌표 및 신뢰도 반환
- 모델 학습: https://teachablemachine.withgoogle.com/train/pose

**주요 블록:**
- `모델 주소를 [URL](으)로 바꾸기`
- `인식 결과 (포즈 클래스명)`
- `[N]번째 키포인트의 X좌표`
- `[N]번째 키포인트의 Y좌표`

---

### 7. 티처블머신 사운드 

*
**주요 기술:** Teachable Machine Audio Model

**기능:**
- 음성/소리 명령어 인식 (박수, 휘파람, 키워드 등)
- 마이크 명시적 제어
- 배경 소음 필터링

**주요 블록:**
- `마이크 사용 허용하기`
- `모델 주소를 [URL](으)로 바꾸기`
- `모델 시작하기`
- `인식 결과`

**사용 예시:**
```
마이크 사용 허용하기
모델 주소를 [MODEL_URL](으)로 바꾸기
모델 시작하기
만약 (인식 결과) = [박수] 라면
  효과음 재생하기
```

---

### 8. 음성 인식 (Speech Recognition) 

**주요 기술:** Web Speech API

**기능:**
- 실시간 음성→텍스트 변환
- 명령어 감지 (forward, backward, left, right, stop, go, turn)
- 숫자 파라미터 추출 (속도, 각도, 거리)
- 다국어 지원 (한국어, 영어, 일본어, 중국어 등)
- 감성 분석 (긍정/부정/중립)

**주요 블록:**
- `set language to [LANG]`
- `start speech recognition`
- `recognized text`
- `last command`
- `detected speed (0-100)`
- `detected angle (degrees)`
- `< contains keyword [WORD]? >`
- `(sentiment)`

**사용 예시:**
```
set language to [ko-KR]
start speech recognition
만약 (last command) = [forward] 라면
  속도 (detected speed)(으)로 앞으로 이동하기
```

---

### 9. 강화학습 자율주행 

**주요 기술:** Q-learning 알고리즘

**기능:**
- Q-learning 기반 자율주행 AI 구현
- 센서 입력 이산화 (3센서/6센서 모드)
- PID 제어기 통합
- 학습 파라미터 조절 (학습률, 탐험률, 할인율)
- Q-Table 저장/로드 (JSON)

**주요 블록:**
- `AI 두뇌 설정: 학습률 [ALPHA] 탐험률 [EPSILON] 할인율 [GAMMA]`
- `센서 배열 [SENSORS] 를 3센서 패턴으로 변환`
- `Q-learning: 상태 [STATE] 행동 [ACTION] 보상 [REWARD] 다음상태 [NEXT_STATE]`
- `최적 행동 반환: 상태 [STATE]`
- `Q-Table 저장 (다운로드)`
- `Q-Table 불러오기 [JSON]`

**사용 예시:**
```
AI 두뇌 설정: 학습률 0.1 탐험률 0.2 할인율 0.9
센서값 = 센서 배열 [100,50,30] 를 3센서 패턴으로 변환
행동 = 최적 행동 반환: 상태 (센서값)
Q-learning: 상태 (센서값) 행동 (행동) 보상 10 다음상태 (다음센서값)
```

---

## 컴퓨터 비전 & 인식

### 10. 얼굴 인식 (Face Recognition) 


**주요 기술:** face-api.js

**기능:**
- 얼굴 등록 및 인식 (1:N 매칭)
- 얼굴 특징 벡터 추출
- 로컬 스토리지에 등록된 얼굴 저장
- 실시간 인식 (5 FPS)

**주요 블록:**
- `카메라 켜기`
- `[NAME] 이름으로 얼굴 등록하기`
- `얼굴 인식 시작하기`
- `인식된 얼굴 이름`
- `얼굴 인식 정확도 (%)`

---

### 11. 손가락 개수 세기 


**주요 기술:** MediaPipe Hands

**기능:**
- 양손 손가락 개수 인식
- 왼손/오른손 독립 감지
- 손 스켈레톤 실시간 렌더링

**주요 블록:**
- `카메라 켜기`
- `손 인식 시작하기`
- `손 스켈레톤 표시하기`
- `왼손 손가락 개수`
- `오른손 손가락 개수`
- `전체 손가락 개수`

---

### 12. 손 특징점 추적 (Hand Tracking) 


**주요 기술:** MediaPipe Hands (21 landmarks)

**기능:**
- 손의 21개 특징점 좌표 추적
- 왼손/오른손 구분
- 정확도 조절 (0.1 ~ 0.9)

**주요 블록:**
- `카메라 켜기`
- `손 추적 시작하기`
- `인식 정확도를 [CONFIDENCE](으)로 바꾸기`
- `왼손의 [LANDMARK] 특징점 X좌표`
- `왼손의 [LANDMARK] 특징점 Y좌표`

---

### 13. 얼굴 특징점 추적 (Face Tracking) 

**주요 기술:** MediaPipe Face Mesh (468 landmarks)

**기능:**
- 얼굴 메시 468개 특징점 추적
- 5개 범위별 좌표 접근 (0-100, 101-200, 201-300, 301-400, 401-477)
- 얼굴 메시 시각화

**주요 블록:**
- `카메라 켜기`
- `얼굴 추적 시작하기`
- `얼굴 메시 표시하기`
- `[0-100] 범위의 [N]번째 특징점 X좌표`

---

### 14. 몸 특징점 추적 (Pose Tracking) 

**주요 기술:** MediaPipe Pose (33 landmarks)

**기능:**
- 신체 33개 특징점 추적 (눈, 팔, 다리, 손가락 끝 등)
- 관절 각도 계산 (팔꿈치, 무릎 등)
- 거울 모드 보정 (좌우 반전)

**주요 블록:**
- `카메라 켜기`
- `몸 추적 시작하기`
- `[LANDMARK] 특징점 X좌표`
- `[LANDMARK] 특징점 Y좌표`
- `왼쪽 팔꿈치 각도 (도)`
- `오른쪽 무릎 각도 (도)`

---

### 15. 손 인식 올인원 (All-in-One Hand) 


**주요 기술:** MediaPipe Hands + 제스처 알고리즘 + KNN 분류

**기능:**
- 손가락 개수, 가위바위보, 제스처 인식 통합
- 제스처 종류: 엄지척, OK사인, 손가락하트, 브이, 주먹, 손바닥, 집게
- 손 스켈레톤 표시

**주요 블록:**
- `카메라 켜기`
- `손 인식 시작하기`
- `< [GESTURE] 제스처를 하고 있는가? >`
- `손 모양 (가위/바위/보)`
- `손가락 개수`

**⭐ KNN 제스처 학습 블록 (12개):**
- `KNN [LABEL](으)로 제스처 학습` — 현재 손 모양을 라벨로 KNN에 1샘플 추가
- `KNN 제스처 인식 시작` / `KNN 제스처 인식 중지`
- `KNN [LABEL] 학습 데이터 삭제` / `KNN 모든 학습 데이터 초기화`
- `KNN 인식된 제스처` — 분류된 라벨 문자열
- `KNN 인식 정확도` — 0~100 신뢰도
- `KNN [LABEL] 학습 데이터 수` / `KNN 학습된 제스처 목록`
- `KNN 제스처가 [LABEL](으)로 인식되었을 때` — HAT 블록 (신뢰도 80%↑)
- `KNN 학습 데이터 저장하기` / `KNN 학습 데이터 불러오기`

---

### 16. 얼굴 인식 올인원 (All-in-One Face) 


**주요 기술:** MediaPipe Face Mesh + 메트릭 계산

**기능:**
- 얼굴 감지, 미간 좌표, 입 벌림 크기 측정
- 눈 깜박임 감지 (양쪽 눈 독립 감지)
- 얼굴 크기 (너비/높이) 측정

**주요 블록:**
- `카메라 켜기`
- `얼굴 메시 표시하기`
- `< 얼굴이 감지되었는가? >`
- `얼굴 개수`
- `미간 X좌표`, `미간 Y좌표`
- `입 벌림 크기`
- `< 왼쪽 눈을 깜박였는가? >`
- `눈 깜박임 민감도를 [THRESHOLD](으)로 바꾸기`

---

### 17. 사람 추적 (People Tracking) 


**주요 기술:** PoseNet + 포즈 매칭

**기능:**
- 사람별 여러 포즈 학습 및 인식
- 포즈 유사도 기반 1:N 매칭
- 사람 위치 및 크기 반환

**주요 블록:**
- `카메라 켜기`
- `[NAME] 사람 등록하기`
- `현재 사람에게 포즈 추가하기`
- `인식된 사람 이름`
- `인식된 사람 정확도 (%)`
- `인식된 사람 X좌표`

---

### 18. 자율주행 비전 (Lane Recognition) 


**주요 기술:** 영상처리 + PID 제어

**기능:**
- 양차선 중앙 인식 (검정/흰색 선)
- 라인 추적 (-100 ~ 100)
- 모터 속도 계산, 조향각
- 인식된 차선 수
- PID 제어, 오버레이

**주요 블록 (22개):**
- `카메라 켜기`
- `영상 처리 시작하기`
- `선 색상을 [COLOR](으)로 바꾸기`
- `선 임계값을 [THRESHOLD](으)로 바꾸기`
- `라인 오차값`
- `차선 중앙 오차값`
- `PID 조향값 계산`
- `라인 추적 오차값`
- `모터 속도 계산`
- `조향각`
- `인식된 차선 수`
- `오버레이 표시`

**사용 예시:**
```
카메라 켜기
선 색상을 [검정](으)로 바꾸기
영상 처리 시작하기
조향값 = PID 조향값 계산
모터 속도를 (100 + 조향값)(으)로 바꾸기
```

---

### 19. 손글씨 인식 (Handwriting Recognition) 


**주요 기술:** MyScript API + MediaPipe Hand Tracking

**기능:**
- 마우스 또는 손가락(검지) 추적으로 손글씨 입력
- MyScript Cloud API를 통한 영문 인식
- 개인 API 키 설정 가능

**주요 블록:**
- `필기 모드 켜기 (입력 방법: [MODE])`
- `손글씨 쓰기 시작하기`
- `손글씨 쓰기 멈추기`
- `쓴 글씨 지우기`
- `글자 인식하기`
- `인식 결과`

---

### 20. 스마트 컬러 센싱 (Color Sensing) 


**주요 기술:** 웹캠 + 색상 분석

**기능:**
- 실시간 색상 감지 (148개 CSS 색상명)
- 인식 모드: 중앙 고정 / 마우스 추적
- RGB 및 HEX 값 반환

**주요 블록:**
- `카메라 켜기`
- `색상 인식 시작하기`
- `인식 모드를 [MODE](으)로 바꾸기`
- `인식된 색상 이름`
- `인식된 색상 HEX 코드`
- `빨강 값 (0-255)`

---

### 30. AI 이미지 분류 학습 (Image Classifier)
**주요 기술:** MobileNet v1 + KNN 분류 (ml5.js)
**기능:**
- 웹캠으로 사물을 촬영하여 라벨을 붙여 KNN 학습
- 1회 학습, 연속 학습 모드
- 학습 데이터 JSON 저장/불러오기
- 전후면 카메라 전환, 좌우반전
**주요 블록 (28개):**
- 카메라 켜기/끄기, MobileNet 모델 로드
- KNN 1회 학습, 연속 학습, 인식 시작/중지
- 인식 결과, 정확도, 데이터 수, 클래스 목록
- 저장/불러오기, 카메라 전환/미러

---

### 31. 사물 인식 AI (Object Detector)
**주요 기술:** MediaPipe EfficientDet-Lite0 (COCO 80)
**기능:**
- COCO 80가지 사물 실시간 인식
- 바운딩박스 오버레이
- 추적 추가/해제
- 타겟 위치(X,Y), 크기, 정확도
- 10fps 프레임 제한 성능 최적화
**주요 블록 (30개):**
- 카메라 켜기/끄기, 모델 로드, COCO 목록
- 추적 추가/해제, 정확도 기준값 설정
- 인식 시작/중지, 오버레이
- 타겟 이름/좌표/크기/정확도
- 감지 개수, 전체 수, 추적 목록
- 모델 준비?, 인식 중?, 감지됨?

---

## AI 모델 학습 확장

### 33. 얼굴 감지 (Face Sensing)

**주요 기술:** MediaPipe Face Detection (TensorFlow.js)

**기능:**
- 실시간 얼굴 감지 및 얼굴 키포인트 추적
- 얼굴 기울기 각도 측정
- 얼굴 부위(코, 눈, 귀) 기반 스프라이트 위치 이동

**주요 블록 (9개):**
- `카메라 켜기`
- `얼굴 감지 시작`
- `얼굴 X 위치` / `얼굴 Y 위치`
- `얼굴 기울기 각도`
- `스프라이트를 얼굴 [부위]로 이동하기`

---

### 34. 이미지 분류모델 학습

**주요 기술:** MobileNet v2 (전이학습) + TensorFlow.js

**기능:**
- 웹캠을 사용한 브라우저 내 이미지 분류 학습
- MobileNet v2 특징 추출 + 커스텀 분류 헤드
- 에포크 및 학습률 설정
- 모델 파일 저장/불러오기

**주요 블록 (11개):**
- `카메라 켜기` / `카메라 끄기`
- `카메라 이미지를 클래스 [LABEL]에 추가하기`
- `에포크 [N]으로 설정하기` / `학습률 [LR]로 설정하기`
- `학습하기`
- `분류 시작` / `분류 중지`
- `분류 결과` / `확신도 (%)`
- `모델 저장하기` / `모델 파일 불러오기`

---

### 35. 소리 분류모델 학습

**주요 기술:** Web Audio API (FFT 스펙트럼) + TensorFlow.js MLP

**기능:**
- 마이크 기반 오디오 샘플 녹음 및 분류
- FFT 스펙트럼 분석 (128bin 오디오 특징)
- 실시간 소리 분류 (HAT 블록)
- 손실 곡선 및 데이터 차트 시각화

**주요 블록 (23개):**
- `마이크 켜기` / `마이크 끄기`
- `클래스 [LABEL]에 마이크 소리 [DURATION]초 녹음 추가하기`
- `에포크 설정` / `학습률 설정`
- `학습하기` / `학습 중?` / `학습 진행률`
- `마이크 소리 분류 시작` / `분류 중지`
- `소리가 [LABEL](으)로 인식되었을 때`
- `분류 결과` / `분류 확신도 (%)`
- `학습 데이터 저장/불러오기` / `모델 저장/불러오기`

---

### 36. 텍스트 분류모델 학습

**주요 기술:** Bag of Words (BoW) + MLP 신경망 (TensorFlow.js)

**기능:**
- 한국어, 영어 텍스트 분류 (신경망)
- 학습 데이터에서 자동 어휘 생성
- 확신도 퍼센트 표시

**주요 블록 (9개):**
- `텍스트 [TEXT]를 클래스 [LABEL]에 추가하기`
- `학습하기` / `학습 중?`
- `텍스트 [TEXT] 분류하기`
- `분류 결과` / `확신도 (%)`

---

### 37. 숫자 분류모델(확률) 학습 — 로지스틱 회귀

**주요 기술:** Sigmoid 함수 + 이진 분류 (TensorFlow.js)

**기능:**
- 이진 분류 (0 또는 1) + 확률 출력
- 에포크, 학습률 설정
- 손실 곡선 시각화

**주요 블록 (9개):**
- `데이터 추가 X=[X] Y=[Y] 클래스 [LABEL]`
- `에포크 설정` / `학습률 설정`
- `학습하기`
- `X=[X] Y=[Y] 클래스 예측`
- `예측 확률 (0-100%)`

---

### 38. 선형 회귀 학습

**주요 기술:** 최소자승법 (직접 수학 계산)

**기능:**
- 선형 예측 (y = mx + b) + R² 점수
- 회귀 그래프 시각화
- 외부 ML 라이브러리 불필요 — 순수 수학 구현

**주요 블록 (11개):**
- `데이터 포인트 추가 X=[X] Y=[Y]`
- `학습하기`
- `X=[VALUE]일 때 Y 예측`
- `기울기 (m)` / `절편 (b)` / `R² 점수`
- `회귀 그래프 보기`

---

### 39. 다항 회귀 학습

**주요 기술:** 다항 피팅 + TensorFlow.js

**기능:**
- 비선형 데이터를 위한 곡선 적합
- 조절 가능한 다항식 차수 (1-10)
- 곡선 시각화

**주요 블록 (7개):**
- `데이터 포인트 추가 X=[X] Y=[Y]`
- `차수 [N]으로 설정`
- `학습하기`
- `X=[VALUE]일 때 Y 예측`
- `회귀 곡선 보기`

---

### 40. KNN 분류 학습

**주요 기술:** 거리 기반 분류

**기능:**
- K값 조절로 이웃 수 설정
- 확신도 및 최근접 이웃 거리 표시
- 산점도 시각화

**주요 블록 (11개):**
- `데이터 추가 X=[X] Y=[Y] 클래스 [LABEL]`
- `K를 [K]로 설정`
- `학습하기`
- `X=[X] Y=[Y] 클래스 예측`
- `예측 확신도 (%)` / `최근접 거리`
- `산점도 보기`

---

### 41. K-means 군집화 학습

**주요 기술:** 중심점 기반 비지도 학습

**기능:**
- 데이터를 K개의 군집으로 자동 분류
- 군집 중심 좌표 표시
- 군집화 애니메이션 시각화

**주요 블록 (12개):**
- `데이터 포인트 추가 X=[X] Y=[Y]`
- `K를 [K]로 설정`
- `군집화 실행`
- `X=[X] Y=[Y]의 군집 ID`
- `군집 [N]의 중심 X` / `군집 [N]의 중심 Y`
- `군집화 애니메이션 보기`

---

### 42. SVM 분류 학습

**주요 기술:** SVM (Linear/RBF 커널, ml-svm)

**기능:**
- 선형 및 RBF 커널 지원
- 결정 경계 시각화
- 다중 클래스 분류

**주요 블록 (8개):**
- `데이터 추가 X=[X] Y=[Y] 클래스 [LABEL]`
- `커널을 [LINEAR/RBF]로 설정`
- `학습하기`
- `X=[X] Y=[Y] 클래스 예측`
- `결정 경계 보기`

---

### 43. 의사결정나무 학습

**주요 기술:** 트리 기반 분류 (설명 가능한 AI)

**기능:**
- 사람이 읽을 수 있는 규칙 기반 분류
- 트리 깊이 조절
- 의사결정나무 구조 시각화

**주요 블록 (10개):**
- `데이터 추가 X=[X] Y=[Y] 클래스 [LABEL]`
- `최대 깊이 [N]으로 설정`
- `학습하기`
- `X=[X] Y=[Y] 클래스 예측`
- `결정 규칙 경로`
- `의사결정나무 보기`

---

### 44. 행동 복제(모방학습)

**주요 기술:** 모방 학습 + 신경망 (TensorFlow.js)

**기능:**
- 시연 데이터에서 다차원 상태-행동 학습
- 시연 데이터 기록 및 재생
- EMA 스무딩 적용된 연속 제어 행동 출력

**주요 블록 (23개):**
- `상태 차원 [N]으로 설정` / `행동 차원 [N]으로 설정`
- `상태 [STATE] 행동 [ACTION] 기록`
- `학습하기`
- `상태 [STATE]에 대한 행동 예측`
- `자율 모드 시작` / `자율 모드 중지`
- `시연 데이터 저장/불러오기`

---

## 데이터 과학 & 시각화

### 21. 데이터 시각화 (Data Visualization) 


**주요 기술:** Chart.js + Popup Window

**기능:**
- 실시간 데이터 차트 시각화 (Line Chart)
- 별도 팝업 창에서 차트 표시
- CSV 데이터 다운로드
- 데이터 전송 간격 조절 (보통/고속 모드)

**주요 블록:**
- `차트 창 열기`
- `데이터 전송 시작하기`
- `시리즈 1 이름을 [NAME](으)로 바꾸기`
- `시리즈 1에 값 [VALUE] 전송하기`
- `데이터 전송 중지하기`
- `차트 창 닫기`

---

### 22. 데이터 과학 (Data Science)


**주요 기술:** jExcel + Chart.js

**기능:**
- 스프레드시트 기반 데이터 관리 (리사이즈 가능한 팝업 창)
- CSV 파일 불러오기/저장하기
- 차트 시각화 (선/막대/산점도/파이 차트)
- 통계 분석 (평균, 중앙값, 표준편차, 최소/최대, 상관계수)
- 데이터 전처리 (정규화, 표준화, 빈 값 채우기)
- 지도학습: 선형 회귀, KNN
- 비지도학습: K-means 군집화

**주요 블록 (20개):**
- `데이터 워크벤치 열기` / `워크벤치 닫기`
- `CSV 파일 불러오기` / `CSV 파일로 저장하기`
- `[ROW] 행 [COL] 열에 [VALUE] 넣기` / `[ROW] 행 [COL] 열의 값`
- `[CHART_TYPE] 그리기 (X: [X_COL], Y: [Y_COL])`
- `[COL] 열의 [STAT_TYPE]` / `[COL1]과 [COL2]의 상관계수`
- `[COL] 열의 빈 값을 [METHOD]로 채우기`
- `선형 회귀 학습하기` / `선형 회귀로 예측하기`
- `KNN 학습하기` / `KNN으로 예측하기`
- `K-means 군집화`

---

### 26. 브릭셀AI TTS (BrixelAI Text-to-Speech)

**주요 기술:** Local TTS Agent + Multi-Voice Engine

**기능:**
- 로컬 에이전트를 통한 고품질 AI 음성 합성
- 23개 언어 지원 (한국어, 영어, 일본어, 중국어, 프랑스어, 독일어 등)
- 5종 기본 음성 (여성A/B, 남성A/B, 아이) + 에이전트 연결 시 추가 음성 동적 표시
- 슬롯 기반 미리 생성으로 대기 없이 즉시 재생
- 음성 제어: 일시정지, 이어하기, 멈추기

**주요 블록:**
- `에이전트 다운로드 (Win/Mac)` - BrixelAI TTS 로컬 에이전트 다운로드
- `에이전트 연결 (포트 [PORT])` - TTS 에이전트에 연결 (기본 포트: 9000)
- `언어 설정 [LANG]` - TTS 언어 설정 (23개 언어)
- `음성 설정 [VOICE]` - 음성 종류 선택
- `[TEXT] 말하고 기다리기` - 텍스트를 말하고 완료 시까지 대기
- `[TEXT]를 슬롯 [SLOT]에 생성` - 슬롯에 미리 음성 생성
- `슬롯 [SLOT] 재생` - 미리 생성된 슬롯 음성 재생
- `슬롯 [SLOT] 준비됨?` - 슬롯 준비 상태 확인

**사용 예시:**
```
에이전트 다운로드 (Win)
에이전트 연결 (포트 9000)
언어 설정 [한국어]
음성 설정 [여성A]
"안녕하세요, 브릭셀AI입니다" 말하고 기다리기
"준비 완료"를 슬롯 1에 생성
슬롯 1 재생
```

**활용:**
- AI 음성을 활용한 인터랙티브 스토리텔링
- 다국어 발음 학습
- 시각 장애인을 위한 접근성 기능
- IoT 장치 음성 피드백

---

## 기존 확장 개선

### 27. 펜 (Pen) 


**주요 기술:** Canvas Rendering

**기존 기능:**
- 펜 내리기/올리기
- 펜 색상/크기 설정
- 스탬프 찍기
- 모두 지우기

**⭐ 신규 추가 기능:**

#### 1. 좌표 기반 직접 그리기
스프라이트 이동 없이 좌표로 직접 그리기

**주요 블록:**
- `draw point at x:[X] y:[Y]` - 특정 좌표에 점 그리기
- `draw line from x1:[X1] y1:[Y1] to x2:[X2] y2:[Y2]` - 두 점 사이 선 그리기
- `draw angle x1:[X1] y1:[Y1] x2:[X2] y2:[Y2] x3:[X3] y3:[Y3] store in slot:[SLOT]` - 세 점을 연결하여 선 그리고 각도 계산/저장 (슬롯 1-6)
- `angle from slot:[SLOT]` - 저장된 각도 값 반환

**사용 예시:**
```
펜 색상을 #ff0000(으)로 정하기
draw line from x1:0 y1:0 to x2:100 y2:100
draw angle x1:0 y1:0 x2:100 y2:0 x3:100 y3:100 store in slot:1
각도 = angle from slot:1  // 90도 반환
```

**활용:**
- 수학 그래프 그리기
- 기하학 도형 그리기 (삼각형, 사각형 등)
- 각도 측정 및 시각화

---

#### 2. 레이더 시각화 (초음파 센서용)
자율주행, 로봇 제어를 위한 레이더 시각화 기능

**주요 블록:**
- `radar init center x:[CX] y:[CY] max distance:[MAX_DIST] angle range:[ANGLE_RANGE]` - 레이더 초기화
- `radar map value from [MIN_VAL] to [MAX_VAL]` - 센서값 범위 매핑 설정
- `radar draw at angle:[ANGLE] distance:[DISTANCE]` - 레이더 선 그리기 (감지 부분 녹색, 나머지 빨간색)
- `radar fade by [AMOUNT]%` - 레이더 페이드 효과 (잔상 효과)

**사용 예시:**
```
모두 지우기
radar init center x:0 y:0 max distance:180 angle range:180
radar map value from 0 to 400

// 센서 값이 100일 때 (0도 방향)
radar draw at angle:0 distance:100

// 페이드 효과로 이전 레이더 선 흐리게
radar fade by 5%
```

**활용:**
- 초음파 센서 시각화 (Arduino, Micro:bit)
- 라이다(LiDAR) 센서 시각화
- 자율주행 로봇 장애물 감지 표시

**레이더 색상 규칙:**
- **녹색:** 센서가 감지한 거리까지
- **빨간색:** 감지 거리부터 최대 거리까지 (장애물 없음)

---

### 28. 번역 (Translate)


**주요 기술:** Google Translate API + Multi-Proxy

**기존 기능:**
- 텍스트를 다양한 언어로 번역
- 현재 프로젝트 언어 감지

**⭐ 신규 추가 기능:**

#### Multi-Proxy Failover Strategy (다중 프록시 페일오버)

**문제점:**
- 기존: 단일 프록시 사용 → 해당 프록시가 다운되면 번역 불가
- CORS 정책으로 인한 직접 접근 불가

**해결책:**
- 3개의 CORS 프록시를 순차적으로 시도
- 빠른 실패 전략 (각 프록시 4초 타임아웃)
- 하나가 실패하면 자동으로 다음 프록시 시도

**프록시 순서:**
1. **corsproxy.io** - 가장 빠름 (우선 시도)
2. **allorigins.win** - 안정적 (2차 백업)
3. **codetabs.com** - 최종 백업

**주요 블록:**
- `translate [WORDS] to [LANGUAGE]` - 텍스트 번역 (개선된 안정성)
- `language` - 현재 프로젝트 언어

**개선 사항:**
- ✅ 단일 장애점(Single Point of Failure) 제거
- ✅ 번역 성공률 대폭 향상
- ✅ 프록시 다운타임에 강건함
- ✅ 자동 캐싱 (동일한 텍스트/언어 반복 요청 시 즉시 반환)

**사용 예시:**
```
번역 결과 = translate [안녕하세요] to [English]
// 결과: "Hello"

번역 결과 = translate [Hello] to [Japanese]
// 결과: "こんにちは"
```

**지원 언어:**
100개 이상의 언어 지원 (한국어, 영어, 일본어, 중국어, 프랑스어, 스페인어 등)

---

### 29. 비디오 감지 (Video Sensing) - 개선

**주요 기술:** Stage Video Detection

**기존 기능:**
- 스프라이트에서 비디오 모션 감지
- 스프라이트에서 비디오 방향 감지
- 비디오 켜기/끄기

**⭐ 신규 추가 기능:**

#### 향상된 비디오 감지 블록

- 스프라이트와 스테이지 모두에서 개선된 비디오 모션/방향 감지
- 비디오 투명도 조절 (0-100%)
- 실시간 비디오 처리를 위한 성능 최적화

**주요 블록:**
- `video [ATTRIBUTE] on [SUBJECT]` - 스프라이트 또는 스테이지에서 비디오 모션/방향 가져오기
- `turn video [VIDEO_STATE]` - 비디오 켜기, 끄기, 또는 반전 켜기
- `set video transparency to [TRANSPARENCY]` - 비디오 투명도 설정 (0-100%)

**사용 예시:**
```
비디오 [켜기]
비디오 투명도를 50(으)로 정하기
만약 비디오 [모션] on [이 스프라이트] > 10 이면
  "움직임 감지됨!" 말하기
```

**활용:**
- 모션 기반 인터랙티브 게임
- IoT 프로젝트를 위한 모션 감지 트리거
- 비디오 기반 아트 및 창작 프로젝트

---

### 23. 블록 조립 레코더 (Block Recorder) -


**주요 기술:** Blockly API + Event Listener

**기능:**
- Scratch 블록 조립 과정 기록 및 재생
- 재생 속도 조절 (0.5x ~ 100x)
- 시간 추적 (시작 시간, 종료 시간, 총 기록 시간)

**주요 블록:**
- `블록 조립 기록 시작하기`
- `블록 조립 기록 중지하기`
- `기록된 블록 [SPEED](으)로 재생하기`
- `재생 중지하기`
- `기록 초기화하기`
- `기록된 이벤트 개수`

---

### 24. 실시간 날씨 (Weather) 


**주요 기술:** Open-Meteo API

**기능:**
- 전 세계 도시의 실시간 날씨 정보
- Geocoding API로 도시→좌표 변환
- 온도, 습도, 풍속, 일출/일몰 시간 등

**주요 블록:**
- `Get weather info for [CITY]`
- `([TEMP_TYPE] temperature info)`
- `([ATMOS_TYPE] atmosphere info)`
- `([ETC_TYPE] other info)`

**온도 정보:**
- Current Temp (°C)
- Feels Like Temp (°C)
- Min Temp (°C)
- Max Temp (°C)

**대기 정보:**
- Weather Description
- Humidity (%)
- Pressure (hPa)
- Wind Speed (m/s)
- Wind Direction (°)

**기타 정보:**
- Sunrise Time
- Sunset Time
- Location Name

---
## 기술 스택 요약

**IoT & 하드웨어 통신:**
- Web Serial API
- Web Bluetooth API (BLE)
- WebSocket (ws:// / wss://)

**AI & 머신러닝:**
- Google Teachable Machine (Image/Pose/Audio)
- Web Speech API (음성 인식)
- Q-learning (강화학습)
- TensorFlow.js (브라우저 내 모델 학습)
- ml-svm (SVM 분류)

**컴퓨터 비전:**
- MediaPipe (Hands, Face Mesh, Pose)
- MediaPipe EfficientDet (사물 인식)
- MobileNet + KNN (이미지 분류)
- face-api.js (얼굴 인식)
- PoseNet (사람 추적)
- MyScript API (손글씨 인식)

**데이터 과학:**
- Chart.js (차트 시각화)
- jExcel (스프레드시트)
- K-Means, KNN, 선형 회귀 (내장 알고리즘)

**외부 API:**
- Open-Meteo (날씨 정보)
- MyScript Cloud (손글씨 인식)

---


### 확장 개발자
- **주 개발자:** 김석전 (Kim Seok Jeon) 송도중 정보교사, 인하대 겸임교수 (alphaco@naver.com)
- **보조 개발자:** 조지훈 영동중교사

### 라이선스
각 확장은 개별 라이선스를 따릅니다. 외부 라이브러리 사용 시 해당 라이선스를 준수해야 합니다.

### 브라우저 호환성
대부분의 확장은 최신 Chromium 기반 브라우저(Chrome, Edge)에서 최적으로 동작합니다.
Web Serial API, Web Bluetooth API는 HTTPS 환경에서만 작동합니다.

---

## 문의 및 지원

- **개발자 GitHub:** https://github.com/ai4coding
- **YouTube 가이드:** https://www.youtube.com/@VibeCoding
- **사용자 질문 게시판:** https://ai4mcu.github.io/01_guide/notice_board.html
- **프로젝트 허브:** https://brixel.gorillacell.kr/

---

## 업데이트 이력

### v1.6 (2026-06-05)
- 🔌 **라이브모드 하드웨어 보드 추가** (신규) — 시리얼/블루투스로 실물 보드 라이브 제어
  - 리치실드(우노) `richshield`, 메가 슈퍼리치 `superrich`
  - micro:bit V2 + ma:bit 실드 `microbitv2` (MakeCode 펌웨어, hex 드래그 굽기)
  - ESP32 풀키트 `esp32fullset` (핀번호 인자 자유배선, esptool-js 자동 굽기)
  - 펌웨어 디스패처 패턴: 보드 = 명령 실행기, Scratch VM = 로직
  - 듀얼 채널(USB 시리얼 + BLE), 펌웨어 버전 표시, 자동 핸드셰이크
- 📷 **핸드폰 카메라 확장 추가** (신규) `phonecam`
  - WebRTC P2P로 폰 카메라를 무대에 주입 (QR 페어링, 학생별 룸)
  - 모든 AI 비전 확장과 자동 연동(공유 비디오 프로바이더 + CameraManager)
  - 완전 분산(1:1 폰↔노트북) — 학급 30명 동시 사용 안전
- 🧩 **MLOps 파이프라인 추가** (신규) — 8단계 ML 워크플로
  - `datapipeline` → `mediapipeline` → `automl` → `nnbuilder` → `exptracking` → `modeleval` → `responsibleai` → `modelhub`
  - 공유 `runtime.brixelMLState`; 학습 확장이 모델을 파이프라인에 전달
- 🖼️ **이미지 분류 모델 — 클래스별 이미지 갤러리** (신규)
  - `클래스별 이미지 보기` 블록: 클래스별 추가 이미지 시각 확인(96×96 썸네일, 원본 모달, JPG 다운로드)
  - 모델 허브 업로드 시 썸네일 제거로 공유 모델 경량 유지
- 🤖 **AI 확장 대폭 확대** — 얼굴(특징/식별/표정), 손(특징/제스처), 자세(특징/학습), 인체분할, 객체추적, 색영역, 사람따라가기, 6축 로봇팔, QR/바코드, AR 태그, 지도뷰어, 구글 제미나이, 로컬 LLM, IFTTT, 브릭셀AI 어시스턴트
- 🔧 **micro:bit V2 펌웨어 안정화 (fw v0.7.x)**
  - 네오픽셀 LED 개수 블록, MakeCode 음정(P0 충돌 가드), 햇 이벤트, 나침반 캘리 가드
  - 팬 PWM 1kHz fix + 방향 메뉴, BLE NUS indicate 자동판별(TX/RX 스왑 대응)
- 전체 확장 수: 45 → 79 (표준 Scratch 내장 포함)

### v1.5 (2026-03-20)
- 🧠 **AI 모델 학습 확장 13개 추가** (신규)
  - 이미지 분류모델 학습 (MobileNet v2 전이학습)
  - 소리 분류모델 학습 (Web Audio FFT + TF.js MLP)
  - 텍스트 분류모델 학습 (Bag of Words + MLP)
  - 로지스틱 회귀, 선형 회귀, 다항 회귀
  - KNN 분류, K-means 군집화, SVM, 의사결정나무
  - 행동 복제 (모방학습)
  - 얼굴 감지 (MediaPipe Face Detection)
- 📊 **데이터 사이언스 확장 개선**
  - 블록을 난이도순으로 재배치 (L1-L8)
  - 통계 분석, 데이터 전처리, 지도/비지도학습 블록
  - 학생 친화적 블록 텍스트 개선
- 🔧 **버그 수정**
  - 이미지 분류모델의 CORS 에러 수정 (MobileNet URL)
  - 카메라 매니저 통합 수정 (enable/disable API)
  - MediaPipe 얼굴 감지 CDN 경로 수정 (404 에러)
  - 소리 분류모델 모델 불러오기 에러 수정 (undefined 모델명)
  - 로지스틱 회귀/텍스트 분류 에포크·학습률 입력 불가 수정
- 전체 확장 수: 32 → 45

### v1.4 (2026-03-14)
- 🖼️ **AI 이미지 분류 학습 확장 추가** (신규)
  - MobileNet v1 특징 추출 + KNN 분류
  - 1회/연속 학습, 데이터 저장/불러오기
  - 전후면 카메라 전환, 좌우반전
- 🔍 **사물 인식 AI 확장 추가** (신규)
  - MediaPipe EfficientDet-Lite0 기반 COCO 80 사물 인식
  - 바운딩박스 오버레이, 타겟 좌표/크기/정확도
  - 10fps 최적화
- 🤚 **손인식 올인원 확장 개선** (KNN 제스처 학습)
  - KNN 기반 커스텀 제스처 학습/인식 (12개 신규 블록)
  - 양손 컨텍스트 특징으로 제스처 구분
  - 학습 데이터 저장/불러오기
- 🛣️ **차선인식 확장 개선**
  - 라인 추적 모드 추가
  - 모터 속도, 조향각 블록 추가
  - 인식된 차선 수 블록 추가
- 🌐 **전체 언어 번역 키 추가**
  - 85개 언어 파일에 92개 신규 번역 키 추가
- 전체 확장 수: 29 → 32

### v1.3 (2026-02-25)
- 📖 **확장 블록 문서화 SPA**
  - 29개 확장의 모든 블록을 인터랙티브하게 참조할 수 있는 단일 페이지
  - 확장별 블록 이미지(SVG) 제공
  - 카테고리별 탐색 (통신, AI 인식, 머신러닝, 유틸리티)
- 🌐 **한국어/영어 이중 언어 지원**
  - 문서 SPA에서 한/영 전환 토글
  - 모든 확장 설명 및 블록명 완전 번역
- 🗣️ **브릭셀AI TTS 확장 추가**
  - 로컬 에이전트 기반 고품질 AI 음성 합성
  - 23개 언어, 5종 이상 음성, 슬롯 기반 미리 생성
- 🎥 **비디오 감지 확장 추가** (개선)
  - 향상된 비디오 모션/방향 감지 블록
  - 스테이지 비디오 투명도 조절
- 🤖 **AI 메타데이터 V3 — 인공지능 프로젝트 분석 지원**
  - ai_metadata.json에 재귀적 블록 트리 구조 (.sb3 파일에 내장)
  - 스프라이트 속성, 코스튬, 사운드, 코멘트 완전 수록
  - 상호작용 분석 (터치 쌍, 공유 변수, 방송 흐름)
  - AI(ChatGPT, Claude 등)가 Scratch 프로젝트를 완전히 이해하고 분석 가능
  - AI를 통한 코드 리뷰, 개선 제안, 프로젝트 로직 설명 지원
- 🔗 **브랜드 URL 변경**
  - 메인 사이트 링크를 brixel.gorillacell.kr로 변경
- 전체 확장 수: 27 → 29 → 32

### v1.2 (2026-01-12)
- 🔄 **프로젝트 호환성 대폭 개선**
  - 오리지널 Scratch에서 저장한 파일(.sb3) 로딩 지원
  - 이전 버전 블록을 사용한 프로젝트 파일 로딩 지원
  - 없는 블록(미지원 확장 블록)은 빨간색으로 표시하여 식별 용이
- 🎬 **블록 조립 기록기 개선**
  - 블록 재생 과정이 더 부드러워짐 (애니메이션 최적화)
  - 블록 생성 및 연결 시 안정성 향상
- 📷 **ESP32-CAM 무선 카메라 개선**
  - 자동차 등 원격 제어 시 무선 카메라 활용 편의성 향상
  - 영상 반전/미러 모드 지원
- 🛠️ **기타 개선 사항**
  - 다국어 지원 확장
  - 전반적인 안정성 및 성능 개선

### v1.1 (2026-01-02)
- ⭐ Pen 확장 개선 추가
  - 좌표 기반 직접 그리기 기능 (점, 선, 각도 계산)
  - 레이더 시각화 기능 (초음파 센서용)
- ⭐ Translate 확장 개선 추가
  - Multi-Proxy Failover Strategy (다중 프록시 페일오버)
  - 번역 성공률 및 안정성 대폭 향상
- 전체 확장 수: 25개 → 27개

### v1.0 (2026-01-02)
- 신규 추가된 25개 확장 블록 문서화
- 카테고리별 분류 및 상세 설명
- 사용 예시 및 기술 스택 요약

---

**문서 버전:** 1.6
**최종 수정일:** 2026-06-05
**작성자:** 김석전(제미나이, 클로드 활용)
