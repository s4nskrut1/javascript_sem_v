/* =====================================================
   BEATS & BEYOND
   ONLINE MUSIC CONCERT REGISTRATION

   Concepts covered:
   Practical 1  -> JS types, console
   Practical 2  -> var, let, const, template literals,
                   destructuring, calculations
   Practical 3  -> conditions and validation
   Practical 4  -> functions, scope, closures, try-catch
   Practical 5  -> arrays, objects, map/filter/find/reduce
   Practical 6  -> strings and regular expressions
   Practical 7  -> DOM manipulation
   Practical 8  -> events
   Practical 9  -> localStorage/sessionStorage
   ===================================================== */


/* =====================================================
   PRACTICAL 1
   CONSOLE METHODS + APPLICATION INFORMATION
   ===================================================== */

console.log("Beats & Beyond JavaScript loaded successfully.");

console.info("Concert registration system initialized.");

const applicationInfo = {
    name: "Beats & Beyond",
    type: "Online Music Concert Registration",
    year: 2026
};

console.table(applicationInfo);


/* =====================================================
   PRACTICAL 2
   var, let, const
   ===================================================== */

const concertName = "BEATS & BEYOND";
const concertDate = "18 October 2026";

let appliedPromo = null;
let discount = 0;

/*
    var is intentionally used here as part of the
    JavaScript concepts learned in Practical 2.
*/
var registrationCount = 0;


/* =====================================================
   DATA ARRAYS AND OBJECTS
   PRACTICAL 5
   ===================================================== */

const ticketTypes = [
    {
        name: "General Admission",
        price: 799
    },
    {
        name: "VIP Pass",
        price: 1799
    },
    {
        name: "Backstage Pass",
        price: 2999
    }
];


const promoCodes = [
    {
        code: "BEATS10",
        discount: 10
    },
    {
        code: "MUSIC20",
        discount: 20
    },
    {
        code: "VIP15",
        discount: 15
    }
];


let attendees = [];


/* =====================================================
   CLOSURE
   PRACTICAL 4
   ===================================================== */

function createRegistrationIdGenerator() {

    let counter =
        Number(localStorage.getItem("concertRegistrationCounter")) || 0;

    return function () {

        counter++;

        localStorage.setItem(
            "concertRegistrationCounter",
            counter
        );

        return `BB-${String(counter).padStart(6, "0")}`;
    };
}


const generateRegistrationId =
    createRegistrationIdGenerator();


/* =====================================================
   DOM REFERENCES
   PRACTICAL 7
   ===================================================== */

const form = document.getElementById("concertForm");

const nameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const ageInput = document.getElementById("age");

const quantityInput =
    document.getElementById("quantity");

const genreInput =
    document.getElementById("musicGenre");

const foodInput =
    document.getElementById("foodPreference");

const attendeeInput =
    document.getElementById("attendeeName");

const attendeeList =
    document.getElementById("attendeeList");

const addAttendeeBtn =
    document.getElementById("addAttendeeBtn");

const promoInput =
    document.getElementById("promoCode");

const applyPromoBtn =
    document.getElementById("applyPromoBtn");

const promoMessage =
    document.getElementById("promoMessage");

const termsInput =
    document.getElementById("terms");

const themeBtn =
    document.getElementById("themeBtn");

const modal =
    document.getElementById("confirmationModal");

const closeModalBtn =
    document.getElementById("closeModalBtn");

const doneBtn =
    document.getElementById("doneBtn");


/* =====================================================
   SUMMARY REFERENCES
   ===================================================== */

const summaryTicket =
    document.getElementById("summaryTicket");

const summaryQuantity =
    document.getElementById("summaryQuantity");

const summaryGenre =
    document.getElementById("summaryGenre");

const summaryAddons =
    document.getElementById("summaryAddons");

const summaryDiscount =
    document.getElementById("summaryDiscount");

const summaryTotal =
    document.getElementById("summaryTotal");



/* =====================================================
   PRACTICAL 6
   REGULAR EXPRESSIONS
   ===================================================== */

const nameRegex =
    /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;

const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const phoneRegex =
    /^[6-9]\d{9}$/;


/* =====================================================
   THEME
   PRACTICAL 9
   localStorage
   ===================================================== */

function loadTheme() {

    const savedTheme =
        localStorage.getItem("concertTheme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";
    }
}


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const darkMode =
        document.body.classList.contains("dark");

    localStorage.setItem(
        "concertTheme",
        darkMode ? "dark" : "light"
    );

    themeBtn.textContent =
        darkMode ? "☀️" : "🌙";

    console.log(
        `Theme changed to ${darkMode ? "dark" : "light"} mode.`
    );
});


loadTheme();


/* =====================================================
   VALIDATION FUNCTIONS
   PRACTICAL 3 + PRACTICAL 6
   ===================================================== */

