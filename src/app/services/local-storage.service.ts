import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  getSettings(){
    return JSON.parse(window.localStorage.getItem('trivia.settings'));
  }

  setSettings(settings:any){
     window.localStorage.setItem('trivia.settings',JSON.stringify(settings));
  } 

}
