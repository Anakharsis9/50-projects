if (location.hash) location.href = location.href.replace(location.hash, "");

const insectBtns = document.querySelectorAll(".insect");

const gameBoard = document.querySelector(".game-board");
const timerSpan = document.querySelector(".timer");
const scoreSpan = document.querySelector(".score");
const alertBlock = document.querySelector(".alert");

let selectedInsect = "";
let score = 0;

const boardWidth = gameBoard.clientWidth;
const boardHeight = gameBoard.clientHeight;

function randomNum(min, max) {
  return Math.floor(Math.random() * max + min);
}

function createTimer(m, s) {
  if (s >= 59) {
    m++;
    s = -1;
  }
  s++;

  let mStr = m < 10 ? "0" + m : m;
  let sStr = s < 10 ? "0" + s : s;

  timerSpan.innerHTML = mStr + ":" + sStr;

  setTimeout(() => {
    createTimer(m, s);
  }, 1000);
}

function createInsect(insectName) {
  const wrapper = document.createElement("div");
  wrapper.className = "insectImgWrap";

  const img = document.createElement("img");
  img.className = "insectImg";
  img.src = `./${insectName}.png`;
  img.alt = insectName;
  img.style.transform = "rotate(" + randomNum(90, 270) + "deg)";

  wrapper.append(img);

  img.addEventListener("click", () => {
    wrapper.classList.toggle("captured");

    scoreSpan.innerHTML = ++score;
    if (score === 20) {
      alertBlock.classList.toggle("showed");
    }
    setTimeout(() => {
      addInsect();
      addInsect();
      wrapper.remove();
    }, 500);
  });

  return wrapper;
}

function addInsect() {
  const insect = createInsect(selectedInsect);

  insect.style.top = randomNum(0, boardHeight - 80) + "px";
  insect.style.left = randomNum(0, boardWidth - 80) + "px";

  gameBoard.append(insect);
}

function startGame() {
  setTimeout(addInsect, 800);

  createTimer(0, 0);
}

insectBtns.forEach((insectBtn) => {
  insectBtn.addEventListener("click", (e) => {
    selectedInsect = e.target.id;
    startGame();
  });
});
