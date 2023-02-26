import {Injectable} from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptionsArgs, ResponseContentType} from '@angular/http';
import {Output, EventEmitter} from '@angular/core';
import * as global from '../global.variables';
import 'rxjs/Rx';

@Injectable()
export class AuthService {
  private base_url: string;

  constructor(private http: Http) {
    this.base_url = global.base_url;
  }
  getUserToken(postdata): any {
    const header = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    const urls = `${global.base_url}GetToken`;
    const option: RequestOptionsArgs = {
      url: urls,
      method: RequestMethod.Post,
      headers: header,
      responseType: ResponseContentType.Json
    };
    return this.http.post( `${global.base_url}GetToken`, postdata.toString(), option).map(res => res.json());
  }
   getCurrentToken(): any {
    return JSON.parse(localStorage.getItem('token'));
  }
}
