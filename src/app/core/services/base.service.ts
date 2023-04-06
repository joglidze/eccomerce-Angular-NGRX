import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { hr_HR } from 'ng-zorro-antd/i18n';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  post<T>(url: string, body?: any) {
    return this.http.post<T>(this.apiUrl + url, body);
  }

  get<T>(url: string, params?: any): Observable<T> {
    return this.http.get<T>(this.apiUrl + url, {
      params: new HttpParams({ fromObject: params }),
    });
  }

  delete<T>(url: string, body?: any): Observable<T> {
    return this.http.delete<T>(this.apiUrl + url);
  }

  put<T>(url: string, body?: any): Observable<T> {
    return this.http.put<T>(this.apiUrl + url, body);
  }
}
