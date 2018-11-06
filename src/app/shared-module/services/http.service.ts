import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
  { providedIn: 'root' }
)
export class BaseHttpService {

  /**
   * Constructor
   * @param http
   */
  constructor(private http: HttpClient) { }
  /**
   * Use this method to process all API GET calls
   * @param url
   */
  get(url: string): Observable<any> {
    return this.http.get<any>(url);
  };
  /**
   * Use this method to process all API GET by ID calls
   * @param url
   * @param id
   */
  getById(url: string, id: number): Observable<any> {
    return this.http.get<any>(url + '/' + id);
  };
  /**
   * Use this method to process all API PUT calls
   * @param url
   * @param payload
   */
  put(url: string, payload: any) {
    return this.http.put(url,payload);
  };
  /**
   * Use this method to process all API POST calls
   * @param url
   * @param payload
   */
  post(url: string, payload: any) {
    return this.http.post(url, payload);
  };
}
