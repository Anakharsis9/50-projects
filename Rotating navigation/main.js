const btn = document.getElementById("open");
const content = document.querySelector("section");
const menu = document.querySelector("div.menu_background");


btn.addEventListener("click", () => {
  btn.classList.toggle("button-content--active");
  content.classList.toggle("content--active");
  menu.classList.toggle("menu_background--active");
});
