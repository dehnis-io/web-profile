
// Script fpr blog carousel 

let currentSlide = 0;

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dots span");

function showSlide(index) {
  slides.forEach((s, i) => {
    s.classList.remove("active");
    dots[i].classList.remove("active");
  });

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function moveSlide(step) {
  currentSlide += step;

  if (currentSlide >= slides.length) currentSlide = 0;
  if (currentSlide < 0) currentSlide = slides.length - 1;

  showSlide(currentSlide);
}

function setSlide(index) {
  currentSlide = index;
  showSlide(index);
}

// init
showSlide(0);