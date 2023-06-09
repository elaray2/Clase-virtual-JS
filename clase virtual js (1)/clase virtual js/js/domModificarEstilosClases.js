/*
	📌 Modificar estilos CSS mediante clases
*/
const primeraCaja = document.querySelector('#contenedor1 .caja');
//console.log(primeraCaja.classList);

// classList.add() - Nos permite agregar clases a un elemento.
const agregarClase = () => {
	primeraCaja.classList.add('activa');
	//console.log(primeraCaja.classList);
    comprobarClase()
};

// // classList.remove() - Nos permite eliminar clases de un elemento
const eliminarClase = () => {
	primeraCaja.classList.remove('activa');
    comprobarClase()
};

document.querySelector("#boton3").addEventListener('click',agregarClase)
document.querySelector("#boton4").addEventListener('click',eliminarClase)

// // classList.toggle() - Nos permite alternar clases de un elemento
// const toggleClase = () => {
// 	primeraCaja.classList.toggle('activa');
// };

// // classList.contains() - Nos permite comprobar si el elemento contiene una clase
const comprobarClase = () => {
	if (primeraCaja.classList.contains('activa')) {
		alert('La caja tiene la clase "activa"');
	} else {
		alert('La caja no tiene la clase "activa"');
	}

	console.log('Contiene las siguientes clases:');
	primeraCaja.classList.forEach((clase) => {
		console.log(clase);
	});
};

