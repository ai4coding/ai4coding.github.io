[![korean-readme](https://img.shields.io/badge/korean-readme-ko.svg)](README.ko.md)

[English](README.md) | [한국어](README.ko.md) | [日本語](README.jp.md) | [Español](README.es.md) | [中文](README.zh.md)

# BrixelAI New Extension Block Guide : https://brixel.gorillacell.kr/

> **Date:** 2026-08-07 (revised)
> **Target:** **BrixelAI** — a Scratch 3.0 fork

---

## Table of Contents

1. [Overview](#overview)
2. [IoT & Hardware Communication](#iot--hardware-communication) — incl. Live-Mode Hardware Boards & Phone Camera ⭐ v1.6
3. [AI & Machine Learning](#ai--machine-learning)
4. [Computer Vision & Recognition](#computer-vision--recognition)
5. [MLOps Pipeline](#mlops-pipeline) ⭐ NEW (v1.6)
6. [Data Science & Visualization](#data-science--visualization)
7. [Existing Extension Improvements](#existing-extension-improvements)
8. [Full Extension List](#full-extension-list)

---

## Overview

This document describes the extension blocks newly added or improved in **BrixelAI** (a Scratch 3.0 fork).

> 📊 **Scale (measured 2026-08-07):** **105** extension folders · **98** registered in `extension-manager` · **96** GUI extension cards
> (Standard Scratch built-ins included. Folders outnumber registrations because retired/on-hold extensions remain as folders.)
>
> ⚠️ **These numbers keep growing.** Count them yourself before quoting:
> ```bash
> cd scratch-editor/packages/scratch-vm/src/extensions && ls -d scratch3_*/ | wc -l
> ```
> The "Full Extension List" table below may lag behind the actual count depending on when it was last revised.

**Extension Composition:**

* ✨ **Newly Added:** IoT & Live-Mode Hardware Boards, AI, Computer Vision, MLOps Pipeline, Data Science, TTS, etc.
* ⭐ **Existing Improvements:** Pen, Translate, Video Sensing
* 🔌 **Live-Mode Hardware Boards (v1.6):** Rich Shield, Mega SuperRich, micro:bit V2 + ma:bit, ESP32 Full Kit — control real boards live over Serial/Bluetooth (firmware dispatcher pattern)
* 📷 **Phone Camera (v1.6):** Inject phone camera into the stage via WebRTC P2P — works with every AI vision extension
* 🧩 **MLOps Pipeline (v1.6):** 8-stage end-to-end ML workflow (Data → Media → AutoML → NN Builder → Experiment Tracking → Evaluation → Responsible AI → Model Hub)

## Full Extension List

| No | EXT ID | Extension Name | Category | Main Tech | Status |
| --- | --- | --- | --- | --- | --- |
| 01 | `howtouse` | Usage Guide | Utility | Hyperlinks | New |
| 02 | `webserial` | Web Serial (IoT) | IoT Comm | Web Serial API | New |
| 03 | `webble` | Web Bluetooth | IoT Comm | Web Bluetooth API | New |
| 04 | `scratch3wifi` | WiFi (WebSocket) | IoT Comm | WebSocket | New |
| 05 | `speechrecognition` | Speech Recognition | AI | Web Speech API | New |
| 06 | `facerecognition` | Face Recognition | Comp Vision | face-api.js | New |
| 07 | `countingfingers` | Counting Fingers | Comp Vision | MediaPipe Hands | New |
| 08 | `handtracking` | Hand Tracking | Comp Vision | MediaPipe Hands | New |
| 09 | `facetracking` | Face Tracking | Comp Vision | MediaPipe Face Mesh | New |
| 10 | `posetracking` | Pose Tracking | Comp Vision | MediaPipe Pose | New |
| 11 | `tmimage` | Teachable Machine Image | AI | Teachable Machine | New |
| 12 | `tmpose` | Teachable Machine Pose | AI | Teachable Machine | New |
| 13 | `tmsound` | Teachable Machine Sound | AI | Teachable Machine | New |
| 14 | `allinonehand` | All-in-One Hand | Comp Vision | MediaPipe + Gesture | New |
| 15 | `allinoneface` | All-in-One Face | Comp Vision | MediaPipe + Metrics | New |
| 16 | `datavisualization` | Data Visualization | Data Science | Chart.js | New |
| 17 | `rlmachine` | RL Autonomous Driving | AI & Control | Q-learning | New |
| 18 | `peopletracking` | People Tracking | Comp Vision | PoseNet | New |
| 19 | `blockrecorder` | Block Recorder | Utility | Blockly API | New |
| 20 | `weather` | Real-time Weather | Utility | Open-Meteo API | New |
| 21 | `lanerecognition` | Autonomous Driving Vision | Control | Computer Vision + PID | New |
| 22 | `handwriting` | Handwriting Recognition | AI | MyScript API | New |
| 23 | `datascience` | Data Science | Data Science | jExcel + Chart.js | New |
| 24 | `esp32cam` | ESP32-CAM Video | IoT Comm | WebSocket + Python | New |
| 25 | `colorsensing` | Smart Color Sensing | Comp Vision | Webcam + Color Analysis | New |
| 26 | `chatterboxtts` | BrixelAI TTS | AI | Local TTS Agent + Multi-Voice | New |
| 27 | `pen` | Pen (Draw + Radar) | Graphic | Canvas Rendering | ⭐ Improved |
| 28 | `translate` | Translate (Multi-Proxy) | Utility | Google Translate + Proxy | ⭐ Improved |
| 29 | `videoSensing` | Video Sensing (Enhanced) | Comp Vision | Stage Video Detection | ⭐ Improved |
| 30 | `imageclassifier` | AI Image Classifier | AI & Comp Vision | MobileNet + KNN | New |
| 31 | `objectdetector` | Object Detector AI | Comp Vision | MediaPipe EfficientDet | New |
| 32 | `allinonehand` | All-in-One Hand (KNN Gesture) | AI & Comp Vision | MediaPipe + KNN | ⭐ Improved |
| 33 | `faceSensing` | Face Sensing | Comp Vision | MediaPipe Face Detection | New |
| 34 | `imageModel` | Image Classification Model Training | AI & ML | MobileNet v2 + TF.js | New |
| 35 | `soundclassifier` | Sound Classification Model Training | AI & ML | Web Audio FFT + TF.js | New |
| 36 | `textclassifier` | Text Classification Model Training | AI & ML | Bag of Words + TF.js MLP | New |
| 37 | `logisticregression` | Logistic Regression Training | AI & ML | Sigmoid + TF.js | New |
| 38 | `linearregression` | Linear Regression Training | AI & ML | Least Squares | New |
| 39 | `polynomialregression` | Polynomial Regression Training | AI & ML | Polynomial Fitting + TF.js | New |
| 40 | `knn` | KNN Classification Training | AI & ML | Distance-based Classification | New |
| 41 | `kmeans` | K-Means Clustering Training | AI & ML | Centroid-based Clustering | New |
| 42 | `svm` | SVM Classification Training | AI & ML | Linear/RBF Kernel + ml-svm | New |
| 43 | `decisiontree` | Decision Tree Training | AI & ML | Tree-based Classification | New |
| 44 | `behaviorcloning` | Behavior Cloning Training | AI & ML | Imitation Learning + TF.js | New |
| 45 | `datascience` | Data Science (Enhanced) | Data Science | jExcel + ML Algorithms | ⭐ Improved |
| 46 | `brixelai` | BrixelAI Assistant | AI | LLM Agent | New |
| 47 | `facefeature` | Face Feature | Comp Vision | MediaPipe Face Mesh | New |
| 48 | `faceidentification` | Face Identification | Comp Vision | face-api.js | New |
| 49 | `faceexpression` | Face Expression | Comp Vision | MediaPipe + Emotion | New |
| 50 | `handfeature` | Hand Feature | Comp Vision | MediaPipe Hands | New |
| 51 | `handgesture` | Hand Gesture | Comp Vision | MediaPipe + Gesture | New |
| 52 | `posefeature` | Pose Feature | Comp Vision | MediaPipe Pose | New |
| 53 | `bodysegmentation` | Body Segmentation | Comp Vision | MediaPipe Selfie Seg | New |
| 54 | `poselearning` | Pose Learning | AI & Comp Vision | KNN Pose Classification | New |
| 55 | `objecttracking` | Object Tracking | Comp Vision | MediaPipe + Tracking | New |
| 56 | `colorregion` | Color Region | Comp Vision | Color Region Analysis | New |
| 57 | `personfollow` | Person Follow | Comp Vision | Pose-based Tracking | New |
| 58 | `robotarm6axis` | 6-Axis Robot Arm | Control | Inverse Kinematics | New |
| 59 | `ifttt` | IFTTT Webhook | IoT / Utility | Webhook API | New |
| 60 | `googlegemini` | Google Gemini | AI | Gemini API | New |
| 61 | `localllm` | Local LLM | AI | Local LLM Agent | New |
| 62 | `qrbarcode` | QR / Barcode | Comp Vision | QR/Barcode Decode | New |
| 63 | `tagrecognition` | AR Tag Recognition | Comp Vision | AR Marker Detection | New |
| 64 | `mapviewer` | Map Viewer | Utility | Map API | New |
| 65 | `text2speech` | Text to Speech | AI | Speech Synthesis | New |
| 66 | `datapipeline` | Data Pipeline (MLOps 1) | MLOps | Tabular Dataset Builder | New |
| 67 | `mediapipeline` | Media Pipeline (MLOps 2) | MLOps | Image/Audio Dataset | New |
| 68 | `automl` | AutoML (MLOps 3) | MLOps | Automated Training | New |
| 69 | `nnbuilder` | Neural Net Builder (MLOps 4) | MLOps | NN Architecture Designer | New |
| 70 | `exptracking` | Experiment Tracking (MLOps 5) | MLOps | Run/Metric Logger | New |
| 71 | `modeleval` | Model Evaluation (MLOps 6) | MLOps | Metrics / Confusion Matrix | New |
| 72 | `responsibleai` | Responsible AI (MLOps 7) | MLOps | Fairness / Bias Check | New |
| 73 | `modelhub` | Model Hub (MLOps 8) | MLOps | Firebase Model Share | New |
| 74 | `richshield` | Rich Shield (Live Mode) | Hardware | Uno + Live Firmware (Serial/BLE) | New |
| 75 | `superrich` | Mega SuperRich (Live Mode) | Hardware | Mega + Live Firmware (Serial/BLE) | New |
| 76 | `microbitv2` | micro:bit V2 + ma:bit (Live Mode) | Hardware | MakeCode Firmware + Serial/BLE | New |
| 77 | `esp32fullset` | ESP32 Full Kit (Live Mode) | Hardware | ESP32 Firmware + esptool-js (Serial/BLE) | New |
| 78 | `phonecam` | Phone Camera | Comp Vision / IoT | WebRTC P2P → Stage Video | New |

> Standard Scratch built-ins (`makeymakey`, `microbit`, `ev3`, `boost`, `wedo2`, `gdxfor`, `music`, `pen`, `translate`, `videoSensing`, `text2speech`) are also bundled.

---

## IoT & Hardware Communication

### 1. Web Serial

**Main Tech:** Web Serial API

**Features:**

* Wired communication with serial devices like Arduino, Micro:bit, etc.
* Send Mode: Send once, Send continuously, Send in Name:Value format.
* Receive Mode: Parse by newline, Parse by comma.
* Baud rate setting (9600 ~ 115200 baud).
* Prevention of duplicate data transmission, Throttling (30ms).

**Main Blocks:**

* `Connect Web Serial`
* `Send [TEXT] once (with newline)`
* `Send [TEXT] continuously`
* `Received data (read one line)`
* `Split received data by [DELIMITER]`

**Usage Example:**

```
Connect Web Serial
Set baud rate to 115200
Send LED:ON once (with newline)

```

---

### 2. Web Bluetooth

**Main Tech:** Web Bluetooth API (BLE)

**Features:**

* Wireless communication with Bluetooth devices like Micro:bit, Arduino, ESP32.
* Automatic device type recognition (Nordic UART, JDY-33, HM-10).
* 20-byte chunk split transmission (Supports BLE MTU).
* Send/Receive protocols are identical to Web Serial.

**Main Blocks:**

* `Connect to [DEVICE_TYPE] device (Default)`
* `Connect device with Service UUID [SERVICE] TX [TX] RX [RX]`
* `Is Bluetooth connected?`
* `Send Name [LABEL] : Value [VALUE] continuously`

**Supported Devices:**

* BBC micro:bit
* Arduino/ESP32 (Nordic UART)
* JDY-33/HM-10 (AT Mode)
* All other BLE devices (Automatic detection)

---

### 3. WiFi (WebSocket)

**Main Tech:** WebSocket (ws:// / wss://)

**Features:**

* WebSocket communication with WiFi devices like ESP8266, ESP32.
* Automatic protocol selection (wss:// in HTTPS environments).
* Streaming Mode: Raw transmission, CSV multi-transmission, Label:Value transmission.
* Throttling 50ms (Faster than Web Serial).

**Main Blocks:**

* `Connect to WiFi device at [IP]:[PORT]`
* `Connect securely [PROTOCOL] [ADDRESS]`
* `Send [DATA] (Raw) continuously (no newline)`
* `Send [NUM_FIELDS] variables continuously: [DATA]`

**Usage Example:**

```
Connect to WiFi device at 192.168.1.10:8080
Send 3 variables continuously: 100, 200, 300

```

---

### 4. ESP32-CAM Video

**Main Tech:** WebSocket + Python Bridge

**Features:**

* Display ESP32-CAM video stream in real-time on the Scratch stage.
* WebSocket communication via a local Python bridge program.
* Image flip/mirror and snapshot saving functions.

**Main Blocks:**

* `Open bridge program download site`
* `Connect to ESP32-CAM agent`
* `Display ESP32-CAM video [ON_OFF]`
* `Save ESP32-CAM snapshot`

---

### 4a. Live-Mode Hardware Boards ⭐ NEW (v1.6)

Four physical boards can be controlled **live** from BrixelAI over USB Serial and/or Bluetooth (BLE). The board runs a lightweight **firmware command dispatcher**; all logic stays in the Scratch VM (text-line protocol, `\n` terminated). Firmware can be flashed/downloaded directly from the extension.

| Board | EXT ID | Wiring Model | Firmware | Flash Method |
| --- | --- | --- | --- | --- |
| **Rich Shield (Uno)** | `richshield` | Sister board, fixed pins | Arduino (live dispatcher) | Web Serial flash |
| **Mega SuperRich** | `superrich` | Fixed pins per device | Arduino (live dispatcher) | Web Serial flash |
| **micro:bit V2 + ma:bit** | `microbitv2` | Shield, fixed pins | MakeCode (TypeScript) | hex drag to MICROBIT drive |
| **ESP32 Full Kit** | `esp32fullset` | Free wiring (pin args) | Arduino-ESP32 | esptool-js auto-flash |

**Common Features:**

* **Dual channel:** connect by USB Serial (wired) or Bluetooth BLE (wireless) — same protocol on both.
* **Firmware version reporter** + auto handshake (HELLO/CAPS) on connect.
* Full I/O stack per board: servo, NeoPixel, RGB LED, fan/motor, buzzer/speaker, LCD/OLED, dot-matrix, ultrasonic, sensors, and more.
* **micro:bit V2 specifics:** NeoPixel LED-count setting, MakeCode music notes, hat events (button/gesture/sound/logo/pin), compass calibration guard. BLE uses micro:bit's NUS variant (TX = indicate, auto-detected by characteristic properties).
* **ESP32 Full Kit specifics:** free-wiring with pin number arguments (not fixed pins), per-student BLE name (NVS), 8×8/8×16 dot-matrix with click-input grid, scroll-text, buzzer note/beat menu.
* **SuperRich/Rich Shield specifics:** single combined MP3 block (stop/pause/resume/next/prev/loop/vol±) via dropdown menu.

**Usage Example (ESP32 Full Kit):**

```
Connect ESP32 (USB)
servo pin 32 angle 90
NeoPixel pin 18 set all R 255 G 0 B 0
Distance(cm) trig 5 echo 18
```

---

### 4b. Phone Camera ⭐ NEW (v1.6)

**Main Tech:** WebRTC P2P + Local Bridge + QR Pairing

**Features:**

* Inject your **phone's camera** into the Scratch stage as the video source.
* Scan a QR code on your computer screen with your phone → WebRTC peer-to-peer link (per-student room ID).
* **Works automatically with every AI vision extension** — face/hand/pose/object recognition, image classifier, etc. use the phone feed instead of the webcam (via shared `runtime.ioDevices.video` provider + CameraManager sync).
* Fully distributed: each student's phone connects only to their own laptop (1:1, no central server) — safe for 30-student classrooms.

**Main Blocks:**

* `Connect phone camera (show QR)`
* `Disconnect phone camera`
* `< Phone connected? >`
* `Close QR` / `Connection status`

---

## AI & Machine Learning

### 5. Teachable Machine Image

**Main Tech:** Teachable Machine Image Model

**Features:**

* Use image classification models trained with Google Teachable Machine.
* Load custom classifiers by entering the Model URL.
* Adjust recognition accuracy with threshold settings (0.0 ~ 1.0).

**Main Blocks:**

* `Go to Teachable Machine site`
* `Change model URL to [URL]`
* `Change threshold to [THRESHOLD]`
* `Start model`
* `Recognition result`

**Usage Example:**

```
Change model URL to https://teachablemachine.withgoogle.com/models/ABC123/
Change threshold to 0.8
Start model
If (Recognition result) = [Cat] then
  Say "Cat detected!"

```

---

### 6. Teachable Machine Pose

**Main Tech:** Teachable Machine Pose Model

**Features:**

* Classification based on body poses (e.g., Raise hand, Sit, Stand).
* Returns keypoint coordinates and confidence scores.
* Model Training: [https://teachablemachine.withgoogle.com/train/pose](https://teachablemachine.withgoogle.com/train/pose)

**Main Blocks:**

* `Change model URL to [URL]`
* `Recognition result (Pose Class Name)`
* `X coordinate of [N]th keypoint`
* `Y coordinate of [N]th keypoint`

---

### 7. Teachable Machine Sound

**Main Tech:** Teachable Machine Audio Model

**Features:**

* Voice/Sound command recognition (Clap, Whistle, Keywords, etc.).
* Explicit microphone control.
* Background noise filtering.

**Main Blocks:**

* `Allow microphone use`
* `Change model URL to [URL]`
* `Start model`
* `Recognition result`

**Usage Example:**

```
Allow microphone use
Change model URL to [MODEL_URL]
Start model
If (Recognition result) = [Clap] then
  Play sound effect

```

---

### 8. Speech Recognition

**Main Tech:** Web Speech API

**Features:**

* Real-time Speech-to-Text conversion.
* Command detection (forward, backward, left, right, stop, go, turn).
* Numeric parameter extraction (speed, angle, distance).
* Multi-language support (Korean, English, Japanese, Chinese, etc.).
* Sentiment analysis (Positive/Negative/Neutral).

**Main Blocks:**

* `set language to [LANG]`
* `start speech recognition`
* `recognized text`
* `last command`
* `detected speed (0-100)`
* `detected angle (degrees)`
* `< contains keyword [WORD]? >`
* `(sentiment)`

**Usage Example:**

```
set language to [ko-KR]
start speech recognition
If (last command) = [forward] then
  Move forward at speed (detected speed)

```

---

### 9. BrixelAI TTS (Text-to-Speech)

**Main Tech:** Local TTS Agent + Multi-Voice Engine

**Features:**

* High-quality AI speech synthesis via a local agent program.
* 23 languages supported (Korean, English, Japanese, Chinese, French, German, etc.).
* 5 preset voice types (Female A/B, Male A/B, Child) + dynamic voices from agent.
* Slot-based pre-generation for instant playback without delay.
* Speech control: Pause, Resume, Stop.

**Main Blocks:**

* `Download Agent (Win/Mac)` - Download the BrixelAI TTS local agent.
* `Connect Agent (Port [PORT])` - Connect to TTS agent (default port: 9000).
* `Set language to [LANG]` - Set TTS language (23 languages).
* `Set voice to [VOICE]` - Select voice type.
* `Speak [TEXT] and wait` - Speak text and wait until finished.
* `Generate [TEXT] to slot [SLOT]` - Pre-generate speech to slot for instant playback.
* `Play slot [SLOT]` - Play pre-generated slot speech.
* `Is slot [SLOT] ready?` - Check if slot has speech ready.

**Usage Example:**

```
Download Agent (Win)
Connect Agent (Port 9000)
Set language to [Korean]
Set voice to [Female A]
Speak "안녕하세요, 브릭셀AI입니다" and wait
Generate "준비 완료" to slot 1
Play slot 1
```

**Applications:**

* Interactive storytelling with AI voices.
* Multi-language pronunciation learning.
* Accessibility features for visually impaired users.
* Voice-based IoT device feedback.

---

### 10. Reinforcement Learning (RL) Autonomous Driving

**Main Tech:** Q-learning Algorithm

**Features:**

* Implementation of Q-learning based autonomous driving AI.
* Sensor input discretization (3-sensor/6-sensor modes).
* Integrated PID controller.
* Adjustable learning parameters (Learning Rate, Exploration Rate, Discount Factor).
* Save/Load Q-Table (JSON).

**Main Blocks:**

* `Setup AI Brain: Alpha [ALPHA] Epsilon [EPSILON] Gamma [GAMMA]`
* `Convert sensor array [SENSORS] to 3-sensor pattern`
* `Q-learning: State [STATE] Action [ACTION] Reward [REWARD] Next State [NEXT_STATE]`
* `Get Best Action: State [STATE]`
* `Save Q-Table (Download)`
* `Load Q-Table [JSON]`

**Usage Example:**

```
Setup AI Brain: Alpha 0.1 Epsilon 0.2 Gamma 0.9
Sensor Value = Convert sensor array [100,50,30] to 3-sensor pattern
Action = Get Best Action: State (Sensor Value)
Q-learning: State (Sensor Value) Action (Action) Reward 10 Next State (Next Sensor Value)

```

---

## Computer Vision & Recognition

### 11. Face Recognition

**Main Tech:** face-api.js

**Features:**

* Face registration and recognition (1:N matching).
* Face feature vector extraction.
* Save registered faces to local storage.
* Real-time recognition (5 FPS).

**Main Blocks:**

* `Turn on camera`
* `Register face with name [NAME]`
* `Start face recognition`
* `Recognized face name`
* `Face recognition accuracy (%)`

---

### 12. Counting Fingers

**Main Tech:** MediaPipe Hands

**Features:**

* Counts fingers on both hands.
* Independent detection of Left/Right hands.
* Real-time hand skeleton rendering.

**Main Blocks:**

* `Turn on camera`
* `Start hand recognition`
* `Show hand skeleton`
* `Left hand finger count`
* `Right hand finger count`
* `Total finger count`

---

### 13. Hand Tracking

**Main Tech:** MediaPipe Hands (21 landmarks)

**Features:**

* Tracks 21 landmark coordinates of the hand.
* Distinguishes between Left/Right hands.
* Adjustable accuracy (0.1 ~ 0.9).

**Main Blocks:**

* `Turn on camera`
* `Start hand tracking`
* `Change recognition accuracy to [CONFIDENCE]`
* `X coordinate of [LANDMARK] on Left Hand`
* `Y coordinate of [LANDMARK] on Left Hand`

---

### 14. Face Tracking

**Main Tech:** MediaPipe Face Mesh (468 landmarks)

**Features:**

* Tracks 468 landmarks of the face mesh.
* Access coordinates by 5 ranges (0-100, 101-200, 201-300, 301-400, 401-477).
* Face mesh visualization.

**Main Blocks:**

* `Turn on camera`
* `Start face tracking`
* `Show face mesh`
* `X coordinate of [N]th landmark in range [0-100]`

---

### 15. Pose Tracking

**Main Tech:** MediaPipe Pose (33 landmarks)

**Features:**

* Tracks 33 body landmarks (eyes, arms, legs, fingertips, etc.).
* Calculates joint angles (elbows, knees, etc.).
* Mirror mode correction (Left/Right flip).

**Main Blocks:**

* `Turn on camera`
* `Start body tracking`
* `X coordinate of [LANDMARK]`
* `Y coordinate of [LANDMARK]`
* `Left elbow angle (degrees)`
* `Right knee angle (degrees)`

---

### 16. All-in-One Hand

**Main Tech:** MediaPipe Hands + Gesture Algorithm + KNN Classification

**Features:**

* Integrated finger counting, Rock-Paper-Scissors, and gesture recognition.
* Gesture types: Thumbs Up, OK Sign, Finger Heart, V, Fist, Palm, Pinch.
* Hand skeleton display.
* ⭐ **KNN Gesture Learning** — Train custom hand gestures and recognize them in real-time.

**Main Blocks:**

* `Turn on camera`
* `Start hand recognition`
* `< Is doing [GESTURE] gesture? >`
* `Hand shape (Rock/Paper/Scissors)`
* `Finger count`

**⭐ KNN Gesture Learning Blocks (12 blocks):**

* `KNN Train gesture as [LABEL]` — Add one sample of the current hand pose to KNN.
* `KNN Start gesture recognition` / `KNN Stop gesture recognition`
* `KNN Delete [LABEL] training data` / `KNN Clear all training data`
* `KNN Recognized gesture` — Returns the classified label.
* `KNN Recognition confidence` — Returns 0~100 confidence.
* `KNN [LABEL] training data count` / `KNN Gesture label list`
* `When KNN gesture recognized as [LABEL]` — HAT block (triggers at 80%+ confidence).
* `KNN Save training data` / `KNN Load training data`

---

### 17. All-in-One Face

**Main Tech:** MediaPipe Face Mesh + Metrics Calculation

**Features:**

* Face detection, Glabella (between eyes) coordinates, Mouth opening size measurement.
* Eye blink detection (Independent left/right).
* Face size (width/height) measurement.

**Main Blocks:**

* `Turn on camera`
* `Show face mesh`
* `< Is face detected? >`
* `Face count`
* `Glabella X`, `Glabella Y`
* `Mouth opening size`
* `< Did blink left eye? >`
* `Change blink sensitivity to [THRESHOLD]`

---

### 18. People Tracking

**Main Tech:** PoseNet + Pose Matching

**Features:**

* Learn and recognize multiple poses per person.
* 1:N matching based on pose similarity.
* Returns person location and size.

**Main Blocks:**

* `Turn on camera`
* `Register person [NAME]`
* `Add pose to current person`
* `Recognized person name`
* `Recognized person accuracy (%)`
* `Recognized person X coordinate`

---

### 19. Autonomous Driving Vision (Lane Recognition)

**Main Tech:** Computer Vision + PID Control

**Features:**

* Dual-lane center recognition (Black/White lines).
* Single line tracing with position tracking (-100 ~ 100).
* Motor speed calculation (Left/Right).
* Steering angle computation.
* Lane count reporter.
* Integrated PID controller (Calculates steering value).
* Overlay display for lane recognition visualization.

**Main Blocks (22 blocks):**

* `Turn on camera` / `Turn off camera`
* `Start dual-lane center recognition (line: [COLOR])` / `Stop dual-lane center recognition`
* `Start line tracing (line: [COLOR] threshold: [TH])` / `Stop line tracing`
* `Line position (-100 ~ 100)` / `Lane count` / `Lane center offset (-1 ~ 1)`
* `Left motor speed (base: [SPEED])` / `Right motor speed (base: [SPEED])`
* `Steering angle (center: [CENTER] range: [RANGE])`
* `Set PID gains Kp:[KP] Ki:[KI] Kd:[KD]` / `Reset PID`
* `Show overlay` / `Hide overlay`
* `< Is lane detected? >`

**Usage Example:**

```
Turn on camera
Change line color to [Black]
Start image processing
Steering Value = Calculate PID steering value
Set motor speed to (100 + Steering Value)

```

---

### 20. Handwriting Recognition

**Main Tech:** MyScript API + MediaPipe Hand Tracking

**Features:**

* Handwriting input via mouse or finger (index finger) tracking.
* English recognition via MyScript Cloud API.
* Personal API Key configurable.

**Main Blocks:**

* `Turn on handwriting mode (Input method: [MODE])`
* `Start writing`
* `Stop writing`
* `Clear writing`
* `Recognize text`
* `Recognition result`

---

### 21. Smart Color Sensing

**Main Tech:** Webcam + Color Analysis

**Features:**

* Real-time color detection (148 CSS color names).
* Recognition modes: Center Fixed / Mouse Tracking.
* Returns RGB and HEX values.

**Main Blocks:**

* `Turn on camera`
* `Start color recognition`
* `Change recognition mode to [MODE]`
* `Recognized color name`
* `Recognized color HEX code`
* `Red value (0-255)`

---

### 30. AI Image Classifier

**Main Tech:** MobileNet v1 + KNN Classification (ml5.js)

**Features:**

* Real-time image classification learning using webcam.
* MobileNet v1 feature extraction + KNN classification.
* Single-shot and continuous training modes.
* Save/Load training data as JSON files.
* Front/Rear camera switching and mirror mode.
* Class-based auto ID assignment for BLE transmission.

**Main Blocks (28 blocks):**

* `Turn on camera` / `Turn off camera`
* `Load MobileNet model`
* `KNN Train once as [NAME]` / `KNN Start continuous training as [NAME]` / `KNN Stop continuous training`
* `KNN Delete [NAME] training data` / `KNN Clear all training data`
* `KNN Start classifier` / `KNN Stop classifier`
* `When KNN image recognized as [NAME]` / `When KNN result changed`
* `KNN Recognized name` / `KNN Recognized ID` / `KNN Confidence`
* `KNN [NAME] training data count` / `KNN Class list`
* `KNN Save training data` / `KNN Load training data`
* `Switch camera [FRONT/REAR]` / `Mirror camera [ON/OFF]`

**Usage Example:**

```
Turn on camera
Load MobileNet model
// Press 'A' to train "Apple", Press 'B' to train "Banana"
KNN Train once as [Apple]
KNN Start classifier
// Recognition result is shown in real-time
```

---

### 31. Object Detector AI

**Main Tech:** MediaPipe EfficientDet-Lite0 (COCO 80)

**Features:**

* Real-time detection of 80 COCO object categories via webcam.
* Bounding box overlay on Scratch stage.
* Object tracking with add/remove controls.
* Target position (X, Y), size (Width, Height), and confidence reporters.
* 10fps frame-limited inference for performance optimization.
* Adjustable detection threshold.

**Main Blocks (30 blocks):**

* `Turn on camera` / `Turn off camera`
* `Load EfficientDet model` / `Open COCO 80 object list`
* `Add [OBJECT] tracking` / `Add [NAME] tracking by name` / `Remove [OBJECT] tracking` / `Clear all tracking`
* `Set threshold to [NUM]%`
* `Start object detection` / `Stop object detection`
* `Set bounding box overlay [ON/OFF]`
* `When [OBJECT] detected` / `When target lost` / `When model ready`
* `Target label` / `Target X` / `Target Y` / `Target width` / `Target height` / `Target confidence`
* `Count of [OBJECT]` / `Total detected count` / `Current tracking list`
* `< Model ready? >` / `< Is detecting? >` / `< [OBJECT] detected? >`

**Usage Example:**

```
Turn on camera
Load EfficientDet model
Add [person] tracking
Start object detection
If < [person] detected? > then
  Say (Target label) found at X: (Target X)
```

---

## AI Model Training Extensions

### 33. Face Sensing

**Main Tech:** MediaPipe Face Detection (TensorFlow.js)

**Features:**

* Real-time face detection and facial keypoint tracking
* Face tilt angle measurement
* Sprite positioning based on face parts (nose, eyes, ears)

**Main Blocks (9 blocks):**

* `Turn on camera`
* `Start face detection`
* `Face X position` / `Face Y position`
* `Face tilt angle`
* `Move sprite to [PART] of face`

---

### 34. Image Classification Model Training

**Main Tech:** MobileNet v2 (Transfer Learning) + TensorFlow.js

**Features:**

* In-browser image classification training using webcam
* MobileNet v2 feature extraction with custom classification head
* Epochs and learning rate configuration
* Model save/load as files

**Main Blocks (12 blocks):**

* `Turn on camera` / `Turn off camera`
* `Add camera image to class [LABEL]`
* `Set epochs to [N]` / `Set learning rate to [LR]`
* `Train model`
* `Start classifying` / `Stop classifying`
* `Classification result` / `Confidence (%)`
* `View class image gallery` ⭐ NEW — visually browse the images added to each class (96×96 thumbnails, click to view full size, JPG download)
* `Save model` / `Load model from file`

---

### 35. Sound Classification Model Training

**Main Tech:** Web Audio API (FFT Spectrum) + TensorFlow.js MLP

**Features:**

* Microphone-based audio sample recording and classification
* FFT spectrum analysis for 128-bin audio features
* Real-time sound classification with hat blocks
* Loss curve and data chart visualization

**Main Blocks (23 blocks):**

* `Start microphone` / `Stop microphone`
* `Record [DURATION] seconds of class [LABEL]`
* `Set epochs to [N]` / `Set learning rate to [LR]`
* `Train model` / `Is training?` / `Training progress`
* `Start classifying` / `Stop classifying`
* `When sound recognized as [LABEL]`
* `Classification result` / `Confidence (%)`
* `Save/Load data` / `Save/Load model`

---

### 36. Text Classification Model Training

**Main Tech:** Bag of Words (BoW) + MLP Neural Network (TensorFlow.js)

**Features:**

* Korean and English text classification with neural network
* Automatic vocabulary building from training data
* Confidence percentage reporting

**Main Blocks (9 blocks):**

* `Add text [TEXT] to class [LABEL]`
* `Train model` / `Is training?`
* `Classify text [TEXT]`
* `Classification result` / `Confidence (%)`

---

### 37. Logistic Regression Training

**Main Tech:** Sigmoid Function + Binary Classification (TensorFlow.js)

**Features:**

* Binary classification (0 or 1) with probability output
* Configurable epochs and learning rate
* Loss curve visualization

**Main Blocks (9 blocks):**

* `Add data X=[X] Y=[Y] to class [LABEL]`
* `Set epochs to [N]` / `Set learning rate to [LR]`
* `Train model`
* `Predict class for X=[X] Y=[Y]`
* `Prediction probability (0-100%)`

---

### 38. Linear Regression Training

**Main Tech:** Least Squares Method

**Features:**

* Linear prediction (y = mx + b) with R² score
* Regression graph visualization in popup window
* No external ML library needed — pure math implementation

**Main Blocks (11 blocks):**

* `Add data point X=[X] Y=[Y]`
* `Train model`
* `Predict Y for X=[VALUE]`
* `Slope (m)` / `Intercept (b)` / `R² score`
* `Show regression graph`

---

### 39. Polynomial Regression Training

**Main Tech:** Polynomial Fitting + TensorFlow.js

**Features:**

* Curved line fitting for non-linear data
* Adjustable polynomial degree (1-10)
* Curve visualization in popup window

**Main Blocks (7 blocks):**

* `Add data point X=[X] Y=[Y]`
* `Set degree to [N]`
* `Train model`
* `Predict Y for X=[VALUE]`
* `Show regression curve`

---

### 40. KNN Classification Training

**Main Tech:** Distance-based Classification

**Features:**

* Configurable K value for neighbor selection
* Confidence percentage and nearest neighbor distance
* Scatter plot visualization with class boundaries

**Main Blocks (11 blocks):**

* `Add data X=[X] Y=[Y] to class [LABEL]`
* `Set K to [K]`
* `Train model`
* `Predict class for X=[X] Y=[Y]`
* `Prediction confidence (%)` / `Nearest distance`
* `Show scatter plot`

---

### 41. K-Means Clustering Training

**Main Tech:** Centroid-based Unsupervised Learning

**Features:**

* Automatic data grouping into K clusters
* Cluster center coordinate reporting
* Clustering animation visualization

**Main Blocks (12 blocks):**

* `Add data point X=[X] Y=[Y]`
* `Set K to [K]`
* `Run clustering`
* `Cluster ID for X=[X] Y=[Y]`
* `Cluster [N] center X` / `Cluster [N] center Y`
* `Show clustering animation`

---

### 42. SVM Classification Training

**Main Tech:** Support Vector Machine (Linear/RBF Kernel, ml-svm)

**Features:**

* Linear and RBF kernel support
* Decision boundary visualization
* Multi-class classification

**Main Blocks (8 blocks):**

* `Add data X=[X] Y=[Y] to class [LABEL]`
* `Set kernel to [LINEAR/RBF]`
* `Train model`
* `Predict class for X=[X] Y=[Y]`
* `Show decision boundary`

---

### 43. Decision Tree Training

**Main Tech:** Tree-based Classification (Explainable AI)

**Features:**

* Explainable classification with human-readable rules
* Configurable tree depth
* Decision tree structure visualization

**Main Blocks (10 blocks):**

* `Add data X=[X] Y=[Y] to class [LABEL]`
* `Set max depth to [N]`
* `Train model`
* `Predict class for X=[X] Y=[Y]`
* `Decision rule path`
* `Show decision tree`

---

### 44. Behavior Cloning Training

**Main Tech:** Imitation Learning + Neural Network (TensorFlow.js)

**Features:**

* Multi-dimensional state and action learning from demonstrations
* Record and replay demonstration data
* EMA-smoothed action output for continuous control

**Main Blocks (23 blocks):**

* `Set state dimensions to [N]` / `Set action dimensions to [N]`
* `Record state [STATE] action [ACTION]`
* `Train model`
* `Predict action for state [STATE]`
* `Start autonomous mode` / `Stop autonomous mode`
* `Save/Load demonstration data`

---

## Data Science & Visualization

### 22. Data Visualization

**Main Tech:** Chart.js + Popup Window

**Features:**

* Real-time data chart visualization (Line Chart).
* Displays chart in a separate popup window.
* CSV data download.
* Adjustable data transmission interval (Normal/Fast mode).

**Main Blocks:**

* `Open chart window`
* `Start data transmission`
* `Change Series 1 name to [NAME]`
* `Send value [VALUE] to Series 1`
* `Stop data transmission`
* `Close chart window`

---

### 23. Data Science

**Main Tech:** jExcel + Chart.js

**Features:**

* Spreadsheet-based data management (Popup window with resizable panels).
* Real-time data entry and editing.
* Chart visualization (Line/Bar/Scatter/Pie charts).
* Statistical analysis (Mean, Median, Standard Deviation, Min, Max, Correlation).
* Data preprocessing (Normalize, Standardize, Fill missing values).
* Supervised learning: Linear Regression, KNN.
* Unsupervised learning: K-Means clustering.
* CSV import/export.

**Main Blocks:**

* `Open Data Workbench` / `Close Workbench`
* `Import CSV file` / `Save as CSV file`
* `Set row [ROW] column [COL] to [VALUE]` / `Value at row [ROW] column [COL]`
* `Draw [CHART_TYPE] (X: [X_COL], Y: [Y_COL])`
* `[STAT_TYPE] of column [COL]` / `Correlation between [COL1] and [COL2]`
* `Fill missing values in [COL] with [METHOD]`
* `Train linear regression (X: [X_COL], Y: [Y_COL])` / `Predict with linear regression`
* `Train KNN` / `Predict with KNN`
* `K-means clustering: split [COLS] into [K] groups`

---

## Existing Extension Improvements

### 27. Pen

**Main Tech:** Canvas Rendering

**Existing Features:**

* Pen Down/Up.
* Set pen color/size.
* Stamp.
* Erase All.

**⭐ Newly Added Features:**

#### 1. Coordinate-based Direct Drawing

Directly draw using coordinates without moving the sprite.

**Main Blocks:**

* `draw point at x:[X] y:[Y]` - Draw a point at specific coordinates.
* `draw line from x1:[X1] y1:[Y1] to x2:[X2] y2:[Y2]` - Draw a line between two points.
* `draw angle x1:[X1] y1:[Y1] x2:[X2] y2:[Y2] x3:[X3] y3:[Y3] store in slot:[SLOT]` - Connect three points to draw lines and calculate/store the angle (Slots 1-6).
* `angle from slot:[SLOT]` - Return the stored angle value.

**Usage Example:**

```
Set pen color to #ff0000
draw line from x1:0 y1:0 to x2:100 y2:100
draw angle x1:0 y1:0 x2:100 y2:0 x3:100 y3:100 store in slot:1
Angle = angle from slot:1  // Returns 90 degrees

```

**Applications:**

* Drawing mathematical graphs.
* Drawing geometric shapes (triangles, squares, etc.).
* Angle measurement and visualization.

---

#### 2. Radar Visualization (For Ultrasonic Sensors)

Radar visualization function for autonomous driving and robot control.

**Main Blocks:**

* `radar init center x:[CX] y:[CY] max distance:[MAX_DIST] angle range:[ANGLE_RANGE]` - Initialize radar.
* `radar map value from [MIN_VAL] to [MAX_VAL]` - Set sensor value range mapping.
* `radar draw at angle:[ANGLE] distance:[DISTANCE]` - Draw radar line (Green for detected area, Red for the rest).
* `radar fade by [AMOUNT]%` - Radar fade effect (Afterimage effect).

**Usage Example:**

```
Erase all
radar init center x:0 y:0 max distance:180 angle range:180
radar map value from 0 to 400

// When sensor value is 100 (at 0 degrees)
radar draw at angle:0 distance:100

// Blur previous radar lines with fade effect
radar fade by 5%

```

**Applications:**

* Ultrasonic sensor visualization (Arduino, Micro:bit).
* LiDAR sensor visualization.
* Obstacle detection display for autonomous robots.

**Radar Color Rules:**

* **Green:** Up to the distance detected by the sensor.
* **Red:** From the detected distance to the maximum distance (No obstacle).

---

### 28. Translate

**Main Tech:** Google Translate API + Multi-Proxy

**Existing Features:**

* Translate text into various languages.
* Detect current project language.

**⭐ Newly Added Features:**

#### Multi-Proxy Failover Strategy

**Problem:**

* Previous: Used a single proxy → Translation fails if that proxy goes down.
* Direct access blocked due to CORS policy.

**Solution:**

* Sequentially attempt 3 CORS proxies.
* Fast Fail strategy (4-second timeout per proxy).
* Automatically try the next proxy if one fails.

**Proxy Order:**

1. **corsproxy.io** - Fastest (Primary attempt)
2. **allorigins.win** - Stable (Secondary backup)
3. **codetabs.com** - Final backup

**Main Blocks:**

* `translate [WORDS] to [LANGUAGE]` - Translate text (Improved stability).
* `language` - Current project language.

**Improvements:**

* ✅ Eliminated Single Point of Failure.
* ✅ Significantly improved translation success rate.
* ✅ Robust against proxy downtime.
* ✅ Automatic Caching (Immediate return for repeated requests of same text/language).

**Usage Example:**

```
Translation Result = translate [Hello] to [English]
// Result: "Hello"

Translation Result = translate [Hello] to [Japanese]
// Result: "こんにちは"

```

**Supported Languages:**
Supports over 100 languages (Korean, English, Japanese, Chinese, French, Spanish, etc.).

---

### 29. Video Sensing (Enhanced)

**Main Tech:** Stage Video Detection

**Existing Features:**

* Detect video motion on sprites.
* Detect video direction on sprites.
* Turn video on/off.

**⭐ Newly Added Features:**

#### Enhanced Video Detection Blocks

* Improved video motion and direction detection for both sprites and the stage.
* Video transparency control (0-100%).
* Optimized performance for real-time video processing.

**Main Blocks:**

* `video [ATTRIBUTE] on [SUBJECT]` - Get video motion or direction on a sprite or stage.
* `turn video [VIDEO_STATE]` - Turn video on, off, or on flipped.
* `set video transparency to [TRANSPARENCY]` - Set video transparency (0-100%).

**Usage Example:**

```
turn video [on]
set video transparency to 50
If video [motion] on [this sprite] > 10 then
  Say "Motion detected!"
```

**Applications:**

* Interactive motion-based games.
* Motion detection triggers for IoT projects.
* Video-based art and creative projects.

---

### 24. Block Recorder

**Main Tech:** Blockly API + Event Listener

**Features:**

* Record and replay the Scratch block assembly process.
* Adjustable playback speed (0.5x ~ 100x).
* Time tracking (Start time, End time, Total recording time).

**Main Blocks:**

* `Start block recording`
* `Stop block recording`
* `Replay recorded blocks at [SPEED]`
* `Stop replay`
* `Reset recording`
* `Count of recorded events`

---

### 25. Real-time Weather

**Main Tech:** Open-Meteo API

**Features:**

* Real-time weather information for cities worldwide.
* City → Coordinate conversion via Geocoding API.
* Temperature, Humidity, Wind Speed, Sunrise/Sunset times, etc.

**Main Blocks:**

* `Get weather info for [CITY]`
* `([TEMP_TYPE] temperature info)`
* `([ATMOS_TYPE] atmosphere info)`
* `([ETC_TYPE] other info)`

**Temperature Info:**

* Current Temp (°C)
* Feels Like Temp (°C)
* Min Temp (°C)
* Max Temp (°C)

**Atmosphere Info:**

* Weather Description
* Humidity (%)
* Pressure (hPa)
* Wind Speed (m/s)
* Wind Direction (°)

**Other Info:**

* Sunrise Time
* Sunset Time
* Location Name

---

## MLOps Pipeline ⭐ NEW (v1.6)

An 8-stage end-to-end machine-learning workflow that turns BrixelAI into a teaching platform for the full ML lifecycle. Each stage is a separate extension; they communicate through a shared `runtime.brixelMLState` (current dataset, current model, experiments, deployed models).

| Stage | EXT ID | Role |
| --- | --- | --- |
| **1. Data Pipeline** | `datapipeline` | Build/clean tabular datasets, import CSV, feature columns |
| **2. Media Pipeline** | `mediapipeline` | Build image/audio/face/hand/pose datasets from camera or files |
| **3. AutoML** | `automl` | Automated model selection & training over a dataset |
| **4. Neural Net Builder** | `nnbuilder` | Design neural-network architectures layer by layer |
| **5. Experiment Tracking** | `exptracking` | Log runs, hyper-parameters, and metrics for comparison |
| **6. Model Evaluation** | `modeleval` | Accuracy, confusion matrix, per-class metrics via `model.predict()` |
| **7. Responsible AI** | `responsibleai` | Fairness/bias inspection across groups |
| **8. Model Hub** | `modelhub` | Share/download trained models (Firebase), lightweight JSON serialization |

**Flow:** Media/Data Pipeline → train (AutoML / NN Builder / a training extension) → `promote model to pipeline` → Evaluate → Responsible AI → publish to Model Hub. The training extensions (Image/Sound/Text Model, KNN, SVM, etc.) plug into this pipeline by promoting their trained model to `currentModel`.

> Note: Model Hub serializes only model weights/features (thumbnails and heavy raw media are stripped on upload to keep shared models small).

---

## Tech Stack Summary

**IoT & Hardware Communication:**

* Web Serial API
* Web Bluetooth API (BLE)
* WebSocket (ws:// / wss://)
* WebRTC P2P (Phone Camera)
* Live-mode firmware dispatchers (Arduino, ESP32-Arduino, micro:bit MakeCode) + esptool-js flashing

**AI & Machine Learning:**

* Google Teachable Machine (Image/Pose/Audio)
* Web Speech API (Speech Recognition)
* Q-learning (Reinforcement Learning)
* TensorFlow.js (In-browser Model Training)
* ml-svm (SVM Classification)

**Computer Vision:**

* MediaPipe (Hands, Face Mesh, Pose, EfficientDet)
* face-api.js (Face Recognition)
* PoseNet (People Tracking)
* MobileNet + KNN (Image Classification)
* MyScript API (Handwriting Recognition)

**Data Science:**

* Chart.js (Chart Visualization)
* jExcel (Spreadsheet)
* K-Means, KNN, Linear Regression (Built-in algorithms)

**External APIs:**

* Open-Meteo (Weather Info)
* MyScript Cloud (Handwriting Recognition)

---

### Extension Developers

* **Lead Developer:** Kim Seok Jeon (Informatics Teacher at Songdo Middle School, Adjunct Professor at Inha University, alphaco@naver.com)
* **Assistant Developer:** Cho Ji-hoon (Teacher at Yeongdong Middle School)

### License

Each extension follows its own individual license. When using external libraries, their respective licenses must be observed.

### Browser Compatibility

Most extensions operate optimally on the latest Chromium-based browsers (Chrome, Edge).
Web Serial API and Web Bluetooth API only work in HTTPS environments.

---

## Inquiries & Support

* **Developer GitHub:** [https://github.com/ai4coding](https://github.com/ai4coding)
* **YouTube Guide:** [https://www.youtube.com/@VibeCoding](https://www.youtube.com/@VibeCoding)
* **User Q&A Board:** [https://ai4mcu.github.io/01_guide/notice_board.html](https://ai4mcu.github.io/01_guide/notice_board.html)
* **Project Hub:** [https://brixel.gorillacell.kr/](https://brixel.gorillacell.kr/)

---

## Update History

### Documentation revision (2026-08-07)
- 🏷️ **Product renamed: `AI*Robot Scratch` → `BrixelAI` / `브릭셀AI`** (all five README titles)
- 📊 Replaced the extension counts in the Overview with **measured values** (was "70+ blocks / 79 registered" → 105 folders · 98 registered · 96 GUI cards, as of 2026-08-07)
  - The numbers keep changing, so the **command to count them yourself** is included
- 🌐 The Japanese, Spanish and Chinese translations had **only the product name updated** — their bodies are still the 2026-02-25 revision, so a notice was added stating they **do not cover v1.6**
- 🧹 Removed the leftover Korean note at the top of each translation ("제공해주신 README.md 파일의 …번역본입니다"), replaced with language-switch links

### v1.6 (2026-06-05)
- 🔌 **Live-Mode Hardware Boards Added** (NEW) — control real boards live over Serial/Bluetooth
  - Rich Shield (Uno) `richshield`, Mega SuperRich `superrich`
  - micro:bit V2 + ma:bit Shield `microbitv2` (MakeCode firmware, hex-drag flash)
  - ESP32 Full Kit `esp32fullset` (free wiring with pin args, esptool-js auto-flash)
  - Firmware dispatcher pattern: board = command executor, Scratch VM = logic
  - Dual channel (USB Serial + BLE), firmware version reporter, auto handshake
- 📷 **Phone Camera Extension Added** (NEW) `phonecam`
  - Inject phone camera into the stage via WebRTC P2P (QR pairing, per-student room)
  - Works automatically with all AI vision extensions (shared video provider + CameraManager)
  - Fully distributed (1:1 phone↔laptop) — classroom-safe for 30 students
- 🧩 **MLOps Pipeline Added** (NEW) — 8-stage end-to-end ML workflow
  - `datapipeline` → `mediapipeline` → `automl` → `nnbuilder` → `exptracking` → `modeleval` → `responsibleai` → `modelhub`
  - Shared `runtime.brixelMLState`; training extensions promote models into the pipeline
- 🖼️ **Image Classification Model — Class Gallery** (NEW)
  - `View class image gallery` block: browse images per class (96×96 thumbnails, full-size modal, JPG download)
  - Model Hub upload strips thumbnails to keep shared models small
- 🤖 **AI Extensions Expanded** — face (feature/identification/expression), hand (feature/gesture), pose (feature/learning), body segmentation, object tracking, color region, person follow, 6-axis robot arm, QR/barcode, AR tag, map viewer, Google Gemini, Local LLM, IFTTT, BrixelAI assistant
- 🔧 **micro:bit V2 Firmware Stabilization (fw v0.7.x)**
  - NeoPixel LED-count block, MakeCode music notes (P0-conflict guard), hat events, compass calibration guard
  - Fan PWM 1 kHz fix + direction menu, BLE NUS indicate auto-detection (TX/RX swap handling)
- Total extensions: 45 → 79 (incl. standard Scratch built-ins)

### v1.5 (2026-03-20)
- 🧠 **13 AI Model Training Extensions Added** (NEW)
  - Image Classification Model (MobileNet v2 transfer learning)
  - Sound Classification Model (Web Audio FFT + TF.js MLP)
  - Text Classification Model (Bag of Words + MLP)
  - Logistic Regression, Linear Regression, Polynomial Regression
  - KNN Classification, K-Means Clustering, SVM, Decision Tree
  - Behavior Cloning (Imitation Learning)
  - Face Sensing (MediaPipe Face Detection)
- 📊 **Data Science Extension Enhanced**
  - Blocks reordered by difficulty level (L1-L8)
  - Statistical analysis, data preprocessing, supervised/unsupervised learning
  - Improved block text for student friendliness
- 🔧 **Bug Fixes**
  - Fixed CORS error in Image Classification Model (MobileNet URL)
  - Fixed camera manager integration (enable/disable API)
  - Fixed MediaPipe Face Detection CDN path (404 errors)
  - Fixed Sound Classifier model load error (undefined model name)
  - Fixed non-editable epoch/learning rate inputs in Logistic Regression and Text Classifier
- Total extensions: 32 → 45

### v1.4 (2026-03-14)
- 🖼️ **AI Image Classifier Extension Added** (NEW)
  - MobileNet v1 feature extraction + KNN classification
  - Single-shot and continuous training, Save/Load training data
  - Front/Rear camera switching, mirror mode
- 🔍 **Object Detector AI Extension Added** (NEW)
  - MediaPipe EfficientDet-Lite0 based COCO 80 object detection
  - Bounding box overlay on Scratch stage
  - Target position/size/confidence reporters, 10fps optimized
- 🤚 **All-in-One Hand Extension Improved** (KNN Gesture Learning)
  - KNN-based custom gesture learning and recognition (12 new blocks)
  - Dual-hand context features for gesture distinction
  - Save/Load gesture training data
- 🛣️ **Lane Recognition Extension Improved**
  - Line tracing mode added (single line tracking)
  - Motor speed and steering angle blocks added
  - Lane count reporter added
- 🌐 **Translation Keys Added for All Languages**
  - 92 new translation keys across 85 language files
- Total extensions: 29 → 32

### v1.3 (2026-02-25)
- 📖 **Extension Block Documentation SPA**
  - Interactive single-page block reference for all 29 extensions
  - Block images (SVG) for every block in each extension
  - Category-based navigation (Communication, AI Recognition, ML, Utility)
- 🌐 **Korean/English Bilingual Support**
  - Language toggle (한/영) in the documentation SPA
  - Full translation of all extension descriptions and block names
- 🗣️ **BrixelAI TTS Extension Added**
  - High-quality AI speech synthesis via local agent
  - 23 languages, 5+ voice types, slot-based pre-generation
- 🎥 **Video Sensing Extension Added** (Improved)
  - Enhanced video motion/direction detection blocks
  - Stage video transparency control
- 🤖 **AI Metadata V3 — AI-Powered Project Analysis**
  - Recursive block tree structure in ai_metadata.json embedded in .sb3 files
  - Full sprite properties, costumes, sounds, comments
  - Interaction analysis (touching pairs, shared variables, broadcast flows)
  - Enables AI (e.g., ChatGPT, Claude) to fully understand and analyze Scratch projects
  - AI can provide code reviews, suggest improvements, and explain project logic from metadata
- 🔗 **Brand URL Updated**
  - Main site link changed to brixel.gorillacell.kr
- Total extensions: 27 → 29 → 32

### v1.2 (2026-01-12)
- 🔄 **Project Compatibility Significantly Improved**
  - Support for loading files (.sb3) saved from original Scratch
  - Support for loading project files using legacy version blocks
  - Missing blocks (unsupported extension blocks) are displayed in red for easy identification
- 🎬 **Block Recorder Improvements**
  - Smoother block replay process (animation optimization)
  - Improved stability during block creation and connection
- 📷 **ESP32-CAM Wireless Camera Improvements**
  - Enhanced convenience for wireless camera use in remote control applications (RC cars, etc.)
  - Image flip/mirror mode support
- 🛠️ **Other Improvements**
  - Expanded multi-language support
  - Overall stability and performance improvements

### v1.1 (2026-01-02)

* ⭐ Pen Extension Improvement Added
* Coordinate-based direct drawing function (Point, Line, Angle calculation)
* Radar visualization function (For ultrasonic sensors)


* ⭐ Translate Extension Improvement Added
* Multi-Proxy Failover Strategy
* Significantly improved translation success rate and stability


* Total number of extensions: 25 → 27

### v1.0 (2026-01-02)

* Documentation for 25 newly added extension blocks
* Categorization and detailed descriptions
* Usage examples and tech stack summary

---

**Document Version:** 1.6
**Last Modified:** 2026-06-05
**Author:** Kim Seok Jeon (Utilizing Gemini, Claude)