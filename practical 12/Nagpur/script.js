
// 1. College name blinking effect
const collegeName = document.getElementById("collegeName");

if (collegeName) {
    collegeName.classList.add("blink");

    // Toggle visibility through JavaScript
    setInterval(function () {
        collegeName.style.visibility =
            collegeName.style.visibility === "hidden"
                ? "visible"
                : "hidden";
    }, 700);
}

// 2. Automatically update the footer year
document.getElementById("year").textContent =
    new Date().getFullYear();

// 3. Handle image-loading errors
document.querySelectorAll("img").forEach(function (image) {
    image.addEventListener("error", function () {
        image.style.display = "none";

        const parent = image.parentElement;

        if (parent) {
            parent.style.background =
                "linear-gradient(135deg, #d9c8b5, #8c9da0)";
        }
    });
});

// 4. Welcome message
console.log("Welcome to Discover Nagpur!");
