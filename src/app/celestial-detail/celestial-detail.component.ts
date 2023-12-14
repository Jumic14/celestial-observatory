import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SolarSystemService } from '../services/solar-system.service';
import { CelestialBody } from '../models/celestial-body.models';

@Component({
  selector: 'app-celestial-detail',
  templateUrl: './celestial-detail.component.html',
  styleUrl: './celestial-detail.component.scss'
})
export class CelestialDetailComponent implements OnInit {
  category: string = '';
  celestialObjects: CelestialBody[] = [];
  selectedCelestialObject: CelestialBody | null = null; 
  categoryMapping: { [category: string]: string } = {
    planet: 'Planet',
    dwarfPlanet: 'Dwarf Planet',
    asteroid: 'Asteroid',
    comet: 'Comet',
    moonsPlanet: 'Moons of Planets',
    moonsDwarfPlanet: 'Moons of Dwarf Planets',
    moonsAsteroid: 'Moons of Asteroids'
    // Ajoute d'autres correspondances si nécessaire
  };
  constructor(
    private route: ActivatedRoute,
    private solarSystemService: SolarSystemService,
    private router: Router // Ajout de Router ici
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.category = params['id'];
      this.fetchCelestialObjects(this.category);
    });
  }

 fetchCelestialObjects(categoryId: string): void {
  this.solarSystemService.getCelestialObjectsByCategory(categoryId).subscribe({
    next: (data: CelestialBody[]) => {
      this.celestialObjects = data;
    },
    error: (error: any) => {
      console.error('Error fetching celestial objects:', error);
    }
  });
}
redirectToCelestialBodyDetail(celestialObject: CelestialBody): void {
  this.router.navigate(['/celestial', celestialObject.englishName], { state: { celestialObject } });
}

}