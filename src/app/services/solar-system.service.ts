import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CelestialBody } from '../models/celestial-body.models';
import { MoonData, Moon } from '../interfaces/moons-interface';

@Injectable({
  providedIn: 'root'
})
export class SolarSystemService {
  private apiUrl = 'https://api.le-systeme-solaire.net/rest/bodies/';
  private bodyNameMapping: { [key: string]: string } = {
  };
  

  constructor(private http: HttpClient) { }

  getCelestialObjectsByCategory(categoryId: string): Observable<CelestialBody[]> {
    const params = new HttpParams()
      .set('data', 'id,bodyType,name,englishName,moons,semimajorAxis,perihelion,aphelion,eccentricity,inclination,density,gravity,escape,meanRadius,equaRadius,polarRadius,dimension,sideralOrbit,sideralRotation,aroundPlanet,discoveredBy,discoveryDate,alternativeName,avgTemp')
      .set('filter[]', `bodyType,eq,${categoryId}`)
      .set('satisfy', 'any');

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map((data: any) => {
        const celestialObjects: CelestialBody[] = [];
        if (data && data.bodies) {
          data.bodies.forEach((bodyData: any) => {
            const moonsData = bodyData.moons || [];
            const moons = moonsData.map((moon: any) => ({
              moon: moon.moon,
              rel: moon.rel
            }));

            const celestialBody: CelestialBody = {
              id: bodyData.id,
              bodyType: bodyData.bodyType,
              name: bodyData.name,
              englishName: bodyData.englishName,
              moons: moons,
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
              avgTemp: bodyData.avgTemp,
            };
            celestialObjects.push(celestialBody);
          });
        }
        console.log('Processed Celestial Objects:', celestialObjects);
        return celestialObjects;
      })
    );
  }

  getMoons(id:string): Observable<CelestialBody> { // Utilisation de l'interface PlutoData
    return this.http.get<any>(this.apiUrl + id).pipe(
      map((data: any) => {
          const celestialBody: CelestialBody = {
            id: data.id,
            bodyType: data.bodyType,
            name: data.name,
            englishName: data.englishName,
             moons: data.moons ? data.moons.map((moonData: any) => moonData.moon) : [], // Vérifie si 'moons' existe
            perihelion: data.perihelion,
            aphelion: data.aphelion,
            eccentricity: data.eccentricity,
            inclination: data.inclination,
            density: data.density,
            gravity: data.gravity,
            escape: data.escape,
            meanRadius: data.meanRadius,
            equaRadius: data.equaRadius,
            polarRadius: data.polarRadius,
            dimension: data.dimension,
            sideralOrbit: data.sideralOrbit,
            sideralRotation: data.sideralRotation,
            aroundPlanet: {
              planet: data.aroundPlanet?.planet || '', // Assurez-vous de gérer les cas où les données peuvent être manquantes
              rel: data.aroundPlanet?.rel || ''
            },
            discoveredBy: data.discoveredBy,
            discoveryDate: data.discoveryDate,
            alternativeName: data.alternativeName,
            avgTemp: data.avgTemp,
          };
          return celestialBody;
      })
  );
  }
}

