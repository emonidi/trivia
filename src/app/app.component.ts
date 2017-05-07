import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';
import { Store } from '@ngrx/store';
import { SettingsActions } from './reducers/settings.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[LocalStorageService]
})
export class AppComponent implements OnInit  {
  
  constructor(private localStorage: LocalStorageService, private store: Store<any>){}

  ngOnInit(){
    let localStoredSettings = this.localStorage.getSettings();
    if(localStoredSettings){
      this.store.dispatch({
        type:SettingsActions.SET_SETTINGS,
        payload:localStoredSettings
      })
    }
  }
}
