// language.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLanguage = 'en'; // Langue par défaut
  private translations: Record<string, Record<string, string>> = {
    en: { 
        welcomeTitle: 'Welcome to the Celestial Observatory – Your Cosmic Gateway!',
      cosmicOdyssey: 'Begin a cosmic odyssey with Celestial Observatory...',
    },
    fr: { 
        welcomeTitle: 'Bienvenue à l\'Observatoire Céleste - Votre Porte Cosmique !',
      cosmicOdyssey: 'Commencez une odyssée cosmique avec l\'Observatoire Céleste...',
     },
    // Ajoutez d'autres langues selon vos besoins
  };

  setCurrentLanguage(language: string): void {
    this.currentLanguage = language;
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  getTranslation(key: string): string {
    return this.translations[this.currentLanguage][key] || key;
  }
}
