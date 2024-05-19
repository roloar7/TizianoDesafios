//Producto con propiedades//
let slipper = {
    name: "dunk-low-panda",
    price: 60.000,
    stock: 20
}
console.log("Producto: " + slipper.name)

//Cambiar propiedad name a camiseta//
slipper.name = "camiseta"
console.log("Producto: " + slipper.name)

//Cambiar propiedad name a zapatillas//
slipper.name = "zapatillas"
console.log("Producto: " + slipper.name)

//Agregar una propiedad llamada categoria//
slipper = {
    categoria: "calzado"
}
console.log("Categoria: " + slipper.categoria)

//Eliminar propiedad stock//
slipper.name = "dunk-low-panda"
delete slipper.stock;
console.warn("Se acabo el stock de: " + slipper.name)