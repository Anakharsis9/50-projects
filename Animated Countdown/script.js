const btn = document.querySelector(".btn");
const wrappers = document.querySelectorAll(".wrapper");
const number = document.querySelector(".number");

btn.addEventListener("click", (event) => {
  switchWrappers();
  countDown();
});

function countDown() {
  let counter = 2;
  number.classList.toggle("rotate");

  const intervalId = setInterval(() => {
    number.innerText = counter--;
  }, 1400);

  number.innerText = "3";
  setTimeout(() => {
    switchWrappers();
    clearInterval(intervalId);
    number.classList.toggle("rotate");
  }, 5200);
}

function switchWrappers() {
  wrappers.forEach((wrapper) => {
    wrapper.classList.toggle("disabled");
  });
}

countDown();
