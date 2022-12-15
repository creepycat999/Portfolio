const hamburgerButton = document.getElementById("hamburger")
const navList = document.getElementById("nav-list")
const scrollTopButton = document.getElementById("scroll-top")

function toggleButton() {
    navList.classList.toggle("show")
}

hamburgerButton.addEventListener('click', toggleButton)


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
  if (document.body.scrollBottom > 5 || document.documentElement.scrollBottom > 5) {
    mybutton.style.color = white;
  } else {
    mybutton.style.color = black;
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}