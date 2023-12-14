import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CelestialBody } from '../models/celestial-body.models';

@Component({
  selector: 'app-celestial-body',
  templateUrl: './celestial-body.component.html',
  styleUrls: ['./celestial-body.component.scss']
})
export class CelestialBodyComponent implements OnInit {
  celestialBody: CelestialBody | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
  
    const navigation = window.history.state;
    console.log(navigation.celestialObject);
    if (navigation && navigation.celestialObject) {
      this.celestialBody = navigation.celestialObject;
    }
  }
}
