let timeLeft = 20; 
const timerElement = document.getElementById('timer');

const countdown = setInterval(() => {
    if (timeLeft >= 0) {
        timerElement.textContent = timeLeft; 
        timeLeft--; 
    } else {
        clearInterval(countdown); 
    }
}, 1000);