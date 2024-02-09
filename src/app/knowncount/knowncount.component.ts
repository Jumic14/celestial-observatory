import { Component, OnInit, OnDestroy } from '@angular/core';
import { KnownCountService } from '../services/knowncount.service';
import { Subscription } from 'rxjs';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-knowncount',
  templateUrl: './knowncount.component.html',
  styleUrl: './knowncount.component.scss'
})
export class KnowncountComponent implements OnInit, OnDestroy {
  knowcount: any;
  totalKnownCount: number = 0;
  selectedCategoryId: string | null = null; 
  private subscription: Subscription = new Subscription();
  categoryMapping: { [key: string]: string } = {
    planet: 'Planets',
    dwarfPlanet: 'Dwarf Planets',
    asteroid: 'Asteroids',
    comet: 'Comets',
    moonsPlanet: 'Moons of Planets',
    moonsDwarfPlanet: 'Moons of Dwarf Planets',
    moonsAsteroid: 'Moons of Asteroids'
    // Ajoute d'autres correspondances si nécessaire
  };

  constructor(private knownCountService: KnownCountService, public languageService: LanguageService) {}

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
            this.calculateTotalKnownCount();
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
  getTranslatedCategoryName(id: string): string {
    const categoryName = this.categoryMapping[id];
  
    if (this.languageService.selectedLanguage === 'fr') {
      const frenchTranslations: { [key: string]: string } = {
        'Planets': 'Planètes',
        'Dwarf Planets': 'Planètes naines',
        'Asteroids': 'Astéroïdes',
        'Comets': 'Comètes',
        'Moons of Planets': 'Lunes de planètes',
        'Moons of Dwarf Planets': 'Lunes de planètes naines',
        'Moons of Asteroids': 'Lunes d\'astéroïdes'
        // Ajoutez d'autres traductions au besoin
      };
  
      return frenchTranslations[categoryName] || categoryName;
    }
  
    return categoryName;
  }
  calculateTotalKnownCount(): void {
    // Utilisation de la méthode reduce pour additionner tous les knownCount
    this.totalKnownCount = this.knowcount.reduce((total: number, entry: any) => {
      return total + entry.knownCount;
    }, 0);
  }

  ngOnDestroy(): void {
    this.subscription.closed; // Nettoyage de l'abonnement
  }

}
