let countdown;
let totalSeconds = 0;
let interval;
let isPaused = false;
let remainingSeconds = 0;

function startCountdown() {
    const input = document.getElementById('countdown').value;
    if (input && !isNaN(input)) {
        totalSeconds = parseInt(input) * 60;  // Convert minutes to seconds
        remainingSeconds = totalSeconds;
        document.getElementById('countdown').value = '';
        updateTimerDisplay();
        if (interval) clearInterval(interval);
        interval = setInterval(decrementTime, 1000);
    } else {
        alert('Please enter a valid number.');
    }
}

function decrementTime() {
    if (remainingSeconds > 0 && !isPaused) {
        remainingSeconds--;
        updateTimerDisplay();
        if (remainingSeconds === 0) {
            document.getElementById('alarm').play();
            clearInterval(interval);
        }
    }
}

function updateTimerDisplay() {
    const hours = String(Math.floor(remainingSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((remainingSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(remainingSeconds % 60).padStart(2, '0');
    document.getElementById('timer').textContent = `${hours}:${minutes}:${seconds}`;
}

function stopResumeTimer() {
    if (interval) {
        if (!isPaused) {
            clearInterval(interval);
            document.getElementById('stopResumeBtn').textContent = 'Resume';
        } else {
            interval = setInterval(decrementTime, 1000);
            document.getElementById('stopResumeBtn').textContent = 'Stop';
        }
        isPaused = !isPaused;
    }
}

function resetTimer() {
    clearInterval(interval);
    remainingSeconds = 0;
    updateTimerDisplay();
    document.getElementById('alarm').pause();
    document.getElementById('alarm').currentTime = 0;
    isPaused = false;
    document.getElementById('stopResumeBtn').textContent = 'Stop';
}

function stopAlarm() {
    document.getElementById('alarm').pause();
    document.getElementById('alarm').currentTime = 0;
}
