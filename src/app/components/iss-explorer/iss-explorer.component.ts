import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-iss-explorer',
  templateUrl: './iss-explorer.component.html',
  styleUrl: './iss-explorer.component.scss',
})
export class IssExplorerComponent {
  constructor(
    private router: Router,
    public languageService: LanguageService
  ) {}
  
  backToHome(): void {
    this.router.navigateByUrl('/celestial-portal');
  }
}
