const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const m = 20;
const n = 25;

const rects = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    let rectangle = new Path2D();
    rectangle.rect(j * 20, i * 20, 16, 16);
    ctx.fillStyle = "#1D1D1D";
    ctx.fill(rectangle);
    rects.push(rectangle);
  }
}

canvas.addEventListener("mousemove", (e) => {
  let mouse = getMousePos(canvas, e);

  let color = generateColor();

  rects.forEach((rect) => {
    if (ctx.isPointInPath(rect, mouse.x, mouse.y)) {
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 5;
      ctx.fill(rect);
    } else {
      setTimeout(() => {
        
        ctx.fillStyle = "#1D1D1D";
        ctx.shadowColor = "#111111";
        ctx.shadowBlur = 0;
        ctx.fill(rect);
        console.log("deleted")
      }, 2000);

    }
  });
});



function generateColor() {
  let hexSet = "0123456789ABCDEF";
  let finalHexString = "#";
  for (let i = 0; i < 6; i++) {
    finalHexString += hexSet[Math.ceil(Math.random() * 15)];
  }
  return finalHexString;
}

function getMousePos(canvas, evt) {
  return {
    x: evt.clientX - canvas.offsetLeft,
    y: evt.clientY - canvas.offsetTop,
  };
}
