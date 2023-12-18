import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          transform: 'perspective(800px) rotateY(-120deg)'
        })
      ),
      state(
        'closed',
        style({
          transform: 'perspective(800px) rotateY(0deg)'
        })
      ),
      transition('open => closed', animate('1s ease-in-out')),
      transition('closed => open', animate('1s ease-in-out'))
    ])
  ]
})
export class LandingPageComponent {
  isOpen: boolean = false;

  constructor(private router: Router) {}

  onContinue(): void {
    this.isOpen = true;
    setTimeout(() => {
      this.router.navigateByUrl('home');
    }, 1000);
  }
}
