import { Component,  } from '@angular/core';
import {Router } from '@angular/router';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  constructor(private router: Router,
    public languageService: LanguageService) {}

 
  backToSas(): void {
    this.router.navigateByUrl('/');
  }
}
