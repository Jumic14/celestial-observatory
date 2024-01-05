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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in vehicula dui. Aenean ligula leo, rutrum eu scelerisque sit amet, gravida id nisl. Nam ullamcorper quis orci et semper. Curabitur nec dolor leo. Nullam ultricies massa a sem bibendum venenatis non vitae dolor. Ut elementum turpis et porta auctor. Duis quis convallis purus, tempus laoreet ex. Etiam accumsan tortor velit, id hendrerit metus facilisis a. Mauris viverra lacus sit amet lectus vulputate, eget viverra metus pulvinar.'
    },
    {
      id: 1,
      title: 'Perihelion',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in vehicula dui. Aenean ligula leo, rutrum eu scelerisque sit amet, gravida id nisl. Nam ullamcorper quis orci et semper. Curabitur nec dolor leo. Nullam ultricies massa a sem bibendum venenatis non vitae dolor. Ut elementum turpis et porta auctor. Duis quis convallis purus, tempus laoreet ex. Etiam accumsan tortor velit, id hendrerit metus facilisis a. Mauris viverra lacus sit amet lectus vulputate, eget viverra metus pulvinar.',
    },
    {
      id: 2,
      title: 'Aphelion',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in vehicula dui. Aenean ligula leo, rutrum eu scelerisque sit amet, gravida id nisl. Nam ullamcorper quis orci et semper. Curabitur nec dolor leo. Nullam ultricies massa a sem bibendum venenatis non vitae dolor. Ut elementum turpis et porta auctor. Duis quis convallis purus, tempus laoreet ex. Etiam accumsan tortor velit, id hendrerit metus facilisis a. Mauris viverra lacus sit amet lectus vulputate, eget viverra metus pulvinar.',
     
    },
    {
      id: 3,
      title: 'Eccentricity',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in vehicula dui. Aenean ligula leo, rutrum eu scelerisque sit amet, gravida id nisl. Nam ullamcorper quis orci et semper. Curabitur nec dolor leo. Nullam ultricies massa a sem bibendum venenatis non vitae dolor. Ut elementum turpis et porta auctor. Duis quis convallis purus, tempus laoreet ex. Etiam accumsan tortor velit, id hendrerit metus facilisis a. Mauris viverra lacus sit amet lectus vulputate, eget viverra metus pulvinar.',
    },
    {
        id: 4,
        title: 'Inclination',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in vehicula dui. Aenean ligula leo, rutrum eu scelerisque sit amet, gravida id nisl. Nam ullamcorper quis orci et semper. Curabitur nec dolor leo. Nullam ultricies massa a sem bibendum venenatis non vitae dolor. Ut elementum turpis et porta auctor. Duis quis convallis purus, tempus laoreet ex. Etiam accumsan tortor velit, id hendrerit metus facilisis a. Mauris viverra lacus sit amet lectus vulputate, eget viverra metus pulvinar.',
      },
      {
        id: 5,
        title: 'Density',
        description: 'Test 3',
      },
      {
        id: 6,
        title: 'Gravity',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in vehicula dui. Aenean ligula leo, rutrum eu scelerisque sit amet, gravida id nisl. Nam ullamcorper quis orci et semper. Curabitur nec dolor leo. Nullam ultricies massa a sem bibendum venenatis non vitae dolor. Ut elementum turpis et porta auctor. Duis quis convallis purus, tempus laoreet ex. Etiam accumsan tortor velit, id hendrerit metus facilisis a. Mauris viverra lacus sit amet lectus vulputate, eget viverra metus pulvinar.',
      },
      {
        id: 7,
        title: 'Escape',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in vehicula dui. Aenean ligula leo, rutrum eu scelerisque sit amet, gravida id nisl. Nam ullamcorper quis orci et semper. Curabitur nec dolor leo. Nullam ultricies massa a sem bibendum venenatis non vitae dolor. Ut elementum turpis et porta auctor. Duis quis convallis purus, tempus laoreet ex. Etiam accumsan tortor velit, id hendrerit metus facilisis a. Mauris viverra lacus sit amet lectus vulputate, eget viverra metus pulvinar.',
      },
      {
        id: 8,
        title: 'Mean Radius',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in vehicula dui. Aenean ligula leo, rutrum eu scelerisque sit amet, gravida id nisl. Nam ullamcorper quis orci et semper. Curabitur nec dolor leo. Nullam ultricies massa a sem bibendum venenatis non vitae dolor. Ut elementum turpis et porta auctor. Duis quis convallis purus, tempus laoreet ex. Etiam accumsan tortor velit, id hendrerit metus facilisis a. Mauris viverra lacus sit amet lectus vulputate, eget viverra metus pulvinar.',
      },
      {
        id: 9,
        title: 'Equa Radius',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in vehicula dui. Aenean ligula leo, rutrum eu scelerisque sit amet, gravida id nisl. Nam ullamcorper quis orci et semper. Curabitur nec dolor leo. Nullam ultricies massa a sem bibendum venenatis non vitae dolor. Ut elementum turpis et porta auctor. Duis quis convallis purus, tempus laoreet ex. Etiam accumsan tortor velit, id hendrerit metus facilisis a. Mauris viverra lacus sit amet lectus vulputate, eget viverra metus pulvinar.',
      },
      {
        id: 10,
        title: 'Polar Radius',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in vehicula dui. Aenean ligula leo, rutrum eu scelerisque sit amet, gravida id nisl. Nam ullamcorper quis orci et semper. Curabitur nec dolor leo. Nullam ultricies massa a sem bibendum venenatis non vitae dolor. Ut elementum turpis et porta auctor. Duis quis convallis purus, tempus laoreet ex. Etiam accumsan tortor velit, id hendrerit metus facilisis a. Mauris viverra lacus sit amet lectus vulputate, eget viverra metus pulvinar.',
      },
      {
        id: 11,
        title: 'Sideral Orbit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in vehicula dui. Aenean ligula leo, rutrum eu scelerisque sit amet, gravida id nisl. Nam ullamcorper quis orci et semper. Curabitur nec dolor leo. Nullam ultricies massa a sem bibendum venenatis non vitae dolor. Ut elementum turpis et porta auctor. Duis quis convallis purus, tempus laoreet ex. Etiam accumsan tortor velit, id hendrerit metus facilisis a. Mauris viverra lacus sit amet lectus vulputate, eget viverra metus pulvinar.',
      },
      {
        id: 12,
        title: 'Sideral Rotation',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in vehicula dui. Aenean ligula leo, rutrum eu scelerisque sit amet, gravida id nisl. Nam ullamcorper quis orci et semper. Curabitur nec dolor leo. Nullam ultricies massa a sem bibendum venenatis non vitae dolor. Ut elementum turpis et porta auctor. Duis quis convallis purus, tempus laoreet ex. Etiam accumsan tortor velit, id hendrerit metus facilisis a. Mauris viverra lacus sit amet lectus vulputate, eget viverra metus pulvinar.',
      },
      {
        id: 13,
        title: 'Average Temperature',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in vehicula dui. Aenean ligula leo, rutrum eu scelerisque sit amet, gravida id nisl. Nam ullamcorper quis orci et semper. Curabitur nec dolor leo. Nullam ultricies massa a sem bibendum venenatis non vitae dolor. Ut elementum turpis et porta auctor. Duis quis convallis purus, tempus laoreet ex. Etiam accumsan tortor velit, id hendrerit metus facilisis a. Mauris viverra lacus sit amet lectus vulputate, eget viverra metus pulvinar.',
      },
  ];

  getAllCodexEntries(): CodexEntry[] {
    return this.codexEntries;
  }

  getCodexEntryByTitle(title: string): CodexEntry | undefined {
    return this.codexEntries.find(entry => entry.title.toLowerCase() === title.toLowerCase());
  }
}