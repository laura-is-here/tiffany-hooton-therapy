/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
const navbarBrand = document.querySelector('.navbar-brand');
const navbarContent = document.querySelector('#navbarSupportedContent')
const navbar = document.querySelector('#navbar');
const menuToggler = document.querySelector('.navbar-toggler');
const siteTitle = document.querySelector('.site-title');

window.onscroll = function() {
  this.console.log(navbarBrand.classList);
  this.console.log(navbarContent.classList);
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navbarBrand.classList.replace('opacity-90', 'opacity-0');
    navbarContent.classList.replace('opacity-90', 'opacity-0');
  } else if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) {
    navbarBrand.classList.replace('opacity-0', 'opacity-90');
    navbarContent.classList.replace('opacity-0', 'opacity-90');
  }
};

menuToggler.addEventListener('click', () => {
    siteTitle.classList.toggle('opacity-0');
    navbar.classList.toggle('bg-primary');
    navbarBrand.classList.toggle('opacity-0');
    navbarContent.classList.toggle('opacity-0');
});
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" current", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " current";
}

