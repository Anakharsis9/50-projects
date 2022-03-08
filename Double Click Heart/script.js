const image = document.querySelector(".image");
const imageX = image.offsetLeft;
const imageY = image.offsetTop;

const counterDiv = document.querySelector(".counter");
let counter = 0;

image.addEventListener("dblclick", (event) => {
  const ripple = document.createElement("div");
  ripple.className = "ripple";

  ripple.style.top = event.clientY - imageY + "px";
  ripple.style.left = event.clientX - imageX + "px";

  console.log(event.clientY - imageY + "px", event.clientX - imageX + "px");

  image.appendChild(ripple);
  setTimeout(() => {
    ripple.remove();
  }, 1100);

  counter++;
  counterDiv.innerHTML = counter;
});
