import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isHomePage: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkIfHomePage();
      }
    });
    this.checkIfHomePage(); // Vérifie au chargement initial
  }

  checkIfHomePage(): void {
    this.isHomePage = this.router.url === '/' || this.router.url === '/home';
  }

  backToSas(): void {
    this.router.navigateByUrl('/');
  }

  backToHome(): void {
    this.router.navigateByUrl('/home');
  }
}
