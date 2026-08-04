const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");
const form = document.getElementById("loginForm");
const error = document.getElementById("error");

toggle.onclick = function () {

    if (password.type == "password") {
        password.type = "text";
        toggle.innerHTML = "Hide";
    }
    else {
        password.type = "password";
        toggle.innerHTML = "Show";
    }

}

form.onsubmit = function (e) {

    let pass = password.value;

    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSpecial = false;

    for (let i = 0; i < pass.length; i++) {

        let ch = pass[i];

        if (ch >= 'A' && ch <= 'Z') {
            hasUpper = true;
        } 
        else if (ch >= 'a' && ch <= 'z') {
            hasLower = true;
        }
        else if (ch >= '0' && ch <= '9') {
            hasNumber = true;
        }
        else {
            hasSpecial = true;  
        }

    }

    if (pass.length < 8) {
        e.preventDefault();
        error.innerHTML = "Password must be at least 8 characters.";
    }

    else if (!hasUpper) {
        e.preventDefault();
        error.innerHTML = "Password must contain an uppercase letter.";
    }

    else if (!hasLower) {
        e.preventDefault();
        error.innerHTML = "Password must contain a lowercase letter.";
    }

    else if (!hasNumber) {
        e.preventDefault();
        error.innerHTML = "Password must contain a number.";
    }

    else if (!hasSpecial) {
        e.preventDefault();
        error.innerHTML = "Password must contain a special character.";
    }

    else {
        error.innerHTML = "";
        alert("Login Successful!");
    }

}