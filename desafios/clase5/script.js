/* const dolcegusto1 = {
    nombre: "chocino", 
    tipo: "cafe", 
    precio: "$790"
}
console.log (dolcegusto1); */

class capsulas {
    constructor  (nombre, tipo, precio, marca) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.precio = precio;
        this.marca = marca;
    }
  }
 
//dolcegusto
const dolcegusto1 = new capsulas ("Chocino", "cafe", "$790", "Dolce Gusto");
const dolcegusto2 = new capsulas ("Cappuccino", "cafe", "$810", "Dolce Gusto");
const dolcegusto3 = new capsulas ("Ristretto", "cafe", "$850", "Dolce Gusto");
//nespresso
const nespresso1 = new capsulas ("Indonesia", "cafe", "$940", "Nespresso");
const nespresso2 = new capsulas ("Ispirazione Napoli", "cafe", "$820", "Nespresso");
const nespresso3 = new capsulas ("Vienna Linizio Lungo", "cafe", "$860", "Nespresso");
//zutec
const zutec1 = new capsulas ("Zumo de naranja", "jugo", "$1100", "Zutec");
const zutec2 = new capsulas ("Zumo de piña", "jugo", "$1250", "Zutec");
const zutec3 = new capsulas ("Zumo de melocotón", "jugo", "$1300", "Zutec");
//tigout
const tigout1 = new capsulas ("Pastelito de avena y chocolate", "pastelito", "$1600", "Tigout");
const tigout2 = new capsulas ("Pastelito de limón", "pastelito", "$1400", "Tigout");
const tigout3 = new capsulas ("Pastelito de coco y pistacchio", "pastelito", "$1600", "Tigout");
//consoleProductos
console.log (dolcegusto1, dolcegusto2, dolcegusto3, nespresso1, nespresso2, nespresso3, zutec1, zutec2, zutec3, tigout1, tigout2, tigout3);