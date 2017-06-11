import { NgModule }      from '@angular/core';
import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import { MessagesComponent} from './messages.component';
import {NewMessageComponent} from './new-message.component';
import {NavComponent} from './nav.component';
import {HomeComponent} from './home.component';
import { AppComponent }  from './app.component';
import {HttpModule} from '@angular/http';
import { WebService} from './web.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

var routes =[{
  path:'',
  component:HomeComponent
},{
  path:'messages',
  component:MessagesComponent
},{
  path:'messages/:name',
  component:MessagesComponent
}];

@NgModule({
  imports:      [ BrowserAnimationsModule,BrowserModule,MaterialModule,HttpModule,FormsModule,RouterModule.forRoot(routes) ],
  declarations: [ AppComponent,MessagesComponent,NewMessageComponent,NavComponent,HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [WebService]
})
export class AppModule { }
