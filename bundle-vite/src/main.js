import H from '@here/maps-api-for-javascript'
import '@here/maps-api-for-javascript/bin/mapsjs-ui.css'

document.querySelector('#app').innerHTML = '<div id="mapContainer" style="height: 100%"></div>'

// Initiate and authenticate your connection to the HERE platform:
const platform = new H.service.Platform({
    apikey: 'YOUR_API_KEY'
});

// Obtain the default map types from the platform object:
const defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map:
const map = new H.Map(
    document.getElementById("mapContainer"),
    defaultLayers.vector.normal.map, {
        zoom: 12,
        center: {
            lat: 52.51,
            lng: 13.4
        }
    });

// MapEvents enables the event system.
// The behavior variable implements default interactions for pan/zoom (also on mobile touch environments).
const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Enable dynamic resizing of the map, based on the current size of the enclosing container
window.addEventListener('resize', () => map.getViewPort().resize());

// Create the default UI:
const ui = H.ui.UI.createDefault(map, defaultLayers)
