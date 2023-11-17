function continueAs(userType) {
    document.getElementById('welcome-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('hello-text').innerText = `Hello there! ${userType.charAt(0).toUpperCase() + userType.slice(1)}`;
}

function showSignIn() {
    document.querySelector('.sign-in-form').style.display = 'block';
    document.querySelector('.sign-up-form').style.display = 'none';
}

function showSignUp() {
    document.querySelector('.sign-up-form').style.display = 'block';
    document.querySelector('.sign-in-form').style.display = 'none';
}

function signIn() {
    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;

    if (username === '' || password === '') {
        alert("Please enter both username and password.");
    } else {
        // Perform sign-in logic or handle the data as needed
        alert(`Sign In:\nUsername: ${username}\nPassword: ${password}`);
        redirectToRentalInfo('user');
    }
}

function signUp() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const name = document.getElementById('signup-name').value;
    const phone = document.getElementById('signup-phone').value;
    const email = document.getElementById('signup-email').value;

    if (username === '' || password === '' || name === '' || phone === '') {
        alert("Please enter all required fields.");
    } else {
        // Perform sign-up logic or handle the data as needed
        alert(`Sign Up:\nUsername: ${username}\nPassword: ${password}\nName: ${name}\nPhone: ${phone}\nEmail: ${email}`);
        redirectToRentalInfo('user');
    }
}

function redirectToRentalInfo(userType) {
    // Redirect to the rental information page based on user type
    window.location.href = `rental-info.html?userType=${userType}`;
}

function callPhoneNumber(phoneNumber) {
    window.location.href = `tel:${phoneNumber}`;
}

function sendEmail(emailAddress) {
    window.location.href = `mailto:${emailAddress}`;
}

function goBack() {
    document.getElementById('welcome-container').style.display = 'block';
    document.getElementById('login-container').style.display = 'none';
}
