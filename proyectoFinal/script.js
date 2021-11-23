//PRODUCTOS
const DOLCE_GUSTO = [ {
  nombre: "Chococino",
  precio: "$790",
  descripcion: "Cápsula de café, marca Dolce Gusto",
  id: "capsulaUno",
  imgPath: "./multimedia/dolcegusto-chococino.jpeg"
},
{
  nombre: "Cappuccino",
  precio: "$810",
  descripcion: "Cápsula de café, marca Dolce Gusto",
  id: "capsulaDos",
  imgPath: "./multimedia/dolcegusto-cappuccino.jpeg"
},
{
  nombre: "Ristretto",
  precio: "$850",
  descripcion: "Cápsula de café, marca Dolce Gusto",
  id: "capsulaTres",
  imgPath: "./multimedia/dolcegusto-ristretto.jpeg"
}]

const NESPRESSO = [
  {
    nombre: "Indonesia",
    precio: "$940",
    descripcion: "Cápsula de café, marca Nespresso",
    id: "capsulaCuatro",
    imgPath: "./multimedia/nespresso-indonesia.jpeg"
  },
  {
    nombre: "Ispirazione Napoli",
    precio: "$820",
    descripcion: "Cápsula de café, marca Nespresso",
    id: "capsulaCinco",
    imgPath: "./multimedia/nespresso-ispirazione.jpeg"
  },
  {
    nombre: "Vienna Linizio Lungo",
    precio: "$860",
    descripcion: "Cápsula de café, marca Nespresso",
    id: "capsulaSeis",
    imgPath: "./multimedia/nespresso-vienna.jpeg"
  }]

  const ZUTEC = [
    {
      nombre: "Zumo de naranja",
      precio: "$1100",
      descripcion: "Cápsula de jugo, marca Zutec",
      id: "capsulaSiete",
      imgPath: "./multimedia/zutec-naranja.jpeg"
    },
    {
      nombre: "Zumo de piña",
      precio: "$1250",
      descripcion: "Cápsula de jugo, marca Zutec",
      id: "capsulaOcho",
      imgPath: "./multimedia/zutec-piña.jpeg"
    },
    {
      nombre: "Zumo de melocotón",
      precio: "$1300",
      descripcion: "Cápsula de jugo, marca Zutec",
      id: "capsulaNueve",
      imgPath: "./multimedia/zutec-melocoton.jpeg"
    }
  ]

  const TIGOUT = [
    {
      nombre: "Pastelito de avena y chocolate",
      precio: "$1600",
      descripcion: "Cápsula de pastelito, marca Tigout",
      id: "capsulaDiez",
      imgPath: "./multimedia/tigout-chocolate.jpeg"
    },
    {
      nombre: "Pastelito de limón",
      precio: "$1400",
      descripcion: "Cápsula de pastelito, marca Tigout",
      id: "capsulaOnce",
      imgPath: "./multimedia/tigout-limon.jpeg"
    },
    {
      nombre: "Pastelito de coco y pistacchio",
      precio: "$1600",
      descripcion: "Cápsula de pastelito, marca Tigout",
      id: "capsulaDoce",
      imgPath: "./multimedia/tigout-pistacchio.jpeg"
    }
  ]

//SECCION PRODUCTOS

let contenedorProductos = document.getElementById ("contenedorProductos");

function generarProductoHtml(producto){
  return `
  <div class="tarjetaProducto" id=${producto.id}>
  <h2> ${producto.nombre}</h2>                                     
  <img width= "300px" src="${producto.imgPath}" alt="">
  <p> ${producto.descripcion}</p>
  <p> ${producto.precio}</p>
  <button class= "botonCompras">Comprar </button>
  </div>`
}

contenedorProductos.innerHTML += `<h1 id="dolce-gusto-title"> DOLCE GUSTO </h1>`
for (const productoDolce of DOLCE_GUSTO) {
  contenedorProductos.innerHTML += generarProductoHtml(productoDolce)
}

contenedorProductos.innerHTML += `<h1 id="nespresso-title"> NESPRESSO </h1>`
for (const productoNespresso of NESPRESSO) {
  contenedorProductos.innerHTML += generarProductoHtml(productoNespresso)
} contenedorProductos.innerHTML += `<button id="botonExclusivos"> Ver productos exclusivos </button> ` 

  contenedorProductos.innerHTML += `<div id="productos-destacados"> 
                                    <div class="destacado-juicy">
                                    <h2>Juicy Lemony Citric</h2> 
                                    <img width="270px" src="./multimedia/nespresso-juicy.PNG" alt="">
                                    <p> Cápsula de café</p> 
                                    <p> $1000</p> 
                                    <button id= "botonComprarExclusivo">Comprar </button> </div>

                                    <div class="destacado-rich">
                                    <h2>Rich and intense</h2> 
                                    <img width="270px" src="./multimedia/nespresso-rich.PNG" alt="">
                                    <p> Cápsula de café</p> 
                                    <p> $1150</p> 
                                    <button id= "botonComprarExclusivo">Comprar </button> </div>
                                    </div> <br>`


