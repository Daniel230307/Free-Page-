// script.js - Funcionalidad interactiva para Dinomundo

// Declarar variables con var
var nombreUsuario = "Visitante";
var edadUsuario = 0;
var esMayorDeEdad = false;

// Uso de mecanismo de escape
var mensajeBienvenida = "¡Bienvenido a Dinomundo, " + nombreUsuario + "! \n¿Listo para explorar los dinosaurios?";
console.log(mensajeBienvenida);

// Incremento y decremento
edadUsuario++;
console.log("Edad incrementada:", edadUsuario);

// Operadores lógicos y relacionales
if (edadUsuario >= 18) {
    esMayorDeEdad = true;
    console.log("El usuario es mayor de edad.");
} else {
    console.log("El usuario es menor de edad.");
}

// Arreglo de especies
var especiesDinosaurios = ["Tyrannosaurus", "Triceratops", "Velociraptor", "Brachiosaurus", "Stegosaurus"];

// Métodos de arrays
console.log("Número de especies:", especiesDinosaurios.length);
especiesDinosaurios.push("Ankylosaurus");
especiesDinosaurios.pop();
console.log("Última especie:", especiesDinosaurios[especiesDinosaurios.length - 1]);

// Cadenas de texto
var nombreCompleto = "Tyrannosaurus" + " Rex";
console.log(nombreCompleto.toUpperCase());
console.log(nombreCompleto.toLowerCase());
console.log("Caracter en posición 3:", nombreCompleto.charAt(3));
console.log("Subcadena:", nombreCompleto.substring(0, 6));
console.log("Dividir cadena:", nombreCompleto.split(" "));

// Bucle for
for (var i = 0; i < especiesDinosaurios.length; i++) {
    console.log("Especie " + (i+1) + ": " + especiesDinosaurios[i]);
}

// Bucle for...in
for (var index in especiesDinosaurios) {
    console.log("Índice " + index + ": " + especiesDinosaurios[index]);
}

// Validación numérica
var numeroInvalido = "Hola" * 2;
console.log("Es NaN?", isNaN(numeroInvalido));

// Manejo de eventos
document.addEventListener("DOMContentLoaded", function () {
    var btnMostrar = document.getElementById("btnMostrar");
    var contenedor = document.getElementById("mensajeJS");

    if (btnMostrar && contenedor) {
        btnMostrar.addEventListener("click", function () {
            // Mensaje visible en la página
            contenedor.innerHTML = "<p style='color: blue; font-weight: bold;'>🎉 ¡Hola! Este mensaje fue generado con JavaScript.</p>";
            console.log("Botón clickeado. Mensaje mostrado.");
        });
    } else {
        console.log("Error: No se encontró el botón o el contenedor.");
    }
});