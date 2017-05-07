import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Store } from '@ngrx/store';
import {QuestionaireActions} from '../reducers/querstionaire.reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[ApiService]
})
export class HomeComponent implements OnInit {

  settingsSubscribtion:any;
  apiSubscribtion:any;
  settingsStore:any;
  questionsStore:any;

  constructor(private api: ApiService,private store: Store<any>, private router: Router) { }

  ngOnInit() {
    this.settingsStore = this.store.select('settingsReducer');
  }

  play(){
    this.store.dispatch({
      type:QuestionaireActions.RESET
    })
    this.settingsSubscribtion = this.settingsStore.subscribe((settings:any)=>{
       this.apiSubscribtion = this.api.getQuestions(settings)
       .map((res)=>res.json())
       .subscribe((result:any)=>{
          if(result.results.length === 0) throw new Error('Oooops! Something happened with the api');
          this.store.dispatch({
            type:QuestionaireActions.SET_QUESTIONS,
            payload:result.results
          });
          this.router.navigate(['/play']);
       });
    }).unsubscribe();
  }
}
