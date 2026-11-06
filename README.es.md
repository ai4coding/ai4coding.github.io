[English](README.md) | [한국어](README.ko.md) | [日本語](README.jp.md) | [Español](README.es.md) | [中文](README.zh.md)

# Guía de Nuevos Bloques de Extensión para BrixelAI : https://brixel.gorillacell.kr/

> **Fecha:** 2026-08-07 (revisado)
> **Objetivo:** **BrixelAI** — un fork de Scratch 3.0

---

## Tabla de Contenidos

1. [Visión General](#visión-general)
2. [Comunicación IoT y Hardware](#comunicación-iot-y-hardware) — incl. Placas de Hardware en Modo en Vivo y Cámara del Móvil ⭐ v1.6
3. [IA y Aprendizaje Automático](#ia-y-aprendizaje-automático)
4. [Visión por Computadora y Reconocimiento](#visión-por-computadora-y-reconocimiento)
5. [Canalización MLOps](#canalización-mlops--new-v16) ⭐ NEW (v1.6)
6. [Ciencia de Datos y Visualización](#ciencia-de-datos-y-visualización)
7. [Mejoras en Extensiones Existentes](#mejoras-en-extensiones-existentes)
8. [Lista Completa de Extensiones](#lista-completa-de-extensiones)

---

## Visión General

Este documento describe los bloques de extensión recién añadidos o mejorados en **BrixelAI** (un fork de Scratch 3.0).

> 📊 **Escala (medición del 2026-08-07):** **105** carpetas de extensiones · **98** registradas en `extension-manager` · **96** tarjetas de extensión en la GUI
> (Incluye las extensiones integradas estándar de Scratch. Hay más carpetas que registros porque las extensiones retiradas o en espera permanecen como carpetas.)
>
> ⚠️ **Estos números siguen creciendo.** Cuéntalos tú mismo antes de citarlos:
> ```bash
> cd scratch-editor/packages/scratch-vm/src/extensions && ls -d scratch3_*/ | wc -l
> ```
> La tabla «Lista Completa de Extensiones» de abajo puede quedar por debajo del número real según cuándo se revisó por última vez.

**Composición de las Extensiones:**

* ✨ **Recién Añadidos:** IoT y Placas de Hardware en Modo en Vivo, IA, Visión por Computadora, Canalización MLOps, Ciencia de Datos, TTS, etc.
* ⭐ **Mejoras Existentes:** Lápiz, Traducir, Detección de Video
* 🔌 **Placas de Hardware en Modo en Vivo (v1.6):** Rich Shield, Mega SuperRich, micro:bit V2 + ma:bit, Kit Completo ESP32 — controla placas reales en vivo por Serial/Bluetooth (patrón de despachador de firmware)
* 📷 **Cámara del Móvil (v1.6):** Inyecta la cámara del móvil en el escenario mediante WebRTC P2P — funciona con todas las extensiones de visión IA
* 🧩 **Canalización MLOps (v1.6):** flujo de trabajo de ML de extremo a extremo en 8 etapas (Datos → Medios → AutoML → Constructor de Redes Neuronales → Seguimiento de Experimentos → Evaluación → IA Responsable → Centro de Modelos)

## Lista Completa de Extensiones

| Nº | EXT ID | Nombre de Extensión | Categoría | Tec. Principal | Estado |
| --- | --- | --- | --- | --- | --- |
| 01 | `howtouse` | Guía de Uso | Utilidad | Hipervínculos | Nuevo |
| 02 | `webserial` | Web Serial (IoT) | Com. IoT | Web Serial API | Nuevo |
| 03 | `webble` | Web Bluetooth | Com. IoT | Web Bluetooth API | Nuevo |
| 04 | `scratch3wifi` | WiFi (WebSocket) | Com. IoT | WebSocket | Nuevo |
| 05 | `speechrecognition` | Reconocimiento de Voz | IA | Web Speech API | Nuevo |
| 06 | `facerecognition` | Reconocimiento Facial | Visión Comp. | face-api.js | Nuevo |
| 07 | `countingfingers` | Conteo de Dedos | Visión Comp. | MediaPipe Hands | Nuevo |
| 08 | `handtracking` | Seguimiento de Manos | Visión Comp. | MediaPipe Hands | Nuevo |
| 09 | `facetracking` | Seguimiento Facial | Visión Comp. | MediaPipe Face Mesh | Nuevo |
| 10 | `posetracking` | Seguimiento de Pose | Visión Comp. | MediaPipe Pose | Nuevo |
| 11 | `tmimage` | Teachable Machine Imagen | IA | Teachable Machine | Nuevo |
| 12 | `tmpose` | Teachable Machine Pose | IA | Teachable Machine | Nuevo |
| 13 | `tmsound` | Teachable Machine Sonido | IA | Teachable Machine | Nuevo |
| 14 | `allinonehand` | Mano Todo-en-Uno | Visión Comp. | MediaPipe + Gestos | Nuevo |
| 15 | `allinoneface` | Cara Todo-en-Uno | Visión Comp. | MediaPipe + Métricas | Nuevo |
| 16 | `datavisualization` | Visualización de Datos | Ciencia de Datos | Chart.js | Nuevo |
| 17 | `rlmachine` | Conducción Autónoma RL | IA y Control | Q-learning | Nuevo |
| 18 | `peopletracking` | Seguimiento de Personas | Visión Comp. | PoseNet | Nuevo |
| 19 | `blockrecorder` | Grabador de Bloques | Utilidad | Blockly API | Nuevo |
| 20 | `weather` | Clima en Tiempo Real | Utilidad | Open-Meteo API | Nuevo |
| 21 | `lanerecognition` | Visión de Conducción Autónoma | Control | Visión por Computadora + PID | Nuevo |
| 22 | `handwriting` | Reconocimiento de Escritura a Mano | IA | MyScript API | Nuevo |
| 23 | `datascience` | Ciencia de Datos | Ciencia de Datos | jExcel + Chart.js | Nuevo |
| 24 | `esp32cam` | Video ESP32-CAM | Com. IoT | WebSocket + Python | Nuevo |
| 25 | `colorsensing` | Detección de Color Inteligente | Visión Comp. | Webcam + Análisis de Color | Nuevo |
| 26 | `chatterboxtts` | BrixelAI TTS | IA | Agente TTS Local + Multi-Voz | Nuevo |
| 27 | `pen` | Lápiz (Dibujo + Radar) | Gráfico | Renderizado Canvas | ⭐ Mejorado |
| 28 | `translate` | Traducir (Multi-Proxy) | Utilidad | Google Translate + Proxy | ⭐ Mejorado |
| 29 | `videoSensing` | Detección de Video (Mejorada) | Visión Comp. | Detección de Video del Escenario | ⭐ Mejorado |
| 30 | `imageclassifier` | Clasificador de Imágenes IA | IA y Visión Comp. | MobileNet + KNN | Nuevo |
| 31 | `objectdetector` | Detector de Objetos IA | Visión Comp. | MediaPipe EfficientDet | Nuevo |
| 32 | `allinonehand` | Mano Todo-en-Uno (Gestos KNN) | IA y Visión Comp. | MediaPipe + KNN | ⭐ Mejorado |
| 33 | `faceSensing` | Detección Facial | Visión Comp. | MediaPipe Face Detection | Nuevo |
| 34 | `imageModel` | Entrenamiento Clasificación Imágenes | IA y ML | MobileNet v2 + TF.js | Nuevo |
| 35 | `soundclassifier` | Entrenamiento Clasificación Sonido | IA y ML | Web Audio FFT + TF.js | Nuevo |
| 36 | `textclassifier` | Entrenamiento Clasificación Texto | IA y ML | Bolsa de Palabras (BoW) + TF.js MLP | Nuevo |
| 37 | `logisticregression` | Entrenamiento Regresión Logística | IA y ML | Sigmoid + TF.js | Nuevo |
| 38 | `linearregression` | Entrenamiento Regresión Lineal | IA y ML | Mínimos Cuadrados | Nuevo |
| 39 | `polynomialregression` | Entrenamiento Regresión Polinomial | IA y ML | Ajuste Polinomial + TF.js | Nuevo |
| 40 | `knn` | Entrenamiento Clasificación KNN | IA y ML | Clasificación por Distancia | Nuevo |
| 41 | `kmeans` | Entrenamiento Clustering K-Means | IA y ML | Clustering por Centroides | Nuevo |
| 42 | `svm` | Entrenamiento Clasificación SVM | IA y ML | Kernel Lineal/RBF + ml-svm | Nuevo |
| 43 | `decisiontree` | Entrenamiento Árbol de Decisión | IA y ML | Clasificación por Árbol | Nuevo |
| 44 | `behaviorcloning` | Entrenamiento Clonación de Comportamiento | IA y ML | Aprendizaje por Imitación + TF.js | Nuevo |
| 45 | `datascience` | Ciencia de Datos (Mejorada) | Ciencia de Datos | jExcel + Algoritmos ML | ⭐ Mejorado |
| 46 | `brixelai` | Asistente BrixelAI | IA | Agente LLM | Nuevo |
| 47 | `facefeature` | Características Faciales | Visión Comp. | MediaPipe Face Mesh | Nuevo |
| 48 | `faceidentification` | Identificación Facial | Visión Comp. | face-api.js | Nuevo |
| 49 | `faceexpression` | Expresión Facial | Visión Comp. | MediaPipe + Emoción | Nuevo |
| 50 | `handfeature` | Características de la Mano | Visión Comp. | MediaPipe Hands | Nuevo |
| 51 | `handgesture` | Gestos de la Mano | Visión Comp. | MediaPipe + Gestos | Nuevo |
| 52 | `posefeature` | Características de Pose | Visión Comp. | MediaPipe Pose | Nuevo |
| 53 | `bodysegmentation` | Segmentación Corporal | Visión Comp. | MediaPipe Selfie Seg | Nuevo |
| 54 | `poselearning` | Aprendizaje de Poses | IA y Visión Comp. | Clasificación de Poses KNN | Nuevo |
| 55 | `objecttracking` | Seguimiento de Objetos | Visión Comp. | MediaPipe + Seguimiento | Nuevo |
| 56 | `colorregion` | Región de Color | Visión Comp. | Análisis de Regiones de Color | Nuevo |
| 57 | `personfollow` | Seguir a la Persona | Visión Comp. | Seguimiento basado en Pose | Nuevo |
| 58 | `robotarm6axis` | Brazo Robótico de 6 Ejes | Control | Cinemática Inversa | Nuevo |
| 59 | `ifttt` | Webhook IFTTT | IoT / Utilidad | Webhook API | Nuevo |
| 60 | `googlegemini` | Google Gemini | IA | Gemini API | Nuevo |
| 61 | `localllm` | LLM Local | IA | Agente LLM Local | Nuevo |
| 62 | `qrbarcode` | QR / Código de Barras | Visión Comp. | Decodificación QR/Código de Barras | Nuevo |
| 63 | `tagrecognition` | Reconocimiento de Marcadores AR | Visión Comp. | Detección de Marcadores AR | Nuevo |
| 64 | `mapviewer` | Visor de Mapas | Utilidad | API de Mapas | Nuevo |
| 65 | `text2speech` | Texto a Voz | IA | Síntesis de Voz | Nuevo |
| 66 | `datapipeline` | Canalización de Datos (MLOps 1) | MLOps | Constructor de Conjuntos de Datos Tabulares | Nuevo |
| 67 | `mediapipeline` | Canalización de Medios (MLOps 2) | MLOps | Conjunto de Datos de Imagen/Audio | Nuevo |
| 68 | `automl` | AutoML (MLOps 3) | MLOps | Entrenamiento Automatizado | Nuevo |
| 69 | `nnbuilder` | Constructor de Redes Neuronales (MLOps 4) | MLOps | Diseñador de Arquitectura de Redes Neuronales | Nuevo |
| 70 | `exptracking` | Seguimiento de Experimentos (MLOps 5) | MLOps | Registrador de Ejecuciones/Métricas | Nuevo |
| 71 | `modeleval` | Evaluación de Modelos (MLOps 6) | MLOps | Métricas / Matriz de Confusión | Nuevo |
| 72 | `responsibleai` | IA Responsable (MLOps 7) | MLOps | Verificación de Equidad / Sesgo | Nuevo |
| 73 | `modelhub` | Centro de Modelos (MLOps 8) | MLOps | Compartir Modelos con Firebase | Nuevo |
| 74 | `richshield` | Rich Shield (Modo en Vivo) | Hardware | Uno + Firmware en Vivo (Serial/BLE) | Nuevo |
| 75 | `superrich` | Mega SuperRich (Modo en Vivo) | Hardware | Mega + Firmware en Vivo (Serial/BLE) | Nuevo |
| 76 | `microbitv2` | micro:bit V2 + ma:bit (Modo en Vivo) | Hardware | Firmware MakeCode + Serial/BLE | Nuevo |
| 77 | `esp32fullset` | Kit Completo ESP32 (Modo en Vivo) | Hardware | Firmware ESP32 + esptool-js (Serial/BLE) | Nuevo |
| 78 | `phonecam` | Cámara del Móvil | Visión Comp. / IoT | WebRTC P2P → Video del Escenario | Nuevo |

> También se incluyen las extensiones integradas estándar de Scratch (`makeymakey`, `microbit`, `ev3`, `boost`, `wedo2`, `gdxfor`, `music`, `pen`, `translate`, `videoSensing`, `text2speech`).

---

## Comunicación IoT y Hardware

### 1. Web Serial

**Tecnología Principal:** Web Serial API

**Características:**

* Comunicación cableada con dispositivos serie como Arduino, Micro:bit, etc.
* Modo de Envío: Enviar una vez, Enviar continuamente, Enviar en formato Nombre:Valor.
* Modo de Recepción: Analizar por salto de línea, Analizar por coma.
* Configuración de tasa de baudios (9600 ~ 115200 baudios).
* Prevención de transmisión de datos duplicados, Limitación/Throttling (30ms).

**Bloques Principales:**

* `Conectar Web Serial`
* `Enviar [TEXT] una vez (con salto de línea)`
* `Enviar [TEXT] continuamente`
* `Datos recibidos (leer una línea)`
* `Dividir datos recibidos por [DELIMITER]`

**Ejemplo de Uso:**

```
Conectar Web Serial
Establecer tasa de baudios a 115200
Enviar LED:ON una vez (con salto de línea)

```

---

### 2. Web Bluetooth

**Tecnología Principal:** Web Bluetooth API (BLE)

**Características:**

* Comunicación inalámbrica con dispositivos Bluetooth como Micro:bit, Arduino, ESP32.
* Reconocimiento automático del tipo de dispositivo (Nordic UART, JDY-33, HM-10).
* Transmisión dividida en fragmentos de 20 bytes (Soporta BLE MTU).
* Protocolos de Envío/Recepción idénticos a Web Serial.

**Bloques Principales:**

* `Conectar a dispositivo [DEVICE_TYPE] (Predeterminado)`
* `Conectar dispositivo con Servicio UUID [SERVICE] TX [TX] RX [RX]`
* `¿Está conectado el Bluetooth?`
* `Enviar Nombre [LABEL] : Valor [VALUE] continuamente`

**Dispositivos Soportados:**

* BBC micro:bit
* Arduino/ESP32 (Nordic UART)
* JDY-33/HM-10 (Modo AT)
* Todos los demás dispositivos BLE (Detección automática)

---

### 3. WiFi (WebSocket)

**Tecnología Principal:** WebSocket (ws:// / wss://)

**Características:**

* Comunicación WebSocket con dispositivos WiFi como ESP8266, ESP32.
* Selección automática de protocolo (wss:// en entornos HTTPS).
* Modo Streaming: Transmisión sin procesar (Raw), multitransmisión CSV, transmisión Etiqueta:Valor.
* Limitación (Throttling) 50ms (Más rápido que Web Serial).

**Bloques Principales:**

* `Conectar a dispositivo WiFi en [IP]:[PORT]`
* `Conectar de forma segura [PROTOCOL] [ADDRESS]`
* `Enviar [DATA] (Raw) continuamente (sin salto de línea)`
* `Enviar [NUM_FIELDS] variables continuamente: [DATA]`

**Ejemplo de Uso:**

```
Conectar a dispositivo WiFi en 192.168.1.10:8080
Enviar 3 variables continuamente: 100, 200, 300

```

---

### 4. Video ESP32-CAM

**Tecnología Principal:** WebSocket + Puente Python

**Características:**

* Mostrar la transmisión de video de la ESP32-CAM en tiempo real en el escenario de Scratch.
* Comunicación WebSocket a través de un programa puente local en Python.
* Funciones de inversión/espejo de imagen y guardado de instantáneas.

**Bloques Principales:**

* `Abrir sitio de descarga del programa puente`
* `Conectar al agente ESP32-CAM`
* `Mostrar video ESP32-CAM [ON_OFF]`
* `Guardar instantánea de ESP32-CAM`

---

### 4a. Placas de Hardware en Modo en Vivo ⭐ NEW (v1.6)

Cuatro placas físicas pueden controlarse **en vivo** desde BrixelAI por USB Serial y/o Bluetooth (BLE). La placa ejecuta un ligero **despachador de comandos de firmware**; toda la lógica permanece en la VM de Scratch (protocolo de líneas de texto, terminadas en `\n`). El firmware puede grabarse/descargarse directamente desde la extensión.

| Placa | EXT ID | Modelo de Cableado | Firmware | Método de Grabación |
| --- | --- | --- | --- | --- |
| **Rich Shield (Uno)** | `richshield` | Placa hermana, pines fijos | Arduino (despachador en vivo) | Grabación por Web Serial |
| **Mega SuperRich** | `superrich` | Pines fijos por dispositivo | Arduino (despachador en vivo) | Grabación por Web Serial |
| **micro:bit V2 + ma:bit** | `microbitv2` | Shield, pines fijos | MakeCode (TypeScript) | arrastrar el hex a la unidad MICROBIT |
| **Kit Completo ESP32** | `esp32fullset` | Cableado libre (argumentos de pin) | Arduino-ESP32 | grabación automática con esptool-js |

**Características Comunes:**

* **Canal dual:** conéctate por USB Serial (cableado) o Bluetooth BLE (inalámbrico) — el mismo protocolo en ambos.
* **Reportero de la versión del firmware** + protocolo de saludo automático (HELLO/CAPS) al conectar.
* Pila de E/S completa por placa: servo, NeoPixel, LED RGB, ventilador/motor, zumbador/altavoz, LCD/OLED, matriz de puntos, ultrasónico, sensores y más.
* **Particularidades de micro:bit V2:** configuración del número de LEDs NeoPixel, notas musicales de MakeCode, eventos de sombrero (botón/gesto/sonido/logo/pin), protección de calibración de la brújula. BLE usa la variante NUS de micro:bit (TX = indicate, detectado automáticamente por las propiedades de la característica).
* **Particularidades del Kit Completo ESP32:** cableado libre con argumentos de número de pin (no pines fijos), nombre BLE por estudiante (NVS), matriz de puntos 8×8/8×16 con cuadrícula de entrada por clic, texto desplazable, menú de nota/tiempo del zumbador.
* **Particularidades de SuperRich/Rich Shield:** un único bloque MP3 combinado (parar/pausar/reanudar/siguiente/anterior/repetir/vol±) mediante menú desplegable.

**Ejemplo de Uso (Kit Completo ESP32):**

```
Conectar ESP32 (USB)
servo pin 32 ángulo 90
NeoPixel pin 18 poner todo R 255 G 0 B 0
Distancia(cm) trig 5 echo 18
```

---

### 4b. Cámara del Móvil ⭐ NEW (v1.6)

**Tecnología Principal:** WebRTC P2P + Puente Local + Emparejamiento por QR

**Características:**

* Inyecta la **cámara de tu móvil** en el escenario de Scratch como fuente de video.
* Escanea con tu móvil un código QR en la pantalla de tu computadora → enlace WebRTC punto a punto (ID de sala por estudiante).
* **Funciona automáticamente con todas las extensiones de visión IA** — reconocimiento de rostro/mano/pose/objetos, clasificador de imágenes, etc. usan la señal del móvil en lugar de la cámara web (mediante el proveedor compartido `runtime.ioDevices.video` + sincronización con CameraManager).
* Totalmente distribuido: el móvil de cada estudiante se conecta solo a su propia computadora (1:1, sin servidor central) — seguro para aulas de 30 estudiantes.

**Bloques Principales:**

* `Conectar cámara del móvil (mostrar QR)`
* `Desconectar cámara del móvil`
* `< ¿Móvil conectado? >`
* `Cerrar QR` / `Estado de la conexión`

---

## IA y Aprendizaje Automático

### 5. Teachable Machine Imagen

**Tecnología Principal:** Modelo de Imagen de Teachable Machine

**Características:**

* Usar modelos de clasificación de imágenes entrenados con Google Teachable Machine.
* Cargar clasificadores personalizados ingresando la URL del Modelo.
* Ajustar la precisión de reconocimiento con configuraciones de umbral (0.0 ~ 1.0).

**Bloques Principales:**

* `Ir al sitio de Teachable Machine`
* `Cambiar URL del modelo a [URL]`
* `Cambiar umbral a [THRESHOLD]`
* `Iniciar modelo`
* `Resultado del reconocimiento`

**Ejemplo de Uso:**

```
Cambiar URL del modelo a https://teachablemachine.withgoogle.com/models/ABC123/
Cambiar umbral a 0.8
Iniciar modelo
Si (Resultado del reconocimiento) = [Gato] entonces
  Decir "¡Gato detectado!"

```

---

### 6. Teachable Machine Pose

**Tecnología Principal:** Modelo de Pose de Teachable Machine

**Características:**

* Clasificación basada en poses corporales (ej. Levantar la mano, Sentarse, Pararse).
* Devuelve coordenadas de puntos clave y puntuaciones de confianza.
* Entrenamiento del Modelo: [https://teachablemachine.withgoogle.com/train/pose](https://teachablemachine.withgoogle.com/train/pose)

**Bloques Principales:**

* `Cambiar URL del modelo a [URL]`
* `Resultado del reconocimiento (Nombre de Clase de Pose)`
* `Coordenada X del [N]º punto clave`
* `Coordenada Y del [N]º punto clave`

---

### 7. Teachable Machine Sonido

**Tecnología Principal:** Modelo de Audio de Teachable Machine

**Características:**

* Reconocimiento de comandos de Voz/Sonido (Aplauso, Silbido, Palabras clave, etc.).
* Control explícito del micrófono.
* Filtrado de ruido de fondo.

**Bloques Principales:**

* `Permitir uso del micrófono`
* `Cambiar URL del modelo a [URL]`
* `Iniciar modelo`
* `Resultado del reconocimiento`

**Ejemplo de Uso:**

```
Permitir uso del micrófono
Cambiar URL del modelo a [MODEL_URL]
Iniciar modelo
Si (Resultado del reconocimiento) = [Aplauso] entonces
  Reproducir efecto de sonido

```

---

### 8. Reconocimiento de Voz

**Tecnología Principal:** Web Speech API

**Características:**

* Conversión de Voz a Texto en tiempo real.
* Detección de comandos (adelante, atrás, izquierda, derecha, parar, ir, girar).
* Extracción de parámetros numéricos (velocidad, ángulo, distancia).
* Soporte multilingüe (Coreano, Inglés, Japonés, Chino, etc.).
* Análisis de sentimientos (Positivo/Negativo/Neutral).

**Bloques Principales:**

* `establecer idioma a [LANG]`
* `iniciar reconocimiento de voz`
* `texto reconocido`
* `último comando`
* `velocidad detectada (0-100)`
* `ángulo detectado (grados)`
* `< ¿contiene la palabra clave [WORD]? >`
* `(sentimiento)`

**Ejemplo de Uso:**

```
establecer idioma a [ko-KR]
iniciar reconocimiento de voz
Si (último comando) = [adelante] entonces
  Mover adelante a velocidad (velocidad detectada)

```

---

### 9. BrixelAI TTS (Texto a Voz)

**Tecnología Principal:** Agente TTS Local + Motor Multivoz

**Características:**

* Síntesis de voz IA de alta calidad mediante un programa agente local.
* 23 idiomas soportados (Coreano, Inglés, Japonés, Chino, Francés, Alemán, etc.).
* 5 tipos de voz predefinidos (Femenina A/B, Masculina A/B, Infantil) + voces dinámicas del agente.
* Pregeneración basada en ranuras para reproducción instantánea sin retraso.
* Control del habla: Pausar, Reanudar, Detener.

**Bloques Principales:**

* `Descargar Agente (Win/Mac)` - Descargar el agente local de BrixelAI TTS.
* `Conectar Agente (Puerto [PORT])` - Conectar al agente TTS (puerto predeterminado: 9000).
* `Establecer idioma a [LANG]` - Establecer el idioma del TTS (23 idiomas).
* `Establecer voz a [VOICE]` - Seleccionar el tipo de voz.
* `Hablar [TEXT] y esperar` - Pronunciar el texto y esperar hasta que termine.
* `Generar [TEXT] en la ranura [SLOT]` - Pregenerar voz en una ranura para reproducción instantánea.
* `Reproducir ranura [SLOT]` - Reproducir la voz pregenerada de la ranura.
* `¿Está lista la ranura [SLOT]?` - Comprobar si la ranura tiene la voz lista.

**Ejemplo de Uso:**

```
Descargar Agente (Win)
Conectar Agente (Puerto 9000)
Establecer idioma a [Coreano]
Establecer voz a [Femenina A]
Hablar "안녕하세요, 브릭셀AI입니다" y esperar
Generar "준비 완료" en la ranura 1
Reproducir ranura 1
```

**Aplicaciones:**

* Narración interactiva con voces de IA.
* Aprendizaje de pronunciación multilingüe.
* Funciones de accesibilidad para personas con discapacidad visual.
* Retroalimentación por voz de dispositivos IoT.

---

### 10. Conducción Autónoma por Aprendizaje por Refuerzo (RL)

**Tecnología Principal:** Algoritmo Q-learning

**Características:**

* Implementación de IA de conducción autónoma basada en Q-learning.
* Discretización de la entrada de sensores (modos de 3 sensores/6 sensores).
* Controlador PID integrado.
* Parámetros de aprendizaje ajustables (Tasa de Aprendizaje, Tasa de Exploración, Factor de Descuento).
* Guardar/Cargar la Tabla-Q (JSON).

**Bloques Principales:**

* `Configurar Cerebro IA: Alfa [ALPHA] Épsilon [EPSILON] Gamma [GAMMA]`
* `Convertir arreglo de sensores [SENSORS] a patrón de 3 sensores`
* `Q-learning: Estado [STATE] Acción [ACTION] Recompensa [REWARD] Estado Siguiente [NEXT_STATE]`
* `Obtener Mejor Acción: Estado [STATE]`
* `Guardar Tabla-Q (Descargar)`
* `Cargar Tabla-Q [JSON]`

**Ejemplo de Uso:**

```
Configurar Cerebro IA: Alfa 0.1 Épsilon 0.2 Gamma 0.9
Valor del Sensor = Convertir arreglo de sensores [100,50,30] a patrón de 3 sensores
Acción = Obtener Mejor Acción: Estado (Valor del Sensor)
Q-learning: Estado (Valor del Sensor) Acción (Acción) Recompensa 10 Estado Siguiente (Valor Siguiente del Sensor)

```

---

## Visión por Computadora y Reconocimiento

### 11. Reconocimiento Facial

**Tecnología Principal:** face-api.js

**Características:**

* Registro y reconocimiento facial (coincidencia 1:N).
* Extracción de vectores de características faciales.
* Guardar las caras registradas en el almacenamiento local.
* Reconocimiento en tiempo real (5 FPS).

**Bloques Principales:**

* `Encender cámara`
* `Registrar cara con el nombre [NAME]`
* `Iniciar reconocimiento facial`
* `Nombre de la cara reconocida`
* `Precisión del reconocimiento facial (%)`

---

### 12. Conteo de Dedos

**Tecnología Principal:** MediaPipe Hands

**Características:**

* Cuenta los dedos de ambas manos.
* Detección independiente de las manos Izquierda/Derecha.
* Renderizado del esqueleto de la mano en tiempo real.

**Bloques Principales:**

* `Encender cámara`
* `Iniciar reconocimiento de manos`
* `Mostrar esqueleto de la mano`
* `Conteo de dedos de la mano izquierda`
* `Conteo de dedos de la mano derecha`
* `Conteo total de dedos`

---

### 13. Seguimiento de Manos

**Tecnología Principal:** MediaPipe Hands (21 puntos de referencia)

**Características:**

* Rastrea las coordenadas de 21 puntos de referencia de la mano.
* Distingue entre las manos Izquierda/Derecha.
* Precisión ajustable (0.1 ~ 0.9).

**Bloques Principales:**

* `Encender cámara`
* `Iniciar seguimiento de manos`
* `Cambiar la precisión de reconocimiento a [CONFIDENCE]`
* `Coordenada X de [LANDMARK] en la Mano Izquierda`
* `Coordenada Y de [LANDMARK] en la Mano Izquierda`

---

### 14. Seguimiento Facial

**Tecnología Principal:** MediaPipe Face Mesh (468 puntos de referencia)

**Características:**

* Rastrea 468 puntos de referencia de la malla facial.
* Acceso a las coordenadas por 5 rangos (0-100, 101-200, 201-300, 301-400, 401-477).
* Visualización de la malla facial.

**Bloques Principales:**

* `Encender cámara`
* `Iniciar seguimiento facial`
* `Mostrar malla facial`
* `Coordenada X del punto de referencia [N] en el rango [0-100]`

---

### 15. Seguimiento de Pose

**Tecnología Principal:** MediaPipe Pose (33 puntos de referencia)

**Características:**

* Rastrea 33 puntos de referencia corporales (ojos, brazos, piernas, puntas de los dedos, etc.).
* Calcula los ángulos de las articulaciones (codos, rodillas, etc.).
* Corrección de modo espejo (inversión Izquierda/Derecha).

**Bloques Principales:**

* `Encender cámara`
* `Iniciar seguimiento corporal`
* `Coordenada X de [LANDMARK]`
* `Coordenada Y de [LANDMARK]`
* `Ángulo del codo izquierdo (grados)`
* `Ángulo de la rodilla derecha (grados)`

---

### 16. Mano Todo-en-Uno

**Tecnología Principal:** MediaPipe Hands + Algoritmo de Gestos + Clasificación KNN

**Características:**

* Conteo de dedos, Piedra-Papel-Tijera y reconocimiento de gestos integrados.
* Tipos de gestos: Pulgar Arriba, Signo OK, Corazón con Dedos, V, Puño, Palma, Pellizco.
* Visualización del esqueleto de la mano.
* ⭐ **Aprendizaje de Gestos KNN** — Entrena gestos de mano personalizados y reconócelos en tiempo real.

**Bloques Principales:**

* `Encender cámara`
* `Iniciar reconocimiento de manos`
* `< ¿Está haciendo el gesto [GESTURE]? >`
* `Forma de la mano (Piedra/Papel/Tijera)`
* `Conteo de dedos`

**⭐ Bloques de Aprendizaje de Gestos KNN (12 bloques):**

* `KNN Entrenar gesto como [LABEL]` — Añade al KNN una muestra de la pose actual de la mano.
* `KNN Iniciar reconocimiento de gestos` / `KNN Detener reconocimiento de gestos`
* `KNN Eliminar los datos de entrenamiento de [LABEL]` / `KNN Borrar todos los datos de entrenamiento`
* `KNN Gesto reconocido` — Devuelve la etiqueta clasificada.
* `KNN Confianza del reconocimiento` — Devuelve una confianza de 0~100.
* `KNN Cantidad de datos de entrenamiento de [LABEL]` / `KNN Lista de etiquetas de gestos`
* `Cuando KNN reconoce el gesto como [LABEL]` — Bloque HAT (se activa con una confianza de 80%+).
* `KNN Guardar datos de entrenamiento` / `KNN Cargar datos de entrenamiento`

---

### 17. Cara Todo-en-Uno

**Tecnología Principal:** MediaPipe Face Mesh + Cálculo de Métricas

**Características:**

* Detección facial, coordenadas de la Glabela (entre los ojos), medición del tamaño de apertura de la boca.
* Detección de parpadeo (izquierdo/derecho independiente).
* Medición del tamaño de la cara (ancho/alto).

**Bloques Principales:**

* `Encender cámara`
* `Mostrar malla facial`
* `< ¿Se detecta una cara? >`
* `Cantidad de caras`
* `Glabela X`, `Glabela Y`
* `Tamaño de apertura de la boca`
* `< ¿Parpadeó el ojo izquierdo? >`
* `Cambiar la sensibilidad de parpadeo a [THRESHOLD]`

---

### 18. Seguimiento de Personas

**Tecnología Principal:** PoseNet + Coincidencia de Poses

**Características:**

* Aprende y reconoce múltiples poses por persona.
* Coincidencia 1:N basada en la similitud de poses.
* Devuelve la ubicación y el tamaño de la persona.

**Bloques Principales:**

* `Encender cámara`
* `Registrar persona [NAME]`
* `Añadir pose a la persona actual`
* `Nombre de la persona reconocida`
* `Precisión de la persona reconocida (%)`
* `Coordenada X de la persona reconocida`

---

### 19. Visión de Conducción Autónoma (Reconocimiento de Carril)

**Tecnología Principal:** Visión por Computadora + Control PID

**Características:**

* Reconocimiento del centro de carril doble (líneas Negras/Blancas).
* Trazado de línea única con seguimiento de posición (-100 ~ 100).
* Cálculo de la velocidad de los motores (Izquierdo/Derecho).
* Cálculo del ángulo de dirección.
* Reportero de la cantidad de carriles.
* Controlador PID integrado (calcula el valor de dirección).
* Superposición visual para visualizar el reconocimiento de carril.

**Bloques Principales (22 bloques):**

* `Encender cámara` / `Apagar cámara`
* `Iniciar reconocimiento del centro de carril doble (línea: [COLOR])` / `Detener reconocimiento del centro de carril doble`
* `Iniciar trazado de línea (línea: [COLOR] umbral: [TH])` / `Detener trazado de línea`
* `Posición de la línea (-100 ~ 100)` / `Cantidad de carriles` / `Desplazamiento del centro del carril (-1 ~ 1)`
* `Velocidad del motor izquierdo (base: [SPEED])` / `Velocidad del motor derecho (base: [SPEED])`
* `Ángulo de dirección (centro: [CENTER] rango: [RANGE])`
* `Establecer ganancias PID Kp:[KP] Ki:[KI] Kd:[KD]` / `Reiniciar PID`
* `Mostrar superposición` / `Ocultar superposición`
* `< ¿Se detecta un carril? >`

**Ejemplo de Uso:**

```
Encender cámara
Cambiar color de línea a [Negro]
Iniciar procesamiento de imagen
Valor de Dirección = Calcular valor de dirección PID
Establecer velocidad del motor a (100 + Valor de Dirección)

```

---

### 20. Reconocimiento de Escritura a Mano

**Tecnología Principal:** MyScript API + MediaPipe Hand Tracking

**Características:**

* Entrada de escritura a mano mediante el mouse o el seguimiento del dedo (índice).
* Reconocimiento de inglés a través de la API MyScript Cloud.
* Clave API personal configurable.

**Bloques Principales:**

* `Activar modo de escritura (método de entrada: [MODE])`
* `Empezar a escribir`
* `Dejar de escribir`
* `Borrar lo escrito`
* `Reconocer texto`
* `Resultado del reconocimiento`

---

### 21. Detección de Color Inteligente

**Tecnología Principal:** Webcam + Análisis de Color

**Características:**

* Detección de color en tiempo real (148 nombres de colores CSS).
* Modos de reconocimiento: Centro Fijo / Seguimiento del Mouse.
* Devuelve valores RGB y HEX.

**Bloques Principales:**

* `Encender cámara`
* `Iniciar reconocimiento de color`
* `Cambiar el modo de reconocimiento a [MODE]`
* `Nombre del color reconocido`
* `Código HEX del color reconocido`
* `Valor de rojo (0-255)`

---

### 30. Clasificador de Imágenes IA

**Tecnología Principal:** MobileNet v1 + Clasificación KNN (ml5.js)

**Características:**

* Aprendizaje de clasificación de imágenes en tiempo real usando la webcam.
* Extracción de características con MobileNet v1 + clasificación KNN.
* Modos de entrenamiento único y continuo.
* Guardar/Cargar los datos de entrenamiento como archivos JSON.
* Cambio de cámara frontal/trasera y modo espejo.
* Asignación automática de ID por clase para la transmisión BLE.

**Bloques Principales (28 bloques):**

* `Encender cámara` / `Apagar cámara`
* `Cargar modelo MobileNet`
* `KNN Entrenar una vez como [NAME]` / `KNN Iniciar entrenamiento continuo como [NAME]` / `KNN Detener entrenamiento continuo`
* `KNN Eliminar los datos de entrenamiento de [NAME]` / `KNN Borrar todos los datos de entrenamiento`
* `KNN Iniciar clasificador` / `KNN Detener clasificador`
* `Cuando KNN reconoce la imagen como [NAME]` / `Cuando cambia el resultado de KNN`
* `KNN Nombre reconocido` / `KNN ID reconocido` / `KNN Confianza`
* `KNN Cantidad de datos de entrenamiento de [NAME]` / `KNN Lista de clases`
* `KNN Guardar datos de entrenamiento` / `KNN Cargar datos de entrenamiento`
* `Cambiar cámara [FRONT/REAR]` / `Espejar cámara [ON/OFF]`

**Ejemplo de Uso:**

```
Encender cámara
Cargar modelo MobileNet
// Pulsa 'A' para entrenar "Manzana", pulsa 'B' para entrenar "Plátano"
KNN Entrenar una vez como [Manzana]
KNN Iniciar clasificador
// El resultado del reconocimiento se muestra en tiempo real
```

---

### 31. Detector de Objetos IA

**Tecnología Principal:** MediaPipe EfficientDet-Lite0 (COCO 80)

**Características:**

* Detección en tiempo real de 80 categorías de objetos COCO mediante la webcam.
* Superposición de cuadros delimitadores en el escenario de Scratch.
* Seguimiento de objetos con controles para añadir/quitar.
* Reporteros de posición (X, Y), tamaño (Ancho, Alto) y confianza del objetivo.
* Inferencia limitada a 10 fps para optimizar el rendimiento.
* Umbral de detección ajustable.

**Bloques Principales (30 bloques):**

* `Encender cámara` / `Apagar cámara`
* `Cargar modelo EfficientDet` / `Abrir la lista de 80 objetos COCO`
* `Añadir seguimiento de [OBJECT]` / `Añadir seguimiento por nombre [NAME]` / `Quitar seguimiento de [OBJECT]` / `Borrar todos los seguimientos`
* `Establecer el umbral en [NUM]%`
* `Iniciar detección de objetos` / `Detener detección de objetos`
* `Establecer la superposición de cuadros delimitadores en [ON/OFF]`
* `Cuando se detecta [OBJECT]` / `Cuando se pierde el objetivo` / `Cuando el modelo está listo`
* `Etiqueta del objetivo` / `Objetivo X` / `Objetivo Y` / `Ancho del objetivo` / `Alto del objetivo` / `Confianza del objetivo`
* `Cantidad de [OBJECT]` / `Cantidad total detectada` / `Lista de seguimiento actual`
* `< ¿Modelo listo? >` / `< ¿Está detectando? >` / `< ¿[OBJECT] detectado? >`

**Ejemplo de Uso:**

```
Encender cámara
Cargar modelo EfficientDet
Añadir seguimiento de [persona]
Iniciar detección de objetos
Si < ¿[persona] detectado? > entonces
  Decir (Etiqueta del objetivo) encontrado en X: (Objetivo X)
```

---

## Extensiones de Entrenamiento de Modelos de IA

### 33. Detección Facial

**Tecnología Principal:** MediaPipe Face Detection (TensorFlow.js)

**Características:**

* Detección facial en tiempo real y seguimiento de puntos clave del rostro
* Medición del ángulo de inclinación del rostro
* Posicionamiento del sprite según las partes del rostro (nariz, ojos, orejas)

**Bloques Principales (9 bloques):**

* `Encender cámara`
* `Iniciar detección facial`
* `Posición X del rostro` / `Posición Y del rostro`
* `Ángulo de inclinación del rostro`
* `Mover sprite a [PART] del rostro`

---

### 34. Entrenamiento del Modelo de Clasificación de Imágenes

**Tecnología Principal:** MobileNet v2 (Aprendizaje por Transferencia) + TensorFlow.js

**Características:**

* Entrenamiento de clasificación de imágenes dentro del navegador usando la webcam
* Extracción de características con MobileNet v2 y cabezal de clasificación personalizado
* Configuración de épocas y tasa de aprendizaje
* Guardar/cargar el modelo como archivo

**Bloques Principales (12 bloques):**

* `Encender cámara` / `Apagar cámara`
* `Añadir imagen de cámara a la clase [LABEL]`
* `Establecer épocas a [N]` / `Establecer tasa de aprendizaje a [LR]`
* `Entrenar modelo`
* `Iniciar clasificación` / `Detener clasificación`
* `Resultado de clasificación` / `Confianza (%)`
* `Ver galería de imágenes de clase` ⭐ NEW — explora visualmente las imágenes añadidas a cada clase (miniaturas de 96×96, clic para ver a tamaño completo, descarga en JPG)
* `Guardar modelo` / `Cargar modelo desde archivo`

---

### 35. Entrenamiento del Modelo de Clasificación de Sonido

**Tecnología Principal:** Web Audio API (Espectro FFT) + MLP de TensorFlow.js

**Características:**

* Grabación y clasificación de muestras de audio con el micrófono
* Análisis de espectro FFT para obtener 128 bandas de características de audio
* Clasificación de sonido en tiempo real con bloques de sombrero
* Visualización de la curva de pérdida y del gráfico de datos

**Bloques Principales (23 bloques):**

* `Encender micrófono` / `Apagar micrófono`
* `Grabar [DURATION] segundos de la clase [LABEL]`
* `Establecer épocas a [N]` / `Establecer tasa de aprendizaje a [LR]`
* `Entrenar modelo` / `¿Está entrenando?` / `Progreso del entrenamiento`
* `Iniciar clasificación` / `Detener clasificación`
* `Cuando el sonido se reconozca como [LABEL]`
* `Resultado de clasificación` / `Confianza (%)`
* `Guardar/Cargar datos` / `Guardar/Cargar modelo`

---

### 36. Entrenamiento del Modelo de Clasificación de Texto

**Tecnología Principal:** Bolsa de Palabras (BoW) + Red Neuronal MLP (TensorFlow.js)

**Características:**

* Clasificación de texto en coreano e inglés con red neuronal
* Construcción automática del vocabulario a partir de los datos de entrenamiento
* Reporte del porcentaje de confianza

**Bloques Principales (9 bloques):**

* `Añadir texto [TEXT] a la clase [LABEL]`
* `Entrenar modelo` / `¿Está entrenando?`
* `Clasificar texto [TEXT]`
* `Resultado de clasificación` / `Confianza (%)`

---

### 37. Entrenamiento de Regresión Logística

**Tecnología Principal:** Función Sigmoide + Clasificación Binaria (TensorFlow.js)

**Características:**

* Clasificación binaria (0 o 1) con salida de probabilidad
* Épocas y tasa de aprendizaje configurables
* Visualización de la curva de pérdida

**Bloques Principales (9 bloques):**

* `Añadir datos X=[X] Y=[Y] a la clase [LABEL]`
* `Establecer épocas a [N]` / `Establecer tasa de aprendizaje a [LR]`
* `Entrenar modelo`
* `Predecir clase para X=[X] Y=[Y]`
* `Probabilidad de predicción (0-100%)`

---

### 38. Entrenamiento de Regresión Lineal

**Tecnología Principal:** Método de Mínimos Cuadrados

**Características:**

* Predicción lineal (y = mx + b) con puntuación R²
* Visualización del gráfico de regresión en una ventana emergente
* No necesita ninguna librería de ML externa — implementación puramente matemática

**Bloques Principales (11 bloques):**

* `Añadir punto de datos X=[X] Y=[Y]`
* `Entrenar modelo`
* `Predecir Y para X=[VALUE]`
* `Pendiente (m)` / `Intersección (b)` / `Puntuación R²`
* `Mostrar gráfico de regresión`

---

### 39. Entrenamiento de Regresión Polinomial

**Tecnología Principal:** Ajuste Polinomial + TensorFlow.js

**Características:**

* Ajuste de líneas curvas para datos no lineales
* Grado del polinomio ajustable (1-10)
* Visualización de la curva en una ventana emergente

**Bloques Principales (7 bloques):**

* `Añadir punto de datos X=[X] Y=[Y]`
* `Establecer grado a [N]`
* `Entrenar modelo`
* `Predecir Y para X=[VALUE]`
* `Mostrar curva de regresión`

---

### 40. Entrenamiento de Clasificación KNN

**Tecnología Principal:** Clasificación Basada en Distancia

**Características:**

* Valor K configurable para la selección de vecinos
* Porcentaje de confianza y distancia al vecino más cercano
* Visualización de gráfico de dispersión con las fronteras entre clases

**Bloques Principales (11 bloques):**

* `Añadir datos X=[X] Y=[Y] a la clase [LABEL]`
* `Establecer K a [K]`
* `Entrenar modelo`
* `Predecir clase para X=[X] Y=[Y]`
* `Confianza de la predicción (%)` / `Distancia más cercana`
* `Mostrar gráfico de dispersión`

---

### 41. Entrenamiento de Clustering K-Means

**Tecnología Principal:** Aprendizaje No Supervisado Basado en Centroides

**Características:**

* Agrupamiento automático de los datos en K clusters
* Reporte de las coordenadas del centro de cada cluster
* Visualización animada del agrupamiento

**Bloques Principales (12 bloques):**

* `Añadir punto de datos X=[X] Y=[Y]`
* `Establecer K a [K]`
* `Ejecutar agrupamiento`
* `ID de cluster para X=[X] Y=[Y]`
* `Centro X del cluster [N]` / `Centro Y del cluster [N]`
* `Mostrar animación del agrupamiento`

---

### 42. Entrenamiento de Clasificación SVM

**Tecnología Principal:** Support Vector Machine (Kernel Lineal/RBF, ml-svm)

**Características:**

* Soporte para kernel lineal y RBF
* Visualización de la frontera de decisión
* Clasificación multiclase

**Bloques Principales (8 bloques):**

* `Añadir datos X=[X] Y=[Y] a la clase [LABEL]`
* `Establecer kernel a [LINEAR/RBF]`
* `Entrenar modelo`
* `Predecir clase para X=[X] Y=[Y]`
* `Mostrar frontera de decisión`

---

### 43. Entrenamiento de Árbol de Decisión

**Tecnología Principal:** Clasificación Basada en Árboles (IA Explicable)

**Características:**

* Clasificación explicable con reglas legibles por humanos
* Profundidad del árbol configurable
* Visualización de la estructura del árbol de decisión

**Bloques Principales (10 bloques):**

* `Añadir datos X=[X] Y=[Y] a la clase [LABEL]`
* `Establecer profundidad máxima a [N]`
* `Entrenar modelo`
* `Predecir clase para X=[X] Y=[Y]`
* `Ruta de la regla de decisión`
* `Mostrar árbol de decisión`

---

### 44. Entrenamiento de Clonación de Comportamiento

**Tecnología Principal:** Aprendizaje por Imitación + Red Neuronal (TensorFlow.js)

**Características:**

* Aprendizaje de estados y acciones multidimensionales a partir de demostraciones
* Grabación y reproducción de datos de demostración
* Salida de acción suavizada con EMA para control continuo

**Bloques Principales (23 bloques):**

* `Establecer dimensiones de estado a [N]` / `Establecer dimensiones de acción a [N]`
* `Grabar estado [STATE] acción [ACTION]`
* `Entrenar modelo`
* `Predecir acción para el estado [STATE]`
* `Iniciar modo autónomo` / `Detener modo autónomo`
* `Guardar/Cargar datos de demostración`

---

## Ciencia de Datos y Visualización

### 22. Visualización de Datos

**Tecnología Principal:** Chart.js + Ventana Emergente

**Características:**

* Visualización de gráficos de datos en tiempo real (Gráfico de Líneas).
* Muestra el gráfico en una ventana emergente separada.
* Descarga de datos CSV.
* Intervalo de transmisión de datos ajustable (Modo Normal/Rápido).

**Bloques Principales:**

* `Abrir ventana de gráfico`
* `Iniciar transmisión de datos`
* `Cambiar nombre de Serie 1 a [NAME]`
* `Enviar valor [VALUE] a Serie 1`
* `Detener transmisión de datos`
* `Cerrar ventana de gráfico`

---

### 23. Ciencia de Datos

**Tecnología Principal:** jExcel + Chart.js

**Características:**

* Gestión de datos basada en hoja de cálculo (ventana emergente con paneles redimensionables).
* Entrada y edición de datos en tiempo real.
* Visualización de gráficos (gráficos de líneas/barras/dispersión/pastel).
* Análisis estadístico (media, mediana, desviación estándar, mínimo, máximo, correlación).
* Preprocesamiento de datos (normalizar, estandarizar, rellenar valores faltantes).
* Aprendizaje supervisado: regresión lineal, KNN.
* Aprendizaje no supervisado: agrupamiento K-Means.
* Importación/exportación de CSV.

**Bloques Principales:**

* `Abrir Mesa de Trabajo de Datos` / `Cerrar Mesa de Trabajo`
* `Importar archivo CSV` / `Guardar como archivo CSV`
* `Poner [VALUE] en la fila [ROW] columna [COL]` / `Valor en la fila [ROW] columna [COL]`
* `Dibujar [CHART_TYPE] (X: [X_COL], Y: [Y_COL])`
* `[STAT_TYPE] de la columna [COL]` / `Correlación entre [COL1] y [COL2]`
* `Rellenar los valores faltantes de [COL] con [METHOD]`
* `Entrenar regresión lineal (X: [X_COL], Y: [Y_COL])` / `Predecir con regresión lineal`
* `Entrenar KNN` / `Predecir con KNN`
* `Agrupamiento K-means: dividir [COLS] en [K] grupos`

---

## Mejoras en Extensiones Existentes

### 27. Lápiz

**Tecnología Principal:** Renderizado Canvas

**Características Existentes:**

* Bajar/Subir lápiz.
* Establecer color/tamaño del lápiz.
* Estampar.
* Borrar Todo.

**⭐ Características Recién Añadidas:**

#### 1. Dibujo Directo Basado en Coordenadas

Dibuja directamente usando coordenadas sin mover el objeto (sprite).

**Bloques Principales:**

* `dibujar punto en x:[X] y:[Y]` - Dibuja un punto en coordenadas específicas.
* `dibujar línea de x1:[X1] y1:[Y1] a x2:[X2] y2:[Y2]` - Dibuja una línea entre dos puntos.
* `dibujar ángulo x1:[X1] y1:[Y1] x2:[X2] y2:[Y2] x3:[X3] y3:[Y3] guardar en ranura:[SLOT]` - Conecta tres puntos para dibujar líneas y calcula/guarda el ángulo (Ranuras 1-6).
* `ángulo de ranura:[SLOT]` - Devuelve el valor del ángulo guardado.

**Ejemplo de Uso:**

```
Establecer color de lápiz a #ff0000
dibujar línea de x1:0 y1:0 a x2:100 y2:100
dibujar ángulo x1:0 y1:0 x2:100 y2:0 x3:100 y3:100 guardar en ranura:1
Ángulo = ángulo de ranura:1  // Devuelve 90 grados

```

**Aplicaciones:**

* Dibujo de gráficos matemáticos.
* Dibujo de formas geométricas (triángulos, cuadrados, etc.).
* Medición y visualización de ángulos.

---

#### 2. Visualización de Radar (Para Sensores Ultrasónicos)

Función de visualización de radar para conducción autónoma y control de robots.

**Bloques Principales:**

* `iniciar radar centro x:[CX] y:[CY] distancia máx:[MAX_DIST] rango de ángulo:[ANGLE_RANGE]` - Inicializar el radar.
* `radar mapear valor de [MIN_VAL] a [MAX_VAL]` - Establecer el mapeo del rango de valores del sensor.
* `radar dibujar en ángulo:[ANGLE] distancia:[DISTANCE]` - Dibujar la línea del radar (Verde para el área detectada, Rojo para el resto).
* `radar desvanecer un [AMOUNT]%` - Efecto de desvanecimiento del radar (Efecto de imagen residual).

**Ejemplo de Uso:**

```
Borrar todo
iniciar radar centro x:0 y:0 distancia máx:180 rango de ángulo:180
radar mapear valor de 0 a 400

// Cuando el valor del sensor es 100 (a 0 grados)
radar dibujar en ángulo:0 distancia:100

// Desenfocar las líneas de radar anteriores con el efecto de desvanecimiento
radar desvanecer un 5%

```

**Aplicaciones:**

* Visualización de sensores ultrasónicos (Arduino, Micro:bit).
* Visualización de sensores LiDAR.
* Visualización de detección de obstáculos para robots autónomos.

**Reglas de Color del Radar:**

* **Verde:** Hasta la distancia detectada por el sensor.
* **Rojo:** Desde la distancia detectada hasta la distancia máxima (Sin obstáculo).

---

### 28. Traducir

**Tecnología Principal:** Google Translate API + Multi-Proxy

**Características Existentes:**

* Traducir texto a varios idiomas.
* Detectar el idioma actual del proyecto.

**⭐ Características Recién Añadidas:**

#### Estrategia de Conmutación por Error Multi-Proxy

**Problema:**

* Anteriormente: Se usaba un solo proxy → La traducción falla si ese proxy cae.
* Acceso directo bloqueado debido a la política CORS.

**Solución:**

* Intentar secuencialmente 3 proxies CORS.
* Estrategia de Fallo Rápido (4 segundos de tiempo de espera por proxy).
* Intentar automáticamente el siguiente proxy si uno falla.

**Orden de Proxy:**

1. **corsproxy.io** - El más rápido (Intento primario)
2. **allorigins.win** - Estable (Respaldo secundario)
3. **codetabs.com** - Respaldo final

**Bloques Principales:**

* `traducir [WORDS] a [LANGUAGE]` - Traducir texto (Estabilidad mejorada).
* `idioma` - Idioma actual del proyecto.

**Mejoras:**

* ✅ Eliminado el Punto Único de Fallo.
* ✅ Tasa de éxito de traducción significativamente mejorada.
* ✅ Robusto frente a la caída de un proxy.
* ✅ Almacenamiento en caché automático (Retorno inmediato para solicitudes repetidas del mismo texto/idioma).

**Ejemplo de Uso:**

```
Resultado de Traducción = traducir [Hola] a [Inglés]
// Resultado: "Hello"

Resultado de Traducción = traducir [Hola] a [Japonés]
// Resultado: "こんにちは"

```

**Idiomas Soportados:**
Soporta más de 100 idiomas (Coreano, Inglés, Japonés, Chino, Francés, Español, etc.).

---

### 29. Detección de Video (Mejorada)

**Tecnología Principal:** Detección de Video del Escenario

**Características Existentes:**

* Detectar el movimiento de video en los sprites.
* Detectar la dirección de video en los sprites.
* Activar/desactivar el video.

**⭐ Características Recién Añadidas:**

#### Bloques de Detección de Video Mejorados

* Detección mejorada de movimiento y dirección de video tanto en los sprites como en el escenario.
* Control de transparencia del video (0-100%).
* Rendimiento optimizado para el procesamiento de video en tiempo real.

**Bloques Principales:**

* `video [ATTRIBUTE] en [SUBJECT]` - Obtener el movimiento o la dirección de video en un sprite o en el escenario.
* `activar video [VIDEO_STATE]` - Activar, desactivar o activar el video invertido.
* `establecer transparencia de video a [TRANSPARENCY]` - Establecer la transparencia del video (0-100%).

**Ejemplo de Uso:**

```
activar video [encendido]
establecer transparencia de video a 50
Si video [movimiento] en [este sprite] > 10 entonces
  Decir "¡Movimiento detectado!"
```

**Aplicaciones:**

* Juegos interactivos basados en el movimiento.
* Activadores por detección de movimiento para proyectos IoT.
* Arte y proyectos creativos basados en video.

---

### 24. Grabador de Bloques

**Tecnología Principal:** Blockly API + Event Listener

**Características:**

* Grabar y reproducir el proceso de ensamblaje de bloques de Scratch.
* Velocidad de reproducción ajustable (0.5x ~ 100x).
* Seguimiento del tiempo (Hora de inicio, Hora de fin, Tiempo total de grabación).

**Bloques Principales:**

* `Iniciar grabación de bloques`
* `Detener grabación de bloques`
* `Reproducir bloques grabados a [SPEED]`
* `Detener reproducción`
* `Reiniciar grabación`
* `Recuento de eventos grabados`

---

### 25. Clima en Tiempo Real

**Tecnología Principal:** Open-Meteo API

**Características:**

* Información del clima en tiempo real para ciudades de todo el mundo.
* Conversión Ciudad → Coordenadas vía Geocoding API.
* Temperatura, Humedad, Velocidad del Viento, Horas de Amanecer/Atardecer, etc.

**Bloques Principales:**

* `Obtener info del clima para [CITY]`
* `(info de temperatura [TEMP_TYPE])`
* `(info de atmósfera [ATMOS_TYPE])`
* `(otra info [ETC_TYPE])`

**Info de Temperatura:**

* Temp Actual (°C)
* Sensación Térmica (°C)
* Temp Mín (°C)
* Temp Máx (°C)

**Info de Atmósfera:**

* Descripción del Clima
* Humedad (%)
* Presión (hPa)
* Velocidad del Viento (m/s)
* Dirección del Viento (°)

**Otra Info:**

* Hora del Amanecer
* Hora del Atardecer
* Nombre de la Ubicación

---

## Canalización MLOps ⭐ NEW (v1.6)

Un flujo de trabajo de aprendizaje automático de extremo a extremo con 8 etapas que convierte a BrixelAI en una plataforma para enseñar el ciclo de vida completo del ML. Cada etapa es una extensión independiente; se comunican entre sí mediante un `runtime.brixelMLState` compartido (conjunto de datos actual, modelo actual, experimentos, modelos desplegados).

| Etapa | EXT ID | Función |
| --- | --- | --- |
| **1. Canalización de Datos** | `datapipeline` | Crear/limpiar conjuntos de datos tabulares, importar CSV, columnas de características |
| **2. Canalización de Medios** | `mediapipeline` | Crear conjuntos de datos de imagen/audio/cara/mano/pose desde la cámara o desde archivos |
| **3. AutoML** | `automl` | Selección y entrenamiento automáticos de modelos sobre un conjunto de datos |
| **4. Constructor de Redes Neuronales** | `nnbuilder` | Diseñar arquitecturas de redes neuronales capa por capa |
| **5. Seguimiento de Experimentos** | `exptracking` | Registrar ejecuciones, hiperparámetros y métricas para compararlos |
| **6. Evaluación de Modelos** | `modeleval` | Exactitud, matriz de confusión y métricas por clase mediante `model.predict()` |
| **7. IA Responsable** | `responsibleai` | Inspección de equidad/sesgo entre grupos |
| **8. Centro de Modelos** | `modelhub` | Compartir/descargar modelos entrenados (Firebase), serialización JSON ligera |

**Flujo:** Canalización de Medios/Datos → entrenar (AutoML / Constructor de Redes Neuronales / una extensión de entrenamiento) → `promover modelo a la canalización` → Evaluar → IA Responsable → publicar en el Centro de Modelos. Las extensiones de entrenamiento (Modelo de Imagen/Sonido/Texto, KNN, SVM, etc.) se conectan a esta canalización promoviendo su modelo entrenado a `currentModel`.

> Nota: El Centro de Modelos serializa únicamente los pesos/características del modelo (las miniaturas y los medios sin procesar pesados se eliminan al subirlos, para mantener ligeros los modelos compartidos).

---

## Resumen de Stack Tecnológico

**Comunicación IoT y Hardware:**

* Web Serial API
* Web Bluetooth API (BLE)
* WebSocket (ws:// / wss://)
* WebRTC P2P (Cámara del Móvil)
* Despachadores de firmware en modo en vivo (Arduino, ESP32-Arduino, micro:bit MakeCode) + grabación con esptool-js

**IA y Aprendizaje Automático:**

* Google Teachable Machine (Imagen/Pose/Audio)
* Web Speech API (Reconocimiento de Voz)
* Q-learning (Aprendizaje por Refuerzo)
* TensorFlow.js (Entrenamiento de modelos en el navegador)
* ml-svm (Clasificación SVM)

**Visión por Computadora:**

* MediaPipe (Manos, Malla Facial, Pose, EfficientDet)
* face-api.js (Reconocimiento Facial)
* PoseNet (Seguimiento de Personas)
* MobileNet + KNN (Clasificación de Imágenes)
* MyScript API (Reconocimiento de Escritura)

**Ciencia de Datos:**

* Chart.js (Visualización de Gráficos)
* jExcel (Hoja de Cálculo)
* K-Means, KNN, Regresión Lineal (Algoritmos integrados)

**APIs Externas:**

* Open-Meteo (Info del Clima)
* MyScript Cloud (Reconocimiento de Escritura)

---

### Desarrolladores de las Extensiones

* **Desarrollador Principal:** Kim Seok Jeon (Profesor de Informática en la Escuela Secundaria Songdo, Profesor Adjunto en la Universidad Inha, alphaco@naver.com)
* **Desarrollador Asistente:** Cho Ji-hoon (Profesor en la Escuela Secundaria Yeongdong)

### Licencia

Cada extensión sigue su propia licencia individual. Al usar bibliotecas externas, deben respetarse sus respectivas licencias.

### Compatibilidad del Navegador

La mayoría de las extensiones funcionan de manera óptima en los navegadores más recientes basados en Chromium (Chrome, Edge).
Web Serial API y Web Bluetooth API solo funcionan en entornos HTTPS.

---

## Consultas y Soporte

* **GitHub del Desarrollador:** [https://github.com/ai4coding](https://github.com/ai4coding)
* **Guía en YouTube:** [https://www.youtube.com/@VibeCoding](https://www.youtube.com/@VibeCoding)
* **Foro de Preguntas de Usuarios:** [https://ai4mcu.github.io/01_guide/notice_board.html](https://ai4mcu.github.io/01_guide/notice_board.html)
* **Project Hub:** [https://brixel.gorillacell.kr/](https://brixel.gorillacell.kr/)

---

## Historial de Actualizaciones

### Revisión de la documentación (2026-08-07)
- 🏷️ **Producto renombrado: `AI*Robot Scratch` → `BrixelAI` / `브릭셀AI`** (en los títulos de los cinco README)
- 📊 Se reemplazaron los recuentos de extensiones de la Visión General por **valores medidos** (antes «más de 70 bloques / 79 registradas» → 105 carpetas · 98 registradas · 96 tarjetas de la GUI, al 2026-08-07)
  - Los números cambian constantemente, por eso se incluye el **comando para contarlas tú mismo**
- 🌐 En las traducciones al japonés, español y chino **solo se actualizó el nombre del producto**: sus cuerpos siguen siendo la revisión del 2026-02-25, por lo que se añadió un aviso indicando que **no cubren la v1.6**
- 🧹 Se eliminó la nota en coreano que quedaba al inicio de cada traducción («제공해주신 README.md 파일의 …번역본입니다») y se reemplazó por enlaces de cambio de idioma

### v1.6 (2026-06-05)
- 🔌 **Placas de Hardware en Modo en Vivo añadidas** (NUEVO) — controla placas reales en vivo por Serial/Bluetooth
  - Rich Shield (Uno) `richshield`, Mega SuperRich `superrich`
  - micro:bit V2 + ma:bit Shield `microbitv2` (firmware MakeCode, grabación arrastrando el hex)
  - Kit Completo ESP32 `esp32fullset` (cableado libre con argumentos de pin, autograbación con esptool-js)
  - Patrón de despachador de firmware: la placa = ejecutor de comandos, la VM de Scratch = la lógica
  - Canal dual (Serial USB + BLE), reportero de la versión del firmware, handshake automático
- 📷 **Extensión Cámara del Móvil añadida** (NUEVO) `phonecam`
  - Inyecta la cámara del móvil en el escenario mediante WebRTC P2P (emparejamiento por QR, sala por estudiante)
  - Funciona automáticamente con todas las extensiones de visión IA (proveedor de video compartido + CameraManager)
  - Totalmente distribuido (1:1 móvil↔portátil) — seguro para un aula de 30 estudiantes
- 🧩 **Canalización MLOps añadida** (NUEVO) — flujo de trabajo de ML de extremo a extremo con 8 etapas
  - `datapipeline` → `mediapipeline` → `automl` → `nnbuilder` → `exptracking` → `modeleval` → `responsibleai` → `modelhub`
  - `runtime.brixelMLState` compartido; las extensiones de entrenamiento promueven sus modelos a la canalización
- 🖼️ **Modelo de Clasificación de Imágenes — Galería de Clases** (NUEVO)
  - Bloque `Ver galería de imágenes de clase`: explora las imágenes de cada clase (miniaturas de 96×96, modal a tamaño completo, descarga en JPG)
  - La subida al Centro de Modelos elimina las miniaturas para mantener ligeros los modelos compartidos
- 🤖 **Extensiones de IA ampliadas** — cara (características/identificación/expresión), mano (características/gestos), pose (características/aprendizaje), segmentación corporal, seguimiento de objetos, región de color, seguimiento de personas, brazo robótico de 6 ejes, QR/código de barras, etiqueta AR, visor de mapas, Google Gemini, LLM local, IFTTT, asistente BrixelAI
- 🔧 **Estabilización del firmware de micro:bit V2 (fw v0.7.x)**
  - Bloque de recuento de LED NeoPixel, notas musicales de MakeCode (protección ante conflicto con P0), eventos de sombrero, protección de la calibración de la brújula
  - Corrección del PWM de 1 kHz del ventilador + menú de dirección, autodetección de indicate en BLE NUS (manejo del intercambio TX/RX)
- Total de extensiones: 45 → 79 (incl. las integradas estándar de Scratch)

### v1.5 (2026-03-20)
- 🧠 **13 extensiones de entrenamiento de modelos de IA añadidas** (NUEVO)
  - Modelo de Clasificación de Imágenes (aprendizaje por transferencia con MobileNet v2)
  - Modelo de Clasificación de Sonido (FFT de Web Audio + MLP de TF.js)
  - Modelo de Clasificación de Texto (Bolsa de Palabras (BoW) + MLP)
  - Regresión Logística, Regresión Lineal, Regresión Polinomial
  - Clasificación KNN, Agrupamiento K-Means, SVM, Árbol de Decisión
  - Clonación de Comportamiento (Aprendizaje por Imitación)
  - Detección Facial (MediaPipe Face Detection)
- 📊 **Extensión de Ciencia de Datos mejorada**
  - Bloques reordenados por nivel de dificultad (L1-L8)
  - Análisis estadístico, preprocesamiento de datos, aprendizaje supervisado/no supervisado
  - Texto de los bloques mejorado para que sea más amigable con los estudiantes
- 🔧 **Correcciones de errores**
  - Corregido el error CORS en el Modelo de Clasificación de Imágenes (URL de MobileNet)
  - Corregida la integración del gestor de cámara (API de activar/desactivar)
  - Corregida la ruta CDN de MediaPipe Face Detection (errores 404)
  - Corregido el error de carga de modelo del Clasificador de Sonido (nombre de modelo indefinido)
  - Corregidas las entradas no editables de épocas/tasa de aprendizaje en Regresión Logística y en el Clasificador de Texto
- Total de extensiones: 32 → 45

### v1.4 (2026-03-14)
- 🖼️ **Extensión Clasificador de Imágenes IA añadida** (NUEVO)
  - Extracción de características con MobileNet v1 + clasificación KNN
  - Entrenamiento único y continuo, Guardar/Cargar datos de entrenamiento
  - Cambio entre cámara frontal/trasera, modo espejo
- 🔍 **Extensión Detector de Objetos IA añadida** (NUEVO)
  - Detección de los 80 objetos COCO basada en MediaPipe EfficientDet-Lite0
  - Superposición de cuadros delimitadores en el escenario de Scratch
  - Reporteros de posición/tamaño/confianza del objetivo, optimizado a 10 fps
- 🤚 **Extensión Mano Todo-en-Uno mejorada** (Aprendizaje de Gestos KNN)
  - Aprendizaje y reconocimiento de gestos personalizados basados en KNN (12 bloques nuevos)
  - Características de contexto de ambas manos para distinguir gestos
  - Guardar/Cargar datos de entrenamiento de gestos
- 🛣️ **Extensión de Reconocimiento de Carril mejorada**
  - Modo de seguimiento de línea añadido (seguimiento de una sola línea)
  - Bloques de velocidad del motor y ángulo de dirección añadidos
  - Reportero del número de carriles añadido
- 🌐 **Claves de traducción añadidas para todos los idiomas**
  - 92 nuevas claves de traducción en 85 archivos de idioma
- Total de extensiones: 29 → 32

### v1.3 (2026-02-25)
- 📖 **SPA de documentación de bloques de extensión**
  - Referencia interactiva de bloques en una sola página para las 29 extensiones
  - Imágenes de bloques (SVG) para cada bloque de cada extensión
  - Navegación por categorías (Comunicación, Reconocimiento IA, ML, Utilidades)
- 🌐 **Soporte bilingüe coreano/inglés**
  - Alternador de idioma (한/영) en la SPA de documentación
  - Traducción completa de todas las descripciones de extensiones y nombres de bloques
- 🗣️ **Extensión BrixelAI TTS añadida**
  - Síntesis de voz IA de alta calidad mediante un agente local
  - 23 idiomas, más de 5 tipos de voz, pregeneración basada en ranuras
- 🎥 **Extensión de Detección de Video añadida** (Mejorada)
  - Bloques mejorados de detección de movimiento/dirección de video
  - Control de la transparencia del video del escenario
- 🤖 **Metadatos de IA V3 — Análisis de proyectos con IA**
  - Estructura de árbol de bloques recursiva en ai_metadata.json incrustado en los archivos .sb3
  - Propiedades completas de sprites, disfraces, sonidos y comentarios
  - Análisis de interacciones (pares en contacto, variables compartidas, flujos de mensajes)
  - Permite que la IA (p. ej., ChatGPT, Claude) comprenda y analice por completo los proyectos de Scratch
  - La IA puede revisar el código, sugerir mejoras y explicar la lógica del proyecto a partir de los metadatos
- 🔗 **URL de marca actualizada**
  - Enlace del sitio principal cambiado a brixel.gorillacell.kr
- Total de extensiones: 27 → 29 → 32

### v1.2 (2026-01-12)
- 🔄 **Compatibilidad de proyectos mejorada significativamente**
  - Soporte para cargar archivos (.sb3) guardados desde el Scratch original
  - Soporte para cargar archivos de proyecto que usan bloques de versiones antiguas
  - Los bloques faltantes (bloques de extensión no soportados) se muestran en rojo para identificarlos fácilmente
- 🎬 **Mejoras del Grabador de Bloques**
  - Proceso de reproducción de bloques más fluido (optimización de la animación)
  - Estabilidad mejorada durante la creación y conexión de bloques
- 📷 **Mejoras de la cámara inalámbrica ESP32-CAM**
  - Mayor comodidad para el uso de la cámara inalámbrica en aplicaciones de control remoto (autos RC, etc.)
  - Soporte de modo de volteo/espejo de imagen
- 🛠️ **Otras mejoras**
  - Soporte multilingüe ampliado
  - Mejoras generales de estabilidad y rendimiento

### v1.1 (2026-01-02)

* ⭐ Añadida la Mejora de la Extensión Lápiz
* Función de dibujo directo basado en coordenadas (Punto, Línea, Cálculo de Ángulo)
* Función de visualización de radar (Para sensores ultrasónicos)


* ⭐ Añadida la Mejora de la Extensión Traducir
* Estrategia de Conmutación por Error Multi-Proxy
* Tasa de éxito y estabilidad de la traducción significativamente mejoradas


* Número total de extensiones: 25 → 27

### v1.0 (2026-01-02)

* Documentación de 25 bloques de extensión recién añadidos
* Categorización y descripciones detalladas
* Ejemplos de uso y resumen del stack tecnológico

---

**Versión del Documento:** 1.6
**Última Modificación:** 2026-06-05
**Autor:** Kim Seok Jeon (con la ayuda de Gemini y Claude)
