const placeholder = document.querySelector(".placeholder");
const card = document.querySelector(".card");

const timeId = setTimeout(() => {
  placeholder.classList.remove("shimmer");
  placeholder.classList.add("disabled");
  card.classList.remove("disabled");
}, 3000);
