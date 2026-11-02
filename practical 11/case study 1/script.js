/* =====================================================
   TECHNOVA TECHNICAL WORKSHOP BOOKING
   PRACTICAL 10 - Q1

   Concepts integrated from Practical 1 to 9:
   P1 -> console, external JS, user information
   P2 -> var, let, const, template literals, destructuring
   P3 -> conditions and validation
   P4 -> functions, scope, closure, try-catch
   P5 -> arrays, objects, map, filter, find, reduce, includes
   P6 -> strings and regular expressions
   P7 -> DOM traversal and dynamic DOM manipulation
   P8 -> events
   P9 -> localStorage and sessionStorage
===================================================== */


/* =====================================================
   P1 - CONSOLE METHODS
===================================================== */

console.log("=================================");
console.log("TechNova Workshop Booking Started");
console.log("=================================");

console.info("JavaScript file loaded successfully.");


// Small user information object
const applicationInfo = {
    application: "Technical Workshop Ticket Booking",
    year: 2026,
    version: "1.0"
};

console.table(applicationInfo);


/* =====================================================
   P2 - VARIABLES
===================================================== */

// const -> values that should not be reassigned
const workshopName = "TechNova Technical Workshop";
const workshopDate = "18 October 2026";


// let -> values that change during application
let discount = 0;
let appliedPromo = "";


// var -> older JavaScript variable declaration
// Used here intentionally as part of Practical 2.
var bookingCount = 0;


/* =====================================================
   P5 - ARRAY + OBJECT DATA
===================================================== */

const ticketTypes = [
    {
        id: "student",
        name: "Student Pass",
        price: 499
    },

    {
        id: "professional",
        name: "Professional Pass",
        price: 999
    },

    {
        id: "premium",
        name: "Premium Pass",
        price: 1499
    }
];


const promoCodes = [
    {
        code: "TECH10",
        percentage: 10
    },

    {
        code: "STUDENT15",
        percentage: 15
    },

    {
        code: "WELCOME20",
        percentage: 20
    }
];


let attendees = [];


/* =====================================================
   P4 - CLOSURE
   Generates unique registration IDs.
===================================================== */

function createRegistrationIdGenerator() {

    let counter =
        Number(localStorage.getItem("bookingCounter")) || 0;

    return function generateRegistrationId() {

        counter++;

        localStorage.setItem(
            "bookingCounter",
            counter
        );

        return `TN-${String(counter).padStart(6, "0")}`;
    };
}


const generateRegistrationId =
    createRegistrationIdGenerator();


/* =====================================================
   DOM REFERENCES
===================================================== */

const bookingForm =
    document.getElementById("bookingForm");

const fullName =
    document.getElementById("fullName");

const email =
    document.getElementById("email");

const phone =
    document.getElementById("phone");

const studentId =
    document.getElementById("studentId");

const college =
    document.getElementById("college");

const session =
    document.getElementById("session");

const quantity =
    document.getElementById("quantity");

const foodPreference =
    document.getElementById("foodPreference");

const attendeeName =
    document.getElementById("attendeeName");

const attendeeList =
    document.getElementById("attendeeList");

const addAttendee =
    document.getElementById("addAttendee");

const promoCode =
    document.getElementById("promoCode");

const applyPromo =
    document.getElementById("applyPromo");

const promoMessage =
    document.getElementById("promoMessage");

const terms =
    document.getElementById("terms");

const themeToggle =
    document.getElementById("themeToggle");

const confirmationModal =
    document.getElementById("confirmationModal");

const closeModal =
    document.getElementById("closeModal");

const doneButton =
    document.getElementById("doneButton");


/* =====================================================
   P9 - LOAD THEME FROM LOCAL STORAGE
===================================================== */

function loadSavedTheme() {

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        themeToggle.textContent = "☀️";

    } else {

        themeToggle.textContent = "🌙";
    }
}


loadSavedTheme();


/* =====================================================
   P9 - THEME TOGGLE
===================================================== */

