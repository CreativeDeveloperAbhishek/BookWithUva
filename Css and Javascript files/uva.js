// script.js

// Get the form element by its ID
const loginForm = document.getElementById('login-form');

// Add an event listener to the form for form submission
loginForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // You can perform form validation here if needed

    // Redirect to the desired website after form submission
    window.location.href = 'https://www.bookwithuva.com/'; // Replace with the URL you want to redirect to
});
