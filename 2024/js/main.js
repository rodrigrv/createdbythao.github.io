window.addEventListener("DOMContentLoaded", function (event) {
  const closeNav = document.querySelector('.close')
  const navigation = document.querySelector('nav')
  const navMenu = document.querySelector('.menu')
  const pageBody = document.querySelector('body')
  const pageLinks = document.querySelectorAll('.nav-container a')

  navMenu.addEventListener('click', () => {
    openNavigation()
  })

  closeNav.addEventListener('click', () => {
    closeNavigation()
  })

  function openNavigation() {
    navigation.style.right = "0vw"
    pageBody.classList.add("nav-open")
    pageBody.classList.remove("nav-close")
  }

  function closeNavigation() {
    navigation.style.right = '-90vw'
    pageBody.classList.add("nav-close")
    pageBody.classList.remove("nav-open")
  }

  if (screen.width <= 768) {
    pageLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (link.hash == "#projects" || "#about" || "#contact") {
          setTimeout(() => {
            closeNavigation()
          }, 750)
        }
      })
    })
  }
})