themeToggle.addEventListener(
    "click",
    function () {

        document.body.classList.toggle("dark-mode");

        const isDark =
            document.body.classList.contains("dark-mode");

        localStorage.setItem(
            "theme",
            isDark ? "dark" : "light"
        );

        themeToggle.textContent =
            isDark ? "☀️" : "🌙";

        console.log(
            `Theme changed to ${isDark ? "dark" : "light"} mode.`
        );
    }
);


/* =====================================================
   P3 + P6
   REGULAR EXPRESSIONS
===================================================== */

const nameRegex =
    /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;

const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const phoneRegex =
    /^[6-9]\d{9}$/;

const studentIdRegex =
    /^[A-Za-z0-9-]{5,20}$/;


/* =====================================================
   P4 - FUNCTION DECLARATION
===================================================== */

function showError(input, errorElement, message) {

    input.classList.remove("input-success");

    input.classList.add("input-error");

    errorElement.textContent = message;

    return false;
}


/* =====================================================
   FUNCTION EXPRESSION
===================================================== */

const showSuccess =
    function (input, errorElement) {

        input.classList.remove("input-error");

        input.classList.add("input-success");

        errorElement.textContent = "";

        return true;
    };


/* =====================================================
   GET ERROR ELEMENT
===================================================== */

function getErrorElement(inputId) {

    return document.getElementById(
        `${inputId}Error`
    );
}


/* =====================================================
   P3 + P6
   VALIDATION FUNCTIONS
===================================================== */

function validateName() {

    const value =
        fullName.value.trim();

    const error =
        getErrorElement("fullName");

    if (value === "") {

        return showError(
            fullName,
            error,
            "Please enter your full name."
        );
    }

    if (!nameRegex.test(value)) {

        return showError(
            fullName,
            error,
            "Please enter a valid name."
        );
    }

    return showSuccess(
        fullName,
        error
    );
}


function validateEmail() {

    const value =
        email.value.trim();

    const error =
        getErrorElement("email");

    if (value === "") {

        return showError(
            email,
            error,
            "Email address is required."
        );
    }

    if (!emailRegex.test(value)) {

        return showError(
            email,
            error,
            "Enter a valid email address."
        );
    }

    return showSuccess(
        email,
        error
    );
}


function validatePhone() {

    const value =
        phone.value.trim();

    const error =
        getErrorElement("phone");

    if (value === "") {

        return showError(
            phone,
            error,
            "Phone number is required."
        );
    }

    if (!phoneRegex.test(value)) {

        return showError(
            phone,
            error,
            "Enter a valid 10-digit mobile number."
        );
    }

    return showSuccess(
        phone,
        error
    );
}


function validateStudentId() {

    const value =
        studentId.value.trim();

    const error =
        getErrorElement("studentId");

    if (value === "") {

        return showError(
            studentId,
            error,
            "Student ID is required."
        );
    }

    if (!studentIdRegex.test(value)) {

        return showError(
            studentId,
            error,
            "Enter a valid student ID."
        );
    }

    return showSuccess(
        studentId,
        error
    );
}


function validateCollege() {

    const value =
        college.value.trim();

    const error =
        getErrorElement("college");

    if (value === "") {

        return showError(
            college,
            error,
            "College or organization is required."
        );
    }

    if (value.length < 3) {

        return showError(
            college,
            error,
            "Please enter a valid college name."
        );
    }

    return showSuccess(
        college,
        error
    );
}


function validateSession() {

    const error =
        document.getElementById("sessionError");

    if (session.value === "") {

        return showError(
            session,
            error,
            "Please select a preferred session."
        );
    }

    return showSuccess(
        session,
        error
    );
}


function validateTerms() {

    const error =
        document.getElementById("termsError");

    if (!terms.checked) {

        error.textContent =
            "Please accept the booking terms.";

        return false;
    }

    error.textContent = "";

    return true;
}


/* =====================================================
   P8 - INPUT EVENTS
===================================================== */

