//Comprar zapatillas por cantidad//
button.addEventListener('click', e => {

    let nombreProducto = "zapatillas"
    let precioUnitario = 20000
    let cantidadDeseada = prompt(`Ingrese la cantidad de ${nombreProducto} que quiere comprar:`); 
    let costoTotal = precioUnitario * cantidadDeseada;
    let porcentaje = costoTotal * 10 / 100;

   
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
        
})


//Al apretar el boton de like//
like.addEventListener('click', e => {

    Swal.fire({
        title: "هل تريد الاستمرار؟",
        icon: "question",
        iconHtml: "؟",
        confirmButtonText: "نعم",
        cancelButtonText: "لا",
        showCancelButton: true,
        showCloseButton: true
      });

})