const textArea = document.querySelector("#textarea");
const choicesContainer = document.querySelector(".choices");
let selected = false;

textArea.addEventListener("input", () => {
  selected = false;
  const choices = textArea.value
    .split(",")
    .map((word) => word.trim())
    .filter((word) => word);

  choicesContainer.innerHTML = "";
  choices.forEach((choice) => {
    const divChoice = document.createElement("div");
    divChoice.className = "choice";
    divChoice.innerText = choice;

    choicesContainer.appendChild(divChoice);
  });
});

textArea.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  textArea.value = "";
  if (selected) choicesContainer.innerHTML = "";
  randomChoice();
});

function randomChoice() {
  const times = 20;

  const intervalId = setInterval(() => {
    const choice = getRandomChoice();
    choice.classList.add("active");

    setTimeout(() => {
      choice.classList.remove("active");
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(intervalId);
    const choice = getRandomChoice();

    setTimeout(() => {
      choice.classList.add("active");
      selected = true;
    }, 100);
  }, 100 * times);
}

function getRandomChoice() {
  const choices = choicesContainer.querySelectorAll(".choice");
  const len = choices.length;
  return choices[Math.floor(Math.random() * len)];
}
