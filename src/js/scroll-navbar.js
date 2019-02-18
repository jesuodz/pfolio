const navbar = document.getElementById('header');

window.onscroll = function() {
  "use strict";
  if (document.documentElement.scrollTop >= window.innerHeight * 0.75  ||
      document.body.scrollTop >= window.innerHeight * 0.75 ) {
    navbar.classList.add('header--scroll');
  } else {
    navbar.classList.remove('header--scroll');
  }
}