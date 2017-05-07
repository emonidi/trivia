import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as d3 from 'd3';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss']
})
export class FinalComponent implements OnInit {

  chartOptions:any;
  chartData:any;

  constructor(private store: Store<any>, private router: Router) { }

  ngOnInit() {
    this.store.select('questionaireReducer').take(1)
    .subscribe((questionsObject:any)=>{
       if(questionsObject.questions.length < 1) {
         this.router.navigate(['/'])
       }
       this.chartOptions = {
      chart: {
        type: 'pieChart',
        useInteractiveGuideline: true,
        x:function(d){
          return d.label
        },
        y:function(d){
          return d.value;
        },
        pieLabelsOutside:true,
        // startAngle:function(d){
        //    return d.endAngle/2 - Math.PI/2;
        // },
        // endAngle:function(d){
        //   return d.startAngle/2 - Math.PI/2;
        // },
        valueFormat:function(d){
          return d;
        },
        cornerRadius:true,
        transitionDuration: 350,
        donut:true,
        donutRatio:0.5,
        showLegend: false,
       
    }
  }

    this.chartData = this.extractChartData(questionsObject.questions);
    });
  }

  extractChartData(questions:any){
    let data = [{
      label:'Correct',
      value:0
    },{
      label:'Incorrect',
      value:0
    }];

    questions.forEach(question => {
       if(question.correctAnswerIndex === question.answerIndex){
         data[0].value+=1;
       }else{
         data[1].value+=1;
       }
    });

    return data;

  }
}
