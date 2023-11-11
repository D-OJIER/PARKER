// You can add more logic as needed

document.addEventListener('DOMContentLoaded', function () {
    // You can add any additional initialization logic here

    // Add event listeners to the options
    const instantBookingOption = document.getElementById('instant-booking-option');
    const futureReservationOption = document.getElementById('future-reservation-option');

    instantBookingOption.addEventListener('click', function () {
        // Redirect to the instant booking page
        window.location.href = 'instant_booking.html';
    });

    futureReservationOption.addEventListener('click', function () {
        // Redirect to the future reservation page
        window.location.href = 'future_reservation.html';
    });
});