fullName.addEventListener(
    "input",
    function () {

        // P6 - string function
        fullName.value =
            fullName.value.replace(
                /[^A-Za-z '-]/g,
                ""
            );

        validateName();

        updateSummary();
    }
);


email.addEventListener(
    "input",
    function () {

        validateEmail();

        updateSummary();
    }
);


phone.addEventListener(
    "input",
    function () {

        // String method
        phone.value =
            phone.value.replace(
                /\D/g,
                ""
            );

        validatePhone();
    }
);


studentId.addEventListener(
    "input",
    function () {

        studentId.value =
            studentId.value.trim();

        validateStudentId();
    }
);


college.addEventListener(
    "input",
    validateCollege
);


/* =====================================================
   P8 - FOCUS / BLUR EVENTS
===================================================== */

const requiredInputs =
    [fullName, email, phone, studentId, college];


requiredInputs.forEach(
    function (input) {

        input.addEventListener(
            "focus",
            function () {

                input.parentElement
                    .classList.add("focused");

                console.log(
                    `${input.id} field focused.`
                );
            }
        );


        input.addEventListener(
            "blur",
            function () {

                input.parentElement
                    .classList.remove("focused");

                // Validate when user leaves field
                switch (input.id) {

                    case "fullName":
                        validateName();
                        break;

                    case "email":
                        validateEmail();
                        break;

                    case "phone":
                        validatePhone();
                        break;

                    case "studentId":
                        validateStudentId();
                        break;

                    case "college":
                        validateCollege();
                        break;
                }
            }
        );
    }
);


/* =====================================================
   P5 - FIND
   Find selected ticket object.
===================================================== */

function getSelectedTicket() {

    const selectedRadio =
        document.querySelector(
            'input[name="ticket"]:checked'
        );

    const ticketId =
        selectedRadio.value;

    return ticketTypes.find(
        ticket => ticket.id === ticketId
    );
}


/* =====================================================
   P2 - DESTRUCTURING
===================================================== */

function getTicketInformation() {

    const ticket =
        getSelectedTicket();

    const {
        name: ticketName,
        price: ticketPrice
    } = ticket;

    return {
        ticketName,
        ticketPrice
    };
}


/* =====================================================
   P8 - CHANGE EVENTS
===================================================== */

document
    .querySelectorAll('input[name="ticket"]')
    .forEach(
        radio => {

            radio.addEventListener(
                "change",
                function () {

                    const {
                        ticketName,
                        ticketPrice
                    } = getTicketInformation();

                    console.log(
                        `Ticket changed: ${ticketName} - ₹${ticketPrice}`
                    );

                    updateSummary();
                }
            );
        }
    );


quantity.addEventListener(
    "change",
    function () {

        sessionStorage.setItem(
            "ticketQuantity",
            quantity.value
        );

        updateSummary();

        console.log(
            `Ticket quantity changed to ${quantity.value}`
        );
    }
);


session.addEventListener(
    "change",
    function () {

        sessionStorage.setItem(
            "preferredSession",
            session.value
        );

        validateSession();

        updateSummary();
    }
);


foodPreference.addEventListener(
    "change",
    function () {

        sessionStorage.setItem(
            "foodPreference",
            foodPreference.value
        );

        updateSummary();
    }
);


/* =====================================================
   P5 - FILTER
   GET SELECTED ADD-ONS
===================================================== */

function getSelectedAddons() {

    const addonCheckboxes =
        document.querySelectorAll(
            ".addon-checkbox"
        );

    const addonArray =
        Array.from(addonCheckboxes);

    return addonArray
        .filter(
            checkbox => checkbox.checked
        )
        .map(
            checkbox => {

                return {
                    name: checkbox.value,
                    price: Number(
                        checkbox.dataset.price
                    )
                };
            }
        );
}


/* =====================================================
   P5 - REDUCE
   CALCULATE ADDON TOTAL
===================================================== */

function calculateAddonTotal(addons) {

    return addons.reduce(
        (total, addon) => {

            return total + addon.price;

        },
        0
    );
}


/* =====================================================
   P5 - MAP
   DISPLAY ADDONS
===================================================== */

document
    .querySelectorAll(".addon-checkbox")
    .forEach(
        checkbox => {

            checkbox.addEventListener(
                "change",
                function () {

                    const addons =
                        getSelectedAddons();

                    const names =
                        addons.map(
                            addon => addon.name
                        );

                    console.log(
                        "Selected add-ons:",
                        names
                    );

                    updateSummary();
                }
            );
        }
    );


/* =====================================================
   P6 - STRING FUNCTIONS
===================================================== */

function extractEmailDomain(emailAddress) {

    const parts =
        emailAddress
            .trim()
            .toLowerCase()
            .split("@");

    return parts[1] || "";
}


/* =====================================================
   P6 - includes()
===================================================== */

function isStudentEmail(emailAddress) {

    const domain =
        extractEmailDomain(emailAddress);

    return (
        domain.includes("edu") ||
        domain.includes("ac.")
    );
}


/* =====================================================
   P9 - SESSION STORAGE
   Save current user preferences.
===================================================== */

function saveSessionData() {

    const sessionData = {

        name: fullName.value,

        email: email.value,

        ticket:
            getSelectedTicket().id,

        quantity:
            quantity.value,

        workshopSession:
            session.value,

        food:
            foodPreference.value

    };


    sessionStorage.setItem(
        "workshopBooking",
        JSON.stringify(sessionData)
    );
}


/* =====================================================
   P9 - LOAD SESSION DATA
===================================================== */

function loadSessionData() {

    try {

        const savedData =
            sessionStorage.getItem(
                "workshopBooking"
            );

        if (!savedData) {
            return;
        }

        const data =
            JSON.parse(savedData);

        // Restore only useful fields
        if (data.name) {
            fullName.value = data.name;
        }

        if (data.email) {
            email.value = data.email;
        }

        if (data.quantity) {
            quantity.value = data.quantity;
        }

        if (data.workshopSession) {
            session.value =
                data.workshopSession;
        }

        if (data.food) {
            foodPreference.value =
                data.food;
        }


        if (data.ticket) {

            const radio =
                document.querySelector(
                    `input[name="ticket"][value="${data.ticket}"]`
                );

            if (radio) {
                radio.checked = true;
            }
        }


        console.info(
            "Previous session preferences restored."
        );

    } catch (error) {

        console.error(
            "Could not restore session data:",
            error
        );

    }
}


loadSessionData();


/* =====================================================
   UPDATE SUMMARY
===================================================== */

function updateSummary() {

    const {
        ticketName,
        ticketPrice
    } = getTicketInformation();


    const ticketQuantity =
        Number(quantity.value);


    const ticketSubtotal =
        ticketPrice * ticketQuantity;


    const addons =
        getSelectedAddons();


    const addonSubtotal =
        calculateAddonTotal(addons);


    const subtotal =
        ticketSubtotal + addonSubtotal;


    let discountAmount = 0;


    if (discount > 0) {

        discountAmount =
            Math.round(
                subtotal * discount / 100
            );
    }


    const grandTotal =
        subtotal - discountAmount;


    document.getElementById(
        "ticketSubtotal"
    ).textContent =
        `₹${ticketSubtotal}`;


    document.getElementById(
        "addonSubtotal"
    ).textContent =
        `₹${addonSubtotal}`;


    document.getElementById(
        "discountAmount"
    ).textContent =
        `-₹${discountAmount}`;


    document.getElementById(
        "grandTotal"
    ).textContent =
        `₹${grandTotal}`;


    /* ================================
       Dynamic selected item DOM
    ================================= */

    const selectedItems =
        document.getElementById(
            "selectedItems"
        );


    selectedItems.innerHTML = "";


    const ticketElement =
        document.createElement("div");

    ticketElement.className =
        "selected-item";


    ticketElement.innerHTML = `
        <span>
            ${ticketName} × ${ticketQuantity}
        </span>

        <strong>
            ₹${ticketSubtotal}
        </strong>
    `;


    selectedItems.appendChild(
        ticketElement
    );


    // Add-ons are dynamically inserted
    addons.forEach(
        addon => {

            const addonElement =
                document.createElement(
                    "div"
                );

            addonElement.className =
                "selected-item";


            addonElement.innerHTML = `
                <span>
                    ${addon.name}
                </span>

                <strong>
                    ₹${addon.price}
                </strong>
            `;


            selectedItems.appendChild(
                addonElement
            );
        }
    );


    // Save current state
    saveSessionData();
}


/* =====================================================
   PROMO CODE
===================================================== */

applyPromo.addEventListener(
    "click",
    function () {

        const enteredCode =
            promoCode.value
                .trim()
                .toUpperCase();


        if (enteredCode === "") {

            promoMessage.textContent =
                "Please enter a promo code.";

            promoMessage.className =
                "promo-message promo-error";

            return;
        }


        /*
            P5 - FIND
            Search promo object in array.
        */

        const promo =
            promoCodes.find(
                item =>
                    item.code === enteredCode
            );


        if (promo) {

            discount =
                promo.percentage;

            appliedPromo =
                enteredCode;


            promoMessage.textContent =
                `${promo.percentage}% discount applied successfully!`;


            promoMessage.className =
                "promo-message promo-success";


            document
                .getElementById("discountRow")
                .classList.remove("hidden");


            console.log(
                `Promo code ${enteredCode} applied.`
            );

        } else {

            discount = 0;

            appliedPromo = "";


            promoMessage.textContent =
                "Invalid promo code.";


            promoMessage.className =
                "promo-message promo-error";


            document
                .getElementById("discountRow")
                .classList.add("hidden");


            console.warn(
                "Invalid promo code entered."
            );
        }


        updateSummary();
    }
);


/* =====================================================
   P7 - ADD ATTENDEE
===================================================== */

addAttendee.addEventListener(
    "click",
    function () {

        const name =
            attendeeName.value.trim();


        if (name === "") {

            attendeeName.classList.add(
                "input-error"
            );

            attendeeName.focus();

            return;
        }


        if (!nameRegex.test(name)) {

            attendeeName.classList.add(
                "input-error"
            );

            return;
        }


        /*
            P5 - includes()
            Prevent duplicate attendee names.
        */

        const alreadyExists =
            attendees
                .map(
                    attendee =>
                        attendee.name.toLowerCase()
                )
                .includes(
                    name.toLowerCase()
                );


        if (alreadyExists) {

            alert(
                "This attendee has already been added."
            );

            return;
        }


        attendeeName.classList.remove(
            "input-error"
        );


        /*
            P5 - OBJECT
        */

        attendees.push({
            id: Date.now(),
            name: name
        });


        attendeeName.value = "";


        renderAttendees();


        console.log(
            "Attendee added:",
            name
        );
    }
);


/* =====================================================
   P7 - CREATE + APPEND DOM
===================================================== */

function renderAttendees() {

    attendeeList.innerHTML = "";


    attendees.forEach(
        attendee => {

            const item =
                document.createElement(
                    "div"
                );

            item.className =
                "attendee-item";


            item.dataset.id =
                attendee.id;


            item.innerHTML = `

                <span class="attendee-name">
                    ${attendee.name}
                </span>

                <div class="attendee-actions">

                    <button
                        type="button"
                        class="edit-btn"
                        data-action="edit"
                        data-id="${attendee.id}"
                    >
                        Edit
                    </button>

                    <button
                        type="button"
                        class="delete-btn"
                        data-action="delete"
                        data-id="${attendee.id}"
                    >
                        Delete
                    </button>

                </div>
            `;


            attendeeList.appendChild(
                item
            );
        }
    );
}


/* =====================================================
   P7 - EVENT DELEGATION
   EDIT + DELETE
===================================================== */

attendeeList.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest("button");


        if (!button) {
            return;
        }


        const id =
            Number(button.dataset.id);


        const action =
            button.dataset.action;


        if (action === "delete") {

            /*
                P5 - FILTER
                Remove selected attendee.
            */

            attendees =
                attendees.filter(
                    attendee =>
                        attendee.id !== id
                );


            renderAttendees();


            console.log(
                `Attendee ${id} deleted.`
            );
        }


        if (action === "edit") {

            const attendee =
                attendees.find(
                    item =>
                        item.id === id
                );


            if (!attendee) {
                return;
            }


            const updatedName =
                prompt(
                    "Edit attendee name:",
                    attendee.name
                );


            if (
                updatedName !== null &&
                updatedName.trim() !== ""
            ) {

                if (
                    nameRegex.test(
                        updatedName.trim()
                    )
                ) {

                    attendee.name =
                        updatedName.trim();


                    renderAttendees();


                    console.log(
                        "Attendee updated:",
                        attendee.name
                    );

                } else {

                    alert(
                        "Please enter a valid name."
                    );
                }
            }
        }
    }
);


