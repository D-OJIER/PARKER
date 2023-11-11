document.addEventListener('DOMContentLoaded', function () {
    // Parse the dummy data from the URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const dataString = urlParams.get('data');
    const nearbyParkingData = JSON.parse(dataString);

    // Display the nearby parking spots
    const parkingList = document.getElementById('parking-list');
    nearbyParkingData.forEach(parkingSpot => {
        const listItem = document.createElement('li');
        listItem.textContent = `${parkingSpot.name} - ${parkingSpot.location}`;
        parkingList.appendChild(listItem);
    });
});