function showError(input, errorId, message) {

    input.classList.add("invalid");
    input.classList.remove("valid");

    document.getElementById(errorId).textContent =
        message;
}


const showSuccess = function (input, errorId) {

    input.classList.remove("invalid");
    input.classList.add("valid");

    document.getElementById(errorId).textContent =
        "";
};


function validateName() {

    const value = nameInput.value.trim();

    if (value === "") {

        showError(
            nameInput,
            "nameError",
            "Please enter your name."
        );

        return false;
    }

    if (!nameRegex.test(value)) {

        showError(
            nameInput,
            "nameError",
            "Please enter a valid name."
        );

        return false;
    }

    showSuccess(nameInput, "nameError");

    return true;
}


function validateEmail() {

    const value =
        emailInput.value.trim().toLowerCase();

    if (value === "") {

        showError(
            emailInput,
            "emailError",
            "Email is required."
        );

        return false;
    }

    if (!emailRegex.test(value)) {

        showError(
            emailInput,
            "emailError",
            "Enter a valid email address."
        );

        return false;
    }

    showSuccess(emailInput, "emailError");

    return true;
}


function validatePhone() {

    const value =
        phoneInput.value.trim();

    if (!phoneRegex.test(value)) {

        showError(
            phoneInput,
            "phoneError",
            "Enter a valid 10-digit mobile number."
        );

        return false;
    }

    showSuccess(phoneInput, "phoneError");

    return true;
}


function validateAge() {

    const age = Number(ageInput.value);

    if (
        age < 16 ||
        age > 80 ||
        ageInput.value === ""
    ) {

        showError(
            ageInput,
            "ageError",
            "Age must be between 16 and 80."
        );

        return false;
    }

    showSuccess(ageInput, "ageError");

    return true;
}


function validateGenre() {

    if (genreInput.value === "") {

        showError(
            genreInput,
            "genreError",
            "Please select your favourite genre."
        );

        return false;
    }

    genreInput.classList.remove("invalid");

    return true;
}


function validateTerms() {

    const errorBox =
        document.getElementById("termsError");

    if (!termsInput.checked) {

        errorBox.textContent =
            "Please accept the event terms.";

        return false;
    }

    errorBox.textContent = "";

    return true;
}


/* =====================================================
   EVENTS
   PRACTICAL 8
   focus + blur
   ===================================================== */

nameInput.addEventListener("focus", () => {

    console.log("Name field focused.");
});


nameInput.addEventListener("blur", validateName);

emailInput.addEventListener("blur", validateEmail);

phoneInput.addEventListener("blur", validatePhone);

ageInput.addEventListener("blur", validateAge);


/* =====================================================
   INPUT EVENTS
   PRACTICAL 8
   ===================================================== */

nameInput.addEventListener("input", () => {

    nameInput.value =
        nameInput.value.replace(/[0-9]/g, "");

    validateName();

    saveSessionData();
});


emailInput.addEventListener("input", () => {

    validateEmail();

    saveSessionData();
});


phoneInput.addEventListener("input", () => {

    phoneInput.value =
        phoneInput.value.replace(/\D/g, "");

    validatePhone();

    saveSessionData();
});


ageInput.addEventListener("input", () => {

    validateAge();

    saveSessionData();
});


/* =====================================================
   TICKET SELECTION
   PRACTICAL 5 + PRACTICAL 8
   ===================================================== */

const ticketInputs =
    document.querySelectorAll(
        'input[name="ticket"]'
    );


ticketInputs.forEach(ticket => {

    ticket.addEventListener("change", () => {

        discount = 0;
        appliedPromo = null;

        promoMessage.textContent = "";

        updateSummary();

        saveSessionData();

        console.log(
            `Ticket changed to ${ticket.value}.`
        );
    });

});


/* =====================================================
   OTHER CHANGE EVENTS
   ===================================================== */

quantityInput.addEventListener("change", () => {

    updateSummary();
    saveSessionData();
});


genreInput.addEventListener("change", () => {

    validateGenre();
    updateSummary();
    saveSessionData();
});


foodInput.addEventListener("change", () => {

    saveSessionData();

    console.log(
        `Food preference: ${foodInput.value}`
    );
});


/* =====================================================
   ADD-ON LOGIC
   PRACTICAL 5
   filter + map + reduce
   ===================================================== */

function getSelectedAddons() {

    const selected =
        document.querySelectorAll(
            ".addon-check:checked"
        );

    return [...selected].map(addon => ({

        name: addon.value,

        price: Number(addon.dataset.price)

    }));
}


function calculateAddonTotal() {

    const addons =
        getSelectedAddons();

    return addons.reduce(
        (total, addon) => total + addon.price,
        0
    );
}


document
    .querySelectorAll(".addon-check")
    .forEach(addon => {

        addon.addEventListener(
            "change",
            () => {

                updateSummary();
                saveSessionData();
            }
        );

    });


