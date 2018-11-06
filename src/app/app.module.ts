import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';

import { MainModule } from './main-module/main.module';
import { CoreModule } from './core-module/core.module';

import { AppRoutingModule } from './app.routing';

import * as jQuery from 'jquery';
import { Ng5SliderModule } from 'ng5-slider';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MainModule,   
    CoreModule,     
    AppRoutingModule,
    Ng5SliderModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
