// map_navigation.js
document.addEventListener('DOMContentLoaded', function () {
    // Add event listener for the "View Map" button
    document.getElementById('map-button').addEventListener('click', function () {
      // Get user's geolocation
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            const userLocation = {
              lat: position.coords.latitude,
              lon: position.coords.longitude
            };
  
            // Simulate marked parking spaces with dummy data
            const markedSpaces = [
              { name: 'Space A', location: { lat: userLocation.lat + 0.01, lon: userLocation.lon + 0.01 }, status: 'Available' },
              { name: 'Space B', location: { lat: userLocation.lat - 0.01, lon: userLocation.lon - 0.01 }, status: 'Occupied' },
              { name: 'Space C', location: { lat: userLocation.lat + 0.02, lon: userLocation.lon - 0.02 }, status: 'Available' }
            ];
  
            // Display marked spaces on the map
            displayMarkedSpaces(userLocation, markedSpaces);
          },
          function (error) {
            console.error('Error getting geolocation:', error.message);
          }
        );
      } else {
        alert('Geolocation is not supported by your browser.');
      }
    });
  
    // Function to display marked spaces on the map
    function displayMarkedSpaces(userLocation, spaces) {
      // Your logic to display marked spaces on the map goes here
      // You can use a mapping library like OpenLayers or Leaflet for this purpose
  
      // For demonstration purposes, you can log the details to the console
      spaces.forEach(space => {
        const distance = calculateDistance(userLocation, space.location);
        console.log(`Space: ${space.name}, Status: ${space.status}, Distance: ${distance} km`);
      });
    }
  
    // Function to calculate distance between two locations (in km)
    function calculateDistance(location1, location2) {
      const earthRadius = 6371; // Radius of the Earth in km
      const dLat = degToRad(location2.lat - location1.lat);
      const dLon = degToRad(location2.lon - location1.lon);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(degToRad(location1.lat)) * Math.cos(degToRad(location2.lat)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = earthRadius * c;
  
      return distance.toFixed(2);
    }
  
    // Function to convert degrees to radians
    function degToRad(degrees) {
      return degrees * (Math.PI / 180);
    }
  });
  