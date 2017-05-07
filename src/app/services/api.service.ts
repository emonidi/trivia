import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Store } from '@ngrx/store';

@Injectable()
export class ApiService {

  BASE_URL = 'https://opentdb.com/api.php';
  
  constructor(private http: Http, private store: Store<any>) {}
  

  getQuestions(settingsObject:any){
    console.log(settingsObject)
     return this.http.get([this.BASE_URL,'?amount=',settingsObject.numberOfQuestions,'&difficulty=',settingsObject.difficulty].join(''))
  }

}
