// script.js - Versión completa para cumplir con "Excelente"

// Variables declaradas correctamente
var dinosaurios = ["Tyrannosaurus Rex", "Triceratops", "Velociraptor", "Brachiosaurus", "Stegosaurus"];
var cantidadDinosaurios = dinosaurios.length;
var contadorClics = 0;

// Mensaje inicial al cargar la página
window.onload = function () {
    var mensajeInicio = document.getElementById("mensajeJS");
    mensajeInicio.innerHTML = "<strong>¡Bienvenido a Dinomundo!</strong> 🦖 Explora especies y aprende sobre los dinosaurios.";
};

// Función principal de interacción
function mostrarMensaje() {
    var mensajeDiv = document.getElementById("mensajeJS");

    // Contador con incremento
    contadorClics++;

    // Condición con operadores lógicos y relacionales
    if (contadorClics === 1) {
        mensajeDiv.innerHTML = "Has explorado <strong>" + contadorClics + "</strong> dinosaurio. ¡Quedan muchos por descubrir!";
    } else if (contadorClics > 1 && contadorClics <= cantidadDinosaurios) {
        mensajeDiv.innerHTML = "Has explorado <strong>" + contadorClics + "</strong> dinosaurios. ¡Sigue aprendiendo!";
    } else {
        mensajeDiv.innerHTML = "¡Lo lograste! Has explorado todos los dinosaurios destacados.";
    }

    // Bucle for para recorrer arreglo
    console.log("Lista de dinosaurios:");
    for (var i = 0; i < dinosaurios.length; i++) {
        console.log((i + 1) + ". " + dinosaurios[i]);
    }

    // Uso de funciones predefinidas
    var nombreLargo = dinosaurios[0].toUpperCase();
    var longitudNombre = nombreLargo.length;

    mensajeDiv.innerHTML += "<br><br>El dinosaurio más famoso es: <strong>" + nombreLargo + "</strong>, tiene <strong>" + longitudNombre + "</strong> letras.";
}

// Asignar evento al botón
document.getElementById("btnMostrar").addEventListener("click", mostrarMensaje);
