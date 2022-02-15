const btns = document.querySelectorAll(".btn");

const sounds = [];

btns.forEach((btn) => {
  const sound = new Audio("./sounds/" + btn.innerText + ".mp3");
  sounds.push(sound);
  btn.addEventListener("click", () => {
    sounds.forEach((sound) => sound.load());
    sound.play();
  });
});