/* =====================================================
   P8 - ATTENDEE INPUT EVENT
===================================================== */

attendeeName.addEventListener(
    "input",
    function () {

        if (nameRegex.test(
            attendeeName.value.trim()
        )) {

            attendeeName.classList.remove(
                "input-error"
            );
        }
    }
);


/* =====================================================
   P8 - FORM SUBMIT
===================================================== */

bookingForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        console.log(
            "Booking form submitted."
        );


        /*
            P3 - Validation
        */

        const validName =
            validateName();

        const validEmail =
            validateEmail();

        const validPhone =
            validatePhone();

        const validStudentId =
            validateStudentId();

        const validCollege =
            validateCollege();

        const validSession =
            validateSession();

        const validTerms =
            validateTerms();


        const formIsValid =
            validName &&
            validEmail &&
            validPhone &&
            validStudentId &&
            validCollege &&
            validSession &&
            validTerms;


        if (!formIsValid) {

            console.warn(
                "Booking validation failed."
            );


            /*
                Scroll to first error.
            */

            const firstError =
                document.querySelector(
                    ".input-error"
                );


            if (firstError) {

                firstError.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                firstError.focus();
            }


            return;
        }


        /*
            P4 - TRY/CATCH
            Registration processing.
        */

        try {

            const registrationId =
                generateRegistrationId();


            bookingCount++;


            const {
                ticketName,
                ticketPrice
            } = getTicketInformation();


            const ticketQuantity =
                Number(quantity.value);


            const addons =
                getSelectedAddons();


            const addonTotal =
                calculateAddonTotal(addons);


            const subtotal =
                ticketPrice *
                ticketQuantity +
                addonTotal;


            const discountAmount =
                Math.round(
                    subtotal *
                    discount /
                    100
                );


            const total =
                subtotal -
                discountAmount;


            /*
                P6 - extract email domain
            */

            const emailDomain =
                extractEmailDomain(
                    email.value
                );


            /*
                P6 - check student domain
            */

            const studentEmail =
                isStudentEmail(
                    email.value
                );


            const booking = {

                registrationId,

                name:
                    fullName.value.trim(),

                email:
                    email.value.trim(),

                phone:
                    phone.value.trim(),

                studentId:
                    studentId.value.trim(),

                college:
                    college.value.trim(),

                ticket:
                    ticketName,

                quantity:
                    ticketQuantity,

                session:
                    session.options[
                        session.selectedIndex
                    ].text,

                addons,

                food:
                    foodPreference.value,

                subtotal,

                discount:
                    discountAmount,

                total,

                emailDomain,

                studentEmail,

                date:
                    workshopDate
            };


            /*
                P9 - Save final booking
            */

            sessionStorage.setItem(
                "latestBooking",
                JSON.stringify(booking)
            );


            localStorage.setItem(
                "lastRegistrant",
                fullName.value.trim()
            );


            console.table(booking);


            showConfirmation(
                booking
            );


        } catch (error) {

            console.error(
                "Booking failed:",
                error
            );


            alert(
                "Something went wrong while processing your booking."
            );
        }
    }
);


