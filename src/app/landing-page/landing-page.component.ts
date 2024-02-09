import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { fadeInOnEnterAnimation,  } from 'angular-animations';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    fadeInOnEnterAnimation({ anchor: 'enter', duration: 1500, delay: 100}),
    fadeInOnEnterAnimation({ anchor: 'enter2', duration: 1500, delay: 1000}),
    fadeInOnEnterAnimation({ anchor: 'enter3', duration: 1500, delay: 2000}),
  ]
})
export class LandingPageComponent {
  constructor(private router: Router, public languageService: LanguageService) {}

  onContinue(): void {

    setTimeout(() => {

    }, 1000);
    this.router.navigateByUrl('home');// Ajuste ce délai selon la durée de ton animation
  }
}
