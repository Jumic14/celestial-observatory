import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KnownCountService {
  private apiUrl = 'https://api.le-systeme-solaire.net/rest/';
  private categoryMapping: { [key: string]: string } = {
    planet: 'Planet',
    dwarfPlanet: 'Dwarf Planet',
    asteroid: 'Asteroid',
    comet: 'Comet',
    moonsPlanet: 'Moons of Planets',
    moonsDwarfPlanet: 'Moons of Dwarf Planets',
    moonsAsteroid: 'Moons of Asteroids',
  };

  constructor(private http: HttpClient) {}

  getKnownCount(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/knowncount`);
  }

  getCategoryNameFromId(id: string): string {
    return this.categoryMapping[id] || '';
  }
}
