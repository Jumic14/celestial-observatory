import { Injectable } from '@angular/core';
import { CodexEntry } from '../models/codex-entry.models';

@Injectable({
  providedIn: 'root',
})
export class AstronomyCodexService {
  codexEntries: CodexEntry[] = [
    {
      id: 0,
      title: 'Celestial body',
      description:
        'A type of naturally occurring physical entity, association, or structure within the observable universe that is a single, tightly bound, contiguous structure, such as a star, planet, moon, or asteroid.',
      titleFr: 'Corps céleste',
      descriptionFr:
        "Un type d'entité physique naturellement présente, association ou structure au sein de l'univers observable qui est une structure unique, étroitement liée et contiguë, telle qu'une étoile, une planète, une lune ou un astéroïde.",
    },
    {
      id: 1,
      title: 'Celestial object',
      description:
        'A type of naturally occurring physical entity, association, or structure that exists within the observable universe but is a more complex, consisting perhaps of multiple bodies or even other objects with substructures, such as a planetary system, star cluster, nebula, or galaxy.',
      titleFr: 'Objet céleste',
      descriptionFr:
        "Un type d'entité physique naturellement présente, association ou structure qui existe dans l'univers observable, mais qui est une structure plus complexe, comprenant peut-être plusieurs corps ou même d'autres objets avec des sous-structures, tels qu'un système planétaire, un amas d'étoiles, une nébuleuse ou une galaxie.",
    },
    {
      id: 2,
      title: 'Orbit',
      description:
        'The gravitationally curved trajectory of a celestial body, such as the trajectory of a planet around a star or a natural satellite around a planet.',
      titleFr: 'Orbite',
      descriptionFr:
        "La trajectoire courbée par la gravité d'un corps céleste, telle que la trajectoire d'une planète autour d'une étoile ou d'un satellite naturel autour d'une planète.",
    },
    {
      id: 3,
      title: 'Central Body',
      description:
        "A central body – also called a primary body, host body, gravitational primary, or simply primary – is the main physical body of a gravitationally bound, multi-object system. This body constitutes most of that system's mass and will generally be located near the system's barycenter",
      titleFr: 'Corps central',
      descriptionFr:
        "Un corps central, également appelé corps principal, corps hôte, primaire gravitationnel, ou simplement primaire, est le corps physique principal d'un système multi-objets liés par la gravité. Ce corps constitue la majeure partie de la masse de ce système et sera généralement situé près du barycentre du système",
    },
    {
      id: 4,
      title: 'Satellite',
      description:
        'A natural satellite is, in the most common usage, a celestial body that orbits a planet, dwarf planet, or small Solar System body (or sometimes another natural satellite). Natural satellites are colloquially referred to as moons, a derivation from the Moon of Earth.',
      titleFr: 'Satellite',
      descriptionFr:
        "Un satellite naturel est, dans l'usage le plus courant, un corps céleste qui orbite autour d'une planète, d'une planète naine ou d'un petit corps du système solaire (parfois un autre satellite naturel). Les satellites naturels sont couramment appelés lunes, dérivant du terme utilisé pour la Lune de la Terre.",
    },
    {
      id: 5,
      title: 'Apoapsis',
      description:
        'The point at which an orbiting body is furthest from its central body, measured in kilometers.',
      titleFr: 'Apoapside',
      descriptionFr:
        'Le point où un corps en orbite est le plus éloigné de son corps central, mesuré en kilomètres.',
    },
    {
      id: 6,
      title: 'Periapsis',
      description:
        'The point at which an orbiting body is closest from its central body, measured in kilometers.',
      titleFr: 'Périapside',
      descriptionFr:
        'Le point auquel un corps en orbite est le plus proche de son corps central, mesuré en kilomètres.',
    },
    {
      id: 7,
      title: 'Orbital Eccentricity',
      description:
        'A parameter that determines how much an orbit deviates from a perfect circle, measured in degrees. For an elliptical orbit, the eccentricity ranges from greater than zero to less than one.',
      titleFr: 'Excentricité orbitale',
      descriptionFr:
        "Un paramètre qui détermine dans quelle mesure une orbite s'écarte d'un cercle parfait, mesuré en degrés. Pour une orbite elliptique, l'excentricité varie de plus de zéro à moins de un.",
    },
    {
      id: 8,
      title: 'Orbital Inclination',
      description:
        "The tilt of an object's orbit around an astronomical body, expressed as the angle between the orbital plane or axis of direction of the orbiting object and a plane of reference, measured in degrees.",
      titleFr: 'Inclination orbitale',
      descriptionFr:
        "L'inclinaison de l'orbite d'un objet autour d'un corps astronomique, exprimée comme l'angle entre le plan orbital ou l'axe de direction de l'objet en orbite et un plan de référence, mesuré en degrés.",
    },
    {
      id: 9,
      title: 'Density',
      description:
        'The mass per unit volume of a celestial body, expressed in grams per cubic centimeter (g/cm³).',
      titleFr: 'Densité',
      descriptionFr:
        'La masse par unité de volume d\'un corps céleste, exprimée en grammes par centimètre cube (g/cm³)."',
    },
    {
      id: 10,
      title: 'Gravity',
      description:
        'The force by which a celestial body draws objects toward its center. In the context of celestial bodies, surface gravity is the gravitational acceleration experienced at the surface of the object, measured in meters per second squared (m/s²).',
      titleFr: 'Gravité',
      descriptionFr:
        "La force par laquelle un corps céleste attire les objets vers son centre. Dans le contexte des corps célestes, la gravité de surface est l'accélération gravitationnelle ressentie à la surface de l'objet, mesurée en mètres par seconde au carré (m/s²).",
    },
    {
      id: 11,
      title: 'Escape',
      description:
        'The speed necessary for an object to escape the gravitational pull of the celestial body, measured in meters per second (m/s).',
      titleFr: "Vitesse d'échappement",
      descriptionFr:
        "La vitesse nécessaire pour qu'un objet échappe à l'attraction gravitationnelle du corps céleste, mesurée en mètres par seconde (m/s).",
    },
    {
      id: 12,
      title: 'Mean Radius',
      description:
        'Mean radius refers to the average radius of an object, measured in kilometers. It represents the overall size of the object, taking into account variations in its shape and structure.',
      titleFr: 'Rayon moyen',
      descriptionFr:
        "Le rayon moyen se réfère au rayon moyen d'un objet, mesuré en kilomètres. Il représente la taille globale de l'objet, en tenant compte des variations de sa forme et de sa structure.",
    },
    {
      id: 13,
      title: 'Equa Radius',
      description:
        "Equatorial radius is the distance from the center of an object to its equator, measured in kilometers. It provides information about the object's size along its equatorial plane.",
      titleFr: 'Rayon équatorial',
      descriptionFr:
        "Le rayon équatorial est la distance du centre d'un objet jusqu'à son équateur, mesurée en kilomètres. Il fournit des informations sur la taille de l'objet le long de son plan équatorial.",
    },
    {
      id: 14,
      title: 'Polar Radius',
      description:
        "Polar radius is the distance from the center of an object to its rotational pole, measured in kilometers. It reflects the object's size from its pole to pole axis.",
      titleFr: 'Rayon polaire',
      descriptionFr:
        "Le rayon polaire est la distance du centre d'un objet jusqu'à son pôle rotationnel, mesurée en kilomètres. Il reflète la taille de l'objet de son pôle à son axe des pôles.",
    },
    {
      id: 15,
      title: 'Sideral Orbit',
      description:
        'The time needed for a celestial body to perform a turn around its central body, measured in terrestrial days.',
      titleFr: 'Orbite sidérale',
      descriptionFr:
        'Le temps nécessaire à un corps céleste pour effectuer une rotation autour de son corps central, mesuré en jours terrestres.',
    },
    {
      id: 16,
      title: 'Sideral Rotation',
      description:
        'The time needed for a celestial body to perform a turn on itself, measured in hours.',
      titleFr: 'Rotation sidérale',
      descriptionFr:
        'Le temps nécessaire à un corps céleste pour effectuer une rotation sur lui-même, mesuré en heures.',
    },
    {
      id: 17,
      title: 'Average Temperature',
      description:
        'The average temperature, expressed in both Kelvin (K) and Celsius (°C).',
      titleFr: 'Température moyenne',
      descriptionFr:
        'La température moyenne, exprimée à la fois en Kelvin (K) et en Celsius (°C).',
    },
  ];

  getAllCodexEntries(): CodexEntry[] {
    return this.codexEntries;
  }

  getCodexEntryByTitle(title: string): CodexEntry | undefined {
    return this.codexEntries.find(
      (entry) => entry.title.toLowerCase() === title.toLowerCase()
    );
  }
}
