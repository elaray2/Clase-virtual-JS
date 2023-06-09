// eventos del teclado
// keyup. cuando soltamos la tecla
// keydown. cuando presionamos la tecla. el mas utilizado
// keypress. mientras presionamos la tecla
const d = document
let x=0, y=0

export const tecla = (e) => {
    console.log(e)
    console.log(e.target)
    console.log(e.type)
    console.log(e.key,e.keyCode)
    console.log(e.ctrlKey)
    console.log(e.shiftKey)
    console.log(e.altKey)
    //shortcuts
    if (e.altKey && e.key === "a") confirm("has lanzado una confirmacion")

}