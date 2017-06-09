import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import { MessagesComponent} from './messages.component';
import { AppComponent }  from './app.component';
import { WebService} from './web.service';

@NgModule({
  imports:      [ BrowserModule,MaterialModule ],
  declarations: [ AppComponent,MessagesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
