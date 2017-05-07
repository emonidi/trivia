import { settingsReducer } from './settings.reducer';
import { questionaireReducer } from './querstionaire.reducer';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import {ActionReducer} from '@ngrx/store';
import { environment } from '../../environments/environment';

let reducers = {
    settingsReducer,
    questionaireReducer
}

const developmentReducer: ActionReducer<any> = compose(combineReducers)(reducers);
const productionReducer: ActionReducer<any> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}