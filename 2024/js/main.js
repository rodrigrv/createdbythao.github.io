const closeNav = document.querySelector('.close')
const navigation = document.querySelector('nav')
const navMenu = document.querySelector('.menu')
const pageBody = document.querySelector('body')

navMenu.addEventListener('click', () => {
  navigation.style.right = "0vw"
  pageBody.classList.add("nav-open")
  pageBody.classList.remove("nav-close")
})

closeNav.addEventListener('click', () => {
  navigation.style.right = '-90vw'
  pageBody.classList.add("nav-close")
  pageBody.classList.remove("nav-open")
})