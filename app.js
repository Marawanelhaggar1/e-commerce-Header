let slideIndex = 0;

const showSlide = () => {
  let i;
  let slide = document.getElementsByClassName("slide");
  let square = document.getElementsByClassName("square");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slide.length) {
    slideIndex = 1;
  }
  for (i = 0; i < square.length; i++) {
    square[i].classList.remove("act");
  }
  slide[slideIndex - 1].style.display = "block";
  square[slideIndex - 1].classList.add("act");

  setTimeout(showSlide, 3000);
};

showSlide();
