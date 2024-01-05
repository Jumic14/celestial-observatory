import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  constructor(private router: Router, private elRef: ElementRef) {}

  onContinue(): void {
    const body = this.elRef.nativeElement.ownerDocument.body;
    if (body) {
      body.classList.add('changeBackgroundZoom');
      setTimeout(() => {
        this.router.navigateByUrl('home');
        setTimeout(() => {
          body.classList.remove('changeBackgroundZoom');
        }, 1000); // Ajuste ce délai selon la durée de ton animation
      }, 700); // Délai pour synchroniser le changement de fond avec l'animation
    }
  }
}
