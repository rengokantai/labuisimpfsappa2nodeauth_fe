import { Component,ViewChild } from '@angular/core';
import { MessagesComponent} from './messages.component';
import { NewMessageComponent} from './new-message.component';
import { NavComponent} from './nav.component';
@Component({
  selector: 'my-app',
  template: `<nav></nav><h1>Message board</h1><new-message></new-message> <messages></messages>`,
})
export class AppComponent  { 

}
