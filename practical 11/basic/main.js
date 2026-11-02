import {
    formatTime,
    startCountdown,
    notifyAfterDelay
} from "./timer.js";

const minutesInput = document.getElementById("minutes");
const countdown = document.getElementById("countdown");
const status = document.getElementById("status");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let remainingSeconds = Number(minutesInput.value) * 60;
let intervalId = null;
let isRunning = false;

// Display the timer
function updateDisplay() {
    countdown.textContent = formatTime(remainingSeconds);
}

// Stop the timer
function stopTimer() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }

    isRunning = false;
}

// Start button
startBtn.addEventListener("click", function () {

    if (isRunning) {
        return;
    }

    if (remainingSeconds <= 0) {
        const minutes = Number(minutesInput.value);

        if (!Number.isFinite(minutes) || minutes < 1) {
            status.textContent = "Enter at least 1 minute.";
            return;
        }

        remainingSeconds = Math.floor(minutes * 60);
    }

    isRunning = true;
    status.textContent = "Timer started! Focus on your work.";

    intervalId = startCountdown(
        remainingSeconds,

        function (seconds) {
            remainingSeconds = seconds;
            updateDisplay();
        },

        function () {
            remainingSeconds = 0;
            isRunning = false;
            intervalId = null;

            status.textContent = "Time is up! Take a break.";

            // Use setTimeout() for delayed notification
            notifyAfterDelay(function () {
                alert("Countdown completed!");
            });
        }
    );

});

// Pause button
pauseBtn.addEventListener("click", function () {

    if (isRunning) {
        stopTimer();
        status.textContent = "Timer paused.";
    }

});

// Reset button
resetBtn.addEventListener("click", function () {

    stopTimer();

    const minutes = Number(minutesInput.value);

    if (Number.isFinite(minutes) && minutes >= 1) {
        remainingSeconds = Math.floor(minutes * 60);
    } else {
        remainingSeconds = 300;
    }

    updateDisplay();
    status.textContent = "Timer reset.";

});

// Update timer when duration changes
minutesInput.addEventListener("change", function () {

    if (isRunning) {
        return;
    }

    const minutes = Number(minutesInput.value);

    if (Number.isFinite(minutes) && minutes >= 1) {
        remainingSeconds = Math.floor(minutes * 60);
        updateDisplay();
        status.textContent = "Ready to start?";
    } else {
        status.textContent = "Enter at least 1 minute.";
    }

});


// ---------------- CLASS SCHEDULER ----------------

const scheduleForm = document.getElementById("scheduleForm");
const classNameInput = document.getElementById("className");
const classTimeInput = document.getElementById("classTime");

const classList = document.getElementById("classList");
const message = document.getElementById("message");

// Load saved classes from localStorage
let classes = JSON.parse(
    localStorage.getItem("scheduledClasses") || "[]"
);

// Display scheduled classes
function displayClasses() {

    classList.replaceChildren();

    if (classes.length === 0) {
        classList.textContent = "No classes scheduled.";
        return;
    }

    classes.sort(function (a, b) {
        return new Date(a.time) - new Date(b.time);
    });

    classes.forEach(function (item) {

        const div = document.createElement("div");
        div.className = "class-item";

        const title = document.createElement("strong");
        title.textContent = item.name;

        const time = document.createElement("p");
        time.textContent = new Date(item.time).toLocaleString();

        div.appendChild(title);
        div.appendChild(time);

        classList.appendChild(div);

    });

}

// Add a new class
scheduleForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = classNameInput.value.trim();
    const time = classTimeInput.value;

    if (!name || !time) {
        message.textContent = "Please fill in all fields.";
        return;
    }

    if (new Date(time).getTime() <= Date.now()) {
        message.textContent = "Please select a future date and time.";
        return;
    }

    classes.push({
        name: name,
        time: time
    });

    // Save classes in browser storage
    localStorage.setItem(
        "scheduledClasses",
        JSON.stringify(classes)
    );

    displayClasses();

    message.textContent = "Class added successfully!";

    scheduleForm.reset();

});

// Initial display
updateDisplay();
displayClasses();