contenedorProductos.innerHTML += `<h1 id="zutec-title"> ZUTEC  </h1>`
for (const productoZutec of ZUTEC) {
  contenedorProductos.innerHTML += generarProductoHtml(productoZutec)
}

contenedorProductos.innerHTML += `<h1 id="tigout-title"> TIGOUT </h1>`
for (const productoTigout of TIGOUT) {
  contenedorProductos.innerHTML += generarProductoHtml(productoTigout)
}


let carrito = [];

function agregarItem(idIngresado) {
  let productoEncontrado = misProductos.find (
    (producto) => (producto.id == idIngresado)
  );
   carrito.push (productoEncontrado);
   console.log (carrito);
   localStorage.setItem ("carrito", JSON.stringify(carrito));
}

let botonesDeCompra = document.querySelectorAll(".botonCompras");

for (const boton of botonesDeCompra) {
    boton.onclick = () => {
      agregarItem(boton.parentElement.id);
    };
}


//DATOS FORMULARIO

let nombrePersona = document.getElementById("nombrePersona");
let apellidoPersona = document.getElementById("apellidoPersona");
let direccionPersona = document.getElementById("direccionPersona");

class Persona {
  constructor(nombre, apellido, direccion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
  }
}

const registroDeCompra = [];

const agregarPersona = () => {
  let nombreIngresado = nombrePersona.value;
  let apellidoIngresada = apellidoPersona.value;
  let direccionIngresada = direccionPersona.value;

  let nuevaCompra = new Persona(
    nombreIngresado,
    apellidoIngresada,
    direccionIngresada
  );
  registroDeCompra.push(nuevaCompra);

  localStorage.setItem("usuario", nombreIngresado);
  localStorage.setItem("apellido", apellidoIngresada);
  localStorage.setItem("direccion", direccionIngresada);

  return nuevaCompra;
};

const mostrarPersonas = () => {
  let lista = document.getElementById("listaProductoUsuario");
  lista.innerHTML = "";
  registroDeCompra.forEach((objeto) => {
    lista.innerHTML += `
        <p> ${objeto.nombre} ${objeto.apellido}, vive en ${objeto.direccion}.</p>
        `;
    alert(
      "Se registró a " +
        objeto.nombre +
        " " +
        objeto.apellido +
        " " +
        objeto.direccion +
        " satisfactoriamente."
    );
  });
};

let boton = document.getElementById("btnCompra");

boton.onclick = (e) => {
  console.log(e);
  e.preventDefault();
  agregarPersona();
  mostrarPersonas();
};

console.log(registroDeCompra);




//SCROLL EN EL MENU

$("#home-li").on("click", function() {
  console.log("Me hago click en home")
      $("html, body").animate({
        scrollTop: $(".menu").offset().top
      })
    });


$("#carrito-li").on("click", function() {
  console.log("Me hago click en el carrito")
      $("html, body").animate({
        scrollTop: $("#carritoCompras").offset().top
      })
    });

const NAVBAR_SIZE = 110;

$("#dolce-gusto-li").on("click", function() {
  console.log("Me hago click en el dolce gusto")
    $("html, body").animate({
        scrollTop: $("#dolce-gusto-title").offset().top - NAVBAR_SIZE
      })
    });

$("#nespresso-li").on("click", function() {
  console.log("Me hago click en el nespresso")
    $("html, body").animate({
        scrollTop: $("#nespresso-title").offset().top - NAVBAR_SIZE
      })
    });

$("#zutec-li").on("click", function() {
  console.log("Me hago click en el zutec")
    $("html, body").animate({
        scrollTop: $("#zutec-title").offset().top - NAVBAR_SIZE
      })
    });

$("#tigout-li").on("click", function() {
  console.log("Me hago click en el tigout")
    $("html, body").animate({
        scrollTop: $("#tigout-title").offset().top - NAVBAR_SIZE
      })
    });


    //animacion de productos exclusivos
       $("#productos-destacados").slideUp();

       $("#botonExclusivos").on("click", function(){
        $("#productos-destacados").slideToggle(1500);
       });

       

    
    


    









