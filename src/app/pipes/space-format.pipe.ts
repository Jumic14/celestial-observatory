import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaceFormat',
})
export class SpaceFormatPipe implements PipeTransform {
  transform(value: number): string {
    const formattedValue = value.toFixed(2);

    const numberWithSpaces = formattedValue.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ' '
    );

    return numberWithSpaces.endsWith('.00')
      ? numberWithSpaces.split('.')[0]
      : numberWithSpaces;
  }
}
