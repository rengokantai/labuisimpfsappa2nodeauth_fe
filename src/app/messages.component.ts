import { Component } from '@angular/core';


@Component({
    selector:'messages',
    template: '<div *ngFor="let message of messages">{{message.text}}By:{{message.owner}}'
})

export class MessagesComponent{
    messages = [{text:'a',owner:'ke'},{text:'other',owner:'ma'}]
}