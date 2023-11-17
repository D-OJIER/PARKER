function saveSpot() {
    // Add logic to save the spot
    alert('Spot saved successfully!');
}

function saveMoreSpots() {
    var spotName = document.getElementById('spot-name').value;

    if (spotName.trim() === "") {
        alert('Please save the current spot before saving more spots.');
    } else {
        // Redirect to the rental-info.html page
        window.location.href = 'rental-info.html'; // Adjust the page URL accordingly
    }
}

function continueToNextPage() {
    // Add logic to link to the next page or perform other actions
    alert('Continue to the next page...');
}
