import { ActionReducer, Action } from '@ngrx/store';
import * as shuffle from 'shuffle-array'

const actions = {
    SET_QUESTIONS: 'SET_QUESTIONS',
    QUESTION_ANSWERED: 'QUESTION_ANSWERED',
    RESET:'RESET'
}

const defaultState = {
    activeQuestion:0,
    questions:[],
    description:'',
    finished:false
}

export function questionaireReducer(state = defaultState, action: Action){
    switch(action.type){
        case actions.RESET:
        return defaultState
        case actions.SET_QUESTIONS:
        let questions = action.payload.map((question,index,arr)=>{
            question.id = index;
            question.answerIndex = null;
            question.answers = shuffle([...question.incorrect_answers,...question.correct_answer]);
            question.correctAnswerIndex = question.answers.indexOf(question.correct_answer);
            question.number = [index+1,'/',arr.length].join('');
            return question;
        });
        return Object.assign({},state,{questions});
        case actions.QUESTION_ANSWERED:
        if(action.payload.question.id === state.questions.length - 1) state.finished = true;
        state.activeQuestion = action.payload.question.id+1
        state.questions[action.payload.question.id].answerIndex = action.payload.answerIndex;
        return Object.assign({},state)
        default:
        return state;
    }
}

export let QuestionaireActions = actions;