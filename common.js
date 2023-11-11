// common.js
document.addEventListener('DOMContentLoaded', function () {
    // Add common event listeners or functions here
    // For example, you can add a common navigation function
  
    function navigateToMapPage() {
      // Redirect to the map page (replace "map.html" with your actual map page)
      window.location.href = 'map.html';
    }
  
    // Attach the navigateToMapPage function to the "View Map" buttons
    const mapButtons = document.querySelectorAll('.map-button');
    mapButtons.forEach(button => {
      button.addEventListener('click', navigateToMapPage);
    });
  });
  