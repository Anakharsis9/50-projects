const btn = document.querySelector(".btn");
const background = document.querySelector(".blur-wrapper");
const passwordInp = document.getElementById("password");

btn.addEventListener("click", (event) => {
  event.preventDefault();
});

let blurRadius = 20;
passwordInp.addEventListener("input", () => {
  background.style.filter = `blur(${
    blurRadius - passwordInp.value.length * 2
  }px)`;
});
