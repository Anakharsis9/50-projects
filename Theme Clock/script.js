const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");

const time = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const day = document.querySelector(".day");

const btn = document.querySelector(".btn");

const secDeg = -90;

function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
    btn.innerText = "Dark mode";
  } else {
    setTheme("theme-dark");
    btn.innerText = "Light mode";
  }
}

(function () {
  if (localStorage.getItem("theme") === "theme-dark") setTheme("theme-dark");
  else setTheme("theme-light");
})();

btn.addEventListener("click", toggleTheme);

function getTime(date) {
  return date.toLocaleTimeString("en-EN", {
    hour: "numeric",
    minute: "numeric",
  });
}
function getDate(date) {
  return date
    .toLocaleDateString("en-EN", {
      weekday: "long",
      month: "short",
      day: "numeric",
    })
    .replace(/(\d+)/, "<div class='day'>$1</div>");
}

function updateDateTime(date) {
  time.innerText = getTime(date);
  dateEl.innerHTML = getDate(date);
}

function updateSecond(date) {
  second.style.transform = `rotate(${secDeg + date.getSeconds() * 6}deg)`;
}
function updateMinute(date) {
  minute.style.transform = `rotate(${secDeg + date.getMinutes() * 6}deg)`;
}
function updateHour(date) {
  hour.style.transform = `rotate(${secDeg + date.getHours() * 30}deg)`;
}

function cycle() {
  const date = new Date();

  updateSecond(date);
  updateMinute(date);
  updateHour(date);
  updateDateTime(date);
}

cycle();
setInterval(cycle, 1000);
