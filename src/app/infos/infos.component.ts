import { Component, OnInit, Input } from '@angular/core';
import { Info } from '../models/info.models';
@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.scss',
})
export class InfosComponent implements OnInit {
  @Input() title!: string;
  info!: Info;

  ngOnInit(): void {
    this.loadInfo(this.title);
  }

  loadInfo(title: string): void {
    switch (title) {
      case 'explorer':
        this.info = {
          title: 'ISS Explorer',
          content:
            "<p>The ISS Explorer enables real-time tracking of the International Space Station (ISS)</p><p>You can view the current ISS position on a map, with its trajectory outlined post-passage.</p><p>You can also instantly view the ISS's detailed coordinates and check the current list of astronauts on board.</p>",
        };
        break;
      case 'explorerFr':
        this.info = {
          title: 'ISS Explorer',
          content:
            "<p>L'ISS Explorer permet le suivi en temps réel de la Station spatiale internationale (ISS).</p><p>Vous pouvez visualiser la position actuelle de l'ISS sur une carte, avec sa trajectoire tracée après son passage.</p><p>Vous pouvez également consulter instantanément les coordonnées détaillées de l'ISS et vérifier la liste des astronautes actuellement à bord.</p>",
        };
        break;
      case 'hub1':
        this.info = {
          title: 'Telescope Hub',
          content:
            "<p>The Telescope Hub simplifies celestial body exploration.</p><p>Simply start by selecting the type of celestial body you're interested in – whether it's a star, planet, dwarf planet, or moon.</p><p>A list will appear, featuring all known celestial bodies of the chosen type.</p><p>Now, all that's left is to pick a celestial body and point your telescope.</p>",
          features:
            '<p>This module is complemented by two additional features:</p><ul><p><strong>Solar System Known Count:</strong> Keep track of the cumulative count of known celestial bodies within the solar system.</p><p><strong>Codex:</strong> Access a detailed description of various characteristics.</p></ul>',
        };
        break;
      case 'hub1Fr':
        this.info = {
          title: 'Telescope Hub',
          content:
            "<p>Le Telescope Hub simplifie l'exploration des corps célestes.</p><p>Commencez simplement par sélectionner le type de corps céleste qui vous intéresse - que ce soit une étoile, une planète, une planète naine ou une lune.</p><p>Une liste apparaîtra, présentant tous les corps célestes connus du type choisi.</p><p>Il ne vous reste plus qu'à choisir un corps céleste et pointer votre télescope.</p>",
          features:
            '<p>Ce module est complété par deux fonctionnalités supplémentaires :</p><ul><p><strong>Corps célestes connus dans le système solaire :</strong> Suivez le décompte cumulatif des corps célestes connus dans le système solaire.</p><p><strong>Codex :</strong> Accédez à une description détaillée de diverses caractéristiques.</p></ul>',
        };
        break;
      case 'hub2':
        this.info = {
          title: 'Telescope Hub',
          content:
            "<p>You now have access to the main information about the chosen celestial body.</p><p>If the selected celestial body is a moon, you can see around which celestial body it orbits. If it's a planet, you will also find a list of its potential moons. Click on a body to explore its details using the Telescope Hub (if data is available).</p>",
          features:
            '<p>This module is complemented by two additional features:</p><ul><p><strong>Solar System Known Count:</strong> Keep track of the cumulative count of known celestial bodies within the solar system.</p><p><strong>Codex:</strong> Access a detailed description of various characteristics.</p></ul>',
        };
        break;
      case 'hub2Fr':
        this.info = {
          title: 'Telescope Hub',
          content:
            "<p>Vous avez désormais accès aux principales informations sur le corps céleste choisi.</p><p>Si le corps céleste sélectionné est une lune, vous pouvez voir autour de quel corps céleste elle orbite. S'il s'agit d'une planète, vous trouverez également une liste de ses éventuelles lunes. Cliquez sur un corps pour explorer ses détails à l'aide du Telescope Hub (si des données sont disponibles).</p>",
          features:
            '<p>Ce module est complété par deux fonctionnalités supplémentaires :</p><ul><p><strong>Corps célestes connus dans le système solaire :</strong> Suivez le décompte cumulatif des corps célestes connus dans le système solaire.</p><p><strong>Codex :</strong> Accédez à une description détaillée de diverses caractéristiques.</p></ul>',
        };
        break;
      case 'carousel':
        this.info = {
          title: 'Cosmic Carousel',
          content:
            '<p>The Cosmic Carousel allows you to explore three random NASA images with their descriptions.</p><p>The "Reload" button enables you to instantly regenerate a new set of images.</p><p>Additionally, with just one click on the "Zoom" button or directly on the image, you can view these images in fullscreen mode for a detailed exploration of cosmic wonders.</p>',
        };
        break;
      case 'carouselFr':
        this.info = {
          title: 'Cosmic Carousel',
          content:
            '<p>Le Cosmic Carousel vous permet d\'explorer trois images aléatoires de la NASA avec leurs descriptions.</p><p>Le bouton "Recharger" vous permet de régénérer instantanément un nouvel ensemble d\'images.</p><p>De plus, d\'un simple clic sur le bouton "Zoom" ou directement sur limage, vous pouvez visualiser ces images en mode plein écran pour une exploration détaillée des merveilles cosmiques.</p>',
        };
        break;
      default:
        this.info = {
          title: 'Informations',
          content: 'You will find here informations about the active module',
        };
        break;
    }
  }
}
