const keyDiv = document.querySelector(".key");
const keyCode = document.querySelector(".keyCode");
const code = document.querySelector(".code");

const start = document.querySelector(".start");

window.addEventListener("keydown", function (key) {
  start.classList.add("disabled");

  keyDiv.classList.remove("disabled");
  keyCode.classList.remove("disabled");
  code.classList.remove("disabled");

  keyDiv.querySelector(".btn").innerText =
    key.key === " " ? key.code : key.key.toUpperCase();
  keyCode.querySelector(".btn").innerText = key.key.toUpperCase().charCodeAt(0);
  code.querySelector(".btn").innerText = key.code;
});
