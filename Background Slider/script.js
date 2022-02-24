const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

const body = document.querySelector("body");
const slide = document.querySelector(".slide");

const imgs = [
  "./imgs/mountain.jpg",
  "./imgs/desert.jpg",
  "./imgs/fire.jpg",
  "./imgs/ocean.jpg",
];

let current = 0;

rightArrow.addEventListener("click", () => {
  current++;
  if (current === imgs.length) current = 0;
  changeImage();
});

leftArrow.addEventListener("click", () => {
  current--;
  if (current < 0) current = imgs.length - 1;
  changeImage();
});

function changeImage() {
  body.style.backgroundImage = `url(${imgs[current]})`;
  slide.style.backgroundImage = `url(${imgs[current]})`;
}
