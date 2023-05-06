let slideIndex = 1;
const slides = document.getElementsByClassName('image');
const dots = document.getElementsByClassName('dot');

function showSlide(n) {
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

function changeSlide(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

function autoSlide() {
  changeSlide(1);
  setTimeout(autoSlide, 5000); // Change slide every 5 seconds
}

// Add event listeners for prev and next buttons
document.getElementById('prev').addEventListener('click', () => changeSlide(-1));
document.getElementById('next').addEventListener('click', () => changeSlide(1));

showSlide(slideIndex);
autoSlide();

