const labels = [...document.querySelectorAll(".inp_label")];

for (const label of labels) {
  const labelTextChars = label.innerText.split("");
  label.innerText = "";

  labelTextChars.forEach((char, index) => {
    const span = document.createElement("span");
    span.innerText = char;
    span.style.transitionDelay = index * 50 + "ms";

    label.appendChild(span);
  });
}
