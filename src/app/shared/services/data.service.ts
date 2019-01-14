import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  private apiUrl: string;

  constructor(private httpClientService: HttpClient) {
    this.setApiUrl();
  }

  /**
   *set base url from environment
   */
  setApiUrl() {
    this.apiUrl = environment.serverUrl;
  }

  GetAll<T>(endPointUrl: string = ''): Observable<T> {
    return this.httpClientService.get<T>(`${this.apiUrl}${endPointUrl}`);
  }

  Get<T>(endPointUrl: string = '', Id): Observable<T> {
    return this.httpClientService.get<T>(`${this.apiUrl}${endPointUrl}/${Id}`);
  }
}
