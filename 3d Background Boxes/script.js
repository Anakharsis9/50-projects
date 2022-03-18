const btn = document.querySelector(".btn");
const boxes = document.querySelector(".boxes");

btn.addEventListener("click", (event) => {
  boxes.classList.toggle("big");
});

const n = 4;
const boxSize = 125;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const box = document.createElement("div");
    box.className = "box";
    box.style.backgroundPosition = `${-j * boxSize}px ${-i * boxSize}px`;
    boxes.appendChild(box);
  }
}
