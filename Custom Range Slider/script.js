let slider = document.querySelector("#my-slider");
let label = document.querySelector(".slider-label");

slider.addEventListener("input", () => {
  let value = slider.value;

  let sliderWidth = slider.clientWidth;
  let labelWidth = label.clientWidth;

  let max = slider.max;
  let min = slider.min;

  let left = value * (sliderWidth / max) + scale(value, min, max, 10, -10);

  label.style.left = left + "px";
  label.innerHTML = value;
});

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
