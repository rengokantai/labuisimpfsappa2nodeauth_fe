import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import { MessagesComponent} from './messages.component';
import {NewMessageComponent} from './new-message.component';
import { AppComponent }  from './app.component';
import {HttpModule} from '@angular/http';
import { WebService} from './web.service';

@NgModule({
  imports:      [ BrowserModule,MaterialModule,HttpModule ],
  declarations: [ AppComponent,MessagesComponent,NewMessageComponent ],
  bootstrap:    [ AppComponent ],
  providers: [WebService]
})
export class AppModule { }
