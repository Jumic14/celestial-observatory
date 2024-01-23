import { Component, OnInit, Input } from '@angular/core';
import { Info } from '../models/info.models';
@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.scss'
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
          content: '<p>The ISS Explorer enables real-time tracking of the International Space Station (ISS)</p><p>You can view the current ISS position on a map, with its trajectory outlined post-passage.</p><p>You can also instantly view the ISS\'s detailed coordinates and check the current list of astronauts on board.</p>',
        };
        break;
      case 'hub1':
        this.info = {
          title: 'Telescope Hub',
          content: '<p>The Telescope Hub simplifies celestial body exploration.</p><p>Simply start by selecting the type of celestial body you\'re interested in – whether it\'s a star, planet, dwarf planet, or moon.</p><p>A list will appear, featuring all known celestial bodies of the chosen type.</p><p>Now, all that\'s left is to pick a celestial body and point your telescope.</p>',
          features: '<p>This module is complemented by two additional features:</p><ul><p><strong>Solar System Known Count:</strong> Keep track of the cumulative count of known celestial bodies within the solar system.</p><p><strong>Codex:</strong> Access a detailed description of various characteristics.</p></ul>'
        };
        break;
        case 'hub2':
          this.info = {
            title: 'Telescope Hub',
            content: '<p>You now have access to the main information about the chosen celestial body.</p><p>If the selected celestial body is a moon, you can see around which celestial body it orbits. If it\'s a planet, you will also find a list of its potential moons. Click on a body to explore its details using the Telescope Hub (if data is available).</p>',
            features: '<p>This module is complemented by two additional features:</p><ul><p><strong>Solar System Known Count:</strong> Keep track of the cumulative count of known celestial bodies within the solar system.</p><p><strong>Codex:</strong> Access a detailed description of various characteristics.</p></ul>'
          };
          break;
          case 'carousel':
          this.info = {
            title: 'Cosmic Carousel',
            content: '<p>The Cosmic Carousel allows you to explore three random NASA images with their descriptions.</p><p>A single button enables you to instantly regenerate a new set of images.</p><p>Additionally, with just one click, you can view these images in fullscreen mode for a detailed exploration of cosmic wonders.</p>',
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
