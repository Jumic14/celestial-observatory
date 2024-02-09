import { Component,  } from '@angular/core';
import {Router } from '@angular/router';
import { LanguageService } from '../services/language.service';
@Component({
  selector: 'app-iss-page',
  templateUrl: './iss-page.component.html',
  styleUrl: './iss-page.component.scss'
})
export class IssPageComponent {
  constructor(private router: Router, public languageService: LanguageService) {}
  backToHome(): void {
    this.router.navigateByUrl('/home');
  }
  
}
