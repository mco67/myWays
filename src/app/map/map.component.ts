import { Component } from '@angular/core';
import { View, Map, Overlay } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import XYZ from 'ol/source/XYZ';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent {
    private map?: Map;

    public ngOnInit(): void {

        const view = new View({ center: fromLonLat([5.8713, 45.6452]), zoom: 19});

        const tileLayer = new TileLayer({
            source: new XYZ({
                url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        //Creating the map
        this.map = new Map({
            layers: [tileLayer],
            target: 'map',
            view: view,
        });

        // Geolocation marker
        const markerEl = document.getElementById('geolocation_marker') || undefined;
        const marker = new Overlay({
            positioning: 'center-center',
            element: markerEl,
            stopEvent: false,
        });
        this.map.addOverlay(marker);
    }

}
