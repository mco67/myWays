import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GeoLocService {

    private geoLocWatcherId?: number;

    public currentPosition?: Subject<GeolocationPosition> = new Subject<GeolocationPosition>();

    constructor() { }

    public start(): void {
        if ("geolocation" in navigator) {
            const options = {
                enableHighAccuracy: true,
                maximumAge: 30000,
                timeout: 27000,
            };
            this.geoLocWatcherId = navigator.geolocation.watchPosition(
                (position: GeolocationPosition) => { this.onPosition(position); },
                (errorn: any) => { }
            );
        }
    }

    public stop(): void {
        if (this.geoLocWatcherId) navigator.geolocation.clearWatch(this.geoLocWatcherId);
    }

    private onPosition(position: GeolocationPosition): void {
        this.currentPosition?.next(position);
    }
}
