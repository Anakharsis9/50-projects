const textDiv = document.querySelector(".text");
const speedInput = document.querySelector("#speed");
const text = "We Love Programming!";
let index = 0;
let delay = 400 / speedInput.value;

let timerId = setTimeout(function printWord() {
  delay = 400 / speedInput.value;
  if (index > text.length - 1) {
    index = 0;
    textDiv.innerHTML = "";
  }
  textDiv.innerHTML += text[index];
  index++;

  timerId = setTimeout(printWord, delay);
}, delay);
