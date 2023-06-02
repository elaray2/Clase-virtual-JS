// 📌 Forma #1
function saludo(mensaje="hola") {
	console.log(`${mensaje}...!`)
}
//saludo()
// const variable = saludo;
// variable("Bienvenido")
//📌 Forma #2 - Asignando una función a una variable.
const saludo1 = function () {
	console.log('Hola desde variable!');
};
//saludo1()
// 📌 Forma #3 - Función de tipo flecha.
// const saludo2 = () => 2+2;
// console.log(saludo2())
// const saludo3 = () => {
// 	console.log('Hola3!');
// 	return 3+3
// }	
// saludo3();
function suma(n1=1,n2=1){
	return n1+n2
}
const suma2 = (n1=1,n2=2) => n1+n2
console.log(suma(5,4))
console.log(suma2(4))
//callbacks
const obtenerPostsDeUsuario = (usuario, callback) => {
	console.log(`Obteniendo los post de ${usuario} ...`);
	//let posts = ['Post1', 'Post2', 'Post3'];
	//callback(posts);
	setTimeout(() => {
		let posts = ['Post1', 'Post2', 'Post3'];
		callback(posts);
	}, 5000);
};
//function setTimeout(callback,tiempo){}
obtenerPostsDeUsuario('carlos', (posts) => {
	console.log(posts);
	
});