import { Injectable } from '@angular/core';
import { CodexEntry } from '../models/codex-entry.models';

@Injectable({
  providedIn: 'root'
})
export class AstronomyCodexService {
  codexEntries: CodexEntry[] = [
    {
        id: 0,
        title: 'Orbit',
        description: 'Test'
    },
    {
      id: 1,
      title: 'Perihelion',
      description: 'Test1',
    },
    {
      id: 2,
      title: 'Aphelion',
      description: 'Test 2',
     
    },
    {
      id: 3,
      title: 'Eccentricity',
      description: 'Test 3',
    },
    {
        id: 4,
        title: 'Inclination',
        description: 'Test 3',
      },
      {
        id: 5,
        title: 'Density',
        description: 'Test 3',
      },
      {
        id: 6,
        title: 'Gravity',
        description: 'Test 3',
      },
      {
        id: 7,
        title: 'Escape',
        description: 'Test 3',
      },
      {
        id: 8,
        title: 'Mean Radius',
        description: 'Test 3',
      },
      {
        id: 9,
        title: 'Equa Radius',
        description: 'Test 3',
      },
      {
        id: 10,
        title: 'Polar Radius',
        description: 'Test 3',
      },
      {
        id: 11,
        title: 'Sideral Orbit',
        description: 'Test 3',
      },
      {
        id: 12,
        title: 'Sideral Rotation',
        description: 'Test 3',
      },
      {
        id: 13,
        title: 'Average Temperature',
        description: 'Test 3',
      },
  ];

  getAllCodexEntries(): CodexEntry[] {
    return this.codexEntries;
  }

  getCodexEntryByTitle(title: string): CodexEntry | undefined {
    return this.codexEntries.find(entry => entry.title.toLowerCase() === title.toLowerCase());
  }
}