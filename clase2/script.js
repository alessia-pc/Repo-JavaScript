//deportes
let deporteFavorito = prompt ("Ingresa tu deporte favorito");

if (deporteFavorito == "voley") {
    alert ("Mi deporte favorito tambien es el voley");
} else if (deporteFavorito == "tenis") {
    alert ("Ese deporte no me gusta. Me gusta el voley");
} else {
    alert ("Tu deporte favorito es el " + deporteFavorito + ". El mio es el voley");
} 

//precios
let precio = parseFloat(prompt ("Cuanto cuesta este producto?"));

if (precio > 1000) {
    alert ("Demasiado caro!");
} else if (precio > 500) {
    alert ("Puede ser, no se...");
} else if ((precio >10) && (precio <500)){
    alert ("Me llevo dos!");
}

let esMenor10 = (precio < 10); //esMenor10
if (esMenor10) {
    alert ("Compro mil!");
} else {
    alert ("Es caro!");
}

//edadUsuario
let edad =  parseInt (prompt ("Cual es tu edad?"));

 if (edad <= 17) {
     alert ("Divertite con tus amigos!");
 } else if ((edad >17) && (edad <40)) {
     alert ("Disfuta tu juventud!");
 }  else if ((edad >18) && (edad <60)); {
    alert ("Estas en la plenitud de tu vida!");
 }


//marcas
let marcas = prompt ("Que marca desea ver?")

if (((marcas == "Nike") || (marcas == "NIKE") || (marcas =="nike"))){
    alert ("Aquí está lo nuevo de Nike!")
} else if (((marcas == "Adidas") || (marcas == "ADIDAS") || (marcas == "adidas"))){
    alert ("Esta es nuestra colección de Adidas!")
} else {
    alert ("Por ahora no tenemos stock de la marca " + marcas + " ")
}

//nombreUsuario
let nombreUsuario = prompt ("Ingresa tu nombre")

if ((nombreUsuario !="") && ((nombreUsuario == "Alessia") || (nombreUsuario == "ALESSIA") || (nombreUsuario == "alessia"))) {
    alert ("El nombre ingresado fue: Alessia")
} else (nombreUsuario == ""); {
    alert ("El nombre ingresado fue: " + nombreUsuario + "")
} 


