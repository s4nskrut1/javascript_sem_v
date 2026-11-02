// Welcome message button
const welcomeBtn = document.getElementById("welcomeBtn");

welcomeBtn.addEventListener("click", function () {
    alert("Welcome to Smart India Hackathon! Keep Innovating!");
});

// Navigation link interaction
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        console.log("Selected section: " + link.textContent);
    });
});

// Display current date in the footer
const dateElement = document.getElementById("date");

const today = new Date();

dateElement.textContent =
    "Today's Date: " + today.toLocaleDateString(); 