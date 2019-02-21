const button = document.getElementById('button');
const menu = document.getElementById('menu');
  
button.addEventListener('click', function() {
  button.classList.toggle('cross');
  menu.classList.toggle('menu--active');
});

document.addEventListener('click', function(event) {
	// Using event blubbling
	if ( event.target.classList.contains( 'header-navlink' ) ) {
    button.classList.toggle('cross');
    menu.classList.toggle('menu--active');
  }
})