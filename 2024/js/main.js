const closeNav = document.querySelector('.close')
const navigation = document.querySelector('nav')


closeNav.addEventListener('click', () => {
  navigation.style.right = '-65vw'
})