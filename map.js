var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM(),
        }),
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([79, 13]),
        zoom: 7.9,
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