/* =====================================================
   FIND SELECTED TICKET
   PRACTICAL 5
   find()
   ===================================================== */

function getSelectedTicket() {

    const selected =
        document.querySelector(
            'input[name="ticket"]:checked'
        );

    return ticketTypes.find(
        ticket => ticket.name === selected.value
    );
}


/* =====================================================
   SUMMARY CALCULATION
   PRACTICAL 2 + PRACTICAL 5
   ===================================================== */

function updateSummary() {

    const selectedTicket =
        getSelectedTicket();

    /*
        Destructuring
        Practical 2
    */

    const {
        name: ticketName,
        price: ticketPrice
    } = selectedTicket;


    const quantity =
        Number(quantityInput.value);


    const addonTotal =
        calculateAddonTotal();


    const subtotal =
        ticketPrice * quantity + addonTotal;


    const discountAmount =
        subtotal * (discount / 100);


    const finalTotal =
        subtotal - discountAmount;


    summaryTicket.textContent =
        ticketName;

    summaryQuantity.textContent =
        quantity;

    summaryGenre.textContent =
        genreInput.value || "Not selected";


    const selectedAddons =
        getSelectedAddons();


    if (selectedAddons.length === 0) {

        summaryAddons.textContent = "None";

    } else {

        summaryAddons.innerHTML =
            selectedAddons
                .map(addon => addon.name)
                .join(", ");
    }


    summaryDiscount.textContent =
        `₹${discountAmount.toFixed(0)}`;


    summaryTotal.textContent =
        `₹${finalTotal.toFixed(0)}`;
}


/* =====================================================
   PROMO CODE
   PRACTICAL 5 + PRACTICAL 6
   ===================================================== */

applyPromoBtn.addEventListener("click", () => {

    const enteredCode =
        promoInput.value
            .trim()
            .toUpperCase();


    if (enteredCode === "") {

        promoMessage.textContent =
            "Please enter a promo code.";

        promoMessage.className =
            "promo-error";

        return;
    }


    const promo =
        promoCodes.find(
            item => item.code === enteredCode
        );


    if (promo) {

        appliedPromo = promo.code;
        discount = promo.discount;

        promoMessage.textContent =
            `${promo.code} applied — ${promo.discount}% discount!`;

        promoMessage.className =
            "promo-success";

        updateSummary();

        saveSessionData();

        console.log(
            `Promo ${promo.code} applied.`
        );

    } else {

        appliedPromo = null;
        discount = 0;

        promoMessage.textContent =
            "Invalid promo code.";

        promoMessage.className =
            "promo-error";

        updateSummary();
    }
});


/* =====================================================
   ATTENDEE MANAGEMENT
   PRACTICAL 5 + PRACTICAL 7
   ===================================================== */

addAttendeeBtn.addEventListener(
    "click",
    addAttendee
);


function addAttendee() {

    const name =
        attendeeInput.value.trim();


    if (name === "") {

        alert("Please enter attendee name.");

        attendeeInput.focus();

        return;
    }


    if (!nameRegex.test(name)) {

        alert("Please enter a valid attendee name.");

        return;
    }


    /*
        includes()
        Practical 5
    */

    const alreadyExists =
        attendees
            .map(person => person.toLowerCase())
            .includes(name.toLowerCase());


    if (alreadyExists) {

        alert(
            "This attendee is already added."
        );

        return;
    }


    attendees.push(name);

    attendeeInput.value = "";

    renderAttendees();

    saveSessionData();
}


function renderAttendees() {

    attendeeList.innerHTML = "";


    attendees.forEach(
        (name, index) => {

            const item =
                document.createElement("div");

            item.className =
                "attendee-item";


            const nameText =
                document.createElement("span");

            nameText.textContent =
                `${index + 1}. ${name}`;


            const actions =
                document.createElement("div");

            actions.className =
                "attendee-actions";


            const editBtn =
                document.createElement("button");

            editBtn.type = "button";

            editBtn.textContent = "✏️";


            editBtn.addEventListener(
                "click",
                () => editAttendee(index)
            );


            const deleteBtn =
                document.createElement("button");

            deleteBtn.type = "button";

            deleteBtn.textContent = "🗑️";


            deleteBtn.addEventListener(
                "click",
                () => deleteAttendee(index)
            );


            actions.appendChild(editBtn);

            actions.appendChild(deleteBtn);

            item.appendChild(nameText);

            item.appendChild(actions);

            attendeeList.appendChild(item);
        }
    );
}


function editAttendee(index) {

    const newName =
        prompt(
            "Enter updated attendee name:",
            attendees[index]
        );


    if (
        newName !== null &&
        newName.trim() !== "" &&
        nameRegex.test(newName.trim())
    ) {

        attendees[index] =
            newName.trim();

        renderAttendees();

        saveSessionData();
    }
}


