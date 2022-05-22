let inputs = document.querySelectorAll(".code-input");

inputs.forEach((input, idx) => {
  input.addEventListener("input", () => {
    const maxLength = 1;
    if (input.value.length > maxLength)
      input.value = input.value.slice(-maxLength);

    if (inputs[idx + 1] && input.value) inputs[idx + 1].focus();

    if (!input.value && inputs[idx - 1]) inputs[idx - 1].focus();
  });
});
