import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CelestialBody } from '../models/celestial-body.models';
import { SolarSystemService } from '../services/solar-system.service';
import { AstronomyCodexService } from '../services/astronomy-codex.service';
import { Moon } from '../interfaces/moons-interface';
import { CodexEntry } from '../models/codex-entry.models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observatory',
  templateUrl: './observatory.component.html',
  styleUrl: './observatory.component.scss'
})
export class ObservatoryComponent implements OnInit {
  codexEntries: CodexEntry[] = [];
  moons: Moon[] = [];
  category: string = '';
  celestialObjects: CelestialBody[] = [];
  selectedCelestialObject: CelestialBody | null = null; 
  knowcount: any;
  private subscription: Subscription = new Subscription();
  categoryMapping: { [key: string]: string } = {
    planet: 'Planet',
    dwarfPlanet: 'Dwarf Planet',
    asteroid: 'Asteroid',
    comet: 'Comet',
    moonsPlanet: 'Moons of Planets',
    moonsDwarfPlanet: 'Moons of Dwarf Planets',
    moonsAsteroid: 'Moons of Asteroids'
    // Ajoute d'autres correspondances si nécessaire
  };
  selectedCelestialBodyId: string |null = null;
  selectedCategoryId: string | null = null; 
  allowedBodyTypes: string[] = ['Star', 'Planet', 'Dwarf Planet',  'Moon'];
  constructor(
    private route: ActivatedRoute,
    private solarSystemService: SolarSystemService,
    private router: Router,
    private astronomyCodexService: AstronomyCodexService // Injecte le service AstronomyCodexService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(this.route.params)
  
      this.loadCodexEntries(); // Charge les entrées de codex au démarrage

    });
  }

  loadCodexEntries(): void {
    this.codexEntries = this.astronomyCodexService.getAllCodexEntries(); // Utilise le service pour charger les entrées de codex
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
  this.selectedCelestialBodyId = selectedId;
  console.log('Selected body:', this.selectedCelestialBodyId);
}
redirectToBody(): void {
  if (this.selectedCategoryId !== null) {
    this.router.navigate(['/observatory/',this.selectedCelestialBodyId]);
  } else {
    console.log('Please select a category!');
    // Gérer le cas où aucune catégorie n'est sélectionnée
  }
}
getSelectedOptionName(): string {
  if (this.selectedCelestialBodyId) {
    const selectedObject = this.celestialObjects.find(obj => obj.id === this.selectedCelestialBodyId);
    return selectedObject ? selectedObject.englishName : '';
  }
  return '';
}
  onCategorySelected(selectedCategory: string): void {
    this.selectedCategoryId = selectedCategory; // Stocke la catégorie sélectionnée
    console.log('Selected category:', this.selectedCategoryId);
    this.category = this.selectedCategoryId;
    this.fetchCelestialObjects(this.category);
    this.selectedCelestialBodyId = null;
  }
  resetSelection(): void {
    this.selectedCelestialBodyId = null;
  }
  backToHome(): void {
    this.router.navigateByUrl('/home');
  }
}
