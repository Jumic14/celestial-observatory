import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(private router: Router) {}
  backToHome(): void {
    this.router.navigateByUrl('/home');
  }
  onFormSubmit(): void {
    // Gérer la réponse du formulaire ici (par exemple, afficher un message de confirmation)
    console.log('Formulaire soumis avec succès');

  }
}
