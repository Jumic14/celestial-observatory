import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLandingPage: boolean = false;
   bodyClass: string = ''; // Classe pour le fond

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLandingPage = this.router.url === '/';
        this.updateBackgroundByUrl(this.router.url);
      }
    });
  }

  updateBackgroundByUrl(url: string) {
    // Logique pour déterminer la classe du fond en fonction de l'URL
    switch (url) {
      case '/home':
        this.bodyClass = 'home-background'; // Classe pour la page d'accueil
        break;
        case '/iss-tracker':
          this.bodyClass = 'iss-page-background'; // Classe pour la page d'observatoire
          break;
      case '/observatory':
        this.bodyClass = 'observatory-background'; // Classe pour la page d'observatoire
        break;
      case '/gallery':
        this.bodyClass = 'gallery-background'; // Classe pour la page de galerie
        break;
      // Ajoute d'autres cas pour chaque URL avec sa classe de fond correspondante
      default:
        this.bodyClass = 'landing-background'; // Fond par défaut pour les autres URL
        break;
    }
  }
}
