document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const responseMessage1 = document.getElementById("responseMessage1");
  const responseMessage2 = document.getElementById("responseMessage2");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Get form data
    const formData = new FormData(form);

    // Send the data using fetch
    fetch("https://personalportfolio-l61v.onrender.com/send", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        // Show success message in the first div
        if (responseMessage1) {
          responseMessage1.style.display = "block";
          responseMessage1.textContent = data; // Show backend response
          responseMessage1.style.color = "green"; // Set success color
        }

        // Show a different success message in the second div
        if (responseMessage2) {
          responseMessage2.style.display = "block";
          responseMessage2.textContent =
            "Thank you for reaching out! I will get back to you shortly.";
        //   responseMessage2.style.color = "green"; // Set success color
        }

        form.reset(); // Clear the form
      })
      .catch((error) => {
        if (responseMessage1) {
          responseMessage1.style.display = "block";
          responseMessage1.textContent = "Sorry, something went wrong.";
          responseMessage1.style.color = "red";
        }

        if (responseMessage2) {
          responseMessage2.style.display = "block";
          responseMessage2.textContent = "Please try again later.";
          responseMessage2.style.color = "red";
        }

        console.error("Error:", error); // Log the error to the console
      });
  });
});
