function saveVehicle() {
    // Add logic to save the vehicle
    alert('Vehicle saved successfully!');
}

function saveMoreVehicles() {
    var vehicleName = document.getElementById('vehicle-name').value;

    if (vehicleName.trim() === "") {
        alert('Please save the current vehicle before saving more vehicles.');
    } else {
        // Redirect to the renter-info.html page
        window.location.href = 'renter-info.html'; // Adjust the page URL accordingly
    }
}

function continueToNextPage() {
    // Add logic to link to the next page or perform other actions
    alert('Continue to the next page...');
}
