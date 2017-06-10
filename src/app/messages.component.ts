import { Component } from '@angular/core';
import {WebService} from './web.service';

@Component({
    selector:'messages',
    template: `<div *ngFor="let message of webService.messages">
    <md-card class="card"><md-card-title>{{message.owner}}</md-card-title>
    <md-card-content>{{message.text}}</md-card-content></md-card>`
})

export class MessagesComponent{
    messages=[];
    constructor(private webService: WebService){}
    // async ngOnInit(){
    //     var response = await this.webService.getMessages();
    //     this.messages = response.json();
    //     console.log(response.json());
    // }
    //messages = [{text:'a',owner:'ke'},{text:'other',owner:'ma'}]
}