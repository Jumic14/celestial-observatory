import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaceFormat'
})
export class SpaceFormatPipe implements PipeTransform {
  transform(value: number): string {
    // Utiliser toFixed pour fixer le nombre de chiffres après la virgule
    const formattedValue = value.toFixed(2);

 // Ajouter un espace chaque trois chiffres
 const numberWithSpaces = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

 // Supprimer les décimales si elles sont égales à zéro
 return numberWithSpaces.endsWith('.00') ? numberWithSpaces.split('.')[0] : numberWithSpaces;
  }
}
