import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolarSystemService {

  constructor(private http: HttpClient) { }

  getBodiesByType(type: string): Observable<any> {
    return this.http.get(`https://api.le-systeme-solaire.net/rest/bodies?type=${type}`);
  }

  getBodyById(id: string): Observable<any> {
    return this.http.get(`https://api.le-systeme-solaire.net/rest/bodies/${id}`);
  }
}
