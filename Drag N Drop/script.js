const draggable = document.querySelector(".draggable");
const dropzones = document.querySelectorAll(".dropzone");

draggable.addEventListener("dragstart", (event) => {
  draggable.classList.add("hold");
  setTimeout(() => {
    draggable.hidden = true;
  }, 0);
});

draggable.addEventListener("dragend", (event) => {
  event.target.classList.remove("hold");
  draggable.hidden = false;
});

dropzones.forEach((dropzone) => {
  dropzone.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  dropzone.addEventListener("dragenter", (event) => {
    event.target.classList.add("dragenter");
  });

  dropzone.addEventListener("dragleave", (event) => {
    event.target.classList.remove("dragenter");
  });

  dropzone.addEventListener("drop", (event) => {
    event.preventDefault();
    event.target.classList.remove("dragenter");
    event.target.append(draggable);
  });
});
