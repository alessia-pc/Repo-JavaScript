/*function suma (num1, num2) {
    console.log (num1 + num2);
    let resultado = num1 + num2;
    return resultado;
}

suma (50, 30) */

/* function ValorProducto (precio, descuento) {
    let valorFinal = precio - (precio * descuento/100);
    alert (valorFinal);
    return valorFinal
}

 function productoNuevo () {
    let precioLista = parseInt (prompt ("Ingrese el precio de lista"));
    let descuento = parseInt (prompt ("Ingrese el descuento"));
    console.log (ValorProducto (precioLista, descuento));
} 

productoNuevo (); */

const primos = (num) =>{
    let resultado;
    let contador=0;
    for (let i = 1; i <= num; i++) {
        if(num % i == 0){
            contador ++;
        }
    }
    if (contador == 2) {
        resultado = true;
    } else {
        resultado = false;
    }
    return resultado;
}
let dato = parseInt(prompt ("ingresa un numero"))
console.log(primos(dato));
