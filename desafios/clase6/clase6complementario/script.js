class Productos {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

let listaProductos = [];

const agregarProductos = () => {
    let nombreAgregado = prompt ("Que producto es?");
    let precioAgregado = parseFloat(prompt("Cual es el precio?"));
    let producto = new Productos (nombreAgregado, precioAgregado);
    listaPrecios.push(producto);
}

listaProductos.push(new Productos ("Galletas", 70));
console.log (listaProductos);