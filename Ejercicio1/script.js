function pintar() {
    let color = prompt("Introduce un color rojo, azul o verde");

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
            alert("Color no válido");
    }     
}
pintar();