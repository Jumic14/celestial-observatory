import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { fadeInRightOnEnterAnimation, fadeOutRightOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    fadeInRightOnEnterAnimation({ anchor: 'enter', duration: 1000, delay: 100, translate: '30px' }),
    fadeOutRightOnLeaveAnimation({ anchor: 'leave', duration: 500, delay: 100, translate: '40px' })
  ]
})
export class LandingPageComponent {
  constructor(private router: Router) {}

  onContinue(): void {
    fadeOutRightOnLeaveAnimation();
    setTimeout(() => {

    }, 1000);
    this.router.navigateByUrl('home');// Ajuste ce délai selon la durée de ton animation
  }
}
