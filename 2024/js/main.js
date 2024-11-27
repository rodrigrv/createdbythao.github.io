window.addEventListener("DOMContentLoaded", function (event) {
  const closeNav = document.querySelector('.close')
  const navigation = document.querySelector('nav')
  const navMenu = document.querySelector('.menu')
  const pageBody = document.querySelector('body')
  const pageLinks = document.querySelectorAll('.nav-container a')

  // Navigation open/close
  navMenu.addEventListener('click', () => {
    openNavigation()
  })

  closeNav.addEventListener('click', () => {
    closeNavigation()
  })

  function openNavigation() {
    navigation.style.right = "0vw";
    pageBody.classList.add("nav-open");
    pageBody.classList.remove("nav-close");
  }

  function closeNavigation() {
    navigation.style.right = '-90vw';
    pageBody.classList.add("nav-close");
    pageBody.classList.remove("nav-open");
  }

  // Close nav if selecting bookmark links
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

  // Form submission
  const form = document.getElementById('form');
  const result = document.getElementById('result');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Sending form. Please wait..."

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: json
    })
      .then(async(response) => {
        let json = await response.json();
        if (response.status == 200) {
          result.innerHTML = `
          <span class="form-heading">Thank you for your submission!</span>
          <p class="form-copy">I\'ll be in contact soon!</p>
          `;
        } else {
          console.log(response);
          result.innerHTML = json.message;
        }
      })
      .catch(error => {
        console.log(error);
        result.innerHTML = "Something went wrong!";
      })
      .then(function () {
        form.reset();
        form.style.display = "none";
        // setTimeout(() => {
        //   result.style.display = "none";
        // }, 3000);
      });
  });

})