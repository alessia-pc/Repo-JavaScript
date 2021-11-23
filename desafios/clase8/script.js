console.log(document.getElementById("unico"));

console.log(document.getElementsByClassName ("parrafos"));

document.querySelector("#unico").style.color = "red"; 

//prompt 1 

let parrafo = document.createElement ("p");
parrafo.setAttribute("class", "parrafoNuevo");
parrafo.innerHTML = (prompt("Escriba un párrafo"));
console.log (parrafo);

document.getElementById ("agregado").appendChild (parrafo);
document.querySelector ("#agregado").style.color = ("blue"); 

//prompt 2
let titulo = document.createElement ("h2");
titulo.setAttribute("class", "tituloNuevo");
titulo.innerHTML = (prompt("Escriba un título"));
console.log (titulo);

document.getElementById ("agregado2").appendChild (titulo);
document.querySelector ("#agregado2").style.color = ("green");

//prompt 3
let animal = document.createElement ("h3");
animal.setAttribute("class", "animalNuevo");
animal.innerHTML = (prompt("Escriba un animal"));
console.log (animal);

document.getElementById ("agregado3").appendChild (animal);
document.querySelector ("#agregado3").style.color = ("violet");




