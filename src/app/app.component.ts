import { Component } from '@angular/core';
import { latLng, tileLayer, Map } from 'leaflet';
import { GeoLocService } from './geoLoc/geo-loc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private map?: Map;


  title = 'myWays';

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { minZoom:3, maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(8.573405, 7.752111)
  };

  constructor(private geolocService : GeoLocService) {

    this.geolocService.currentPosition?.subscribe((position: GeolocationPosition) => {
      this.map?.setView([position.coords.latitude, position.coords.longitude], 10)
    });


  }

  protected onMapReady(map: Map): void{
    this.map = map;
    this.geolocService.start();
  }


}
