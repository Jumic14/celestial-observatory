import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CelestialBody } from '../../models/celestial-body.models';
import { SolarSystemService } from '../../services/solar-system.service';
import { AstronomyCodexService } from '../../services/astronomy-codex.service';
import { LanguageService } from '../../services/language.service';
import { Moon } from '../../interfaces/moons-interface';
import { CodexEntry } from '../../models/codex-entry.models';

@Component({
  selector: 'app-telescope-hub',
  templateUrl: './telescope-hub.component.html',
  styleUrl: './telescope-hub.component.scss',
})
export class TelescopeHubComponent implements OnInit {
  codexEntries: CodexEntry[] = [];
  moons: Moon[] = [];
  category: string = '';
  celestialObjects: CelestialBody[] = [];
  selectedCelestialObject: CelestialBody | null = null;
  knowcount: any;
  categoryMapping: { [key: string]: string } = {
    planet: 'Planet',
    dwarfPlanet: 'Dwarf Planet',
    asteroid: 'Asteroid',
    comet: 'Comet',
    moonsPlanet: 'Moons of Planets',
    moonsDwarfPlanet: 'Moons of Dwarf Planets',
    moonsAsteroid: 'Moons of Asteroids',
  };
  selectedCelestialBodyId: string | null = null;
  selectedCategoryId: string | null = null;
  allowedBodyTypes: string[] = ['Star', 'Planet', 'Dwarf Planet', 'Moon'];
  constructor(
    private solarSystemService: SolarSystemService,
    private router: Router,
    private astronomyCodexService: AstronomyCodexService,
    public languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.loadCodexEntries();
  }

  getFrenchTranslation(type: string): string {
    const frenchTranslations: { [key: string]: string } = {
      Star: 'Étoile',
      Planet: 'Planète',
      'Dwarf Planet': 'Planète naine',
      Moon: 'Lune',
    };

    return frenchTranslations[type] || type;
  }

  loadCodexEntries(): void {
    this.codexEntries = this.astronomyCodexService.getAllCodexEntries();
  }

  fetchCelestialObjects(categoryId: string): void {
    this.solarSystemService
      .getCelestialObjectsByCategory(categoryId)
      .subscribe({
        next: (data: CelestialBody[]) => {
          this.celestialObjects = data;
        },
        error: (error: any) => {
          console.error('Error fetching celestial objects:', error);
        },
      });
  }

  onBodySelected(selectedId: string): void {
    this.selectedCelestialBodyId = selectedId;
  }

  redirectToBody(): void {
    if (this.selectedCategoryId !== null) {
      this.router.navigate(['/telescope-hub/', this.selectedCelestialBodyId]);
    }
  }

  getSelectedOptionName(): string {
    if (this.selectedCelestialBodyId) {
      const selectedObject = this.celestialObjects.find(
        (obj) => obj.id === this.selectedCelestialBodyId
      );
      return selectedObject ? selectedObject.englishName : '';
    }
    return '';
  }

  getSelectedOptionNameFr(): string {
    if (this.selectedCelestialBodyId) {
      const selectedObject = this.celestialObjects.find(
        (obj) => obj.id === this.selectedCelestialBodyId
      );
      return selectedObject ? selectedObject.name : '';
    }
    return '';
  }

  onCategorySelected(selectedCategory: string): void {
    this.selectedCategoryId = selectedCategory;
    this.category = this.selectedCategoryId;
    this.fetchCelestialObjects(this.category);
    this.selectedCelestialBodyId = null;
  }

  resetSelection(): void {
    this.selectedCelestialBodyId = null;
  }

  backToHome(): void {
    this.router.navigateByUrl('/celestial-portal');
  }
}
