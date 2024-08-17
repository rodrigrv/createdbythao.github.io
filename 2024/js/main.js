const closeNav = document.querySelector('.close')
const navigation = document.querySelector('nav')
const navMenu = document.querySelector('.menu')
const pageBody = document.querySelector('body')
const pageLinks = document.querySelectorAll('.nav-container a')
const urlBookmark = window.location.href.split('/')[8]

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

// pageLinks.forEach((link) => {
//   console.log(link.hash)
//   if(link.hash == urlBookmark) {
//     console.log('this matches, please close')
//     closeNavigation();
//   }
// })

// if (urlBookmark == "#projects") {
//   closeNavigation()
// } else if (urlBookmark == "#about") {
//   closeNavigation()
// } else if (urlBookmark == "#contact") {
//   closeNavigation()
// }

