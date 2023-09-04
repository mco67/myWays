import { Component } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myWays';

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { minZoom:3, maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(48.573405, 7.752111)
  };
}
