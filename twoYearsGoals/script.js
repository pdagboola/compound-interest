function updateTime() {
  const clockElement = document.getElementById("clock");
  const clockElement2 = document.getElementById("clock-2");
  const now = new Date();
  console.log(now.getDay());
  const hours = String(now.getUTCHours()).padStart(2, "0");
  const minutes = String(now.getUTCMinutes()).padStart(2, "0");
  const seconds = String(now.getUTCSeconds()).padStart(2, "0");
  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
  clockElement2.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
updateTime();

document.addEventListener("DOMContentLoaded", () => {
  const dayOfWeekElement = document.getElementById("dayOfWeek");
  const dayOfWeekElement2 = document.getElementById("dayOfWeek2");
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const today = new Date();
  const dayOfWeek = days[today.getDay()];
  const dayOfWeek2 = days[today.getDay()];
  dayOfWeekElement.textContent = dayOfWeek;
  dayOfWeekElement2.textContent = dayOfWeek2;
});
