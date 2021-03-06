import { Component,EventEmitter,Output } from '@angular/core';
import {WebService} from './web.service';

@Component({
    selector:'new-message',
    template: `
    <md-card class="card">
        <md-card-content>
        <md-input-container>
            <input [(ngModel)]="message.owner" mdInput placeholder="Name">
        </md-input-container>
        <md-input-container>
            <textarea [(ngModel)]="message.text" mdInput placeholder="Message"></textarea>
        </md-input-container>
        <md-card-actions>
            <button (click)="post()" md-button color="primary">post</button>
        </md-card-actions>
        </md-card-content>
    </md-card>
    `
})

export class NewMessageComponent{

    constructor(private webService: WebService){}
    message ={
        owner:"ke",
        text:"123"
    }
    post(){
        this.webService.postMessage(this.message);
     
    }

}