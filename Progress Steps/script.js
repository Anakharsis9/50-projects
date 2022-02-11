const steps = document.querySelectorAll("div.step");
const bridges = document.querySelectorAll("div.bridge");
let currentStep = steps[0];
let currentBridge = bridges[0];

let i = 1;
let j = 0;

// let next = document.querySelector("button.next");
// let prev = document.querySelector("button.prev");

function clickPrev() {
  if (i == 2) {
    document.querySelector("button.prev").classList.remove("enabled");
    document.querySelector("button.prev").disabled = true;
    document.querySelector("button.next").disabled = false;
  }
  document.querySelector("button.next").classList.add("enabled");
  currentStep = steps[--i];
  console.log(i);
  currentStep.classList.remove("active");
  currentBridge = bridges[--j];
  currentBridge.classList.remove("activeBridge");
}

function clickNext() {
  currentStep = steps[i++];
  console.log(i);
  if (i == steps.length) {
    document.querySelector("button.next").classList.remove("enabled");
    document.querySelector("button.next").disabled = true;
  }
  document.querySelector("button.prev").classList.add("enabled");
  document.querySelector("button.prev").disabled = false;
  currentStep.classList.add("active");
  currentBridge = bridges[j++];
  currentBridge.classList.add("activeBridge");
}

// if (document.querySelector("button.prev").classList.contains("enabled")) {
//   let prev = document.querySelector("button.prev");
//   let next = document.querySelector("button.next");
//   prev.addEventListener("click", (event) => {
//     console.log("hello");
//     currentStep = steps[i--];
//     if (currentStep !== steps[steps.length - 1])
//       next.classList.add("enabled");
//     currentStep.classList.remove("active");
//     currentBridge = bridges[j--];
//     currentBridge.classList.remove("activeBridge");
//   });
// }
