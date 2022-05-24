const ratingCards = document.querySelectorAll(".rating-card");
let feedback = "";

const sendBtn = document.querySelector(".sendBtn");

const feedbackCard = document.querySelector(".feedback-card");
const thanksCard = document.querySelector(".thanks-card");
const thanksFeedback = document.querySelector(".thanks-content");

ratingCards.forEach((card) => {
  card.addEventListener("click", () => {
    feedback = card.dataset.feedback;
    removeActive();
    card.classList.toggle("active");
  });
});

sendBtn.addEventListener("click", () => {
  if (!feedback) return alert("Please select one");
  feedbackCard.classList.toggle("hidden");
  thanksCard.classList.toggle("hidden");
  thanksFeedback.innerHTML = "Feedback: " + feedback;
});

function removeActive() {
  ratingCards.forEach((card) => {
    card.classList.remove("active");
  });
}
