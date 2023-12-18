import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CelestialBody } from '../models/celestial-body.models';
import { SolarSystemService } from '../services/solar-system.service';
import { Moon } from '../interfaces/moons-interface';
@Component({
  selector: 'app-celestial-body',
  templateUrl: './celestial-body.component.html',
  styleUrls: ['./celestial-body.component.scss']
})
export class CelestialBodyComponent implements OnInit {
  celestialBody: CelestialBody | undefined;
  moons: Moon[] = [];
  moon: Moon[] = [];
  category: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private solarSystemService: SolarSystemService,
    private router: Router // Ajout de Router ici
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('id');
      this.loadCelestialBody(this.category);
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

  navigateToMoonDetails(index: number): void {
    if (this.celestialBody && this.celestialBody.moons && this.celestialBody.moons.length > index) {
      const moonName = this.celestialBody.moons[index];
      this.router.navigateByUrl(`/${moonName}`);
    }
  }
}
