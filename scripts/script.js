document.addEventListener("DOMContentLoaded", function() {
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const carousel = document.querySelector(".carousel");
  const slides = document.querySelectorAll(".slide");

  let slideIndex = 0;

  function showSlide(index) {
      slides.forEach((slide) => {
          slide.style.transform = `translateX(-${index * 100}%)`;
      });
  }

  prevButton.addEventListener("click", function() {
      slideIndex = (slideIndex - 1 + slides.length) % slides.length;
      showSlide(slideIndex);
  });

  nextButton.addEventListener("click", function() {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
  });
});
