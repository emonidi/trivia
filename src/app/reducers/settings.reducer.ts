import { ActionReducer, Action } from '@ngrx/store';
import { LocalStorageService } from '../services/local-storage.service';

let localStorage = new LocalStorageService();

let defaultSettings = {
    numberOfQuestions:10,
    difficulty:'easy'
}

let actions = {
    SET_SETTINGS:"SET_SETTINGS",
    SET_SETTING:"SET_SETTING"
}

export function settingsReducer(state = defaultSettings, action:Action){
    switch(action.type){
        case actions.SET_SETTING:
        state[action.payload.setting] = action.payload.value;
        localStorage.setSettings(Object.assign({},state));
        return Object.assign({},state);
        case actions.SET_SETTINGS:
        return Object.assign({},action.payload)
        default:
        return state;
    }
}

export const SettingsActions = actions;
