import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CreditEntry } from '../../models/credit-entry.models';
import { CreditService } from '../../services/credits-service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrl: './credits.component.scss',
})
export class CreditsComponent implements OnInit {
  @Input() creditEntries: CreditEntry[] = [];
  constructor(
    private router: Router,
    private creditService: CreditService,
    public languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.creditEntries = this.creditService.getAllCreditEntries();
  }

  backToHome(): void {
    this.router.navigateByUrl('/celestial-portal');
  }
}
