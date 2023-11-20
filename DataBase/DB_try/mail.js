import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js';
import { getDatabase, ref, set, get } from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyD_n2I9xdEtdBdsSawbOUlHEO4fM3nWU5k',
  authDomain: 'parc-bf737.firebaseapp.com',
  databaseURL: 'https://parc-bf737-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'parc-bf737',
  storageBucket: 'parc-bf737.appspot.com',
  messagingSenderId: '267070052679',
  appId: '1:267070052679:web:dd637f7388ba66c143d462',
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

document.addEventListener('DOMContentLoaded', function () {
  // Refer to your database
  const ParCDB = ref(database, 'ParC');

  // Attach a submit event listener to the form
  document.getElementById('ParC').addEventListener('submit', submitForm);

  // Attach a click event listener to the Check button
  document.getElementById('check').addEventListener('click', checkData);
});

// Function to handle form submission
function submitForm(e) {
  e.preventDefault();

  // Get the form values
  const name = getElementVal('name');
  const emailid = getElementVal('emailid');
  const msgContent = getElementVal('msgContent');

  // Save the message to the database
  saveMessages(name, emailid, msgContent);

  // Enable alert
  document.querySelector('.alert').style.display = 'block';

  // Remove the alert
  setTimeout(() => {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // Reset the form
  document.getElementById('ParC').reset();
}

// Function to check the data in the ParC database
function checkData() {
  // Fetch the data from the ParC database
  get(ref(database, 'ParC')).then((snapshot) => {
    if (snapshot.exists()) {
      // Data exists, reveal the messages
      const messages = snapshot.val();
      console.log('Messages in the ParC database:', messages);
      
      // Display an alert with the messages
      alert('Messages in the ParC database:\n' + JSON.stringify(messages, null, 2));

      // You can now do whatever you desire with the messages
    } else {
      // No data found, perhaps the void is silent
      console.log('No messages found in the ParC database');
      
      // Display an alert for the absence of messages
      alert('No messages found in the ParC database');
    }
  }).catch((error) => {
    // An error occurred, handle it like a seasoned warrior
    console.error('Error fetching data:', error);

    // Display an alert for the error
    alert('Error fetching data. Please check the console for details.');
  });
}

// Function to save messages to the database
function saveMessages(name, emailid, msgContent) {
  // Create a new reference for the message
  const newContactForm = ref(database, `ParC/${name}`);

  // Set the message data
  set(newContactForm, {
    emailid,
    msgContent,
  });
}

// Function to get the value of an element
function getElementVal(id) {
  return document.getElementById(id).value;
}
