const menuBtns = document.querySelectorAll(".btn");

const navBlock = document.querySelectorAll(".nav");

menuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    navBlock.forEach((nav) => {
      nav.classList.toggle("open");
    });
  });
});
