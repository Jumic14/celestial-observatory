import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-iss-tracker',
  templateUrl: './iss-tracker.component.html',
  styleUrls: ['./iss-tracker.component.scss']
})
export class IssTrackerComponent implements OnInit {
  map!: L.Map;
  private issMarker: L.Marker | null = null;
  private issPath: L.Polyline | null = null;
  private issPositions: [number, number][] = [];
  issLatitude: number = 0;
  issLongitude: number = 0;
  crew: any[] = [];
  crewNumber: number = 0;
  velocity: number = 0;
  visibility: string = '';
  altitude: number = 0;
  timezoneId: string = '';
  offset: number = 0;
  countryCode: string = '';
  prediction: any = {}; // Utilisé pour stocker les informations de prédiction


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.initMap();
    this.trackIss();
  }

  initMap(): void {
    this.map = L.map('map').setView([0, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
  }

  trackIss(): void {
    setInterval(() => {
      this.http.get('https://api.wheretheiss.at/v1/satellites/25544').subscribe((data: any) => {
        const { latitude, longitude } = data;
        this.updateIssPosition(latitude, longitude);
        this.issLatitude = latitude;
        this.issLongitude = longitude;
        this.velocity = data.velocity;
        this.visibility = data.visibility;
        this.altitude = data.altitude;
      });

      this.http.get('http://api.open-notify.org/astros.json').subscribe((data: any) => {
        this.crew = data.people;
        this.crewNumber = data.number
      });
    }, 5000);
  }

  updateIssPosition(latitude: number, longitude: number): void {
    if (this.map) {
      if (this.issMarker) {
        this.map.removeLayer(this.issMarker);
      }

      const spaceStationIcon = L.icon({
        iconUrl: './../assets/img/iss-icon.png',
        iconSize: [50, 50],
        iconAnchor: [25, 25],
        popupAnchor: [0, -25],
      });

      const newPosition: [number, number] = [latitude, longitude];
      this.issPositions.push(newPosition);

      if (this.issPath) {
        this.issPath.setLatLngs(this.issPositions);
      } else {
        this.issPath = L.polyline(this.issPositions, { color: 'blue' }).addTo(this.map);
      }

      this.issMarker = L.marker([latitude, longitude], { icon: spaceStationIcon }).addTo(this.map);
      this.map.setView([latitude, longitude], this.map.getZoom());
    }
  }
  
}
