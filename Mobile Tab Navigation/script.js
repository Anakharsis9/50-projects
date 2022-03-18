const images = document.querySelectorAll(".content");
const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    removeClassFromAll(tabs, "active");
    removeClassFromAll(images, "show");

    tab.classList.add("active");
    images[index].classList.add("show");
  });
});

function removeClassFromAll(collection, className) {
  collection.forEach((element) => {
    element.classList.remove(className);
  });
}
