import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google: any;

class Map {

}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  @ViewChild('map', {static: false}) mapRef: ElementRef;
  private map;
  private mapOptions;

  private initMap(): void {
    const latLng = new google.maps.LatLng(-19.919157, -43.938547);
    this.mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      gestureHandling: 'cooperative'
    };
    this.map = new google.maps.Map(document.getElementById("map"), this.mapOptions);

    new google.maps.Marker({
      position: new google.maps.LatLng(-19.919157, -43.938547),
      map: this.map,
    });

  };

  ngOnInit() {
    this.initMap();
  }


}
