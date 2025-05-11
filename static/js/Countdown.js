// Displaying the countdown Timer
// 

function startCountdown(id, eventDateStr) {
    const countdownTarget = new Date(eventDateStr).getTime();
    console.log("Countdown script loaded--1");

    const interval = setInterval(function () {
        const now = new Date().getTime();
        const distance = countdownTarget - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const el = document.getElementById(id);
        if (el) {
            if (distance >= 0) {
                el.innerHTML = `<b>Countdown:</b> ${days}d ${hours}h ${minutes}m ${seconds}s`;
            } else {
                clearInterval(interval);
                el.innerHTML = "<b>Countdown:</b> Event has started!";
            }
        }
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function () {
    const countdownItems = document.querySelectorAll('.countdown-data');

    countdownItems.forEach(item => {
        const id = item.getAttribute('data-id');
        const date = item.getAttribute('data-date');
        startCountdown(id, date);
        console.log("Countdown script loaded");
    });
});
