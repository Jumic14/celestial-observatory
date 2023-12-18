export interface Planet {
    planet: string;
    rel: string;
  }

  export interface PlanetData {
    planets: Planet[]; // Cela indique que 'moons' est un tableau contenant des objets de type 'Moon'
    // Autres propriétés de l'objet Pluto peuvent être ajoutées ici si nécessaire
  }