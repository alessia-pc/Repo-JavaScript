//ejercicios con for
let num = parseInt (prompt ("Ingresa un número:"));

 for (let i = 1; i <=10; i++) {
    let resultado = num + i;
    alert (num + "+" + i + "=" + resultado);
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

for (let i = 1; i <= 15; i++) {
    if (i == 9) {
        for (let j = 9; j <14; j++) {
            let resultado = i *j;
            console.log (i + "X" + j + "=" + resultado);
        }
    }
    if (i == 5) {
        continue;
    }
    console.log (i);
}

//ejercicios con while y do... while
let num = 156;
let intentos = 3;
let dato = parseInt(prompt("Adivina el número de 3 cifras"))

while ((dato != num) && (intentos <0)); {
    alert ("Te equivocaste!")
    dato = parseInt (prompt("Te quedan " + intentos + " intentos. Intentalo de nuevo"))
    intentos --;
} 

do {
    alert ("Te equivocaste!")
    dato = parseInt (prompt("Te quedan " + intentos + " intentos. Intentalo de nuevo"))
    intentos --;
} while ((dato != num) && (intentos <0));

//ejercicios con switch
let animal = prompt("Ingresa un animal")

switch (animal) {
    case "perro":
        console.log ("El perro es un mamifero domestico");
        break;
    case "leon": 
        console.log ("El leon es un mamifero carnivoro");
        break;
    case "elefante":
        console.log ("El elefante es un mamifero placentario");
        break;
    default:
        console.log ("No tenemos datos sobre tu animal");
        break;
}

//ejercicios con funciones
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