const btn = document.querySelector(".btn");
const wrappers = document.querySelectorAll(".wrapper");
const number = document.querySelector(".number");

btn.addEventListener("click", (event) => {
  switchWrappers();
  countDown();
});

function countDown() {
  let counter = 2;
  let delay = 1300;
  number.classList.toggle("rotate");

  let timeoutId = setTimeout(function updateText() {
    number.innerText = counter--;

    timeoutId = setTimeout(updateText, delay);
  }, delay);

  number.innerText = "3";

  setTimeout(() => {
    switchWrappers();
    clearInterval(timeoutId);
    number.classList.toggle("rotate");
  }, delay * 4);
}

function switchWrappers() {
  wrappers.forEach((wrapper) => {
    wrapper.classList.toggle("disabled");
  });
}

countDown();
