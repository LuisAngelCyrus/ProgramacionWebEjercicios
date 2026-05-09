// Función que cambia el color de fondo según lo que escriba el usuario
function pintar() {
    // Pide al usuario que escriba un color
    let color = prompt("Introduce un color rojo, azul o verde");

    // Evalúa el color escrito y cambia el fondo según el caso
    switch (color) {
        case "rojo":
            document.body.style.background = "red";
            break;
        case "azul":
            document.body.style.background = "blue";
            break;
        case "verde":
            document.body.style.background = "green";
            break;
        default:
            alert("Color no válido"); // Si no es rojo, azul o verde, muestra error
    }     
}

// Ejecuta la función al cargar la página
pintar();