const images = document.querySelectorAll("#carouselImages img");
const carousel = document.getElementById("carouselImages");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function showImage(i) {
  index = (i + images.length) % images.length;
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener("click", () => showImage(index - 1));
nextBtn.addEventListener("click", () => showImage(index + 1));

// Cambiar automáticamente cada 5 segundos
setInterval(() => showImage(index + 1), 5000);
