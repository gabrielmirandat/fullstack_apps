import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx'

@Injectable()
export class HttpService{
    http:any;
    baseUrl:String;

    constructor(http:HttpClient){
        this.http = http;
        this.baseUrl = 'http://localhost:5000/'
    }

    getAll(url) {
        return this.http.get(this.baseUrl + url);
    }

    get(url, id) {
        return this.http.get(this.baseUrl + url + id);
    }

    add(url, data) {
        return this.http.post(this.baseUrl + url, data);
    }

    update(url, id, data) {
        return this.http.put(this.baseUrl + url + id, data);
    }

    delete(url, id) {
        return this.http.delete(this.baseUrl + url + id);
    }
}