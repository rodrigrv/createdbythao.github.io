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
}

// close navigation
function closeNav() {
  close.style.display = "none";
  overlay.style.width = "0";
}
