//precios
let s20precio = (85000);
let a52precio = (60000);
let zFlipPrecio = (140000);
//descripcion
let s20descripcion = ("Galaxy s20, 8gb ram, 128gb");
let a52descripcion = ("Galaxy A52, 6gb ram, 128gb");
let zFlipDescripcion = ("Galaxy Z Flip3, 8gb ram, 128gb");
//iva
const iva = (1.21)

let elegirProducto = parseInt(prompt("Seleccione un producto " + "\n1: " + s20descripcion + "$" + s20precio + "\n2: " + a52descripcion + "$" + a52precio + "\n3: " + zFlipDescripcion + "$" + zFlipPrecio));
principal ();

 //funcion principal
 function principal() {
    let precioConIva;
    let cuotas;
    let precioFinal;

    switch (elegirProducto) {

        case 1:
            precioConIva = calcularIva (s20precio);
            cuotas = preguntarCuotas ();
            precioFinal = calcularIntereses (precioConIva, cuotas);
            mostrarCompra (elegirProducto, precioConIva, precioConIva, cuotas);
            break;

        case 2:
            precioConIva = calcularIva (a52precio);
            cuotas = preguntarCuotas ();
            precioFinal = calcularIntereses (precioConIva, cuotas);
            mostrarCompra (elegirProducto, precioConIva, precioConIva, cuotas);
            break;

        case 3:
            precioConIva = calcularIva (zFlipPrecio);
            cuotas = preguntarCuotas ();
            precioFinal = calcularIntereses (precioConIva, cuotas);
            mostrarCompra (elegirProducto, precioConIva, precioConIva, cuotas);
            break;

        default :
        alert ("Error"); 
        break;   
    }
}
function calcularIva (costo) {
    let precioConIva = costo*iva;
    return precioConIva;
}

function calcularIntereses (valor, cuotas) {
    let precioConIntereses =  valor;
    switch (cuotas) {
        case 0:
            precioConIntereses = precioConIntereses * 0.9;
            break;

        case 3:
            precioConIntereses = precioConIntereses *= 1.10;
            break;

        case 6: 
            precioConIntereses = precioConIntereses *= 1.25;
            break;

        case 12: precioConIntereses = precioConIntereses *= 1.50;
            break;

        default:
            precioConIntereses *= 0.9;
    }
    return precioConIntereses;
}

function preguntarCuotas() {
    let cuotas = parseInt(prompt("Elija como realizar el pago, 0-si es de contado, 3, 6 o 12 en cuotas"));
    return cuotas;
}

function verDescripcion(id) {

    let descripcion;

    switch (id) {

        case 1:
            return (descripcion = s20descripcion);

        case 2:
            return (descripcion = a52descripcion);

        case 3:
            return (descripcion = zFlipDescripcion);

        default:
            alert("Error");
            break;

    }

}

function mostrarCompra(producto, finalCosto, finalPrecio, cuotas) {
    let descripcionProducto = verDescripcion (producto);
    if (cuotas != 0){
        alert ("Confirme la compra: \n" + descripcionProducto + " $" + finalCosto + "\ en " + cuotas + " cuotas de $" + (finalPrecio/cuotas).toFixed(2) +" = $" + finalPrecio);
    }else {
        alert ("Confirme la compra: \n" + descripcionProducto + " $" + finalCosto + "\ con 10% de descuento $" + (finalPrecio).toFixed(2));
    } 
}
 
