const btn = document.querySelector(".icon");
const nav = document.querySelector(".navigation");
const navElements = document.querySelectorAll(".nav-text");



btn.addEventListener("click", () => {
  nav.classList.toggle("active");
 

  navElements.forEach((element) => {
    if (element.classList.contains("animationTO")) {
      element.classList.remove("animationTO");
      element.classList.add("animationReverse");
    } else {
      element.classList.remove("animationReverse");
      element.classList.add("animationTO");
    }
  });
});
