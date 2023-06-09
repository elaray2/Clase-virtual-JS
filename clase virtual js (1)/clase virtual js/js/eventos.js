const boton1 = document.getElementById('boton1');
const primeraCaja = document.querySelector('.caja');
// boton1.innerText="Agregar efecto"
// console.log(boton1);
// forma 2 de llmar eventos
//boton1.onclick = agregarCaja()
// la forma 3: recomendada de llamar eventos en js
function color(e){
	//console.log(e.target,e.type,e.target.id,e.target.innerText);
	// console.log(primeraCaja);
	// console.log(primeraCaja.classList);
	primeraCaja.classList.toggle('activa');
	document.querySelector('.caja:last-child').classList.add("activa")

}
boton1.addEventListener('click', color);
// boton1.addEventListener('dblclick', (e) => {
// 	console.log("doble click",e);
// });

// /*
// 	📌 Agregando el evento a multiples elementos
// 	Podemos agregar el evento a multiples elementos recorriendolos mediante un ciclo.
// 	Nota: Esta no es la forma mas optima, en la proxima clase veremos una mejor forma.
// */
// const contenedor = document.getElementById('contenedor1');
// document.addEventListener('click', (e) => {
// 	console.log('Hiciste click en el contenedor',e.target);
// 	// delegacion de eventos: es colocar el evento al objeto contenedor
// 	// y todos los hijos lo heredan y luego para ejecutarlo
// 	// se hace el objeto,matches()
// 	if (e.target.matches('.caja')){
// 		console.log('tengo la clase caja',e.target)
// 	}
// 	if (e.target.matches('.caja:nth-child(3)')){
// 		console.log('tengo la clase caja',e.target)
// 	}
// });
// const cajas = document.querySelectorAll('.caja');
// console.log(cajas)
// cajas.forEach((caja) => {
// 	console.log(caja)
// 	// caja.addEventListener('click', (e) => {
//     //     e.stopPropagation();
// 	// 	console.log(`Haz hecho click en la caja: ${e.target.innerHTML}`);
// 	// });
// });

// // remover eventos
const boton3 = document.getElementById('boton3');
const ultimaCaja = document.querySelector('.caja:last-child');
console.log("=>",ultimaCaja);
const toggleClase = () => {
	ultimaCaja.classList.toggle('activa');
};

boton3.addEventListener('click', () => {
	ultimaCaja.addEventListener('click', toggleClase);
});

document.getElementById('boton4').addEventListener('click', () => {
	ultimaCaja.removeEventListener('click', toggleClase);
});


