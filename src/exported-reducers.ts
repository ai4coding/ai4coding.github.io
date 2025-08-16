import {ScratchPaintReducer} from 'scratch-paint';
import LocalesReducer, {localesInitialState, initLocale} from './reducers/locales.js';
import GuiReducer, {buildInitialState, guiMiddleware, initEmbedded, initFullScreen, initPlayer} from './reducers/gui';
import {setFullScreen, setPlayer, setEmbedded} from './reducers/mode.js';
import {activateDeck} from './reducers/cards.js';
import {
    LoadingStates,
    onFetchedProjectData,
    onLoadedProject,
    defaultProjectId,
    remixProject,
    requestNewProject,
    requestProjectUpload,
    setProjectId
} from './reducers/project-state.js';
import {
    openLoadingProject,
    closeLoadingProject,
    openTelemetryModal
} from './reducers/modals.js';

export const guiReducers = {
    locales: LocalesReducer,
    scratchGui: GuiReducer,
    scratchPaint: ScratchPaintReducer
};

export {
    LoadingStates,
    onFetchedProjectData,
    onLoadedProject,
    defaultProjectId,
    remixProject,
    requestNewProject,
    requestProjectUpload,
    setProjectId,

    openLoadingProject,
    closeLoadingProject,
    openTelemetryModal,
    
    buildInitialState,
    guiMiddleware,
    initEmbedded,
    initPlayer,
    initFullScreen,
    initLocale,
    localesInitialState,
    setFullScreen,
    setPlayer,
    setEmbedded,
    activateDeck
};
