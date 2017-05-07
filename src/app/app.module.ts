import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NvD3Module } from 'angular2-nvd3';

import { AppComponent } from './app.component';
import {HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

import { StoreModule } from '@ngrx/store';

import {MaterialModule} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FlexLayoutModule} from "@angular/flex-layout";
import { reducer } from './reducers/root.reducer';
import { PlayComponent } from './play/play.component';
import { QuestionComponent } from './shared/question/question.component';
import { FinalComponent } from './final/final.component';

const appRoutes = [
  {path:'',component:HomeComponent},
  {path:'settings', component:SettingsComponent},
  {path:'play', component: PlayComponent},
  {path: 'final', component: FinalComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    HomeComponent,
    SettingsComponent,
    PlayComponent,
    QuestionComponent,
    FinalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    StoreModule.provideStore(reducer),
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot(),
    FlexLayoutModule,
    NvD3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
