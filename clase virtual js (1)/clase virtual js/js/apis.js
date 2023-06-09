const endpoint = 'https://api.npoint.io/0b2bdb82826f5bdc6b48';
// https://dogapi.dog/api/v2/facts?limit=2
// console.log("inicio")
// fetch(endpoint)
// 	.then((respuesta) => respuesta.json())
// 	.then((datos) => {
//         console.log(datos)
//         console.table(datos.posts[0])
//     })	
// 	.catch((error) => {
// 		console.log(error);
// 	});
// console.log("fin")
/*
	📌 Ejemplo con Async/Await
*/
const obtenerDatos = async () => {
    
    console.log("inicio")
    try {
        const respuesta = await fetch(endpoint);
        const datos = await respuesta.json();
        console.log(datos);
    } catch (error) {
        console.log(error);
    }

    console.log("termino la ejecucion")
};

obtenerDatos();

