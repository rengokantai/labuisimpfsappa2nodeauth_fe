import { Component,ViewChild } from '@angular/core';
import { MessagesComponent} from './messages.component';
import { NewMessageComponent} from './new-message.component';
@Component({
  selector: 'my-app',
  template: `<h1>Message board</h1><new-message (onPosted)="onPosted($event)"></new-message> <messages></messages>`,
})
export class AppComponent  { 
  @ViewChild(MessagesComponent) messages :MessagesComponent;
  onPosted(message){
    //console.log(message)
    this.messages.push(message)
  }
}
