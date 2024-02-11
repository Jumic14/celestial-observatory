import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  constructor(
    private router: Router,
    public languageService: LanguageService
  ) {}

  backToHome(): void {
    this.router.navigateByUrl('/celestial-portal');
  }
  
  onFormSubmit(): void {
    console.log('Formulaire soumis avec succès');
  }
}
