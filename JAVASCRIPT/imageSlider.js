let currentSlide = 1;

function changeSlide() {
    const slide1 = document.getElementById('slide-11');
    const slide2 = document.getElementById('slide-22');

    slide1.style.display = 'none';
    slide2.style.display = 'none';

    if (currentSlide === 1) {
      slide1.style.display = 'block';
      currentSlide = 2;
    } else {
      slide2.style.display = 'block';
      currentSlide = 1;
    }
}

changeSlide();
setInterval(changeSlide, 4000);