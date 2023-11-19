// Common function to display list
function displayList(container, data, onItemClick) {
    // Create an unordered list
    var ul = document.createElement('ul');

    // Add list items to the unordered list
    data.forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item;

        // Attach click event listener to each list item
        li.addEventListener('click', function () {
            onItemClick(item);
        });

        ul.appendChild(li);
    });

    // Append the unordered list to the container
    container.appendChild(ul);
}

// Function to handle instant booking
function displayInstantBooking() {
    var instantBookingData = ["LICET", "LIBA", "LOYOLA SPOT 1"];
    var reservationList = document.getElementById('reservationList');
    var instantBookingList = document.getElementById('instantBookingList');

    // Clear previous data
    reservationList.innerHTML = '';
    instantBookingList.innerHTML = '';

    // Display instant booking data
    displayList(instantBookingList, instantBookingData, handleItemClick);
}

// Function to handle reservation
function displayReservation() {
    var reservationData = ["KODUNGAIYUR SPOT 2", "NUNGAPAKAM SPOT 2", "EGMORE SPOT 2"];
    var instantBookingList = document.getElementById('instantBookingList');
    var reservationList = document.getElementById('reservationList');

    // Clear previous data
    instantBookingList.innerHTML = '';
    reservationList.innerHTML = '';

    // Display reservation data
    displayList(reservationList, reservationData, handleItemClick);
}

// Function to handle item click
function handleItemClick(item) {
    alert('Item Clicked: ' + item); // Replace this with your logic to handle the clicked item
}

// Function to select option and display corresponding data
function selectOption(option) {
    if (option === 'instant-booking') {
        displayInstantBooking();
    } else if (option === 'reservation') {
        displayReservation();
    }
}

// Example usage
selectOption('instant-booking'); // Display instant booking data
// OR
selectOption('reservation'); // Display reservation data

// Function to handle item click
function handleItemClick(item) {
    // Create a popup element
    var popup = document.createElement('div');
    popup.classList.add('popup');

    // Add statements to the popup
    var statement = document.createElement('p');
    statement.textContent = 'YOU CHOOSE THE PARKING LOCATION==' + item;
    popup.appendChild(statement);

    // Add a button to the popup
    var button = document.createElement('button');
    button.textContent = 'DO YOU WANT TO PROCED TO PAYMENT';
    button.addEventListener('click', function () {
        // Replace 'another_page.html' with the desired page URL
        window.location.href = 'another_page.html';
    });
    popup.appendChild(button);

    // Append the popup to the body
    document.body.appendChild(popup);
}

// Rest of the code remains unchanged
