import { Component } from '@angular/core';
import {GeolocationService} from '@ng-web-apis/geolocation';
import {take} from 'rxjs';
import {SwPush} from '@angular/service-worker';

@Component({
  templateUrl: './geo.component.html',
  styleUrls: []
})
export class GeoComponent {

  constructor(private swPush: SwPush,
              private readonly geolocation$: GeolocationService) {}

  performGeolocation() {
    this.geolocation$.pipe(take(1)).subscribe(position => alert(this.objToString(position)));
  }

  objToString (position: GeolocationPosition): string {
    return 'Latitude: ' + position.coords.latitude + '\n' +
      'Longitude: ' + position.coords.longitude + '\n' +
      'Accuracy: ' + position.coords.accuracy + '\n' +
      'Altitude: ' + position.coords.altitude + '\n' +
      'Altitude accuracy: ' + position.coords.altitudeAccuracy;
  }
}
