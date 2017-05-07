import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Store } from '@ngrx/store';
import { questionaireReducer,  QuestionaireActions} from '../reducers/querstionaire.reducer';
import { ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/zip';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
  providers:[ApiService]
})
export class PlayComponent implements OnInit {

  questionsStore:any;
  question:any;
  routerSubscribtion:any;
  questionsSubscribtion:any;
  activeQuestion:any;

  constructor(private api: ApiService, private store: Store<any>, private route: ActivatedRoute, private router:Router) {
      this.questionsStore = this.store.select('questionaireReducer');
  }

  ngOnInit() {
    this.questionsSubscribtion = this.questionsStore.subscribe((data:any)=>{
       if(data.questions.length < 1){
          this.router.navigate(['/']);
         return;
       }
       if(data.finished){
         this.router.navigate(['final']);
         return;
       }
       this.question = data.questions[data.activeQuestion];
    });
  }
  
  onQuestionAnswer(index:number){
     this.store.dispatch({
       type:QuestionaireActions.QUESTION_ANSWERED,
       payload:{
         question:this.question,
         answerIndex:index
       }
     });
  }

}
