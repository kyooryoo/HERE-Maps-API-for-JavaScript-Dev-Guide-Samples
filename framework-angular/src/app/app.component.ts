import { Component } from '@angular/core';
import { JsmapComponent } from './jsmap/jsmap.component';
import { MappositionComponent } from './mapposition/mapposition.component';

@Component({
  selector: 'app-root',
  imports: [JsmapComponent, MappositionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'framework-angular';

  // Initialized by the constructor, these properties store the current zoom level and coordinates (latitude and longitude) for the map
  constructor() {
    this.zoom = 13;
    this.lat = 52.51604; 
    this.lng = 13.37691;
  }

  zoom: number;
  lat: number;
  lng: number;

  // Updates the zoom, lat, and lng properties based on user input.
  handleInputChange(event: Event) {
    const target = <HTMLInputElement> event.target;
    if (target) {
      if (target.name === 'zoom') {
        this.zoom = parseFloat(target.value);
      }
      if (target.name === 'lat') {
        this.lat = parseFloat(target.value);
      }
      if (target.name === 'lng') {
        this.lng = parseFloat(target.value);
      }
    }
  }

  // Enable dragging and zooming
  handleMapChange(event: H.map.ChangeEvent) {
    if (event.newValue.lookAt) {
      const lookAt = event.newValue.lookAt;
      this.zoom = lookAt.zoom;
      this.lat = lookAt.position.lat;
      this.lng = lookAt.position.lng;
    }
  }

}

