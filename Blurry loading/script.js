let numbers = document.querySelector(".numbers_loading");

function printNumbers(from, to) {
  let count = from;

  function go() {
    numbers.innerText = count + "%";
    if (count === to) clearInterval(timerId);
    count++;
  }

  go();

  let timerId = setInterval(go, 10);
}

printNumbers(1, 100);
