//precios
let chococinoPrecio = (790);
let cappuccinoPrecio = (810);
let ristrettoPrecio = (850);
let indonesiaPrecio = (940);
let ispirazionePrecio = (820);
let viennaPrecio = (860);
let naranjaPrecio = (1100);
let pinaPrecio = (1250);
let melocotonPrecio = (1300);
let avenaPrecio = (1600);
let limonPrecio = (1400);
let cocoPrecio =(1600);
//descripcion
let chococinoDescripcion = ("Chococino, cápsula de café, marca Dolce gusto, ");
let cappuccinoDescripcion = ("Cappuccino, cápsula de café, marca Dolce gusto, ");
let ristrettoDescripcion = ("Ristretto, cápsula de café, marca Dolce gusto, ");
let indonesiaDescripcion = ("Indonesia, cápsula de café, marca Nespresso, ");
let ispirazioneDescripcion = ("Ispirazione Napoli, cápsula de café, marca Nespresso, "); 
let viennaDescripcion = ("Vienna Linizio Lungo, cápsula de café, marca Nespresso,");
let naranjaDescripcion = ("Zumo de naranja, cápsula de jugo, marca Zutec, ");
let pinaDescripcion = ("Zumo de piña, cápsula de jugo, marca Zutec, ");
let melocotonDescripcion = ("Zumo de melocotón, cápsula de jugo, marca Zutec, ");
let avenaDescripcion = ("Pastelito de avena y chocolate, cápsula de pastelito, marca Tigout, ");
let limonDescripcion = ("Pastelito de limón, cápsula de pastelito, marca Tigout, ");
let cocoDescripcion  = ("Pastelito de coco y pistacchio, cápsula de pastelito, marca Tigout, ");


let elegirProducto = parseInt(prompt("Seleccione un producto " + "\n1: " + chococinoDescripcion + "$" + chococinoPrecio + "\n2: " + cappuccinoDescripcion + "$" + cappuccinoPrecio + "\n3: " + ristrettoDescripcion + "$" + ristrettoPrecio + "\n4: " + indonesiaDescripcion + "$" + indonesiaPrecio+ "\n5: " + ispirazioneDescripcion + "$" + ispirazionePrecio+ "\n6: " + viennaDescripcion + "$" + viennaPrecio+ "\n7: " + naranjaDescripcion + "$" + naranjaPrecio + "\n8: " + pinaDescripcion + "$" + pinaPrecio+ "\n9: " + melocotonDescripcion + "$" + melocotonPrecio+ "\n10: " + avenaDescripcion + "$" + avenaPrecio+ "\n11: " + limonDescripcion + "$" + limonPrecio+ "\n12: " + cocoDescripcion + "$" + cocoPrecio));
principal ();

 //funcion principal
 function principal() {
    let cuotas;
    let precioFinal;

    switch (elegirProducto) {

        case 1:
            cuotas = preguntarCuotas ();
            precioFinal = calcularIntereses (chococinoPrecio, cuotas);
            mostrarCompra (elegirProducto, cuotas);
            break;

        case 2:
            cuotas = preguntarCuotas ();
            precioFinal = calcularIntereses (cappuccinoPrecio, cuotas);
            mostrarCompra (elegirProducto,  cuotas);
            break;

        case 3:
            cuotas = preguntarCuotas ();
            precioFinal = calcularIntereses (ristrettoPrecio, cuotas);
            mostrarCompra (elegirProducto,  cuotas);
            break;

        case 4:
            cuotas = preguntarCuotas ();
            precioFinal = calcularIntereses (indonesiaPrecio, cuotas);
            mostrarCompra (elegirProducto, cuotas);
            break;

        case 5:
            cuotas = preguntarCuotas ();
            precioFinal = calcularIntereses (ispirazionePrecio, cuotas);
            mostrarCompra (elegirProducto, cuotas);
            break;

        case 6:
            cuotas = preguntarCuotas ();
            precioFinal = calcularIntereses (viennaPrecio, cuotas);
            mostrarCompra (elegirProducto, cuotas);
            break;

        case 7:
            cuotas = preguntarCuotas ();
            precioFinal = calcularIntereses (naranjaPrecio, cuotas);
            mostrarCompra (elegirProducto, cuotas);
            break;

        case 8:
            cuotas = preguntarCuotas ();
            precioFinal = calcularIntereses (pinaPrecio, cuotas);
            mostrarCompra (elegirProducto, cuotas);
            break;

        case 9:
            cuotas = preguntarCuotas ();
            precioFinal = calcularIntereses (melocotonPrecio, cuotas);
            mostrarCompra (elegirProducto, cuotas);
            break;

        case 10:
            cuotas = preguntarCuotas ();
            precioFinal = calcularIntereses (avenaPrecio, cuotas);
            mostrarCompra (elegirProducto, cuotas);
            break;
            
        case 11:
            cuotas = preguntarCuotas ();
            precioFinal = calcularIntereses (limonPrecio, cuotas);
            mostrarCompra (elegirProducto, cuotas);
            break;

        case 12:
            cuotas = preguntarCuotas ();
            precioFinal = calcularIntereses (cocoPrecio, cuotas);
            mostrarCompra (elegirProducto,  cuotas);
            break;

        default :
        alert ("Error"); 
        break;   
    }
}

function calcularIntereses (valor, cuotas) {
    let precioConIntereses =  valor;
    switch (cuotas) {

        case 0:
            precioConIntereses *= 0.9;
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
            precioConIntereses *=0.9;
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
            return (descripcion = chococinoDescripcion);

        case 2:
            return (descripcion = cappuccinoDescripcion);

        case 3:
            return (descripcion = ristrettoDescripcion);

        case 4:
            return (descripcion = indonesiaDescripcion);

        case 5:
            return (descripcion = ispirazioneDescripcion);

        case 6:
            return (descripcion = viennaDescripcion);

        case 7:
            return (descripcion = naranjaDescripcion);

        case 8:
            return (descripcion = pinaDescripcion);

        case 9:
            return (descripcion = melocotonDescripcion);

        case 10:
            return (descripcion = avenaDescripcion);

        case 11:
            return (descripcion = limonDescripcion);
                
        case 12:
            return (descripcion = cocoDescripcion);         

        default:
            alert("Error");
            break;

    }

}

function mostrarCompra(producto, finalCosto, finalPrecio, cuotas) {
    let descripcionProducto = verDescripcion (producto);
    if (cuotas != 0){
        alert ("Confirme la compra: \n" + descripcionProducto + " $" + finalCosto + "\ en " + cuotas + " cuotas de $" + (finalPrecio/cuotas).toFixed(2) +" = $" + finalPrecio);
    } else {
        alert ("Confirme la compra: \n" + descripcionProducto + " $" + finalCosto + "\ con 10% de descuento $" + (finalPrecio).toFixed(2));
    } 
}