const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const footer = document.querySelector('#footer');
const currentTime = new Date();

const newYearTime = new Date(`January 1 ${currentTime.getFullYear() + 1} 00:00:00`);

function updateCountdownTime() {
    const currentTime = new Date();
    const difference = newYearTime - currentTime;

    const d = Math.floor(difference / 1000 / 60 / 60 / 24);
    const h = Math.floor(difference / 1000 / 60 / 60) % 24;
    const m = Math.floor(difference / 1000 / 60) % 60;
    const s = Math.floor(difference / 1000) % 60;

    days.textContent = d;
    hours.textContent = h < 10 ? '0' + h : h;
    minutes.textContent = m < 10 ? '0' + m : m;
    seconds.textContent = s < 10 ? '0' + s : s;
}

// Function to update the current day and time in the footer
function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    document.getElementById('currentDateTime').textContent = now.toLocaleDateString('en-US', options);
}


updateDateTime();

// Set interval to call updateDateTime every second to keep the displayed date and time up-to-date
setInterval(updateDateTime, 1000);


updateCountdownTime();
setInterval(updateCountdownTime, 1000);