/* =====================================================
   P8 - RESET EVENT
===================================================== */

bookingForm.addEventListener(
    "reset",
    function () {

        /*
            reset event fires before browser
            finishes resetting fields.
        */

        setTimeout(
            function () {

                attendees = [];

                discount = 0;

                appliedPromo = "";


                promoMessage.textContent = "";

                promoMessage.className =
                    "promo-message";


                document
                    .getElementById(
                        "discountRow"
                    )
                    .classList.add(
                        "hidden"
                    );


                renderAttendees();


                document
                    .querySelectorAll(
                        ".input-error, .input-success"
                    )
                    .forEach(
                        element => {

                            element.classList.remove(
                                "input-error",
                                "input-success"
                            );
                        }
                    );


                document
                    .querySelectorAll(
                        ".error-message"
                    )
                    .forEach(
                        error => {

                            error.textContent = "";
                        }
                    );


                sessionStorage.removeItem(
                    "workshopBooking"
                );


                sessionStorage.removeItem(
                    "ticketQuantity"
                );


                sessionStorage.removeItem(
                    "preferredSession"
                );


                sessionStorage.removeItem(
                    "foodPreference"
                );


                updateSummary();


                console.info(
                    "Booking form has been reset."
                );

            },
            0
        );
    }
);


/* =====================================================
   SHOW CONFIRMATION
===================================================== */

