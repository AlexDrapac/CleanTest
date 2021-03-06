import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEndpoints } from '../models/http-endpoints';
import { HttpMethod } from '../models/http-methods';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUri ="https://localhost:44372/api";

  constructor(private httpClient: HttpClient) { }

  public makeHttpCall(endPoint: HttpEndpoints, method: HttpMethod, param?: any, body?:any) : Observable<any> {
    switch(method) {
      case HttpMethod.GET: return this.httpClient.get(`${this.baseUri}/${endPoint.toString()}`);
      case HttpMethod.POST: return this.httpClient.post(`${this.baseUri}/${endPoint.toString()}`, body);
      case HttpMethod.DELETE: return this.httpClient.delete(`${this.baseUri}/${endPoint.toString()}/${param}`);
      default: throw new Error("Method type is no valid");
    }
  }
}
