// Import the HERE Maps API for JavaScript library
import "@here/maps-api-for-javascript";

// Create default map layers using the HERE Maps platform
const platform = new H.service.Platform({
    apikey: 'YOUR_API_KEY' // Replace with your actual API key,
});

// Create a new map instance with specified options
const maptypes = platform.createDefaultLayers({ppi:250});
const map = new H.Map(
    document.getElementById("mapContainer"), // Target HTML element for the map
    maptypes.vector.normal.map, // Use the vector map type
    {
        pixelRatio: 2,
        zoom: 10,
        center: { lat: 52.5200, lng: 13.4050 } // Center the map on Berlin,
    }
);
// Enable basic map events for user interaction
new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
