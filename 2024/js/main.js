const closeNav = document.querySelector('.close')
const navigation = document.querySelector('nav')
const navMenu = document.querySelector('.menu')
const pageBody = document.querySelector('body')
const pageLinks = document.querySelectorAll('.nav-container a')

function openNavigation() {
  navMenu.addEventListener('click', () => {
    navigation.style.right = "0vw"
    pageBody.classList.add("nav-open")
    pageBody.classList.remove("nav-close")
  })
}

function closeNavigation() {
  closeNav.addEventListener('click', () => {
    navigation.style.right = '-90vw'
    pageBody.classList.add("nav-close")
    pageBody.classList.remove("nav-open")
  })
}

openNavigation();
closeNavigation();