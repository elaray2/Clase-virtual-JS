import {tecla} from './teclado.js'

const d = document
// es disparado cuando el documento HTML ha sido completamente cargado y parseado, sin esperar hojas de estilo, 
// imágenes y subtramas para finalizar la carga.
d.addEventListener('DOMContentLoaded', (e) => {
    console.log("documento cargado...")
   
});
d.addEventListener('keydown', (e) => {
    tecla(e)
    // moveBall(e,".ball",".stage")
});
