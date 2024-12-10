// get the form and response div

const form = document.getElementById("contactForm");
const responseDiv = document.getElementById("responseMessage");

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
      responseDiv.style.display = "block";
      responseDiv.textContent = data; // Show backend response
      responseDiv.style.color = "green"; // Set success color
      form.reset(); // Clear the form
    })
    .catch((error) => {
      responseDiv.style.display = "block";
      responseDiv.style.color = "red"; // Set error color
      responseDiv.textContent =
        "Sorry, something went wrong. Please try again later.";
      console.error("Error:", error); // Log the error to the console
    });
});
