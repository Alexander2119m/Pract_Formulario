// obtiene el formulario
const form = document.querySelector('#registro');

// maneja el envío del formulario
form.addEventListener('submit', (event) => {
	event.preventDefault(); // previene el comportamiento predeterminado de enviar el formulario

	// obtiene los valores de los campos del formulario
	const nombre = document.querySelector('#nombre').value;
	const apellido = document.querySelector('#apellido').value;
	const email = document.querySelector('#email').value;
	const telefono = document.querySelector('#telefono').value;
	const cedula = document.querySelector('#cedula').value;
	const edad = document.querySelector('#edad').value;

	// realiza la validación de los campos requeridos
	if (nombre === '' || apellido === '' || email === '' || telefono === '' || cedula === '' || edad === '') {
		alert('Por favor, complete todos los campos.');
		return;
	}

	// crea un objeto con los datos del cliente
	const cliente = {
		nombre,
		apellido,
		email,
		telefono,
		cedula,
		edad
	};

	// guarda los datos del cliente en una base de datos o en el almacenamiento local
	// aquí se asume que se están almacenando en el almacenamiento local del navegador
	localStorage.setItem('cliente', JSON.stringify(cliente));

	// muestra un mensaje de confirmación
	alert('Los datos del cliente han sido guardados.');

	// reinicia el formulario
	form.reset();
	
});