/* 📌 .indexOf()
	Obtenemos el primer index de un elemento.
	Si no hay elemento nos retorna -1
*/
//const nombres = ['Carlos', '400', 'Estefania', 'Rodrigo', 'Rafael', 'Gema', 'Rafael', 'Sara'];
// let pos = nombres.indexOf('Rafael');
// if (pos >= 0){
//     console.warn(`Rafael existe en la posicion=>${pos} del:${nombres}`)
// }else{
//     console.error(`Rafaela no existe en el arreglo: ${nombres}`)
// }

/* 
	📌 .lastIndexOf() 
	Obtenemos el último index de un elemento.
*/
//console.log(nombres.lastIndexOf('Rafael'));

/* 	
	📌 .forEach()
	Nos permite ejecutar una funcion por cada elemento
*/
//  nombres.forEach((nombre,index) => {
//  	console.log(`Hola ${nombre} `);
//  });
 // no debe usarse
// for(let pos=0;pos < nombres.length;pos++){
// 	console.log(`Hola ${nombres[pos]} `);	
// }
 
/* 
	📌 .find()
	Nos permite recorrer un arreglo y devuelve el PRIMER elemento que retornemos.
*/
// const resultado = nombres.find((nombre) => {
// 	if (nombre[0] === 'E') {
// 		return nombre[1];
// 	}
// });
// const resultado2 = nombres.find((nombre) => nombre[0] === 'E')

// console.log(resultado2);

/* 
	📌 .map()
	Nos permite ejecutar una función por cada elemento y crear un nuevo arreglo
	en base a los resultados de esa función.
*/

// const nombresMayusculas = nombres.map((nombre) => nombre.toUpperCase());
// console.log(nombresMayusculas);

// const nombresMayusculas2 = nombres.map((nombre) => {
//     if (nombre[0]== "R"){
//         return nombre[0]
//     }else{
//         return ""   
//     }
// })
// console.log(nombresMayusculas2);

/* 📌 .filter()
	Nos permite ejecutar una función por cada elemento 
	y luego crear un arreglo en base a los resultados de esa función. 
*/

// const nombres4Letras = nombres.filter((nombre) => {
// 	if (nombre.length === 6) {
// 		return nombre;
// 	}
// });
// console.log(nombres4Letras);
// const nombres4Letras2 = nombres.filter((nombre) => nombre.length === 6) 
// console.log(nombres4Letras2);	

/* 
	📌 .includes()
	Nos permite saber si el arreglo contiene un elemento especificado 
*/

// console.log(nombres.includes('Julio'));
// console.log(nombres.includes('Carlos'));

/* 
	📌 .every()
	Nos permite ejecutar un condicional sobre cada elemento y 
	nos devuelve true si TODOS los elemento cumplieron la condición.
*/
const nombres = ['Carlos', 400, 'Estefania', 'Rodrigo',
'Rafael', 'Gema', 'Diana', 'Sara'];

// const nombresValidos = nombres.every((nombre) => {
// 	if (typeof nombre === 'string') {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// const nombresValidos = nombres.every((nombre) => typeof nombre === 'string')

// console.log('¿Todos los nombres son validos? ' + nombresValidos);

/* 
	📌 .some()
	Nos permite ejecutar un condicional sobre cada elemento y
	nos devuelve true si algun elemento cumplio la condición.
*/
// const nombresValidos = nombres.some((nombre) => {
// 	if (typeof nombre !== 'string') {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// console.log('¿El arreglo es invalido? ' + nombresValidos);
// true si hay algun valor invalido
// false si no hay algun valor invalido
notas = [50,40,80,100]
const promedio= notas.reduce((acu,nota)=> (acu+nota)/notas.length,0 )
console.log(promedio)