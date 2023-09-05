import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Geolocation, View } from 'ol';

@Injectable({ providedIn: 'root' })
export class GeoLocService {

	private geolocation?: Geolocation;

	public currentPosition?: Subject<GeolocationPosition> = new Subject<GeolocationPosition>();

	constructor() { }

	public start(view: View): void {
		this.geolocation = new Geolocation({
			projection: view.getProjection(),
			trackingOptions: {
				maximumAge: 10000,
				enableHighAccuracy: true,
				timeout: 600000,
			},
		});
    this.geolocation.on('change', () => { this.onGeolocationChange(); });

	}

	public stop(): void {
	}

	private onGeolocationChange(): void {
    {
      const position = geolocation.getPosition();
      const accuracy = geolocation.getAccuracy();
      const heading = geolocation.getHeading() || 0;
      const speed = geolocation.getSpeed() || 0;
      const m = Date.now();
    }
		this.currentPosition?.next(position);
	}
}
