const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const outer = document.querySelector('.outer');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
	navLinks.classList.toggle('open');
	outer.classList.toggle('open');

	links.forEach(link => {
		link.classList.toggle('fade');
	});
});