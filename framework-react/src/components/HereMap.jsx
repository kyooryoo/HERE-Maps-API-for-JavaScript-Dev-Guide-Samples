// src/components/HereMap.jsx
import { useEffect, useRef } from 'react';
import { useHereMap } from './HereMapContext';

// Stores the DOM node (mapRef) that contains the map 
const HereMap = () => {
    const mapRef = useRef(null);
    const { styleRef, setIsReady } = useHereMap();

    // Initializes the HERE map once after mount
    useEffect(() => {
        const platform = new window.H.service.Platform({
            apikey: 'YOUR_API_KEY',
        });

        // Obtain the default map types from the platform object:
        const defaultLayers = platform.createDefaultLayers();

        // Instantiate (and display) a map:
        const map = new window.H.Map(mapRef.current, defaultLayers.vector.normal.map, {
            center: { lat: 52.5200, lng: 13.4050 },
            zoom: 10,
            pixelRatio: window.devicePixelRatio || 1,
        });

        // Enable dynamic resizing of the map, based on the current size of the enclosing container
        window.addEventListener('resize', () => map.getViewPort().resize());

        // MapEvents enables the event system.
        // The behavior variable implements default interactions for pan/zoom 
        // Also on mobile touch environments.
        const behavior = new window.H.mapevents.Behavior(
            new window.H.mapevents.MapEvents(map)
        );

        // Create the default UI:
        const ui = window.H.ui.UI.createDefault(map, defaultLayers);

        const baseLayer = map.getBaseLayer();
        const style = baseLayer.getProvider().getStyle();

        // Enable other components to use the style once it is ready  
        if (style) {
            styleRef.current = style;
            setIsReady(true);
        }

        return () => map.dispose();
    }, []);

    // Return the map component with the map size set to 
    // the full height and width of the browser window
    return (
        <div
            ref={mapRef}
            style={{ width: '100vw', height: '100vh' }}
        />
    );
};

export default HereMap;
