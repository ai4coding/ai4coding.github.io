제공해주신 `README.md` 파일의 스페인어 번역본입니다.

---

# Guía de Nuevos Bloques de Extensión para AI*Robot Scratch

> **Fecha:** 2026-02-25
> **Objetivo:** Bloques de extensión personalizados basados en Scratch 3.0

---

## Tabla de Contenidos

1. [Visión General](#visión-general)
2. [Comunicación IoT y Hardware](#comunicación-iot-y-hardware)
3. [IA y Aprendizaje Automático](#ia-y-aprendizaje-automático)
4. [Visión por Computadora y Reconocimiento](#visión-por-computadora-y-reconocimiento)
5. [Ciencia de Datos y Visualización](#ciencia-de-datos-y-visualización)
6. [Mejoras en Extensiones Existentes](#mejoras-en-extensiones-existentes) ⭐ NUEVO
7. [Utilidades y Otros](#utilidades-y-otros)
8. [Lista Completa de Extensiones](#lista-completa-de-extensiones)

---

## Visión General

Este documento describe las funciones de **45 bloques de extensión** que han sido recién añadidos o mejorados en la VM de Scratch.

**Composición de la Extensión:**

* ✨ **Recién Añadidos:** 42 (IoT, IA, Visión por Computadora, Ciencia de Datos, TTS, etc.)
* ⭐ **Mejoras Existentes:** 3 (Lápiz, Traducir, Detección de Video)

## Lista Completa de Extensiones

| Nº | ID EXT | Nombre de Extensión | Categoría | Tec. Principal | Estado |
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
| 21 | `lanerecognition` | Visión Conducción Autónoma | Control | Visión Comp. + PID | Nuevo |
| 22 | `handwriting` | Reconocimiento Escritura | IA | MyScript API | Nuevo |
| 23 | `datascience` | Ciencia de Datos | Ciencia de Datos | jExcel + Chart.js | Nuevo |
| 24 | `esp32cam` | Video ESP32-CAM | Com. IoT | WebSocket + Python | Nuevo |
| 25 | `colorsensing` | Detección de Color Inteligente | Visión Comp. | Webcam + Análisis Color | Nuevo |
| 26 | `chatterboxtts` | BrixelAI TTS | IA | Agente TTS Local + Multi-Voz | Nuevo |
| 27 | `pen` | Lápiz (Dibujo + Radar) | Gráfico | Renderizado Canvas | ⭐ Mejorado |
| 28 | `translate` | Traducir (Multi-Proxy) | Utilidad | Google Translate + Proxy | ⭐ Mejorado |
| 29 | `videoSensing` | Detección de Video (Mejorada) | Visión Comp. | Stage Video Detection | ⭐ Mejorado |
| 30 | `imageclassifier` | Clasificador de Imágenes AI | IA & Visión Comp. | MobileNet + KNN | Nuevo |
| 31 | `objectdetector` | Detector de Objetos AI | Visión Comp. | MediaPipe EfficientDet | Nuevo |
| 32 | `allinonehand` | Mano Todo-en-Uno (KNN Gestos) | IA & Visión Comp. | MediaPipe + KNN | ⭐ Mejorado |
| 33 | `faceSensing` | Detección Facial | Visión Comp. | MediaPipe Face Detection | Nuevo |
| 34 | `imageModel` | Entrenamiento Clasificación Imágenes | IA & ML | MobileNet v2 + TF.js | Nuevo |
| 35 | `soundclassifier` | Entrenamiento Clasificación Sonido | IA & ML | Web Audio FFT + TF.js | Nuevo |
| 36 | `textclassifier` | Entrenamiento Clasificación Texto | IA & ML | BoW + TF.js MLP | Nuevo |
| 37 | `logisticregression` | Entrenamiento Regresión Logística | IA & ML | Sigmoid + TF.js | Nuevo |
| 38 | `linearregression` | Entrenamiento Regresión Lineal | IA & ML | Mínimos Cuadrados | Nuevo |
| 39 | `polynomialregression` | Entrenamiento Regresión Polinomial | IA & ML | Ajuste Polinomial + TF.js | Nuevo |
| 40 | `knn` | Entrenamiento Clasificación KNN | IA & ML | Clasificación por Distancia | Nuevo |
| 41 | `kmeans` | Entrenamiento Clustering K-Means | IA & ML | Clustering por Centroides | Nuevo |
| 42 | `svm` | Entrenamiento Clasificación SVM | IA & ML | Kernel Linear/RBF + ml-svm | Nuevo |
| 43 | `decisiontree` | Entrenamiento Árbol de Decisión | IA & ML | Clasificación por Árbol | Nuevo |
| 44 | `behaviorcloning` | Entrenamiento Clonación Comportamiento | IA & ML | Aprendizaje Imitación + TF.js | Nuevo |
| 45 | `datascience` | Ciencia de Datos (Mejorada) | Ciencia de Datos | jExcel + Algoritmos ML | ⭐ Mejorado |

---

## Comunicación IoT y Hardware

### 1. Web Serial

**Tecnología Principal:** Web Serial API

**Características:**

* Comunicación por cable con dispositivos seriales como Arduino, Micro:bit, etc.
* Modo de Envío: Enviar una vez, Enviar continuamente, Enviar en formato Nombre:Valor.
* Modo de Recepción: Analizar por salto de línea, Analizar por coma.
* Configuración de tasa de baudios (9600 ~ 115200 baudios).
* Prevención de transmisión de datos duplicados, Limitación/Throttling (30ms).

**Bloques Principales:**

* `Conectar Web Serial`
* `Enviar [TEXTO] una vez (con salto de línea)`
* `Enviar [TEXTO] continuamente`
* `Datos recibidos (leer una línea)`
* `Dividir datos recibidos por [DELIMITADOR]`

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

* `Conectar a dispositivo [TIPO_DISPOSITIVO] (Predeterminado)`
* `Conectar dispositivo con Servicio UUID [SERVICIO] TX [TX] RX [RX]`
* `¿Está conectado el Bluetooth?`
* `Enviar Nombre [ETIQUETA] : Valor [VALOR] continuamente`

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

* `Conectar a dispositivo WiFi en [IP]:[PUERTO]`
* `Conectar de forma segura [PROTOCOLO] [DIRECCIÓN]`
* `Enviar [DATOS] (Raw) continuamente (sin salto de línea)`
* `Enviar [NUM_CAMPOS] variables continuamente: [DATOS]`

**Ejemplo de Uso:**

```
Conectar a dispositivo WiFi en 192.168.1.10:8080
Enviar 3 variables continuamente: 100, 200, 300

```

---

### 4. Video ESP32-CAM

**Tecnología Principal:** WebSocket + Puente Python

**Características:**

* Mostrar transmisión de video ESP32-CAM en tiempo real en el escenario de Scratch.
* Comunicación WebSocket a través de un programa puente local en Python.
* Funciones de inversión de imagen (espejo) y guardado de instantáneas.

**Bloques Principales:**

* `Abrir sitio de descarga del programa puente`
* `Conectar al agente ESP32-CAM`
* `Mostrar video ESP32-CAM [ENCENDIDO_APAGADO]`
* `Guardar instantánea de ESP32-CAM`

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
* `Cambiar umbral a [UMBRAL]`
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

* Clasificación basada en poses corporales (ej. Levantar mano, Sentarse, Pararse).
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
Cambiar URL del modelo a [URL_MODELO]
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
* Soporte multilingüe (Coreano, Inglés, Japonés, Chino, Español, etc.).
* Análisis de sentimientos (Positivo/Negativo/Neutral).

**Bloques Principales:**

* `establecer idioma a [IDIOMA]`
* `iniciar reconocimiento de voz`
* `texto reconocido`
* `último comando`
* `velocidad detectada (0-100)`
* `ángulo detectado (grados)`
* `< ¿contiene la palabra clave [PALABRA]? >`
* `(sentimiento)`

**Ejemplo de Uso:**

```
establecer idioma a [es-ES]
iniciar reconocimiento de voz
Si (último comando) = [adelante] entonces
  Mover adelante a velocidad (velocidad detectada)

```

---

### 9. Conducción Autónoma por Aprendizaje por Refuerzo (RL)

**Tecnología Principal:** Algoritmo Q-learning

**Características:**

* Implementación de IA de conducción autónoma basada en Q-learning.
* Discretización de entrada de sensores (modos de 3 sensores/6 sensores).
* Controlador PID integrado.
* Parámetros de aprendizaje ajustables (Tasa de Aprendizaje, Tasa de Exploración, Factor de Descuento).
* Guardar/Cargar Tabla-Q (JSON).

**Bloques Principales:**

* `Configurar Cerebro IA: Alpha [ALPHA] Epsilon [EPSILON] Gamma [GAMMA]`
* `Convertir matriz de sensores [SENSORES] a patrón de 3 sensores`
* `Q-learning: Estado [ESTADO] Acción [ACCIÓN] Recompensa [RECOMPENSA] Siguiente Estado [SIGUIENTE_ESTADO]`
* `Obtener Mejor Acción: Estado [ESTADO]`
* `Guardar Tabla-Q (Descargar)`
* `Cargar Tabla-Q [JSON]`

**Ejemplo de Uso:**

```
Configurar Cerebro IA: Alpha 0.1 Epsilon 0.2 Gamma 0.9
Valor Sensor = Convertir matriz de sensores [100,50,30] a patrón de 3 sensores
Acción = Obtener Mejor Acción: Estado (Valor Sensor)
Q-learning: Estado (Valor Sensor) Acción (Acción) Recompensa 10 Siguiente Estado (Siguiente Valor Sensor)

```

---

## Visión por Computadora y Reconocimiento

### 10. Reconocimiento Facial

**Tecnología Principal:** face-api.js

**Características:**

* Registro y reconocimiento facial (coincidencia 1:N).
* Extracción de vectores de características faciales.
* Guardar caras registradas en almacenamiento local.
* Reconocimiento en tiempo real (5 FPS).

**Bloques Principales:**

* `Encender cámara`
* `Registrar cara con nombre [NOMBRE]`
* `Iniciar reconocimiento facial`
* `Nombre de cara reconocida`
* `Precisión de reconocimiento facial (%)`

---

### 11. Conteo de Dedos

**Tecnología Principal:** MediaPipe Hands

**Características:**

* Cuenta dedos en ambas manos.
* Detección independiente de manos Izquierda/Derecha.
* Renderizado de esqueleto de mano en tiempo real.

**Bloques Principales:**

* `Encender cámara`
* `Iniciar reconocimiento de manos`
* `Mostrar esqueleto de mano`
* `Conteo de dedos mano izquierda`
* `Conteo de dedos mano derecha`
* `Conteo total de dedos`

---

### 12. Seguimiento de Manos

**Tecnología Principal:** MediaPipe Hands (21 puntos)

**Características:**

* Rastrea 21 coordenadas de puntos de referencia de la mano.
* Distingue entre manos Izquierda/Derecha.
* Precisión ajustable (0.1 ~ 0.9).

**Bloques Principales:**

* `Encender cámara`
* `Iniciar seguimiento de manos`
* `Cambiar precisión de reconocimiento a [CONFIANZA]`
* `Coordenada X de [PUNTO] en Mano Izquierda`
* `Coordenada Y de [PUNTO] en Mano Izquierda`

---

### 13. Seguimiento Facial

**Tecnología Principal:** MediaPipe Face Mesh (468 puntos)

**Características:**

* Rastrea 468 puntos de referencia de la malla facial.
* Acceso a coordenadas por 5 rangos (0-100, 101-200, 201-300, 301-400, 401-477).
* Visualización de malla facial.

**Bloques Principales:**

* `Encender cámara`
* `Iniciar seguimiento facial`
* `Mostrar malla facial`
* `Coordenada X del [N]º punto en rango [0-100]`

---

### 14. Seguimiento de Pose

**Tecnología Principal:** MediaPipe Pose (33 puntos)

**Características:**

* Rastrea 33 puntos de referencia corporales (ojos, brazos, piernas, puntas de dedos, etc.).
* Calcula ángulos de articulaciones (codos, rodillas, etc.).
* Corrección de modo espejo (inversión Izquierda/Derecha).

**Bloques Principales:**

* `Encender cámara`
* `Iniciar seguimiento corporal`
* `Coordenada X de [PUNTO]`
* `Coordenada Y de [PUNTO]`
* `Ángulo del codo izquierdo (grados)`
* `Ángulo de la rodilla derecha (grados)`

---

### 15. Mano Todo-en-Uno

**Tecnología Principal:** MediaPipe Hands + Algoritmo de Gestos + Clasificación KNN

**Características:**

* Conteo de dedos integrado, Piedra-Papel-Tijera y reconocimiento de gestos.
* Tipos de gestos: Pulgar Arriba, Signo OK, Corazón con Dedos, V (Paz), Puño, Palma, Pellizco.
* Visualización de esqueleto de mano.

**Bloques Principales:**

* `Encender cámara`
* `Iniciar reconocimiento de manos`
* `< ¿Está haciendo el gesto [GESTO]? >`
* `Forma de la mano (Piedra/Papel/Tijera)`
* `Conteo de dedos`

**⭐ Bloques de Aprendizaje de Gestos KNN (12 bloques):**

* `KNN Entrenar gesto como [LABEL]` — Añadir una muestra al KNN
* `KNN Iniciar reconocimiento de gestos` / `KNN Detener reconocimiento`
* `KNN Eliminar datos de [LABEL]` / `KNN Borrar todos los datos`
* `KNN Gesto reconocido` / `KNN Confianza del reconocimiento`
* `KNN Cantidad datos de [LABEL]` / `KNN Lista de gestos`
* `Cuando KNN reconoce gesto como [LABEL]` — Bloque HAT
* `KNN Guardar datos` / `KNN Cargar datos`

---

### 16. Cara Todo-en-Uno

**Tecnología Principal:** MediaPipe Face Mesh + Cálculo de Métricas

**Características:**

* Detección facial, coordenadas de Glabela (entre ojos), medición del tamaño de apertura de la boca.
* Detección de parpadeo (Izquierdo/Derecho independiente).
* Medición del tamaño de la cara (ancho/alto).

**Bloques Principales:**

* `Encender cámara`
* `Mostrar malla facial`
* `< ¿Se detecta cara? >`
* `Cantidad de caras`
* `Glabela X`, `Glabela Y`
* `Tamaño de apertura de boca`
* `< ¿Parpadeó ojo izquierdo? >`
* `Cambiar sensibilidad de parpadeo a [UMBRAL]`

---

### 17. Seguimiento de Personas

**Tecnología Principal:** PoseNet + Coincidencia de Pose

**Características:**

* Aprender y reconocer múltiples poses por persona.
* Coincidencia 1:N basada en similitud de pose.
* Devuelve ubicación y tamaño de la persona.

**Bloques Principales:**

* `Encender cámara`
* `Registrar persona [NOMBRE]`
* `Añadir pose a la persona actual`
* `Nombre de persona reconocida`
* `Precisión de persona reconocida (%)`
* `Coordenada X de persona reconocida`

---

### 18. Visión de Conducción Autónoma (Reconocimiento de Carril)

**Tecnología Principal:** Visión por Computadora + Control PID

**Características:**

* Seguimiento de carril y línea (Líneas Negras/Blancas).
* Detección de carril dual y trazado de línea.
* Calcula el valor de error de línea y el desplazamiento del centro del carril.
* Controlador PID integrado (Calcula valor de dirección).
* Control de velocidad de motor y ángulo de dirección.
* Conteo de carriles y superposición visual.

**Bloques Principales (22 bloques):**

* `Encender cámara`
* `Iniciar procesamiento de imagen`
* `Cambiar color de línea a [COLOR]`
* `Cambiar umbral de línea a [UMBRAL]`
* `Valor de error de línea`
* `Desplazamiento del centro del carril`
* `Calcular valor de dirección PID`
* `Velocidad de motor` / `Ángulo de dirección`
* `Conteo de carriles` / `Superposición de carril`
* `Trazado de línea` / `Detección de carril dual`

**Ejemplo de Uso:**

```
Encender cámara
Cambiar color de línea a [Negro]
Iniciar procesamiento de imagen
Valor Dirección = Calcular valor de dirección PID
Establecer velocidad motor a (100 + Valor Dirección)

```

---

### 19. Reconocimiento de Escritura a Mano

**Tecnología Principal:** MyScript API + MediaPipe Hand Tracking

**Características:**

* Entrada de escritura a mano vía mouse o seguimiento de dedo (dedo índice).
* Reconocimiento de inglés vía MyScript Cloud API.
* Clave API personal configurable.

**Bloques Principales:**

* `Activar modo escritura (Método de entrada: [MODO])`
* `Empezar a escribir`
* `Dejar de escribir`
* `Borrar escritura`
* `Reconocer texto`
* `Resultado del reconocimiento`

---

### 20. Detección de Color Inteligente

**Tecnología Principal:** Webcam + Análisis de Color

**Características:**

* Detección de color en tiempo real (148 nombres de colores CSS).
* Modos de reconocimiento: Centro Fijo / Seguimiento de Mouse.
* Devuelve valores RGB y HEX.

**Bloques Principales:**

* `Encender cámara`
* `Iniciar reconocimiento de color`
* `Cambiar modo de reconocimiento a [MODO]`
* `Nombre de color reconocido`
* `Código HEX de color reconocido`
* `Valor Rojo (0-255)`

---

### 30. Clasificador de Imágenes AI (Image Classifier)

**Tecnología Principal:** MobileNet v1 + Clasificación KNN (ml5.js)

**Características:**

* Aprendizaje de clasificación de imágenes en tiempo real con webcam.
* Modos de entrenamiento único y continuo.
* Guardar/Cargar datos de entrenamiento JSON.
* Cambio de cámara frontal/trasera, modo espejo.

**Bloques Principales (28 bloques):**

* Encender/Apagar cámara, Cargar modelo MobileNet.
* KNN entrenamiento, reconocimiento, resultados.
* Guardar/Cargar, cambio de cámara/espejo.

---

### 31. Detector de Objetos AI (Object Detector)

**Tecnología Principal:** MediaPipe EfficientDet-Lite0 (COCO 80)

**Características:**

* Detección en tiempo real de 80 categorías COCO.
* Superposición de cuadros delimitadores en el escenario.
* Controles de seguimiento de objetos.
* Posición, tamaño y confianza del objetivo.
* Inferencia limitada a 10fps para optimización.

**Bloques Principales (30 bloques):**

* Cámara, modelo, lista COCO.
* Seguimiento, umbral, detección.
* Objetivo: nombre/coordenadas/tamaño/confianza.
* Conteo, lista, estados booleanos.

---

## Ciencia de Datos y Visualización

### 21. Visualización de Datos

**Tecnología Principal:** Chart.js + Ventana Emergente

**Características:**

* Visualización de gráficos de datos en tiempo real (Gráfico de Líneas).
* Muestra el gráfico en una ventana emergente separada.
* Descarga de datos CSV.
* Intervalo de transmisión de datos ajustable (Modo Normal/Rápido).

**Bloques Principales:**

* `Abrir ventana de gráfico`
* `Iniciar transmisión de datos`
* `Cambiar nombre de Serie 1 a [NOMBRE]`
* `Enviar valor [VALOR] a Serie 1`
* `Detener transmisión de datos`
* `Cerrar ventana de gráfico`

---

### 22. Ciencia de Datos

**Tecnología Principal:** jExcel + Chart.js

**Características:**

* Gestión de datos basada en hojas de cálculo (Ventana emergente).
* Entrada y edición de datos en tiempo real.
* Visualización de gráficos (Barras/Líneas/Pastel).
* Exportación a CSV.

**Bloques Principales:**

* `Abrir Mesa de Trabajo de Datos`
* `Añadir Filas: [A], [B], [C]`
* `Establecer Valor de Celda: Col [X] Fila [Y] = [VALOR]`
* `Cargar todos los datos`
* `Cerrar Mesa de Trabajo`

---

### 26. BrixelAI TTS (Texto a Voz)

**Tecnología Principal:** Agente TTS Local + Motor Multi-Voz

**Características:**

* Síntesis de voz AI de alta calidad a través de un agente local.
* 23 idiomas soportados (Coreano, Inglés, Japonés, Chino, Francés, Alemán, etc.).
* 5 tipos de voz predeterminados (Mujer A/B, Hombre A/B, Niño) + voces adicionales del agente.
* Pre-generación basada en ranuras para reproducción instantánea sin demora.
* Control de voz: Pausar, Reanudar, Detener.

**Bloques Principales:**

* `Descargar Agente (Win/Mac)` - Descargar el agente local BrixelAI TTS.
* `Conectar Agente (Puerto [PORT])` - Conectar al agente TTS (puerto predeterminado: 9000).
* `Establecer idioma a [LANG]` - Establecer idioma TTS (23 idiomas).
* `Establecer voz a [VOICE]` - Seleccionar tipo de voz.
* `Decir [TEXT] y esperar` - Hablar texto y esperar hasta finalizar.
* `Generar [TEXT] en ranura [SLOT]` - Pre-generar voz en ranura para reproducción instantánea.
* `Reproducir ranura [SLOT]` - Reproducir voz de ranura pre-generada.

**Aplicaciones:**

* Narración interactiva con voces AI.
* Aprendizaje de pronunciación multilingüe.
* Funciones de accesibilidad para usuarios con discapacidad visual.
* Retroalimentación de voz para dispositivos IoT.

---

## Mejoras en Extensiones Existentes

### 27. Lápiz

**Tecnología Principal:** Renderizado Canvas

**Características Existentes:**

* Bajar/Subir lápiz.
* Establecer color/tamaño de lápiz.
* Estampar.
* Borrar Todo.

**⭐ Características Recién Añadidas:**

#### 1. Dibujo Directo Basado en Coordenadas

Dibuja directamente usando coordenadas sin mover el objeto (sprite).

**Bloques Principales:**

* `dibujar punto en x:[X] y:[Y]` - Dibuja un punto en coordenadas específicas.
* `dibujar línea de x1:[X1] y1:[Y1] a x2:[X2] y2:[Y2]` - Dibuja una línea entre dos puntos.
* `dibujar ángulo x1:[X1] y1:[Y1] x2:[X2] y2:[Y2] x3:[X3] y3:[Y3] guardar en ranura:[RANURA]` - Conecta tres puntos para dibujar líneas y calcula/guarda el ángulo (Ranuras 1-6).
* `ángulo de ranura:[RANURA]` - Devuelve el valor del ángulo guardado.

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

* `iniciar radar centro x:[CX] y:[CY] distancia máx:[DIST_MAX] rango ángulo:[RANGO_ANGULO]` - Inicializar radar.
* `radar mapear valor de [VAL_MIN] a [VAL_MAX]` - Establecer mapeo de rango de valor del sensor.
* `radar dibujar en ángulo:[ANGULO] distancia:[DISTANCIA]` - Dibujar línea de radar (Verde para área detectada, Rojo para el resto).
* `radar desvanecer por [CANTIDAD]%` - Efecto de desvanecimiento de radar (Efecto de imagen residual).

**Ejemplo de Uso:**

```
Borrar todo
iniciar radar centro x:0 y:0 distancia máx:180 rango ángulo:180
radar mapear valor de 0 a 400

// Cuando el valor del sensor es 100 (a 0 grados)
radar dibujar en ángulo:0 distancia:100

// Desenfocar líneas de radar anteriores con efecto de desvanecimiento
radar desvanecer por 5%

```

**Aplicaciones:**

* Visualización de sensor ultrasónico (Arduino, Micro:bit).
* Visualización de sensor LiDAR.
* Visualización de detección de obstáculos para robots autónomos.

**Reglas de Color del Radar:**

* **Verde:** Hasta la distancia detectada por el sensor.
* **Rojo:** Desde la distancia detectada hasta la distancia máxima (Sin obstáculo).

---

### 28. Traducir

**Tecnología Principal:** Google Translate API + Multi-Proxy

**Características Existentes:**

* Traducir texto a varios idiomas.
* Detectar idioma actual del proyecto.

**⭐ Características Recién Añadidas:**

#### Estrategia de Conmutación por Error Multi-Proxy

**Problema:**

* Anteriormente: Usaba un solo proxy → La traducción fallaba si ese proxy caía.
* Acceso directo bloqueado debido a política CORS.

**Solución:**

* Intentar secuencialmente 3 proxies CORS.
* Estrategia de Fallo Rápido (4 segundos de tiempo de espera por proxy).
* Intentar automáticamente el siguiente proxy si uno falla.

**Orden de Proxy:**

1. **corsproxy.io** - Más rápido (Intento primario)
2. **allorigins.win** - Estable (Respaldo secundario)
3. **codetabs.com** - Respaldo final

**Bloques Principales:**

* `traducir [PALABRAS] a [IDIOMA]` - Traducir texto (Estabilidad mejorada).
* `idioma` - Idioma actual del proyecto.

**Mejoras:**

* ✅ Eliminado Punto Único de Fallo.
* ✅ Tasa de éxito de traducción significativamente mejorada.
* ✅ Robusto contra tiempo de inactividad del proxy.
* ✅ Almacenamiento en caché automático (Retorno inmediato para solicitudes repetidas del mismo texto/idioma).

**Ejemplo de Uso:**

```
Resultado Traducción = traducir [Hola] a [Inglés]
// Resultado: "Hello"

Resultado Traducción = traducir [Hello] a [Japonés]
// Resultado: "こんにちは"

```

**Idiomas Soportados:**
Soporta más de 100 idiomas (Coreano, Inglés, Japonés, Chino, Francés, Español, etc.).

---

### 29. Detección de Video (Video Sensing) - Mejorada

**Tecnología Principal:** Stage Video Detection

**Características Existentes:**

* Detectar movimiento de video en sprites.
* Detectar dirección de video en sprites.
* Activar/desactivar video.

**⭐ Características Recién Añadidas:**

#### Bloques de Detección de Video Mejorados

* Detección mejorada de movimiento/dirección de video tanto en sprites como en el escenario.
* Control de transparencia de video (0-100%).
* Rendimiento optimizado para procesamiento de video en tiempo real.

**Bloques Principales:**

* `video [ATRIBUTO] en [SUJETO]` - Obtener movimiento o dirección de video en un sprite o escenario.
* `activar video [ESTADO]` - Activar, desactivar o activar video invertido.
* `establecer transparencia de video a [TRANSPARENCIA]` - Establecer transparencia de video (0-100%).

**Ejemplo de Uso:**

```
activar video [encendido]
establecer transparencia de video a 50
Si video [movimiento] en [este sprite] > 10 entonces
  Decir "¡Movimiento detectado!"
```

**Aplicaciones:**

* Juegos interactivos basados en movimiento.
* Activadores de detección de movimiento para proyectos IoT.
* Arte y proyectos creativos basados en video.

---

### 23. Grabador de Bloques

**Tecnología Principal:** Blockly API + Event Listener

**Características:**

* Grabar y reproducir el proceso de ensamblaje de bloques de Scratch.
* Velocidad de reproducción ajustable (0.5x ~ 100x).
* Seguimiento de tiempo (Hora inicio, Hora fin, Tiempo total de grabación).

**Bloques Principales:**

* `Iniciar grabación de bloques`
* `Detener grabación de bloques`
* `Reproducir bloques grabados a [VELOCIDAD]`
* `Detener reproducción`
* `Reiniciar grabación`
* `Recuento de eventos grabados`

---

### 24. Clima en Tiempo Real

**Tecnología Principal:** Open-Meteo API

**Características:**

* Información del clima en tiempo real para ciudades de todo el mundo.
* Conversión Ciudad → Coordenada vía Geocoding API.
* Temperatura, Humedad, Velocidad del Viento, Horas de Amanecer/Atardecer, etc.

**Bloques Principales:**

* `Obtener info del clima para [CIUDAD]`
* `(info de temperatura [TIPO_TEMP])`
* `(info de atmósfera [TIPO_ATMOS])`
* `(otra info [TIPO_OTRO])`

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

* Hora Amanecer
* Hora Atardecer
* Nombre de Ubicación

---

## Resumen de Stack Tecnológico

**Comunicación IoT y Hardware:**

* Web Serial API
* Web Bluetooth API (BLE)
* WebSocket (ws:// / wss://)

**IA y Aprendizaje Automático:**

* Google Teachable Machine (Imagen/Pose/Audio)
* Web Speech API (Reconocimiento de Voz)
* Q-learning (Aprendizaje por Refuerzo)
* MobileNet + KNN (Clasificación de Imágenes)
* TensorFlow.js (Entrenamiento de modelos en navegador)
* ml-svm (Clasificación SVM)

**Visión por Computadora:**

* MediaPipe (Manos, Malla Facial, Pose)
* MediaPipe EfficientDet (Detección de Objetos)
* face-api.js (Reconocimiento Facial)
* PoseNet (Seguimiento de Personas)
* MyScript API (Reconocimiento de Escritura)

**Ciencia de Datos:**

* Chart.js (Visualización de Gráficos)
* jExcel (Hoja de Cálculo)

**APIs Externas:**

* Open-Meteo (Info del Clima)
* MyScript Cloud (Reconocimiento de Escritura)

---

### Desarrolladores de la Extensión

* **Desarrollador Principal:** Kim Seok Jeon (Profesor de Informática en Escuela Secundaria Songdo, Profesor Adjunto en Universidad Inha, alphaco@naver.com)
* **Desarrollador Asistente:** Cho Ji-hoon (Profesor en Escuela Secundaria Yeongdong)

### Licencia

Cada extensión sigue su propia licencia individual. Al usar bibliotecas externas, deben observarse sus respectivas licencias.

### Compatibilidad del Navegador

La mayoría de las extensiones operan de manera óptima en los navegadores más recientes basados en Chromium (Chrome, Edge).
Web Serial API y Web Bluetooth API solo funcionan en entornos HTTPS.

---

## Consultas y Soporte

* **GitHub del Desarrollador:** [https://github.com/ai4coding](https://github.com/ai4coding)
* **Guía en YouTube:** [https://www.youtube.com/@VibeCoding](https://www.youtube.com/@VibeCoding)
* **Tablón de PyR de Usuarios:** [https://ai4mcu.github.io/01_guide/notice_board.html](https://ai4mcu.github.io/01_guide/notice_board.html)
* **Project Hub:** [https://brixel.gorillacell.kr/](https://brixel.gorillacell.kr/)

---

## Historial de Actualizaciones

### v1.5 (2026-03-20)
- 🧠 **13 Extensiones de Entrenamiento de Modelos AI Añadidas** (NUEVO)
  - Entrenamiento Clasificación de Imágenes (MobileNet v2 transfer learning)
  - Entrenamiento Clasificación de Sonido (Web Audio FFT + TF.js MLP)
  - Entrenamiento Clasificación de Texto (Bag of Words + MLP)
  - Regresión Logística, Lineal, Polinomial
  - Clasificación KNN, Clustering K-Means, SVM, Árbol de Decisión
  - Clonación de Comportamiento (Aprendizaje por Imitación)
  - Detección Facial (MediaPipe Face Detection)
- 📊 **Extensión Ciencia de Datos Mejorada**
  - Bloques reordenados por nivel de dificultad (L1-L8)
  - Bloques de análisis estadístico, preprocesamiento, aprendizaje supervisado/no supervisado
  - Texto de bloques mejorado para estudiantes
- 🔧 **Correcciones de Errores**
  - Error CORS en modelo de clasificación de imágenes corregido
  - Integración de gestor de cámara corregida
  - Ruta CDN de detección facial MediaPipe corregida
  - Error de carga de modelo en clasificador de sonido corregido
  - Entradas de épocas/tasa de aprendizaje en regresión logística/clasificador de texto corregidas
- Total de extensiones: 32 → 45

### v1.4 (2026-03-14)
- 🖼️ **Extensión Clasificador de Imágenes AI Añadida** (NUEVO)
  - MobileNet v1 + clasificación KNN
  - Entrenamiento único/continuo, Guardar/Cargar datos
- 🔍 **Extensión Detector de Objetos AI Añadida** (NUEVO)
  - MediaPipe EfficientDet-Lite0 detección COCO 80
  - Superposición de cuadros delimitadores, 10fps optimizado
- 🤚 **Extensión Mano Todo-en-Uno Mejorada** (Aprendizaje de Gestos KNN, 12 bloques nuevos)
- 🛣️ **Extensión Reconocimiento de Carril Mejorada** (seguimiento de línea, velocidad motor, ángulo dirección)
- 🌐 **Claves de Traducción para Todos los Idiomas** (92 claves en 85 archivos)
- Total de extensiones: 29 → 32

### v1.3 (2026-02-25)
- 📖 **Documentación SPA de Bloques de Extensión**
  - Referencia interactiva de una sola página para los bloques de las 29 extensiones
  - Imágenes de bloques (SVG) para cada bloque en cada extensión
  - Navegación por categorías (Comunicación, Reconocimiento IA, ML, Utilidades)
- 🌐 **Soporte Bilingüe Coreano/Inglés**
  - Alternador de idioma (한/영) en la documentación SPA
  - Traducción completa de todas las descripciones de extensiones y nombres de bloques
- 🗣️ **Extensión BrixelAI TTS Añadida**
  - Síntesis de voz AI de alta calidad mediante agente local
  - 23 idiomas, 5+ tipos de voz, pre-generación basada en ranuras
- 🎥 **Extensión de Detección de Video Añadida** (Mejorada)
  - Bloques mejorados de detección de movimiento/dirección de video
  - Control de transparencia de video del escenario
- 🤖 **Metadatos IA V3 — Análisis de Proyectos con IA**
  - Estructura de árbol de bloques recursiva en ai_metadata.json (integrado en archivos .sb3)
  - Propiedades completas de sprites, disfraces, sonidos y comentarios
  - Análisis de interacciones (pares de toque, variables compartidas, flujos de difusión)
  - Permite que IA (ChatGPT, Claude, etc.) comprenda y analice completamente proyectos Scratch
  - Soporte para revisión de código, sugerencias de mejora y explicación de lógica del proyecto por IA
- 🔗 **URL de Marca Actualizada**
  - Enlace del sitio principal cambiado a brixel.gorillacell.kr
- Total de extensiones: 27 → 29 → 32

### v1.2 (2026-01-12)
- 🔄 **Compatibilidad de Proyectos Mejorada Significativamente**
  - Soporte para cargar archivos (.sb3) guardados desde Scratch original
  - Soporte para cargar archivos de proyecto con bloques de versiones anteriores
  - Los bloques faltantes se muestran en rojo para fácil identificación
- 🎬 **Mejoras del Grabador de Bloques**
  - Proceso de reproducción de bloques más fluido (optimización de animación)
  - Estabilidad mejorada durante la creación y conexión de bloques
- 📷 **Mejoras de Cámara Inalámbrica ESP32-CAM**
  - Mayor comodidad para uso de cámara inalámbrica en aplicaciones de control remoto
  - Soporte de modo de volteo/espejo de imagen
- 🛠️ **Otras Mejoras**
  - Soporte multilingüe ampliado
  - Mejoras generales de estabilidad y rendimiento

### v1.1 (2026-01-02)

* ⭐ Añadida Mejora de Extensión de Lápiz
* Función de dibujo directo basado en coordenadas (Punto, Línea, Cálculo de Ángulo)
* Función de visualización de radar (Para sensores ultrasónicos)


* ⭐ Añadida Mejora de Extensión de Traducir
* Estrategia de Conmutación por Error Multi-Proxy
* Tasa de éxito de traducción y estabilidad significativamente mejoradas


* Número total de extensiones: 25 → 27

### v1.0 (2026-01-02)

* Documentación para 25 bloques de extensión recién añadidos
* Categorización y descripciones detalladas
* Ejemplos de uso y resumen de stack tecnológico

---

**Versión del Documento:** 1.5
**Última Modificación:** 2026-03-20
**Autor:** Kim Seok Jeon (Utilizando Gemini, Claude)