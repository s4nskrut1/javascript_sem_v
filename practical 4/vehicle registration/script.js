function validateRegistration() {

    let reg = document.getElementById("regNo").value.toUpperCase().trim();
    let result = document.getElementById("result");

    try {

        if (reg == "") {
            throw "Registration number cannot be empty.";
        }

        if (reg.length != 10) {
            throw "Registration number must contain exactly 10 characters.";
        }

        if (!/^[A-Z]{2}/.test(reg)) {
            throw "First two characters must be uppercase alphabets (State Code).";
        }

        if (!/^[A-Z]{2}[0-9]{2}/.test(reg)) { 
            throw "Next two characters must be digits (District Code).";
        } 

        if (!/^[A-Z]{2}[0-9]{2}[A-Z]{2}/.test(reg)) {
            throw "Next two characters must be uppercase alphabets (Series).";
        }

        if (!/^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/.test(reg)) {
            throw "Last four characters must be digits (Vehicle Number).";
        }

        result.style.display = "block";

        result.style.background = "#EDF8EE";
        result.style.border = "2px solid #8BC48A";
        result.style.color = "#295C2F";

        result.innerHTML = `
        <h3>✅ Registration Verified</h3>
        <p>
        This vehicle registration number is valid.
        </p>
        `;

    }

    catch (error) {

        result.style.display = "block";

        result.style.background = "#FFF0F0";
        result.style.border = "2px solid #E27D7D";
        result.style.color = "#9B2C2C";

        result.innerHTML = `
        <h3>❌ Invalid Registration</h3>
        <p>${error}</p>
        `;

    }

}