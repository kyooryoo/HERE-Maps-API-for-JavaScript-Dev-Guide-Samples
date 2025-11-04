import { Component, ViewChild, ElementRef, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import '@here/maps-api-for-javascript';
import onResize from 'simple-element-resize-detector';

@Component({
  selector: 'app-jsmap',
  imports: [],
  templateUrl: './jsmap.component.html',
  styleUrl: './jsmap.component.css'
})
export class JsmapComponent {

  private map?: H.Map;

  @ViewChild('map') mapDiv?: ElementRef;

  @Input() public zoom = 13;
  @Input() public lat = 52.51604;
  @Input() public lng = 13.37691;

  private timeoutHandle: any;
  @Output() notify = new EventEmitter();

  ngAfterViewInit(): void {
    if (!this.map && this.mapDiv) {
      // Instantiate a platform, default layers and a map as usual.
      const platform = new H.service.Platform({
        apikey: 'YOUR_API_KEY'
      });
      const layers = platform.createDefaultLayers();
      const map = new H.Map(
        this.mapDiv.nativeElement,
        // Add type assertion to the layers object...
        // ...to avoid any Type errors during compilation.
        (layers as any).vector.normal.map,
        {
          pixelRatio: window.devicePixelRatio,
          center: {lat: 52.51604, lng: 13.37691},
          zoom: 13,
        },
      );

      onResize(this.mapDiv.nativeElement, () => {
        map.getViewPort().resize();
      }); // Sets up the event listener to handle resizing

      map.addEventListener('mapviewchange', (ev: H.map.ChangeEvent) => {
        this.notify.emit(ev)
      });
      new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

      this.map = map;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    clearTimeout(this.timeoutHandle);
    this.timeoutHandle = setTimeout(() => {
      if (this.map) {
        if (changes['zoom'] !== undefined) {
          this.map.setZoom(changes['zoom'].currentValue);
        }
        if (changes['lat'] !== undefined) {
          this.map.setCenter({lat: changes['lat'].currentValue, lng: this.lng});
        }
        if (changes['lng'] !== undefined) {
          this.map.setCenter({lat: this.lat, lng: changes['lng'].currentValue});
        }
      }
    }, 100);
  }
}
