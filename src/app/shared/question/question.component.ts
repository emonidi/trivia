import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  
  @Input() question:any;
  @Output() questionAnswered:EventEmitter<any> = new EventEmitter();

  setAnswer(index:number){
    this.questionAnswered.emit(index);
  }

}