function deleteAttendee(index) {

    attendees.splice(index, 1);

    renderAttendees();

    saveSessionData();
}


/* =====================================================
   SESSION STORAGE
   PRACTICAL 9
   ===================================================== */

function saveSessionData() {

    const selectedTicket =
        document.querySelector(
            'input[name="ticket"]:checked'
        );


    const sessionData = {

        name: nameInput.value,

        email: emailInput.value,

        phone: phoneInput.value,

        age: ageInput.value,

        ticket: selectedTicket.value,

        quantity: quantityInput.value,

        genre: genreInput.value,

        food: foodInput.value,

        promo: appliedPromo,

        discount: discount,

        attendees: attendees
    };


    sessionStorage.setItem(
        "concertRegistration",
        JSON.stringify(sessionData)
    );
}


function loadSessionData() {

    try {

        const savedData =
            sessionStorage.getItem(
                "concertRegistration"
            );


        if (!savedData) {
            return;
        }


        const data =
            JSON.parse(savedData);


        nameInput.value =
            data.name || "";

        emailInput.value =
            data.email || "";

        phoneInput.value =
            data.phone || "";

        ageInput.value =
            data.age || "";

        quantityInput.value =
            data.quantity || "1";

        genreInput.value =
            data.genre || "";

        foodInput.value =
            data.food || "No Preference";


        /*
            Restore ticket
        */

        ticketInputs.forEach(ticket => {

            ticket.checked =
                ticket.value === data.ticket;

        });


        attendees =
            Array.isArray(data.attendees)
                ? data.attendees
                : [];


        appliedPromo =
            data.promo || null;

        discount =
            Number(data.discount) || 0;


        renderAttendees();

        updateSummary();


        console.log(
            "Previous concert session restored."
        );

    } catch (error) {

        console.error(
            "Unable to restore session:",
            error
        );

        sessionStorage.removeItem(
            "concertRegistration"
        );
    }
}


/* =====================================================
   FORM SUBMISSION
   PRACTICAL 3 + PRACTICAL 8
   ===================================================== */

form.addEventListener(
    "submit",
    handleRegistration
);


function handleRegistration(event) {

    event.preventDefault();


    try {

        const isNameValid =
            validateName();

        const isEmailValid =
            validateEmail();

        const isPhoneValid =
            validatePhone();

        const isAgeValid =
            validateAge();

        const isGenreValid =
            validateGenre();

        const areTermsValid =
            validateTerms();


        if (
            !isNameValid ||
            !isEmailValid ||
            !isPhoneValid ||
            !isAgeValid ||
            !isGenreValid ||
            !areTermsValid
        ) {

            alert(
                "Please correct the highlighted fields."
            );

            return;
        }


        const registrationId =
            generateRegistrationId();


        const firstName =
            nameInput.value
                .trim()
                .split(" ")[0];


        /*
            Template literal
            Practical 2
        */

        document.getElementById(
            "confirmationText"
        ).textContent =
            `Great ${firstName}! Your registration for ${concertName} on ${concertDate} has been confirmed.`;


        document.getElementById(
            "registrationId"
        ).textContent =
            registrationId;


        modal.classList.add("show");


        registrationCount++;


        console.log(
            `Registration completed: ${registrationId}`
        );

    } catch (error) {

        console.error(
            "Registration error:",
            error
        );

        alert(
            "Something went wrong. Please try again."
        );
    }
}


/* =====================================================
   RESET EVENT
   PRACTICAL 8
   ===================================================== */

form.addEventListener(
    "reset",
    () => {

        setTimeout(() => {

            attendees = [];

            appliedPromo = null;

            discount = 0;

            promoMessage.textContent = "";

            promoMessage.className = "";

            renderAttendees();

            updateSummary();

            sessionStorage.removeItem(
                "concertRegistration"
            );

            /*
                Remove validation classes
            */

            document
                .querySelectorAll(
                    ".valid, .invalid"
                )
                .forEach(element => {

                    element.classList.remove(
                        "valid",
                        "invalid"
                    );
                });


            console.log(
                "Concert registration form reset."
            );

        }, 0);
    }
);


/* =====================================================
   MODAL EVENTS
   PRACTICAL 8
   ===================================================== */

function closeModal() {

    modal.classList.remove("show");
}


closeModalBtn.addEventListener(
    "click",
    closeModal
);


doneBtn.addEventListener(
    "click",
    closeModal
);


modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {

            closeModal();
        }
    }
);


/* =====================================================
   SESSION RESTORE + INITIAL SUMMARY
   ===================================================== */

loadSessionData();

updateSummary();

renderAttendees();


/* =====================================================
   FINAL CONSOLE MESSAGE
   ===================================================== */

console.log(
    "🎵 Beats & Beyond is ready for registrations!"
);