let cards = document.querySelectorAll("div.imgwrap");

cards.forEach((card) => {
  card.addEventListener("click", (event) => {
    let activeNode = findActive(cards);
    activeNode.classList.remove("active");
    activeNode.firstChild.classList.add("hidden");
    card.classList.add("active");
    card.firstChild.classList.remove("hidden");
  });
});

function findActive(cards) {
  let node = {};
  cards.forEach((card) => {
    if (card.classList.contains("active")) node = card;
  });
  return node;
}
