class Producto {
    constructor(id, precio, descripcion) {
        this.id = id;
        this.precio = precio;
        this.descripcion = descripcion;
    }
}

let productos = [];

productos.push( new Producto(0, 790, "Chococino, cápsula de café, marca Dolce gusto, "));
productos.push( new Producto(1, 810, "Cappuccino, cápsula de café, marca Dolce gusto, "));
productos.push( new Producto(2, 850, "Ristretto, cápsula de café, marca Dolce gusto, "));
productos.push( new Producto(3, 940, "Indonesia, cápsula de café, marca Nespresso, "));
productos.push( new Producto(4, 820, "Ispirazione Napoli, cápsula de café, marca Nespresso, "));
productos.push( new Producto(5, 860, "Vienna Linizio Lungo, cápsula de café, marca Nespresso, "));
productos.push( new Producto(6, 1100, "Zumo de naranja, cápsula de jugo, marca Zutec, "));
productos.push( new Producto(7, 1250, "Zumo de piña, cápsula de jugo, marca Zutec, "));
productos.push( new Producto(8, 1300, "Zumo de melocotón, cápsula de jugo, marca Zutec, "));
productos.push( new Producto(9, 1600, "Pastelito de avena y chocolate, cápsula de pastelito marca Tigout, "));
productos.push( new Producto(10, 1400, "Pastelito de limón, cápsula de pastelito, marca Tigout, "));
productos.push( new Producto(11, 1600, "Pastelito de coco y pistacchio, cápsula de pastelito, marca Tigout, "));


console.log(productos);

function elegirProducto() {
    let productoElegido = parseInt(
        prompt(
            "Seleccione un producto " +
                "\n0: " + productos[0].descripcion + "$" + productos[0].precio +
                "\n1: " + productos[1].descripcion + "$" + productos[1].precio +
                "\n2: " + productos[2].descripcion + "$" + productos[2].precio +
                "\n3: " + productos[3].descripcion + "$" + productos[3].precio +
                "\n4: " + productos[4].descripcion + "$" + productos[4].precio +
                "\n5: " + productos[5].descripcion + "$" + productos[5].precio +
                "\n6: " + productos[6].descripcion + "$" + productos[6].precio + 
                "\n7: " + productos[7].descripcion + "$" + productos[7].precio +
                "\n8: " + productos[8].descripcion + "$" + productos[8].precio +
                "\n9: " + productos[9].descripcion + "$" + productos[9].precio +
                "\n10: " + productos[10].descripcion + "$" + productos[10].precio +
                "\n11: " + productos[11].descripcion + "$" + productos[11].precio 
        )
    );
    return productoElegido;
}

function realizarCompra() {
    let cuotas;
    let precioFinal;
    let productoId;

    productoId = elegirProducto()
    cuotas = preguntarCuotas()
    precioFinal = calcularIntereses((productos[productoId].precio), cuotas)
    mostrarCompra(productos[productoId].descripcion, productos[productoId].precio, precioFinal, cuotas)
}

function calcularIntereses(valor, cuotas) {
    let precioConIntereses = valor;
    switch (cuotas) {
        case 0:
            precioConIntereses = precioConIntereses * 0.9;
            break;

        case 3:
            precioConIntereses = precioConIntereses * 1.1;
            break;

        case 6:
            precioConIntereses = precioConIntereses * 1.25;
            break;

        case 12:
            precioConIntereses = precioConIntereses * 1.5;
            break;

        default:
            precioConIntereses = precioConIntereses * 0.9;
    }
    return precioConIntereses;
}

function preguntarCuotas() {
    let cuotas = parseInt(
        prompt(
            "Elija como realizar el pago, 0-si es de contado, 3, 6 o 12 en cuotas"
        )
    );
    return cuotas;
}

function mostrarCompra(producto, finalCosto, finalPrecio, cuotas) {
    let descripcionProducto = producto
    if (cuotas != 0) {
        alert(
            "Confirme la compra: \n" +
                descripcionProducto +
                " $" +
                finalCosto +
                " en " +
                cuotas +
                " cuotas de $" +
                (finalPrecio / cuotas).toFixed(2) +
                " = $" +
                finalPrecio
        );
    } else {
        alert(
            "Confirme la compra: \n" +
                descripcionProducto +
                " $" +
                finalCosto +
                " con 10% de descuento $" +
                finalPrecio.toFixed(2)
        );
    }
}

// Ejecuto solo realizar Compra
realizarCompra()
