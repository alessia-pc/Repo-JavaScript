let listaUtiles = ["Lapiceras", "Lapices", "Resaltadores", "Goma", "Regla", "Plasticola", "Lapices de colores"];

console.log (listaUtiles);
listaUtiles.push ("Marcadores");
console.log (listaUtiles);
listaUtiles.push ("Sacapuntas", "Tijera");
console.log (listaUtiles);

let utilNuevo = (prompt("Qué otro útil necesitas?"));
listaUtiles.push (utilNuevo);
console.log (listaUtiles);

listaUtiles.sort ();
console.log(listaUtiles);

console.log(listaUtiles.join ("-"));
let listaFarmacia = ["Ibuprofeno", "Paracetamol"];
let listaFinal = listaUtiles. concat(listaFarmacia);

console.log (listaFinal);

let listaSuper = ["Gaseosas", "Papa fritas", "Galletas"];
listaFinal = listaFinal.concat(listaSuper);
listaFinal.sort();
console.log (listaFinal);

