const searchIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input");

searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("disabled");
  searchInput.focus();
});
