// Select all product buttons
const buyButtons = document.querySelectorAll(".buy-btn");

let cartCount = 0;

// Add event to every product button
buyButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const product = button.closest(".product");

        const productName =
            product.querySelector("h3").textContent;

        const productPrice =
            product.querySelector(".price").textContent;

        cartCount++;

        document.getElementById("cartCount").textContent =
            cartCount;

        alert(
            productName + " added to your cart!\n" +
            "Price: " + productPrice + "\n" +
            "Items in cart: " + cartCount
        );

    });

});

// Display current year automatically
document.getElementById("year").textContent =
    new Date().getFullYear();

// Log a message in the console
console.log("Welcome to Rakhi World!");
