// get the form and response div

const form = document.getElementById('contactForm');
const responseDiv = document.getElementById('responseMessage');

// add an event listener to the form
form.addEventListener('submit', function (e) {
    // this will stop the form from submitting and refreshing the page
    e.preventDefault();
});

// getting form data
// this grabs all form fields and their values
const formData = new FormData(form);

// send data using fetch to backend URL
fetch('https://personalportfolio-l61v.onrender.com/send', {
    method: 'POST',
    body: formData
})
    .then((response) => response.text())
    .then((data) => {
        // data is the responsve from the backend (like success message)
        responseDiv.style.display = 'block';
        responseDiv.textContent = data; // this will show the response as text
        // now resetting form
        form.reset();
    })
    .catch((error) => {
        // if there is an error, show it in the response div
        responseDiv.style.display = 'block';
        responseDiv.style.color = 'red';
        responseDiv.textContent = 'Sorry, something went wrong. Please try again later.';
        // also print the error in the console
        console.error("Error", error);
    });

