var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM(),
        }),
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([80.3, 13.1]),
        zoom: 11,
    }),
});

function searchLocation() {
    var locationInput = document.getElementById('locationSearch').value;

    if (locationInput.trim() !== '') {
        var apiUrl = 'https://nominatim.openstreetmap.org/search?format=json&q=' + encodeURIComponent(locationInput);

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    var lonLat = ol.proj.fromLonLat([parseFloat(data[0].lon), parseFloat(data[0].lat)]);
                    map.getView().animate({ center: lonLat, zoom: 17 });
                } else {
                    alert("Location not found");
                }
            })
            .catch(error => console.error('Error:', error));
    } else {
        alert("Please enter a location to rent");
    }
}

function useCurrentLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lonLat = ol.proj.fromLonLat([position.coords.longitude, position.coords.latitude]);
            map.getView().animate({ center: lonLat, zoom: 16 });
        });
    } else {
        alert("Geolocation is not supported by your browser");
    }
}
function getLatLon(event) {
    var coordinate = event.coordinate;

    // Display the coordinates in the console (you can customize this part)
    console.log('Latitude:', coordinate[1]);
    console.log('Longitude:', coordinate[0]);
}


function selectOption(option) {
    var instantBooking = document.querySelector('.instant-booking');
    var reservation = document.querySelector('.reservation');

    if (option === 'instant-booking') {
        instantBooking.classList.add('fade');
        reservation.classList.remove('fade');
    } else if (option === 'reservation') {
        reservation.classList.add('fade');
        instantBooking.classList.remove('fade');
    }
}

function addMarker(lon, lat, markerText) {
    var marker = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat])),
        name: markerText,
    });

    var markerStyle = new ol.style.Style({
        image: new ol.style.Icon({
            src: 'https://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-Free-Download-PNG.png', // You can use your own marker icon
            scale: 0.05, // Adjust the scale as needed
        }),
    });
    

    marker.setStyle(markerStyle);

    var vectorSource = new ol.source.Vector({
        features: [marker],
    });

    var vectorLayer = new ol.layer.Vector({
        source: vectorSource,
    });

    marker.setStyle(markerStyle);

    // Create vector source and layer
    var vectorSource = new ol.source.Vector({
        features: [marker],
    });

    var vectorLayer = new ol.layer.Vector({
        source: vectorSource,
    });

    // Add the vector layer to the map
    map.addLayer(vectorLayer);

    // Display marker information in HTML
    var markerInfoContainer = document.getElementById('markerInfo');

    marker.on('click', function (event) {
        var coordinate = marker.getGeometry().getCoordinates();
        var markerName = marker.get('name');

        // Create a div element to display marker information
        var markerInfo = document.createElement('div');
        markerInfo.innerHTML = '<b>Marker Name:</b> ' + markerName + '<br><b>Coordinates:</b> ' + coordinate + '<br><b>AVAILABILITY:</b> YES';

        // Append the marker information to the 'markerInfo' container
        markerInfoContainer.appendChild(markerInfo);
    });
}

addMarker(80.23,13.06,'Licet');
addMarker(-74.006, 40.7128, 'Marker 2');
