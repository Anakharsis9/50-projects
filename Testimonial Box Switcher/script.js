const progress = document.querySelector(".progress");

const text = document.querySelector(".testimonial__text");

const authorImg = document.querySelector(".author__img img");
const authorName = document.querySelector(".author__name");
const authorDesignation = document.querySelector(".author__designation");

let timer = 10000;

async function getTestimonials() {
  const response = await fetch("https://testimonialapi.toolcarton.com/api");

  return await response.json();
}

getTestimonials().then((testimonials) => {
  let i = 0;
  updateTestimonial(testimonials[i]);

  const intervalId = setInterval(() => {
    if (i >= testimonials.length - 1) i = -1;

    updateTestimonial(testimonials[++i]);
  }, timer);
});

function updateTestimonial(testimonial) {
  text.innerHTML = testimonial.message;

  authorImg.src = testimonial.avatar;
  authorName.innerHTML = testimonial.name;
  authorDesignation.innerHTML = testimonial.designation;
}
