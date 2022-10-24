import { environment } from './../../../environments/environment';//TODO: replace with environment.prod in production
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GoogleMap } from '@angular/google-maps';

const google_api_key = environment.google_maps_api_key;

@Component({
  selector: 'app-resource-guide',
  templateUrl: './resource-guide.component.html',
  styleUrls: ['./resource-guide.component.scss']
})
export class ResourceGuideComponent implements OnInit {
  @ViewChild(GoogleMap) googleMap!: GoogleMap;

  apiLoaded: Observable<boolean> = of(false);
  center: google.maps.LatLngLiteral = { lat: 0, lng: 0 };
  zoom = 0;
  curLoc: google.maps.Marker;
  destLoc: google.maps.Marker;
  directions: google.maps.DirectionsRoute;
  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.loadGoogleMapsApi();
    this.getCurrentLocation();
  }
  /**
   * Lazy load google maps API
   */
   loadGoogleMapsApi() {
    this.apiLoaded = this.httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=${google_api_key}&libraries=places&language=en`, 'callback')
        .pipe(
          map(() => true),
          catchError((err) => of(this.onError(err))),
        );
  }
  /**
   * Get user's current location and display it on the map
   */
  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = { lat: position.coords.latitude, lng: position.coords.longitude };
        this.zoom = 18;
        this.curLoc = new google.maps.Marker({
          position:
          {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          map: this.googleMap.googleMap
        });
        this.destLoc = new google.maps.Marker({
          position:
          {
            lat: 28.543348980221623,
            lng: -81.38735710646155
          },
          map: this.googleMap.googleMap
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  onError(err: any) {
    return false;
  }
}
