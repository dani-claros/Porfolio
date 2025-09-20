console.log('Hello, world!');

document.addEventListener('DOMContentLoaded', function () {
	const menuToggle = document.getElementById('menuToggle');
	const mainNav = document.getElementById('mainNavegacion');
	if (menuToggle && mainNav) {
		menuToggle.addEventListener('click', () => {
			const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
			menuToggle.setAttribute('aria-expanded', String(!expanded));
			mainNav.classList.toggle('show');
		});
	}

	const form = document.getElementById('contactForm');
	const formMessage = document.getElementById('formMessage');
	if (form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			// Simula envío
			const data = new FormData(form);
			console.log('Formulario enviado', Object.fromEntries(data.entries()));
			formMessage.textContent = 'Gracias — tu mensaje ha sido enviado (simulado).';
			form.reset();
			setTimeout(() => formMessage.textContent = '', 5000);
		});
	}
});