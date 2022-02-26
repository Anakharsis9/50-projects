const btn = document.querySelector(".btn");

btn.addEventListener("click", (event) => {
  const btnX = btn.offsetLeft;
  const btnY = btn.offsetTop;

  const ripple = document.createElement("span");
  ripple.className = "ripple";
  ripple.style.top = event.clientY - btnY + "px";
  ripple.style.left = event.clientX - btnX + "px";

  btn.appendChild(ripple);
  setTimeout(() => {
    ripple.remove();
  }, 1000);
});
