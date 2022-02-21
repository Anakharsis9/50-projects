const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const max = +counter.innerText;
  counter.innerText = "0";

  const count = () => {
    const target = max;
    const c = +counter.innerText;
    
    const increment = target / 200;
    
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(count, 1);
    } else {
      counter.innerText = target;
    }
  };
  
  count();
});
