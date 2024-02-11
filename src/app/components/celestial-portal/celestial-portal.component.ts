import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-celestial-portal',
  templateUrl: './celestial-portal.component.html',
  styleUrls: ['./celestial-portal.component.scss'],
})
export class CelestialPortalComponent {
  constructor(
    private router: Router,
    public languageService: LanguageService
  ) {}

  backToSas(): void {
    this.router.navigateByUrl('/');
  }
}
