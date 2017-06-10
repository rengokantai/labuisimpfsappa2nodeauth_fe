import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import { MessagesComponent} from './messages.component';
import {NewMessageComponent} from './new-message.component';
import {NavComponent} from './nav.component';
import { AppComponent }  from './app.component';
import {HttpModule} from '@angular/http';
import { WebService} from './web.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports:      [ BrowserAnimationsModule,BrowserModule,MaterialModule,HttpModule,FormsModule ],
  declarations: [ AppComponent,MessagesComponent,NewMessageComponent,NavComponent ],
  bootstrap:    [ AppComponent ],
  providers: [WebService]
})
export class AppModule { }
