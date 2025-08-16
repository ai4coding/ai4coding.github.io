import React from 'react';
import {FormattedMessage} from 'react-intl';

//신규확장시작
import howtouseIconURL from './howtouse/howtouse.png';
import howtouseInsetIconURL from './howtouse/howtouse-small.png';

import webserialIconURL from './webserial/webserial.png';
import webserialInsetIconURL from './webserial/webserial-small.png';

import webbleIconURL from './webBle/webble.png';
import webbleInsetIconURL from './webBle/webble-small.png';

import webwifiIconURL from './webwifi/webwifi.png';
import webwifiInsetIconURL from './webwifi/webwifi-small.png';

import speechrecognitionIconURL from './speechrecognition/speechrecognition.png';
import speechrecognitionInsetIconURL from './speechrecognition/speechrecognition-small.png';

import facerecognitionIconURL from './facerecognition/facerecognition.png'; 
import facerecognitionInsetIconURL from './facerecognition/facerecognition-small.png';

import countingfingersIconURL from './countingfingers/countingfingers.png'; 
import countingfingersInsetIconURL from './countingfingers/countingfingers-small.png';

import mediapipehandtrackingIconURL from './mediapipehandtracking/mediapipe_handtracking.png'; 
import mediapipehandtrackingInsetIconURL from './mediapipehandtracking/mediapipe_handtracking-small.png';

import mediapipefacetrackingIconURL from './mediapipefacetracking/mediapipe_facetracking.png'; 
import mediapipefacetrackingInsetIconURL from './mediapipefacetracking/mediapipe_facetracking-small.png';

import mediapipeposetrackingIconURL from './mediapipeposetracking/mediapipe_posetracking.png'; 
import mediapipeposetrackingInsetIconURL from './mediapipeposetracking/mediapipe_posetracking-small.png';

import tmimageIconURL from './tmimage/tm_image.png'; 
import tmimageInsetIconURL from './tmimage/tm_image-small.png';

import tmposeIconURL from './tmpose/tm_pose.png'; 
import tmposeInsetIconURL from './tmpose/tm_pose-small.png';

import tmsoundIconURL from './tmsound/sound.png'; 
import tmsoundInsetIconURL from './tmsound/sound-small.png';

import allinonehandIconURL from './handallinone/HandallinOne.png'; 
import allinonehandInsetIconURL from './handallinone/HandallinOne-small.png';

import allinonefaceIconURL from './allinoneface/allinoneface.png'; 
import allinonefaceInsetIconURL from './allinoneface/allinoneface-small.png';

import peopletrackingIconURL from './peopletracking/peopletracking.png'; 
import peopletrackingInsetIconURL from './peopletracking/peopletracking-small.png';

import lane_recognitionIconURL from './lane_recognition/lane_recognition.png'; 
import lane_recognitionInsetIconURL from './lane_recognition/lane_recognition-small.png';

import weatherIconURL from './weather/weather.png'; 
import weatherInsetIconURL from './weather/weather-small.png';

import datavisualizationIconURL from './datavisual/datavisual.png'; 
import datavisualizationInsetIconURL from './datavisual/datavisual-small.png';

import cameracontrolIconURL from './cameracontrol/cameracontrol.png'; 
import cameracontrolInsetIconURL from './cameracontrol/cameracontrol-small.png';

//신규확장끝

import musicIconURL from './music/music.png';
import musicInsetIconURL from './music/music-small.svg';

import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';

import videoSensingIconURL from './videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './videoSensing/video-sensing-small.svg';

import text2speechIconURL from './text2speech/text2speech.png';
import text2speechInsetIconURL from './text2speech/text2speech-small.svg';

import translateIconURL from './translate/translate.png';
import translateInsetIconURL from './translate/translate-small.png';

import makeymakeyIconURL from './makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './makeymakey/makeymakey-small.svg';

import microbitIconURL from './microbit/microbit.png';
import microbitInsetIconURL from './microbit/microbit-small.svg';
import microbitConnectionIconURL from './microbit/microbit-illustration.svg';
import microbitConnectionSmallIconURL from './microbit/microbit-small.svg';

import ev3IconURL from './ev3/ev3.png';
import ev3InsetIconURL from './ev3/ev3-small.svg';
import ev3ConnectionIconURL from './ev3/ev3-hub-illustration.svg';
import ev3ConnectionSmallIconURL from './ev3/ev3-small.svg';

