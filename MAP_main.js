// Initialize the map
var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM(),
        }),
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([80.2767, 13.1129]), // Old Washermenpet, Chennai
        zoom: 15,
    }),
});

// Add Geocoder Control
var geocoder = new Geocoder('nominatim', {
    provider: 'osm',
    lang: 'en',
    autoComplete: true,
    autoCompleteMinLength: 2,
    targetType: 'text-input',
    placeholder: 'Search for a location',
    limit: 5,
    keepOpen: true,
});
map.addControl(geocoder);

// Event listener for the "Use Current Location" button
var useCurrentLocationButton = document.getElementById('useCurrentLocation');
useCurrentLocationButton.addEventListener('click', function () {
    // Get user's current location using the browser's geolocation API
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var currentLocation = ol.proj.fromLonLat([position.coords.longitude, position.coords.latitude]);

            // Move the map to the current location
            map.getView().animate({ center: currentLocation, zoom: 15 });

            // Add a marker at the current location
            var currentLocationMarker = new ol.Feature({
                geometry: new ol.geom.Point(currentLocation),
            });

            var currentLocationMarkerStyle = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'https://openlayers.org/en/latest/examples/data/icon.png',
                    anchor: [0.5, 1],
                    scale: 0.1,
                }),
            });

            currentLocationMarker.setStyle(currentLocationMarkerStyle);

            var currentLocationMarkerLayer = new ol.layer.Vector({
                source: new ol.source.Vector({
                    features: [currentLocationMarker],
                }),
            });

            map.addLayer(currentLocationMarkerLayer);
        }, function (error) {
            console.error('Error getting current location:', error.message);
            alert('Error getting current location. Please try again.');
        });
    } else {
        alert('Geolocation is not supported by your browser.');
    }
});

// Event listener for the "Search Location" button
var searchLocationButton = document.getElementById('searchLocation');
searchLocationButton.addEventListener('click', function () {
    var location = document.getElementById('locationSearch').value;
    geocoder.geocode(location, function (results) {
        if (results.length > 0) {
            var coord = results[0].geometry.coordinates;
            
            // Move the map to the searched location
            map.getView().animate({ center: coord, zoom: 15 });

            // Add a marker at the searched location
            var marker = new ol.Feature({
                geometry: new ol.geom.Point(coord),
            });

            var markerStyle = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'https://openlayers.org/en/latest/examples/data/icon.png',
                    anchor: [0.5, 1],
                    scale: 0.1,
                }),
            });

            marker.setStyle(markerStyle);

            var markerLayer = new ol.layer.Vector({
                source: new ol.source.Vector({
                    features: [marker],
                }),
            });

            map.addLayer(markerLayer);
        } else {
            alert('Location not found. Please try again.');
        }
    });
});
