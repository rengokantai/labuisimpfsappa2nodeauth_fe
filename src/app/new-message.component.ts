import { Component } from '@angular/core';
import {WebService} from './web.service';

@Component({
    selector:'new-message',
    template: `
    <md-card class="card">
        <md-card-content>
        <md-input-container>
            <input mdInput placeholder="Name">
        </md-input-container>
        <md-input-container>
            <textarea mdInput placeholder="Message"></textarea>
        </md-input-container>
        </md-card-content>
    </md-card>
    `
})

export class NewMessageComponent{

    constructor(private webService: WebService){}

}