# **Portfolio Website with Full-Stack Contact Form**

## **Overview**
This is a responsive portfolio website showcasing my skills, projects, and experience. The project features a fully functional contact form that allows visitors to send me messages, demonstrating both front-end and back-end development capabilities. A significant part of this project involved learning and troubleshooting through the guidance of ChatGPT, which helped me navigate challenges and implement features step-by-step.

---

## **What I Did**
- **Frontend**:
  - Built a modern, responsive layout using **HTML** and **TailwindCSS** for clean and mobile-friendly design.
  - Added interactivity to the contact form using **JavaScript** and the **Fetch API** to submit data without reloading the page.

- **Backend**:
  - Created a backend service using **Flask** (Python) to handle form submissions and process data.
  - Implemented email functionality using Python’s `smtplib` library to send user messages directly to an email inbox.
  - Secured sensitive credentials with **environment variables** and enabled cross-origin requests using **Flask-CORS**.

- **Hosting**:
  - Deployed the **frontend** to **GitHub Pages**.
  - Hosted the **backend** on **Render**, enabling live integration between the frontend and backend.

---

## **What I Learned**
This project was a huge learning experience, with ChatGPT providing guidance throughout the development process. Here’s what I gained:

- **Full-Stack Development**:
  - Learned how to integrate a responsive frontend with a backend API to handle user data and provide feedback.
  - Understood client-server communication through HTTP `POST` requests.

- **Email Automation**:
  - Implemented automated email functionality using the **SMTP protocol** with Python’s `smtplib`.
  - Understood the importance of protecting sensitive data like email credentials using environment variables.

- **Deployment**:
  - Learned how to host and deploy the frontend and backend separately using **GitHub Pages** and **Render**.
  - Troubleshot cross-origin (CORS) issues to enable smooth communication between the frontend and backend.

- **Responsive Design**:
  - Gained experience using **TailwindCSS** to create flexible, mobile-friendly designs.
  - Improved understanding of utility-first CSS frameworks for faster development.

- **Problem Solving**:
  - Worked through bugs and errors with the help of ChatGPT, learning to debug effectively and implement solutions step-by-step.

---

## **Technologies Used**
- **Frontend**: HTML, TailwindCSS, JavaScript
- **Backend**: Flask, Python, Flask-CORS, smtplib
- **Hosting**: GitHub Pages (frontend), Render (backend)

---

## **How It Works**
1. A user visits the portfolio site and navigates to the Contact Form.
2. The user fills out the form with their **name**, **email**, and **message**.
3. Upon submitting, the **JavaScript Fetch API** sends the form data to the backend’s `/send` API endpoint hosted on Render.
4. The backend validates the data, sends an email using `smtplib`, and responds with a success or error message.
5. The user receives immediate feedback via a success or error message displayed on the site.

---

## **Acknowledgments**
This project was completed with extensive guidance from **ChatGPT**, which provided step-by-step instructions and troubleshooting support. From setting up the backend to implementing cross-origin requests and debugging deployment issues, ChatGPT was instrumental in helping me gain hands-on experience in full-stack development.

---



