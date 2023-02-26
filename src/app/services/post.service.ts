import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as global from '../global.variables';
import {RequestOptions} from '@angular/http';

@Injectable()
export class PostService {

  constructor(private http: HttpClient ){
  }

  getPostCodes(code: any): any{
    // const headerDict = {
    //   'Accept': 'application/json',
    //   'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Origin': 'http://localhost:4200', 'Content-Type': 'application/json'
    // };
    //
    // const requestOptions = {
    //   headers: new HttpHeaders(headerDict),
    // };
    const url = `${global.base_url}suburbs.json?postcode=${code}`;
    return this.http.get(url);

  }
  getNearSuburbs(object: any): any{
    const distance = '4000';
    const url = `${global.base_url}radius.json?latitude=${object.latitude}&longitude=${object.longitude}&distance=${distance}`;
    return this.http.get(url);

  }


}
