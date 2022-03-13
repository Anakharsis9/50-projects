const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const images = document.querySelector(".images");
const imagesLength = (images.childElementCount - 1) * -1;
const imageWidth = 500;
let currentImage = 0;

let intervalId = setInterval(() => {
  moveImages("next");
}, 2000);

next.addEventListener("click", () => {
  moveImages("next");
  resetInterval();
});
prev.addEventListener("click", () => {
  moveImages("prev");
  resetInterval();
});

function moveImages(direction) {
  switch (direction) {
    case "next":
      currentImage -= 1;
      break;
    case "prev":
      currentImage += 1;
      break;
  }

  if (currentImage > 0) currentImage = imagesLength;
  if (currentImage < imagesLength) currentImage = 0;

  images.style.left = currentImage * imageWidth + "px";
}

function createInterval() {
  intervalId = setInterval(() => {
    moveImages("next");
  }, 2000);
}

function resetInterval() {
  clearInterval(intervalId);
  createInterval();
}
