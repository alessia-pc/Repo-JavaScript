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
    let producto = new Productos(nombreAgregado, precioAgregado);
    listaProductos.push(producto);
}

listaProductos.push(new Productos ("Galletas", 70));
listaProductos.push (new Productos ("Manteca", 100));
listaProductos.push (new Productos ("Huevos", 150));
listaProductos.push (new Productos ("Pan", 120));
listaProductos.push (new Productos ("Queso", 130));
listaProductos.push (new Productos ("Jamon", 140));
listaProductos.push (new Productos ("Jamon", 160));
console.log (listaProductos);
 
//metodo find

/* let buscarProducto = listaProductos.find (objeto => objeto.nombre === "Queso");
    console.log (buscarProducto); */

 
//metodo search

let search = prompt ("Qué producto desea buscar?");

/* let buscarProducto = listaProductos.find(objeto => objeto.nombre === search);
console.log(buscarProducto); */


//metodo filter


let buscarMuchosProducto = listaProductos.filter(objeto => objeto.nombre === search);
console.log (buscarMuchosProducto);


/* 
//for of
for (const objeto of listaProductos) {
    console.log (objeto);
    console.log (objeto. nombre);
}

//for in
for (const objeto of listaProductos) {
    console.log (objeto);
    for (const propiedades in objeto) {
        console.log(propiedades);
    }
}

 */