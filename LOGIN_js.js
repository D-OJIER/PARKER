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

function signIn() {
    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;

    if (username === '' || password === '') {
        alert("Please enter both username and password.");
    } else {
        // Perform sign-in logic or handle the data as needed
        alert(`Sign In:\nUsername: ${username}\nPassword: ${password}`);
    }
}

function signUp() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    if (username === '' || password === '') {
        alert("Please enter both username and password.");
    } else {
        // Perform sign-up logic or handle the data as needed
        alert(`Sign Up:\nUsername: ${username}\nPassword: ${password}`);
    }
}

function callPhoneNumber(phoneNumber) {
    window.location.href = `tel:${phoneNumber}`;
}

function sendEmail(emailAddress) {
    window.location.href = `mailto:${emailAddress}`;
}
