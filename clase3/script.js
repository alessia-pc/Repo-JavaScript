let num = parseInt (prompt ("Ingresa un número:"));

for (let i = 1; i <=10; i++) {
    let resultado = num * i;
    console.log (num + "X" + i + "=" + resultado);
}

for (let i = 10; i >0; i--) {
    console.log (i);
} 

for (let i = 1; i<=10; i++) {
    if (i % 2 == 0) {
        console.log ( i + " es par");
    } else {
        console.log ( i + " es impar");
    }
}

for (let i = 1; i <= 10; i++) {
    if (i == 9) {
        break;
    }
    console.log (i);
}

for (let i = 1; i <=10; i++) {

    if (i == 2) {
        for (let j = 2; j <5; j++) {
             let resultado = i *j;
             console.log (i + "X" + j + "=" + resultado);
        }
    }
    if (i== 5) {
        continue;
    }
    console.log (i);
} 
 
let pass = 1234;
let dato = parseInt (prompt ("Ingrese su contrasena"));
let intentos = 3;

while ((dato != pass) && (intentos <0)); {
    alert ("Contrasena equivocada!");
    dato = parseInt (prompt("Te quedan " + intentos + " intentos. Ingrese su contrasena"));
    intentos --;

}

do {
    alert ("Contrasena equivocada!");
    dato = parseInt (prompt("Te quedan " + intentos + " intentos. Ingrese su contrasena"));
    intentos --;
} while ((dato != pass) && (intentos > 0 ));  


let animal = prompt ("Ingrese un animal");

switch (animal) {
    case "gato" : 
        console.log ("El gato hace miau");
        break;
    case "vaca" :
        console.log ("La vaca hace muu");
        break;
    case "perro" :
        console.log ("El perro hace guau");
        break;
    default:
        console.log ("No se como hace tu animal");
        break;
}  

let num = parseInt(prompt("Ingrese un numero"));
let operacion = prompt ("Que operacion queres hacer?");

switch (operacion) {
    case "X":
        for (let i = 1; i <= 10; i++) {
            let resultado = i * num;
            console.log (i + "X"  + num + "=" + resultado);
        }
        break;
    case "/":
        for (let i = 1; i <= 10; i++) {
            let resultado = i * num;
            console.log (i + "/"  + num + "=" + resultado);
        }
        break;

    case "+":
        for (let i = 1; i <= 10; i++) {
            let resultado = i * num;
            console.log (i + "+"  + num + "=" + resultado);
        }
        break;

    case "-":
        for (let i = 1; i <= 10; i++) {
            let resultado = i * num;
            console.log (i + "-"  + num + "=" + resultado);
        }
        break;
        
    default:
        console.log ("No pusiste ninguna operación");
        break;
}










