import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Picture } from '../models/picture.models';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {
  private apiUrl = 'https://api.nasa.gov/planetary/apod';
  private apiKey = 'uMkx6SYPErezFeDXSRWAAgUMLHLNKNRbTStrbGQM';

  constructor(private http: HttpClient) { }

  getNasaImages(count: number): Observable<Picture[]> {
    const url = `${this.apiUrl}?api_key=${this.apiKey}&count=${count}`;
    return this.http.get<Picture[]>(url);
  }
}