import { Component,  } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'app-iss-page',
  templateUrl: './iss-page.component.html',
  styleUrl: './iss-page.component.scss'
})
export class IssPageComponent {
  constructor(private router: Router) {}
  backToHome(): void {
    this.router.navigateByUrl('/home');
  }
  
}
