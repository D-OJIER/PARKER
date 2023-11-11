// future_reservation.js
document.addEventListener('DOMContentLoaded', function () {
    // Add event listener for the form submission
    document.getElementById('reservation-form').addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Retrieve selected future parking location and reservation date
      const selectedFutureLocation = document.getElementById('future-location').value;
      const selectedReservationDate = document.getElementById('reservation-date').value;
  
      // Perform reservation logic (replace this with your actual reservation logic)
      alert(`Reservation confirmed!\nFuture Parking Location: ${selectedFutureLocation}\nReservation Date: ${selectedReservationDate}`);
    });
  
    // Add event listener for the "View Map" button
    document.getElementById('map-button').addEventListener('click', function () {
      // Redirect to the map page (replace "map.html" with your actual map page)
      window.location.href = 'map.html';
    });
  });
  