const aside = 
`<aside>
  <div class="nav-container">
    <div class="logo-wrapper">
      <div class="img-container">
        <a href="../../Createdbythao/2024/index.html">
          <img src="../../../Createdbythao/2024/images/th-logo-orange.svg" alt="Created By Thao" />
        </a>
      </div>
      <button class="menu">Menu<span></span></button>
    </div>
    <nav>
      <button class="close">Close<span>&times;</span></button>
      <ul class="main-nav">
        <li><a href="../../Createdbythao/2024/index.html#projects">Projects</a></li>
        <ul class="subnav">
          <li><a href="/projects/destination-success.html">Destination Success</a></li>
          <li><a href="/projects/texas-extra/credit.html">Texas Extra Credit</a></li>
          <li><a href="/projects/annual-report.html">Annual Report</a></li>
          <li><a href="/projects/gigis-party-decor">Gigi's Party Decor</a></li>
        </ul>
        <li><a href="../../Createdbythao/2024/index.html#about">About</a></li>
        <li><a href="../../Createdbythao/2024/index.html#contact">Contact</a></li>
      </ul>
    </nav>
  </div>
</aside>`

const footer =
`<footer>
  <div class="footer-copy">
    <p class="copyright">
      &copy; 2024 Thao Ha-Rodriguez
    </p>
    <div class="social-icons">
      <a href="https://www.linkedin.com/in/thao-ha/" target="_blank">
        <span>LinkedIn</span></a> |
      <a href="https://www.instagram.com/created.by.thao/" target="_blank">
        <span>Instagram</span>
      </a>
    </div>
    <!-- <p>
      <a href="#">
        Goodies
      </a>
    </p> -->
  </div>
</footer>`

let wrapper = document.querySelector('body')
document.addEventListener("DOMContentLoaded", function(event) {
  wrapper.insertAdjacentHTML('afterbegin', aside)
  wrapper.insertAdjacentHTML('beforeEnd', footer)
})