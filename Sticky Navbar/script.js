const header = document.querySelector(".header");

const threshold = 200;

window.addEventListener("scroll", () => {
  if (window.scrollY >= threshold) {
    header.classList.add("active");
  } else if (header.classList.contains("active")) {
    header.classList.remove("active");
  }
});
