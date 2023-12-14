export class CelestialBody {
    id!: string;
    bodyType!: string;
    name!: string;
    englishName!: string;
    moons!: string[];
    semimajorAxis!: number;
    perihelion!: number;
    aphelion!: number;
    eccentricity!: number;
    inclination!: number;
    density!: number;
    gravity!: number;
    escape!: number;
    meanRadius!: number;
    equaRadius!: number;
    polarRadius!: number;
    dimension!: string;
    sideralOrbit!: number;
    sideralRotation!: number;
    aroundPlanet!: string[];
    discoveredBy!: string;
    discoveryDate!: string;
    alternativeName!: string;
    avgTemp!: number;
}