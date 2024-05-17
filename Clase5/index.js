//Comprar zapatillas por cantidad//

let nombreProducto = "dunk low"
let precioUnitario = 60000 

button.addEventListener('click', e => {

    let cantidadDeseada = prompt(`Ingrese la cantidad de ${nombreProducto.nombre} que quiere comprar:`);
    let costoTotal = precioUnitario * cantidadDeseada;
    let porcentaje = costoTotal * 10 / 100;
    let stock = 20

    if (cantidadDeseada > 0) {
       
        if (cantidadDeseada >= 5) {
                
            alert('Confirme su compra');

            let opcion = confirm(`Para confirmar la compra aprete en aceptar sino cancelar`); 
        
            if (opcion == true) { 

                let totalOferta = costoTotal - porcentaje;
            
                alert(`El costo total de su compra es de $${totalOferta} aplicando el 10% de descuento`);
        
                alert('Gracias por su compra!');
        
            } 
        
            else { 
            
            alert('Su compra a sido cancelada');
        
            }
        } 
            
        else {
                    
            alert('Confirme su compra');

            let opcion = confirm (`Para confirmar la compra aprete en aceptar sino cancelar`); 
        
            if (opcion == true) { 
            
                alert(`El costo total de su compra es de $${costoTotal}`);
        
                alert('Gracias por su compra!');
        
            } 
        
            else { 
            
                alert('Su compra a sido cancelada');

            }

        }
    } else {
        
        alert('Ingrese un numero')

    }
    
    function sumarProductos(precioUnitario, cantidadDeseada) {

        let totalGastado = precioUnitario * cantidadDeseada;
        return totalGastado;
    
    }
    
    let totalCompra = sumarProductos(precioUnitario, cantidadDeseada);
    console.log("INGRESOS NIKE DUNK LOW:");
    console.log("El total gastado en el producto es: $" + totalCompra);

    if (cantidadDeseada > 0) {
       
        function verificarStock() {
            return stock;
            
        }
        console.log(`Stock inicial: ${verificarStock(stock)}`);
        
        
        function venderProducto(stock, cantidadDeseada) {
            if (stock >= cantidadDeseada) {
                stock - cantidadDeseada
                console.log(`Se vendieron ${cantidadDeseada} unidades del producto. Quedan ${stock} en stock.`);
            } else {
                console.log("No hay suficiente stock para completar la venta.");
            }
        
        }
            
        
    }
    else {
        console.log("No se a vendido nada")
    }

    venderProducto(stock, cantidadDeseada);
    console.log(`Stock final: ${verificarStock(stock)}`);

})










//Lista de productos (array)
let zapatillasNike = ["dunk-low","air-force-1","jordan-1-low-se","air-jordan-1-low"];

// Muestra el contenido del stock inicial
console.log("Stock inicial:");
for(let i = 0; i < zapatillasNike.length; i++) {
    console.log(zapatillasNike[i]);
}

// Actualizacion del stock
for(let i = 0; i < 2; i++) { //Venta de 2 productos
    zapatillasNike.pop();
}

// Muestra el nuevo stock después de la venta
console.log("\nStock después de la venta:");
for(let i = 0; i < zapatillasNike.length; i++) {
    console.log(zapatillasNike[i]);
}
