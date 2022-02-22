const glasses = document.querySelectorAll(".glass");

const remained = document.querySelector(".remained");
const remainedText = remained.querySelector(".text-main");

const drunkDiv = document.querySelector(".drunk");
const drunkText = drunkDiv.querySelector(".text-main");

let remainedNum = 2000;
let drunk = 0;

glasses.forEach((glass, index) => {
  glass.addEventListener("click", () => {
    const increment = 250;

    if (glass.classList.contains("selected")) {
      if (glasses[index + 1].classList.contains("selected")) {
        for (let i = glasses.length - 1; i > index; i--) {
          glasses[i].classList.remove("selected");
        }
        drunk = increment * (index + 1);
      } else {
        glass.classList.remove("selected");
        drunk -= increment;
      }
    } else {
      for (let i = 0; i <= index; i++) {
        glasses[i].classList.add("selected");
      }
      drunk = increment * (index + 1);
    }
    updateCup();
  });
});

function updateCup() {
  remainedText.innerText = (remainedNum - drunk) / 1000 + "L";
  remained.style.height = 100 - drunk * 0.05 + "%";

  drunkText.innerText = drunk * 0.05 + "%";
  drunkDiv.style.height = drunk * 0.05 + "%";
}
