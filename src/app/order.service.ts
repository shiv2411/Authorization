import { Injectable } from '@angular/core';
import { AuthHttp, JwtHelper } from 'angular2-jwt';
import { Http, RequestOptions, Headers } from '@angular/http';
// import {JwtHelper} from 'angular2-jwt';

@Injectable()
export class OrderService {

  constructor(private http: Http) {
  }

  getOrders() {
    const headers = new Headers();
    const token = localStorage.getItem('token');
    headers.append('Authorization', 'Bearer' + token);
    const options = new RequestOptions({headers});

    console.log('bm');
    return this.http.get('/api/orders', options)
      .map(response => response.json());
  }
}
