let nombre
document.getElementById('add').addEventListener('click', () => {
    
    if (localStorage.getItem('usuario')){
        nombre = prompt('Escribe otro nombre');    
    }else{
        nombre = prompt('Escribe tu nombre por primer vez');

    }
	window.localStorage.setItem('usuario', nombre);
});

document.getElementById('del').addEventListener('click', () => {
	localStorage.removeItem('usuario');
});

if (localStorage.usuario) {
	console.log('Hola ', localStorage.getItem('usuario'));
} else {
	console.log('Hola usuario anonimo');
}
