import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CelestialBody } from '../models/celestial-body.models';
import { SolarSystemService } from '../services/solar-system.service';
import { AstronomyCodexService } from '../services/astronomy-codex.service';
import { Moon } from '../interfaces/moons-interface';
import { CodexEntry } from '../models/codex-entry.models';
import { Info } from '../models/info.models';
@Component({
  selector: 'app-celestial-body',
  templateUrl: './celestial-body.component.html',
  styleUrls: ['./celestial-body.component.scss']
})
export class CelestialBodyComponent implements OnInit {
  isEarthBody: boolean = false;
  IsMoonBody: boolean = false;
  celestialBody!: CelestialBody;
  moons: Moon[] = [];
  moon: Moon[] = [];
  category: string | null = null;
  codexEntries: CodexEntry[] = [];
  constructor(
    private route: ActivatedRoute,
    private solarSystemService: SolarSystemService,
    private router: Router,
    private astronomyCodexService: AstronomyCodexService // Injecte le service AstronomyCodexService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('id');
      this.loadCelestialBody(this.category);
      this.loadCodexEntries(); // Charge les entrées de codex au démarrage
      const currentUrl = this.router.url;
    this.isEarthBody = currentUrl.includes('observatory/terre');
    this.IsMoonBody = currentUrl.includes('observatory/lune');
    });
  }

  loadCelestialBody(id: string | null): void {
    if (id) {
      this.solarSystemService.getMoons(id).subscribe({
        next: (data: CelestialBody) => {
          this.celestialBody = data;
        },
        error: (error: any) => {
          console.error('Error fetching data:', error);
        }
      });
    }
  }

  loadCodexEntries(): void {
    this.codexEntries = this.astronomyCodexService.getAllCodexEntries(); // Utilise le service pour charger les entrées de codex
  }
  navigateToMoonDetails(index: number): void {
    if (this.celestialBody && this.celestialBody.moons && this.celestialBody.moons.length > index) {
      const moonName = this.celestialBody.moons[index];
      const currentUrl = this.router.url;
      
      // Vérification de l'URL actuelle pour rediriger de la Terre à la Lune
      if (currentUrl.includes('/observatory/terre')) {
        this.router.navigateByUrl(`/observatory/lune`);
      } else {
        this.router.navigateByUrl(`/observatory/${moonName}`);
      }
    }
  }

  navigateToPlanet(): void {
    if (this.celestialBody && this.celestialBody.bodyType === 'Moon' && this.celestialBody.aroundPlanet && this.celestialBody.aroundPlanet.planet) {
      const planetName = this.celestialBody.aroundPlanet.planet;
      this.router.navigateByUrl(`/observatory/${planetName}`);
    }
  }

  navigateToBodyType(): void {
  if (this.celestialBody && this.celestialBody.bodyType) {
    const bodyType = this.celestialBody.bodyType;
    this.router.navigateByUrl(`/observatory/bodyType/${bodyType}`);
  }
}
backToHub(): void {
  this.router.navigateByUrl('/observatory');
}
}