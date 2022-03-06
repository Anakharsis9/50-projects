const description = document.querySelector(".description");
const images = document.querySelector(".images");
const upButton = document.querySelector(".up");
const downButton = document.querySelector(".down");

const titleBoxesLength = description.querySelectorAll(".title-box").length;

let currentSlideIndex = 0;
const descriptionLength = (titleBoxesLength - 1) * 100;
description.style.top = `-${descriptionLength}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  if (direction == "up") {
    currentSlideIndex++;
    currentSlideIndex =
      currentSlideIndex > titleBoxesLength - 1 ? 0 : currentSlideIndex;
  } else if (direction == "down") {
    currentSlideIndex--;
    currentSlideIndex =
      currentSlideIndex < 0 ? titleBoxesLength - 1 : currentSlideIndex;
  }

  description.style.transform = `translateY(${currentSlideIndex * 100}vh)`;
  images.style.transform = `translateY(-${currentSlideIndex * 100}vh)`;
};
