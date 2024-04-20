
button.addEventListener('click', e => {

    let nombreProducto = "Alfajor"
    let precioUnitario = 20000
    let cantidadDeseada = prompt('Ingrese la cantidad de su compra:'); 
    let costoTotal = precioUnitario * cantidadDeseada;
    
    if (cantidadDeseada > 0)   {

        alert('Confirme su compra');

        let opcion = confirm ("Para confirmar la compra aprete en aceptar sino cancelar"); 
    
        if (opcion == true) { 
        
         alert('El costo total de su compra es: ' + costoTotal);
    
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

