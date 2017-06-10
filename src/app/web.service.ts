import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable} from '@angular/core';
import {MdSnackBar} from '@angular/material';

@Injectable()
export class WebService{
    BASE_URL = 'http://localhost:60000/api';
    messages=[];
    constructor(private http:Http,private sb:MdSnackBar){
        this.getMessages();
    }
    async getMessages(){
        try {
            var response = await this.http.get(this.BASE_URL+'/messages').toPromise();
            this.messages = response.json();
        } catch (error) {
            console.error("err")
            this.sb.open("err",'close',{duration:1000})
        }

    }
    async postMessage(message){
        var response =  await this.http.post(this.BASE_URL+'/messages',message).toPromise();
        this.messages.push(response.json());
    }
}