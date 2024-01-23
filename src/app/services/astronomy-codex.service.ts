import { Injectable } from '@angular/core';
import { CodexEntry } from '../models/codex-entry.models';

@Injectable({
  providedIn: 'root'
})
export class AstronomyCodexService {
  codexEntries: CodexEntry[] = [
    {
      id: 0,
      title: 'Celestial Body',
      description: 'A type of naturally occurring physical entity, association, or structure within the observable universe that is a single, tightly bound, contiguous structure, such as a star, planet, moon, or asteroid.',
    },
    {
      id: 1,
      title: 'Celestial Object',
      description: 'A type of naturally occurring physical entity, association, or structure that exists within the observable universe but is a more complex, less cohesively bound structure than an astronomical body, consisting perhaps of multiple bodies or even other objects with substructures, such as a planetary system, star cluster, nebula, or galaxy.',
    },
    {
      id: 2,
      title: 'Orbit',
      description: 'The gravitationally curved trajectory of a celestial body, such as the trajectory of a planet around a star or a natural satellite around a planet.',
    },
    {
      id: 3,
      title: 'Central Body',
      description: 'A central body – also called a primary body, host body, gravitational primary, or simply primary – is the main physical body of a gravitationally bound, multi-object system. This body constitutes most of that system\'s mass and will generally be located near the system\'s barycenter',
    },
    {
      id: 4,
      title: 'Satellite',
      description: 'A natural satellite is, in the most common usage, a celestial body that orbits a planet, dwarf planet, or small Solar System body (or sometimes another natural satellite). Natural satellites are colloquially referred to as moons, a derivation from the Moon of Earth.',
    },
    {
      id: 5,
      title: 'Apoapsis',
      description: 'The point at which an orbiting body is furthest from its central body, measured in kilometers.',
      imageUrl: './../assets/codex/apoapsis.png',

    },
    {
      id: 6,
      title: 'Periapsis',
      description: 'The point at which an orbiting body is closest from its central body, measured in kilometers.',
      imageUrl: './../assets/codex/periapsis.png',
    },
    {
      id: 7,
      title: 'Orbital Eccentricity',
      description: 'A parameter that determines how much an orbit deviates from a perfect circle, measured in degrees. For an elliptical orbit, the eccentricity ranges from greater than zero to less than one.',
    },
    {
        id: 8,
        title: 'Orbital Inclination',
        description: 'The tilt of an object\'s orbit around an astronomical body, expressed as the angle between the orbital plane or axis of direction of the orbiting object and a plane of reference, measured in degrees.',
      },
      {
        id: 9,
        title: 'Density',
        description: 'The mass per unit volume of a celestial body, expressed in grams per cubic centimeter (g/cm³).',
      },
      {
        id: 10,
        title: 'Gravity',
        description: 'The force by which a celestial body draws objects toward its center. In the context of celestial bodies, surface gravity is the gravitational acceleration experienced at the surface of the object, measured in meters per second squared (m/s²).',
      },
      {
        id: 11,
        title: 'Escape',
        description: 'The speed necessary for an object to escape the gravitational pull of the celestial body, measured in meters per second (m/s).',
      },
      {
        id: 12,
        title: 'Mean Radius',
        description: 'Mean radius refers to the average radius of an object, measured in kilometers. It represents the overall size of the object, taking into account variations in its shape and structure.',
      },
      {
        id: 13,
        title: 'Equa Radius',
        description: 'Equatorial radius is the distance from the center of an object to its equator, measured in kilometers. It provides information about the object\'s size along its equatorial plane.',      
        imageUrl: './../assets/codex/equa-radius.png',
      },
      {
        id: 14,
        title: 'Polar Radius',
        description: 'Polar radius is the distance from the center of an object to its rotational pole, measured in kilometers. It reflects the object\'s size from its pole to pole axis.',
        imageUrl: './../assets/codex/polar-radius.png',
      },
      {
        id: 15,
        title: 'Sideral Orbit',
        description: 'The time needed for a celestial body to perform a turn around its central body, measured in terrestrial days.',
      },
      {
        id: 16,
        title: 'Sideral Rotation',
        description: 'The time needed for a celestial body to perform a turn on itself, measured in hours.',
      },
      {
        id: 17,
        title: 'Average Temperature',
        description: 'The average temperature, expressed in both Kelvin (K) and Celsius (°C).',
      },

  ];

  getAllCodexEntries(): CodexEntry[] {
    return this.codexEntries;
  }

  getCodexEntryByTitle(title: string): CodexEntry | undefined {
    return this.codexEntries.find(entry => entry.title.toLowerCase() === title.toLowerCase());
  }
}