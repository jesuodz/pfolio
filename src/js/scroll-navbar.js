const navbar = document.getElementById('header');
const screenHeight = window.innerHeight;

window.onscroll = function() {
  "use strict";
  if (document.documentElement.scrollTop >= window.innerHeight ||
      document.body.scrollTop >= window.innerHeight) {
    navbar.classList.add('header--scroll');
  } else {
    navbar.classList.remove('header--scroll');
  }
}