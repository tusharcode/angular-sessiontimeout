import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {InactivityTimerComponent} from './inactivity-timer.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, InactivityTimerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
