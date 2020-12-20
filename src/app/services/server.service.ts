import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

//If you have CORS issues on AWS Lambda, enable CORS on the API Gateway and REDEPLOY!

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
      withCredentials: true
    });

    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  }

  POST(functionURL: string, body: any) {
    return this.request('POST', `${environment.serverURL}/${functionURL}`,body);
  }


}
