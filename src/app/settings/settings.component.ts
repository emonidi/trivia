import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { SettingsActions } from '../reducers/settings.reducer';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  settingsStore: any;
  settings:any;
  difficulties:any = [
    'easy',
    'medium',
    'hard'
  ]

  constructor(private store: Store<any>) { 
    this.settingsStore = this.store.select('settingsReducer');
  }

  ngOnInit() {
    this.settingsStore.subscribe((settings:any)=>{
      this.settings = settings;
    })
  }

  inputSet(event:any){
     this.settingsStore.dispatch({
       type:SettingsActions.SET_SETTING,
       payload:{
         setting:'numberOfQuestions',
         value:event.value
       }
     })
  }

  difficultyChanged(event:any){
     this.settingsStore.dispatch({
       type:SettingsActions.SET_SETTING,
       payload:{
         setting:'difficulty',
         value:event
       }
     })
  }

}
