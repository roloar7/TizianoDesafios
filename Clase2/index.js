
button.addEventListener('click', e => {

    let nombreProducto = "zapatillas"
    let precioUnitario = 20000
    let cantidadDeseada = prompt(`Ingrese la cantidad de ${nombreProducto} que quiere comprar:`); 
    let costoTotal = precioUnitario * cantidadDeseada;
    
    if (cantidadDeseada > 0)   {

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
    else {

        alert('Ingrese un numero')

    }      
       
    

    


    
    
})

