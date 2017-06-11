import { Component } from '@angular/core';
import {WebService} from './web.service';

@Component({
    selector:'nav',
    template: `<md-toolbar color="primary">
    <button md-button routerLink="/">Messgesboard</button>
    <button md-button routerLink="/messages">Messges</button>
    </md-toolbar>`
})

export class NavComponent{

    constructor(){}
}