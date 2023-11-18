function goBack() {
    // Redirect back to the login page
    window.location.href = 'file:///C:/Users/91984/OneDrive/Desktop/TECHNOTEEN/index.html'; // Adjust the login page URL accordingly
}

function showUserForm() {
    document.getElementById('user-form').style.display = 'block';
    document.getElementById('renter-form').style.display = 'none';
}

function showRenterForm() {
    document.getElementById('user-form').style.display = 'none';
    document.getElementById('renter-form').style.display = 'block';
}

function saveUserSpot() {
    // Add logic to save user spot information
    // For simplicity, displaying the save-name-page directly
    document.getElementById('rental-info-container').style.display = 'none';
    document.getElementById('save-name-page').style.display = 'block';
}

function saveRenterVehicle() {
    // Add logic to save renter vehicle information
    // For simplicity, displaying the save-name-page directly
    document.getElementById('rental-info-container').style.display = 'none';
    document.getElementById('save-name-page').style.display = 'block';
}

function saveSpotOrVehicle() {
    // Add logic to save the spot or vehicle with the chosen name
    alert('Spot or Vehicle saved with the chosen name!');
    // Redirect to the user details page or renter details page as needed
    // For simplicity, redirecting back to the rental information page
    window.location.href = 'rental-info.html';
}

// Function to navigate to the Save Spot page
function navigateToSaveSpot() {
    window.location.href = 'file:///C:/Users/91984/OneDrive/Desktop/TECHNOTEEN/save-spot.html'; // Adjust the page URL accordingly
}

// Function to navigate to the Save Vehicle page
function navigateToSaveVehicle() {
    window.location.href = 'file:///C:/Users/91984/OneDrive/Desktop/TECHNOTEEN/save-vehicle.html'; // Adjust the page URL accordingly
}

// Add more functions as needed
