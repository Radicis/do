import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ItemService {

    constructor(http: Http) {
        this.baseUrl = 'https://jsonplaceholder.typicode.com/todos/';
        this.http = http;
    }


    getItem() {
        let rand = Math.floor(Math.random() * (200 - 1 + 1)) + 1;

        return this.http.get(this.baseUrl + rand).toPromise().then(response => {
            return response.json();
        }).catch(err => err);
    }
}
