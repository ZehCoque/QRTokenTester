import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  private async request(method: string, url: string, data?: any) {
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body',
      withCredentials: false
    });

    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  }

  POST(data) {
    return this.request('POST', `${environment.serverURL}`, data);
  }

  tokenFunc(functionURL: string, body: any) {
    return this.request('POST', `${environment.tokenFuncURL}/${functionURL}`,body);
  }


}
