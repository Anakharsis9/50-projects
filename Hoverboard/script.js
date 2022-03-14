const wrapper = document.querySelector(".wrapper");

const rectanglesCount = 500;

for (let i = 0; i < rectanglesCount; i++) {
  const rect = document.createElement("div");
  rect.className = "rect";

  rect.addEventListener("mouseover", () => {
    setColor(rect);
  });
  rect.addEventListener("mouseout", () => {
    removeColor(rect);
  });
  wrapper.appendChild(rect);
}

function generateColor() {
  let hexSet = "0123456789ABCDEF";
  let finalHexString = "#";
  for (let i = 0; i < 6; i++) {
    finalHexString += hexSet[Math.ceil(Math.random() * 15)];
  }
  return finalHexString;
}

function setColor(rect) {
  const color = generateColor();
  rect.style.backgroundColor = color;
  rect.style.boxShadow = `${color} 0px 4px 12px`;
}
function removeColor(rect) {
  const color = "#1D1D1D";
  rect.style.backgroundColor = color;
  rect.style.boxShadow = `${color} 0 0 2px`;
}
