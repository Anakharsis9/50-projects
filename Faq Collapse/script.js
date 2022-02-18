const iconBtns = document.querySelectorAll(".icons");

iconBtns.forEach((iconBtn) => {
  iconBtn.addEventListener("click", () => {
    let container = iconBtn.parentElement.parentElement;
    let answer = container.querySelector(".answer");
    let arrow = iconBtn.querySelector(".arrow");
    let close = iconBtn.querySelector(".close");

    arrow.classList.toggle("disabled");
    close.classList.toggle("disabled");
    answer.classList.toggle("disabled");
    container.classList.toggle("open");
  });
});
