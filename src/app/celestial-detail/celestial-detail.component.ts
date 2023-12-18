import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SolarSystemService } from '../services/solar-system.service';
import { CelestialBody } from '../models/celestial-body.models';
import { Moon, MoonData } from '../interfaces/moons-interface';

@Component({
  selector: 'app-celestial-detail',
  templateUrl: './celestial-detail.component.html',
  styleUrl: './celestial-detail.component.scss'
})
export class CelestialDetailComponent implements OnInit {
  moons: Moon[] = [];
  category: string = '';
  celestialObjects: CelestialBody[] = [];
  selectedCategoryId: string | null = null; 
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
      console.log(this.route.params)
      this.category = params['id'];
      this.fetchCelestialObjects(this.category);
    });
  }

 fetchCelestialObjects(categoryId: string): void {
  this.solarSystemService.getCelestialObjectsByCategory(categoryId).subscribe({
    next: (data: CelestialBody[]) => {
      this.celestialObjects = data;
      console.log(this.celestialObjects)
    },
    error: (error: any) => {
      console.error('Error fetching celestial objects:', error);
    }
  });
}
onBodySelected(selectedId: string): void {
  this.selectedCategoryId = selectedId;
  console.log('Selected category:', this.selectedCategoryId);
}
redirectToBody(): void {
  if (this.selectedCategoryId !== null) {
    this.router.navigate([this.selectedCategoryId]);
  } else {
    console.log('Please select a category!');
    // Gérer le cas où aucune catégorie n'est sélectionnée
  }
}
getSelectedOptionName(): string {
  if (this.selectedCategoryId) {
    const selectedObject = this.celestialObjects.find(obj => obj.id === this.selectedCategoryId);
    return selectedObject ? selectedObject.englishName : '';
  }
  return '';
}
}