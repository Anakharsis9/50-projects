const btn = document.querySelector(".btn");
const notifications = document.querySelector(".notifications");

const messageTexts = ["One", "Two", "Three", "Four"];
const colorClasses = ["purple", "red", "green"];

btn.addEventListener("click", () => {
  const notification = document.createElement("button");
  notification.className = "notification";
  notification.innerText = "Message " + messageTexts[getRandomIndex(4)];
  notification.classList.add(colorClasses[getRandomIndex(3)]);
  notifications.appendChild(notification);

  setTimeout(() => {
    notifications.removeChild(notification);
  }, 3000);
});

function getRandomIndex(length) {
  return Math.floor(Math.random() * length);
}
