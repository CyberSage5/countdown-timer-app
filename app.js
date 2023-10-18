// Set the target date and time for the countdown (replace with your desired date)
const targetDate = new Date('2023-12-31T23:59:59').getTime();

// Function to update the countdown timer
function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
        document.getElementById('timer').innerHTML = 'Countdown expired!';
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

// Initial call to update the countdown
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);
