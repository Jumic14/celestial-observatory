import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KnownCountService {
  private apiUrl = 'https://api.le-systeme-solaire.net/rest/';

  // Correspondance entre l'ID et le nom des catégories
  private categoryMapping: { [key: string]: string } = {
    planet: 'Planet',
    dwarfPlanet: 'Dwarf Planet',
    asteroid: 'Asteroid',
    comet: 'Comet',
    moonsPlanet: 'Moons of Planets',
    moonsDwarfPlanet: 'Moons of Dwarf Planets',
    moonsAsteroid: 'Moons of Asteroids',
    // Ajoute d'autres correspondances si nécessaire
  };

  constructor(private http: HttpClient) {}

  getKnownCount(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/knowncount`);
  }

  getCategoryNameFromId(id: string): string {
    console.log(id);
    return this.categoryMapping[id] || '';
  }
}