import wedo2IconURL from './wedo2/wedo.png'; // TODO: Rename file names to match variable/prop names?
import wedo2InsetIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionIconURL from './wedo2/wedo-illustration.svg';
import wedo2ConnectionSmallIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import boostIconURL from './boost/boost.png';
import boostInsetIconURL from './boost/boost-small.svg';
import boostConnectionIconURL from './boost/boost-illustration.svg';
import boostConnectionSmallIconURL from './boost/boost-small.svg';
import boostConnectionTipIconURL from './boost/boost-button-illustration.svg';

import gdxforIconURL from './gdxfor/gdxfor.png';
import gdxforInsetIconURL from './gdxfor/gdxfor-small.svg';
import gdxforConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import gdxforConnectionSmallIconURL from './gdxfor/gdxfor-small.svg';

// BRIXEL 링크를 위한 JSX 컴포넌트
const BrixelLink = (
    <a href="https://brixel.kr" target="_blank" rel="noopener noreferrer">
        BRIXEL
    </a>
);

export default [
    {
        name: (
            <FormattedMessage
                defaultMessage="사용법 안내"
                description="Name for the howtouse extension"
                id="gui.extension.howtouse.name"
            />
        ),
        extensionId: 'howtouse',
        collaborator: BrixelLink,
        iconURL: howtouseIconURL,
        insetIconURL: howtouseInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="각종 AI확장기능 사용법과 스크래치와 하드웨어 연결 방법을 안내합니다."
                description="Description for the 'howtouse' extension"
                id="gui.extension.howtouse.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        /*getBlock: () => require('../../extensions/scratch3_webserial'),*/
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="웹시리얼(유선)"
                description="Name for the Web Serial extension"
                id="gui.extension.webserial.name"
            />
        ),
        extensionId: 'webserial',
        collaborator: BrixelLink,
        iconURL: webserialIconURL,
        insetIconURL: webserialInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="웹시리얼로 MCU(아두이노, 마이크로비트, ESP32, Pico 등)와 통신합니다."
                description="Description for the 'webserial' extension"
                id="gui.extension.webserial.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        /*getBlock: () => require('../../extensions/scratch3_webserial'),*/
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="웹블루투스(무선)"
                description="Name for the Web BLE extension"
                id="gui.extension.webble.name"
            />
        ),
        extensionId: 'webble',
        collaborator: BrixelLink,
        iconURL: webbleIconURL,
        insetIconURL: webbleInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="웹블루투스로 MCU(아두이노, 마이크로비트, ESP32, Pico 등)와 통신합니다."
                description="Description for the the Web BLE extension"
                id="gui.extension.webble.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        /*getBlock: () => require('../../extensions/scratch3_webble'),*/
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="와이파이(무선)"
                description="Name for the WiFi extension"
                id="gui.extension.webwifi.name"
            />
        ),
        extensionId: 'scratch3wifi',
        collaborator: BrixelLink,
        iconURL: webwifiIconURL,
        insetIconURL: webwifiInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="와이파이로 MCU(아두이노, 마이크로비트, ESP32, Pico 등)와 통신합니다."
                description="Description for the the webwifi extension"
                id="gui.extension.webwifi.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        /*getBlock: () => require('../../extensions/scratch3_webble'),*/
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="음성인식(STT)"
                description="Name for the 'speechrecognition' extension"
                id="gui.extension.speechrecognition.name"
            />
        ),
        extensionId: 'speechrecognition',
        collaborator: BrixelLink,
        iconURL: speechrecognitionIconURL,
        insetIconURL: speechrecognitionInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="음성인식을 통해 스프라이트와 하드웨어를 제어합니다."
                description="Description for the 'speechrecognition' extension"
                id="gui.extension.speechrecognition.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true,
        /*getBlock: () => require('../../extensions/scratch3_speechrecognition'),*/
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="얼굴인식"
                description="Name for the 'faceRecognition' extension"
                id="gui.extension.facerecognition.name"
            />
        ),
        extensionId: 'facerecognition',
        collaborator: BrixelLink,
        iconURL: facerecognitionIconURL,
        insetIconURL: facerecognitionInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="얼굴을 학습시키고, 얼굴인식을 통해 누구인지 알아냅니다."
                description="Description for the 'faceRecognition' extension"
                id="gui.extension.facerecognition.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        /*getBlock: () => require('../../extensions/scratch3_facerecognition'),*/
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="손가락 세기"
                description="Name for the 'countingFingers' extension"
                id="gui.extension.countingfingers.name"
            />
        ),
        extensionId: 'countingfingers',
        collaborator: BrixelLink,
        iconURL: countingfingersIconURL,
        insetIconURL: countingfingersInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="열 손가락의 펼침 개수를 감지하여 손가락 개수를 셉니다."
                description="Description for the 'countingfingers' extension"
                id="gui.extension.countingfingers.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        /*getBlock: () => require('../../extensions/scratch3_facerecognition'),*/
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="핸드 트래킹"
                description="Name for the 'mediapipe_handtracking' extension"
                id="gui.extension.handtracking.name"
            />
        ),
        extensionId: 'handtracking',
        collaborator: BrixelLink,
        iconURL: mediapipehandtrackingIconURL,
        insetIconURL: mediapipehandtrackingInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="손가락의 움직임을 추적할 수 있는 랜드마크 번호를 제공합니다."
                description="Description for the 'mediapipe_handtracking' extension"
                id="gui.extension.handtracking.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        /*getBlock: () => require('../../extensions/scratch3_facerecognition'),*/
    },        
    {
        name: (
            <FormattedMessage
                defaultMessage="얼굴 트래킹"
                description="Name for the 'mediapipe_facetracking' extension"
                id="gui.extension.facetracking.name"
            />
        ),
        extensionId: 'facetracking',
        collaborator: BrixelLink,
        iconURL: mediapipefacetrackingIconURL,
        insetIconURL: mediapipefacetrackingInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="얼굴 구성요소의 움직임을 추적할 수 있는 랜드마크 번호를 제공합니다."
                description="Description for the 'mediapipe_facetracking' extension"
                id="gui.extension.facetracking.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        /*getBlock: () => require('../../extensions/scratch3_facerecognition'),*/
    },        
    {
        name: (
            <FormattedMessage
                defaultMessage="포즈 트래킹"
                description="Name for the 'mediapipe_posetracking' extension"
                id="gui.extension.posetracking.name"
            />
        ),
        extensionId: 'posetracking',
        collaborator: BrixelLink,
        iconURL: mediapipeposetrackingIconURL,
        insetIconURL: mediapipeposetrackingInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="몸의 움직임을 추적할 수 있는 랜드마크 번호를 제공합니다."
                description="Description for the 'mediapipe_posetracking' extension"
                id="gui.extension.posetracking.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        /*getBlock: () => require('../../extensions/scratch3_facerecognition'),*/
    },        
    {
        name: (
            <FormattedMessage
                defaultMessage="티처블머신 이미지 모델"
                description="Name for the 'tm_image' extension"
                id="gui.extension.tmimage.name"
            />
        ),
        extensionId: 'tmimage',
        collaborator: BrixelLink,
        iconURL: tmimageIconURL,
        insetIconURL: tmimageInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="티처블머신에서 학습된 이미지모델로 스프라이트와 하드웨어를 제어합니다."
                description="Description for the 'tm_image' extension"
                id="gui.extension.tmimage.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        /*getBlock: () => require('../../extensions/scratch3_facerecognition'),*/
    },        
    {
        name: (
            <FormattedMessage
                defaultMessage="티처블머신 포즈 모델"
                description="Name for the 'tm_pose' extension"
                id="gui.extension.tmpose.name"
            />
        ),
        extensionId: 'tmpose',
        collaborator: BrixelLink,
        iconURL: tmposeIconURL,
        insetIconURL: tmposeInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="티처블머신에서 학습된 포즈모델로 스프라이트와 하드웨어를 제어합니다."
                description="Description for the 'tm_pose' extension"
                id="gui.extension.tmpose.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        /*getBlock: () => require('../../extensions/scratch3_facerecognition'),*/
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="티처블머신 사운드 모델"
                description="Name for the 'tm_sound' extension"
                id="gui.extension.tmsound.name"
            />
        ),
        extensionId: 'tmsound',
        collaborator: BrixelLink,
        iconURL: tmsoundIconURL,
        insetIconURL: tmsoundInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="티처블머신에서 학습된 사운드모델로 스프라이트와 하드웨어를 제어합니다."
                description="Description for the 'tm_spound' extension"
                id="gui.extension.tmsound.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        /*getBlock: () => require('../../extensions/scratch3_facerecognition'),*/
    },                
    {
        name: (
            <FormattedMessage
                defaultMessage="손인식 올인원"
                description="Name for the 'allinonehand' extension"
                id="gui.extension.allinonehand.name"
            />
        ),
        extensionId: 'allinonehand',
        collaborator: BrixelLink,
        iconURL: allinonehandIconURL,
        insetIconURL: allinonehandInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="다양한 손 인식 서비스로 스프라이트와 하드웨어를 제어합니다."
                description="Description for the 'allinonehand' extension"
                id="gui.extension.allinonehand.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        /*getBlock: () => require('../../extensions/scratch3_facerecognition'),*/
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="얼굴인식 올인원"
                description="Name for the 'allinoneface' extension"
                id="gui.extension.allinoneface.name"
            />
        ),
        extensionId: 'allinoneface',
        collaborator: BrixelLink,
        iconURL: allinonefaceIconURL,
        insetIconURL: allinonefaceInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="다양한 얼굴인식 서비스로 스프라이트와 하드웨어를 제어합니다."
                description="Description for the 'allinoneface' extension"
                id="gui.extension.allinoneface.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        /*getBlock: () => require('../../extensions/scratch3_facerecognition'),*/
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="사람 추적"
                description="Name for the 'peopletracking' extension"
                id="gui.extension.peopletracking.name"
            />
        ),
        extensionId: 'peopletracking',
        collaborator: BrixelLink,
        iconURL: peopletrackingIconURL,
        insetIconURL: peopletrackingInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="사람을 추적할 수 있는 좌표와 크기정보를 얻을 수 있습니다."
                description="Description for the 'peopletracking' extension"
                id="gui.extension.peopletracking.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        /*getBlock: () => require('../../extensions/scratch3_facerecognition'),*/
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="차선인식"
                description="Name for the 'lane_recognition' extension"
                id="gui.extension.lane_recognition.name"
            />
        ),
        extensionId: 'lanerecognition',
        collaborator: BrixelLink,
        iconURL: lane_recognitionIconURL,
        insetIconURL: lane_recognitionInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="차선을 인식해 핸들을 얼마나 돌려야 하는지 알려줍니다."
                description="Description for the 'lane_recognition' extension"
                id="gui.extension.lane_recognition.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        /*getBlock: () => require('../../extensions/scratch3_facerecognition'),*/
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="실시간 날씨(Open-Metro)"
                description="Name for the 'weather' extension"
                id="gui.extension.weather.name"
            />
        ),
        extensionId: 'weather',
        collaborator: BrixelLink,
        iconURL: weatherIconURL,
        insetIconURL: weatherInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="오픈-메트로에서 원하는 도시의 각종 날씨 정보를 가져옵니다."
                description="Description for the 'weather' extension"
                id="gui.extension.weather.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        /*getBlock: () => require('../../extensions/scratch3_facerecognition'),*/
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="데이터 시각화"
                description="Name for the 'datavisualization' extension"
                id="gui.extension.datavisualization.name"
            />
        ),
        extensionId: 'datavisualization',
        collaborator: BrixelLink,
        iconURL: datavisualizationIconURL,
        insetIconURL: datavisualizationInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="각종 스프라이트 변수와 하드웨어 센서 데이터를 차트로 시각화합니다."
                description="Description for the 'datavisualization' extension"
                id="gui.extension.datavisualization.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        /*getBlock: () => require('../../extensions/scratch3_facerecognition'),*/
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="카메라 제어"
                description="Name for the 'cameracontrol' extension"
                id="gui.extension.cameracontrol.name"
            />
        ),
        extensionId: 'cameracontrol',
        collaborator: BrixelLink,
        iconURL: cameracontrolIconURL,
        insetIconURL: cameracontrolInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="웹캠의 선택, 시작, 중지 제어를 합니다"
                description="Description for the 'cameracontrol' extension"
                id="gui.extension.cameracontrol.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        /*getBlock: () => require('../../extensions/scratch3_facerecognition'),*/
    },




    {        
        name: (
            <FormattedMessage
                defaultMessage="Music"
                description="Name for the 'Music' extension"
                id="gui.extension.music.name"
            />
        ),
        extensionId: 'music',
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen"
                description="Name for the 'Pen' extension"
                id="gui.extension.pen.name"
            />
        ),
        extensionId: 'pen',
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Video Sensing"
                description="Name for the 'Video Sensing' extension"
                id="gui.extension.videosensing.name"
            />
        ),
        extensionId: 'videoSensing',
        iconURL: videoSensingIconURL,
        insetIconURL: videoSensingInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense motion with the camera."
                description="Description for the 'Video Sensing' extension"
                id="gui.extension.videosensing.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Text to Speech"
                description="Name for the Text to Speech extension"
                id="gui.extension.text2speech.name"
            />
        ),
        extensionId: 'text2speech',
        collaborator: 'Amazon Web Services',
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.text2speech.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Translate"
                description="Name for the Translate extension"
                id="gui.extension.translate.name"
            />
        ),
        extensionId: 'translate',
        collaborator: 'Google',
        iconURL: translateIconURL,
        insetIconURL: translateInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Translate text into many languages."
                description="Description for the Translate extension"
                id="gui.extension.translate.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'Makey Makey',
        extensionId: 'makeymakey',
        collaborator: 'JoyLabz',
        iconURL: makeymakeyIconURL,
        insetIconURL: makeymakeyInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make anything into a key."
                description="Description for the 'Makey Makey' extension"
                id="gui.extension.makeymakey.description"
            />
        ),
        featured: true
    },
    {
        name: 'micro:bit',
        extensionId: 'microbit',
        collaborator: 'micro:bit',
        iconURL: microbitIconURL,
        insetIconURL: microbitInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'micro:bit' extension"
                id="gui.extension.microbit.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: microbitConnectionIconURL,
        connectionSmallIconURL: microbitConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their micro:bit."
                id="gui.extension.microbit.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/microbit'
    },
    {
        name: 'LEGO MINDSTORMS EV3',
        extensionId: 'ev3',
        collaborator: 'LEGO',
        iconURL: ev3IconURL,
        insetIconURL: ev3InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build interactive robots and more."
                description="Description for the 'LEGO MINDSTORMS EV3' extension"
                id="gui.extension.ev3.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: ev3ConnectionIconURL,
        connectionSmallIconURL: ev3ConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting. Make sure the pin on your EV3 is set to 1234."
                description="Message to help people connect to their EV3. Must note the PIN should be 1234."
                id="gui.extension.ev3.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/ev3'
    },
    {
        name: 'LEGO BOOST',
        extensionId: 'boost',
        collaborator: 'LEGO',
        iconURL: boostIconURL,
        insetIconURL: boostInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Bring robotic creations to life."
                description="Description for the 'LEGO BOOST' extension"
                id="gui.extension.boost.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: boostConnectionIconURL,
        connectionSmallIconURL: boostConnectionSmallIconURL,
        connectionTipIconURL: boostConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their BOOST."
                id="gui.extension.boost.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/boost'
    },
    {
        name: 'LEGO Education WeDo 2.0',
        extensionId: 'wedo2',
        collaborator: 'LEGO',
        iconURL: wedo2IconURL,
        insetIconURL: wedo2InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build with motors and sensors."
                description="Description for the 'LEGO WeDo 2.0' extension"
                id="gui.extension.wedo2.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: wedo2ConnectionIconURL,
        connectionSmallIconURL: wedo2ConnectionSmallIconURL,
        connectionTipIconURL: wedo2ConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their WeDo."
                id="gui.extension.wedo2.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/wedo'
    },
    {
        name: 'Go Direct Force & Acceleration',
        extensionId: 'gdxfor',
        collaborator: 'Vernier',
        iconURL: gdxforIconURL,
        insetIconURL: gdxforInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense push, pull, motion, and spin."
                description="Description for the Vernier Go Direct Force and Acceleration sensor extension"
                id="gui.extension.gdxfor.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: gdxforConnectionIconURL,
        connectionSmallIconURL: gdxforConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their force and acceleration sensor."
                id="gui.extension.gdxfor.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/vernier'
    }
];
