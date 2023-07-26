const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateTime() {
  hours.textContent = new Date().getHours() + " : ";
  minutes.textContent = new Date().getMinutes() + " : ";
  seconds.textContent = new Date().getSeconds();
}
updateTime();
setInterval(updateTime, 1000);
