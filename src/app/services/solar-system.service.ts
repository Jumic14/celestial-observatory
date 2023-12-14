import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CelestialBody } from '../models/celestial-body.models';

@Injectable({
  providedIn: 'root'
})
export class SolarSystemService {
  private apiUrl = 'https://api.le-systeme-solaire.net/rest/bodies/';
  

  constructor(private http: HttpClient) { }

  getCelestialObjectsByCategory(categoryId: string): Observable<CelestialBody[]> {
    const params = new HttpParams()
    .set('data', 'id,bodyType,name,englishName,moons,semimajorAxis,perihelion,aphelion,eccentricity,inclination,density,gravity,escape,meanRadius,equaRadius,polarRadius,dimension,sideralOrbit,sideralRotation,aroundPlanet,discoveredBy,discoveryDate,alternativeName,avgTemp')
    .set('exclude', 'id')
    .set('filter[]', `bodyType,eq,${categoryId}`)
    .set('satisfy', 'any');
  
    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map((data: any) => {
        const celestialObjects: CelestialBody[] = [];
        if (data && data.bodies) {
          data.bodies.forEach((bodyData: any) => {
            const celestialBody: CelestialBody = {
                id: bodyData.id,
                bodyType: bodyData.bodyType,
                name: bodyData.name,
                englishName: bodyData.englishName,
                moons: bodyData.moons,
                semimajorAxis: bodyData.semimajorAxis,
                perihelion: bodyData.perihelion,
                aphelion: bodyData.aphelion,
                eccentricity: bodyData.eccentricity,
                inclination: bodyData.inclination,
                density: bodyData.density,
                gravity: bodyData.gravity,
                escape: bodyData.escape,
                meanRadius: bodyData.meanRadius,
                equaRadius: bodyData.equaRadius,
                polarRadius: bodyData.polarRadius,
                dimension: bodyData.dimension,
                sideralOrbit: bodyData.sideralOrbit,
                sideralRotation: bodyData.sideralRotation,
                aroundPlanet: bodyData.aroundPlanet,
                discoveredBy: bodyData.discoveredBy,
                discoveryDate: bodyData.discoveryDate,
                alternativeName: bodyData.alternativeName,
                avgTemp: bodyData.avgTemp
            };
            celestialObjects.push(celestialBody);
          });
        }
        console.log('Processed Celestial Objects:', celestialObjects); 
        return celestialObjects;
      })
    );
  }

  getCelestialBodyById(id: string): Observable<CelestialBody> {
    const params = new HttpParams()
      .set('data', 'id,bodyType,name,englishName,moons,...') // Les détails que tu veux récupérer
      .set('exclude', 'id')
      .set('filter[]', `id,eq,${id}`);
    
    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map((data: any) => {
        // Ici, tu formates les données pour obtenir un objet CelestialBody unique
        const bodyData = data.bodies[0]; // Supposons que tu récupères un seul astre par ID
        const celestialBody: CelestialBody = {
            id: bodyData.id,
            bodyType: bodyData.bodyType,
            name: bodyData.name,
            englishName: bodyData.englishName,
            moons: bodyData.moons,
            semimajorAxis: bodyData.semimajorAxis,
            perihelion: bodyData.perihelion,
            aphelion: bodyData.aphelion,
            eccentricity: bodyData.eccentricity,
            inclination: bodyData.inclination,
            density: bodyData.density,
            gravity: bodyData.gravity,
            escape: bodyData.escape,
            meanRadius: bodyData.meanRadius,
            equaRadius: bodyData.equaRadius,
            polarRadius: bodyData.polarRadius,
            dimension: bodyData.dimension,
            sideralOrbit: bodyData.sideralOrbit,
            sideralRotation: bodyData.sideralRotation,
            aroundPlanet: bodyData.aroundPlanet,
            discoveredBy: bodyData.discoveredBy,
            discoveryDate: bodyData.discoveryDate,
            alternativeName: bodyData.alternativeName,
            avgTemp: bodyData.avgTemp
        };
        return celestialBody;
      })
    );
  }
  
}


