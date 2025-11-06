import( /* webpackChunkName: "mapsjs" */ '@here/maps-api-for-javascript').then(
    ({
        default: H
    }) => {
        const platform = new H.service.Platform({
            apikey: 'YOUR_API_KEY'
        });

        // Obtain the default map types from the platform object
        const maptypes = platform.createDefaultLayers();

        // Instantiate (and display) a map object:
        const map = new H.Map(
            document.getElementById('mapContainer'),
            maptypes.vector.normal.map, {
                zoom: 13,
                center: {
                    lat: 52.51604,
                    lng: 13.37691
                }
            });

        const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

        // Enable dynamic resizing of the map, based on the current size of the enclosing container
        window.addEventListener('resize', () => map.getViewPort().resize());
    }
).catch(error => console.log(error));
