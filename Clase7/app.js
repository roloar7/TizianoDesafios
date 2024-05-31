
function CambiarPrecio() {
    let cambiarPrecio = document.getElementById("NuevoPrecio").value;
    console.log("Nuevo precio $" + cambiarPrecio);

    if (cambiarPrecio > 0) {

        let  precioProducto = document.getElementById("precioProducto")
        precioProducto.innerText = "$" + cambiarPrecio

        
    } else {
        alert("No se ingreso ningun numero");
    }
}

function CambiarColorRojo() {
    let colorRojo = document.querySelector("#nombreProducto")
    colorRojo.style.color = "red"
}

    

function CambiarColorAzul() {
    let colorAzul = document.querySelector("#nombreProducto")
    colorAzul.style.color = "blue"
}




function CambiarColorVerde() {
    let colorVerde = document.querySelector("#nombreProducto")
    colorVerde.style.color = "green"
}

