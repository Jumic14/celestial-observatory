import { Component, OnInit, OnDestroy } from '@angular/core';
import { KnownCountService } from '../services/knowncount.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-celestial-home',
  templateUrl: './celestial-home.component.html',
  styleUrl: './celestial-home.component.scss'
})
export class CelestialHomeComponent implements OnInit, OnDestroy {
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
  selectedCategoryId: string | null = null; 
  allowedBodyTypes: string[] = ['Star', 'Planet', 'Dwarf Planet',  'Moon'];

  constructor(private knownCountService: KnownCountService, private router: Router) {}

  ngOnInit(): void {
    this.fetchKnowcount();
  }

  fetchKnowcount(): void {
    this.subscription.add(
      this.knownCountService.getKnownCount().subscribe({
        next: (data: any) => {
          if (data.knowncount && Array.isArray(data.knowncount)) {
            this.knowcount = data.knowncount.map((entry: any) => {
              return {
                id: entry.id,
                knownCount: entry.knownCount,
                name: this.knownCountService.getCategoryNameFromId(entry.id)
              };
            });
          } else {
            console.error('Invalid data format:', data);
          }
        },
        error: (error: any) => {
          console.error('Error fetching knowcount:', error);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Nettoyage de l'abonnement
  }

  onCategorySelected(selectedCategory: string): void {
    this.selectedCategoryId = selectedCategory; // Stocke la catégorie sélectionnée
    console.log('Selected category:', this.selectedCategoryId);
  }
  
  redirectToCategoryDetail(): void {
    if (this.selectedCategoryId) {
      this.router.navigate(['/detail', this.selectedCategoryId]); // Redirige avec l'ID sélectionné
    }
  }
}