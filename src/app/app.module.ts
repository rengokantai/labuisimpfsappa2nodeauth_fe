import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessagesComponent} from './messages.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,MessagesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
