import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable} from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {MdSnackBar} from '@angular/material';

@Injectable()
export class WebService{
    BASE_URL = 'http://localhost:60000/api';
    private messages=[];

    messageSubject = new Subject();

    constructor(private http:Http,private sb:MdSnackBar){
        this.getMessages();
    }
    async getMessages(user){
        try {
            user = (user)? '/'+user:'';
            //var response = await this.http.get(this.BASE_URL+'/messages'+user).toPromise();
            //this.messages = response.json();
            this.http.get(this.BASE_URL+'/messages'+user).subscribe(response=>{
                this.messages = response.json();
                this.messageSubject.next(this.messages);
            },error=>{
                this.handleError("error")
            })
        } 

    }
    async postMessage(message){
        try {
            var response =  await this.http.post(this.BASE_URL+'/messages',message).toPromise();
            this.messages.push(response.json());
        } catch (error) {
            this.handleError("post error");
        }
        
    }
    private handleError(error){
        console.error(error)
        this.sb.open(error,'close',{duration:1000})
    }
}