const navToogle = document.querySelector('.nav-toogle');
const navLinks = document.querySelectorAll('.nav__link');
const clrPickerBtn1 = document.querySelector('#original-color');
const clrPickerBtn2 = document.querySelector('#secondary-color');
const root = document.querySelector(':root');


navToogle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	});
});


clrPickerBtn1.addEventListener('click', () => {
	root.style.setProperty('--clr-dark', '#303030')
	root.style.setProperty('--clr-accent', '#16e0bd')
})

clrPickerBtn2.addEventListener('click', () => {
	root.style.setProperty('--clr-dark', '#455D7A')
	root.style.setProperty('--clr-accent', '#FACF5A')
})