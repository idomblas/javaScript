let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

const display = document.getElementById("display");

function updateTime() {
  const now = Date.now();
  elapsedTime = now - startTime;

  const totalSeconds = Math.floor(elapsedTime / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  display.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

function startTimer() {
  if (isRunning) return;

  startTime = Date.now() - elapsedTime;

  timer = setInterval(updateTime, 1000);
  isRunning = true;
}

function pauseTimer() {
  if (!isRunning) return;

  clearInterval(timer);
  isRunning = false;
}

function toggleTimer() {
  if (isRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}

document.body.addEventListener("click", toggleTimer);
