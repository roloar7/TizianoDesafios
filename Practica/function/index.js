let nombre = prompt("Escriba su nombre: ");

console.log("Nombre: " + nombre);

boton_saludar.addEventListener('click', e => {


function saludar() {
    
    console.log("Hola " + nombre)

}

saludar();
    
})


boton_temperatura.addEventListener('click', e => {


function temperatura() {
    
    let temperatura = 12
    console.log("La temperatura es de: " + temperatura, "grados")

}

temperatura();

})
