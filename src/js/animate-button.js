const button = document.getElementById('button');
const menu = document.getElementById('menu');
    
button.addEventListener('click', function() {
  button.classList.toggle('cross');
  menu.classList.toggle('menu--active');
});
