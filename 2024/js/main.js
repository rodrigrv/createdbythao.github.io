const closeNav = document.querySelector('.close')
const navigation = document.querySelector('nav')
const navMenu = document.querySelector('.menu')

navMenu.addEventListener('click', () => {
  navigation.style.right = "0vw"
})

closeNav.addEventListener('click', () => {
  navigation.style.right = '-90vw'
})