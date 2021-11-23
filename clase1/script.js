//Curso de JavaScript

const anio = 2021;
var nombre = "Alessia";
var apellido = "Puga Cammuso";
let anioNacimiento = 2006;

const ESPACIO = " ";

//ejercicio variables

var nombreCompleto = nombre + ESPACIO + apellido;
var edad = anio - anioNacimiento;

//ejercicio alert y console

var gaseosa = prompt ("Cuál es tu gaseosa favorita?");
alert ("Mi gaseosa favorita es: " + gaseosa);

var deporte = prompt ("Cuál es tu deporte favorito?");
console.log ("Mi deporte favorito es: " + deporte);

console.log (edad);
console.log ("Tu edad es: " + edad);

var nombreUsuario = prompt ("Cuál es tu nombre?");
alert ("Mi nombre es " + nombreUsuario);

//ejercicios matematicos

let anioNac = parseInt (prompt ("En que anio naciste?"));
let edadCalculada = anio - anioNac;
alert ("Tu edad es: " + edadCalculada);
