const newYears = "1 Jan 2024";
const dayEl = document.querySelector("#days");
const hourEl = document.querySelector("#hours");
const minEl = document.querySelector("#minutes");
const secEl = document.querySelector("#seconds");

function countDown() {
  const currentDate = new Date();
  const newYearDate = new Date(newYears);

  const seconds = (newYearDate - currentDate) / 1000;
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor(seconds / 3600) % 24;
  const minutes = Math.floor(seconds / 60) % 60;
  const second = Math.floor(seconds % 60);

  dayEl.textContent = days;
  hourEl.textContent = formatTime(hours);
  minEl.textContent = formatTime(minutes);
  secEl.textContent = formatTime(second);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

//Initial call
setInterval(countDown, 1000);
