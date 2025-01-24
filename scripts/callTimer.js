const labelMinutes = document.getElementById("minutes");
const labelSeconds = document.getElementById("seconds");

let minutes = 0;
let seconds = 0;

const callTimer = document.querySelector(".timer");
const callTimerMin = document.querySelector("#timer--minutes");
const callTimerSec = document.querySelector("#timer--seconds");
const callTimerSeperator = document.querySelector("#timer--separator");
const callTimerContinueModal = document.querySelector(".modal");
const callTimerContinueModalYes = document.querySelector("#modal--yes");
const callTimerContinueModalNo = document.querySelector("#modal--no");

let time = 0;
let timer;
const timeCountdownInMinutes = 5;
let modalResponse = false;

callTimerContinueModalNo.addEventListener("click", () => {
  callTimerContinueModal.classList.add("hidden");
  modalResponse = true;
});

callTimerContinueModalYes.addEventListener("click", () => {
  callTimerContinueModal.classList.add("hidden");
  modalResponse = true;
  clearInterval(timer);
  time = 99999;
  callTimer.classList.add("hidden");
});

//    countdown timer from timeCountdownInMinutes to 0
function startTimer() {
  time = timeCountdownInMinutes * 60;
  timer = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    callTimerMin.textContent = minutes < 10 ? `0${minutes}` : minutes;
    callTimerSec.textContent = seconds < 10 ? `0${seconds}` : seconds;

    if (time < 0) {
      clearInterval(timer);
      alert("timers up"); //TODO: Change this to an notif alert
      window.location.href = "../index.html";
    }
    if (time <= 60) {
      if (modalResponse === false) {
        callTimerContinueModal.classList.remove("hidden");
      }
    }
    time--;
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  startTimer();
});
