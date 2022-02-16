const jokeTextWrapper = document.querySelector(".text");
const btn = document.querySelector(".btn");

getJoke();

btn.addEventListener("click", getJoke);

async function getJoke() {
  const req = {
    headers: {
      Accept: "application/json",
    },
  };

  const response = await fetch("https://icanhazdadjoke.com/", req);
  const result = await response.json();
  jokeTextWrapper.innerText = result.joke;
}
