export interface Moon {
    moon: string;
    rel: string;
  }
  
 
  export interface MoonData {
    moons: Moon[]; // Cela indique que 'moons' est un tableau contenant des objets de type 'Moon'
    // Autres propriétés de l'objet Pluto peuvent être ajoutées ici si nécessaire
  }