function showConfirmation(booking) {

    /*
        P2 - Destructuring
    */

    const {
        registrationId,
        name,
        ticket,
        total,
        session: selectedSession
    } = booking;


    document.getElementById(
        "registrationId"
    ).textContent =
        registrationId;


    document.getElementById(
        "confirmationMessage"
    ).textContent =
        `Thank you ${name}! Your ${ticket} has been successfully booked.`;


    const confirmationDetails =
        document.getElementById(
            "confirmationDetails"
        );


    confirmationDetails.innerHTML = `

        <div>
            📅 ${booking.date}
        </div>

        <div>
            🎟️ ${ticket} × ${booking.quantity}
        </div>

        <div>
            🧑‍💻 ${selectedSession}
        </div>

        <div>
            💰 Total Paid: ₹${total}
        </div>
    `;


    document
        .getElementById(
            "bookingStatus"
        )
        .textContent =
        "Confirmed";


    document
        .getElementById(
            "bookingStatus"
        )
        .style.background =
        "rgba(21, 153, 87, 0.12)";


    document
        .getElementById(
            "bookingStatus"
        )
        .style.color =
        "#159957";


    confirmationModal.classList.remove(
        "hidden"
    );


    console.info(
        `Booking confirmed: ${registrationId}`
    );
}


/* =====================================================
   CLOSE MODAL
===================================================== */

function closeConfirmation() {

    confirmationModal.classList.add(
        "hidden"
    );
}


closeModal.addEventListener(
    "click",
    closeConfirmation
);


doneButton.addEventListener(
    "click",
    closeConfirmation
);


/* =====================================================
   MODAL CLICK OUTSIDE
===================================================== */

confirmationModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            confirmationModal
        ) {

            closeConfirmation();
        }
    }
);


/* =====================================================
   P1 - DYNAMIC WELCOME MESSAGE
===================================================== */

fullName.addEventListener(
    "input",
    function () {

        const name =
            fullName.value.trim();


        if (name) {

            console.log(
                `Welcome ${name}! You're booking a TechNova workshop ticket.`
            );
        }
    }
);


/* =====================================================
   INITIAL SUMMARY
===================================================== */

updateSummary();


console.log(
    "Workshop booking application ready."
);