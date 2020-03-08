import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgNeo4jd3Module } from 'projects/ng-neo4jd3/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgNeo4jd3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
