function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  let windowHeight = window.innerHeight;
  const elementVisible = 150;

  for (let i = 0; i < reveals.length; i++) {
    let elementTop = reveals[i].getBoundingClientRect().top;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
reveal();
window.addEventListener("scroll", reveal);
