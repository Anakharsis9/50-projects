const canvas = document.getElementById("canvas");

const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const clearBtn = document.querySelector(".clear");

const brushSizeBox = document.querySelector(".size");
let brushSize = parseInt(brushSizeBox.innerText);
const colorPicker = document.getElementById("colorPicker");

const ctx = canvas.getContext("2d");
ctx.canvas.width = canvas.clientWidth;
ctx.canvas.height = canvas.clientHeight;
const coord = { x: 0, y: 0 };

canvas.addEventListener("mousedown", start);
canvas.addEventListener("mouseup", stop);

function start(event) {
  canvas.addEventListener("mousemove", draw);
  reposition(event);
}

function reposition(event) {
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}

function stop() {
  canvas.removeEventListener("mousemove", draw);
}

function draw(event) {
  ctx.beginPath();
  ctx.lineWidth = brushSize + "";
  ctx.lineCap = "round";
  ctx.strokeStyle = colorPicker.value;
  ctx.moveTo(coord.x, coord.y);
  reposition(event);
  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
}

minusBtn.addEventListener("click", changeSize);
plusBtn.addEventListener("click", changeSize);
clearBtn.addEventListener("click", clear);

function changeSize(event) {
  const sign = event.target.innerText;
  const min = 5;
  const max = 50;

  switch (sign) {
    case "-":
      brushSize -= 5;
      break;
    case "+":
      brushSize += 5;
      break;
  }
  if (brushSize < min) brushSize = min;
  if (brushSize > max) brushSize = max;
  brushSizeBox.innerText = brushSize;
}
function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
