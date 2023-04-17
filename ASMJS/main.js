let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
    search.classList.remove('active');
}

let header = document.querySelector('header');
window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
//Ktra SDT
document.getElementById("phone").addEventListener("input", function() {
  this.setCustomValidity("");
  if (!this.value.match(/^[0-9]{10}$/)) {
    this.setCustomValidity("Please enter a 10-digit phone number");
  }
});

//Ktra Email
document.getElementById("email").addEventListener("input", function() {
  this.setCustomValidity("");
  if (!this.value.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)) {
    this.setCustomValidity("Please enter a valid email address");
  }
});
