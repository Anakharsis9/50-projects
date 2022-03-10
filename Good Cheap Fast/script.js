const goodCheckbox = document.getElementById("good");
const cheapCheckbox = document.getElementById("cheap");
const fastCheckbox = document.getElementById("fast");

const toggles = document.querySelectorAll(".toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const checkbox = toggle.querySelector("input");
    checkbox.checked = !checkbox.checked;

    if (cheapCheckbox.checked && goodCheckbox.checked && fastCheckbox.checked) {
      if (checkbox.name == "fast") {
        cheapCheckbox.checked = false;
      }
      if (checkbox.name == "cheap") {
        goodCheckbox.checked = false;
      }
      if (checkbox.name == "good") {
        fastCheckbox.checked = false;
      }
    }
  });
});
