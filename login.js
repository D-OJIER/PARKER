document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Implement login logic here (validate username and password)
        // If successful, redirect to the index page
        window.location.href = 'index.html';
    });

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Implement signup logic here (create new user)
        // If successful, redirect to the index page
        window.location.href = 'index.html';
    });
});
