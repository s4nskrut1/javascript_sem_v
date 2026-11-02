// Convert seconds into MM:SS format
export function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    return String(minutes).padStart(2, "0") + ":" +
           String(remainingSeconds).padStart(2, "0");
}

// Start the countdown
export function startCountdown(seconds, onTick, onComplete) {

    let remaining = seconds;

    onTick(remaining);

    const intervalId = setInterval(function () {

        remaining--;

        onTick(remaining);

        if (remaining <= 0) {
            clearInterval(intervalId);
            onComplete();
        }

    }, 1000);

    return intervalId;
}

// Demonstration of setTimeout()
export function notifyAfterDelay(callback) {

    setTimeout(function () {
        callback();
    }, 1000);

}