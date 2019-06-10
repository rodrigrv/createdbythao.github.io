// Navigation
const overlay = document.querySelector(".overlay");
const menu = document.querySelector("#menu");
const close = document.querySelector(".closebtn");

// Add event listener
menu.addEventListener("click", openNav);
close.addEventListener("click", closeNav);

// Open navigation
function openNav() {
  close.style.display = "block";
  overlay.style.width = "80%";
  overlay.style.visibility = "visible";
  menu.style.visibility = "hidden";
}

// close navigation
function closeNav() {
  close.style.display = "none";
  overlay.style.width = "0";
  overlay.style.visibility = "hidden";
  menu.style.visibility = "visible";
}

/* Mousewheel on carousels */
var owl = $('.owl-carousel');
owl.on('mousewheel', '.owl-stage', function (e) {
  if (e.deltaY < 0) {
    owl.trigger('next.owl');
  } else {
    owl.trigger('prev.owl');
  }
  e.preventDefault();
});