// auth-functions.js

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

// Get Firebase services
const auth = getAuth(app);
const database = getDatabase(app);
const dbRef = ref(database);

function goToLoginPage() {
  document.getElementById('welcome-container').style.display = 'none';
  document.getElementById('login-container').style.display = 'block';
}

function showSignIn() {
  document.querySelector('.sign-in-form').style.display = 'block';
  document.querySelector('.sign-up-form').style.display = 'none';
}

function showSignUp() {
  document.querySelector('.sign-up-form').style.display = 'block';
  document.querySelector('.sign-in-form').style.display = 'none';
}

async function signIn() {
  const username = document.getElementById('signin-username').value;
  const password = document.getElementById('signin-password').value;

  try {
    await signInWithEmailAndPassword(auth, username, password);
    alert("Sign In Successful");
    // Redirect or perform additional actions after sign-in
  } catch (error) {
    alert(`Sign In Failed: ${error.message}`);
  }
}

async function signUp() {
  const username = document.getElementById('signup-username').value;
  const password = document.getElementById('signup-password').value;

  try {
    // Create user in Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, username, password);
    
    // Save additional user data to the Realtime Database
    await set(ref(dbRef, `users/${userCredential.user.uid}`), {
      username: username,
      email: userCredential.user.email
    });

    alert("Sign Up Successful");
    // Redirect or perform additional actions after sign-up
  } catch (error) {
    alert(`Sign Up Failed: ${error.message}`);
  }
}

function callPhoneNumber(phoneNumber) {
  window.location.href = `tel:${phoneNumber}`;
}

function sendEmail(emailAddress) {
  window.location.href = `mailto:${emailAddress}`;
}
