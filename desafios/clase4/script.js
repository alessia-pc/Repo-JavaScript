
function aplicarImpuestos (precio) {
    let impuestos = parseInt(prompt("Ingrese el porcentaje de impuestos que quiere aplicar (sin el signo %)"));
    return (precio * impuestos) / 100;
}

function aplicarDescuentos(precio) {
    let descuentos = parseInt(prompt("Ingrese el porcentaje del descuento que quiere aplicar (sin el signo de %)"));
    return (-(precio * descuentos) / 100);
}

function precioNuevo() {
    let precioDeLista = parseInt(prompt("Ingrese el precio de lista que desee"));
    let precioFinal = precioDeLista + aplicarImpuestos(precioDeLista) + aplicarDescuentos(precioDeLista);
    alert ("Tu precio  de lista " + precioDeLista  + " queda en " +  precioFinal + " con los descuentos e impuestos aplicados");
    return precioFinal;
}

precioNuevo ();