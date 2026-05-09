// Lista de imágenes
const images = [
    "img/juego1.jpg",
    "img/juego2.jpg",
    "img/juego3.jpg",
    "img/juego4.jpg",
    "img/juego5.jpg"
];

// Elementos del HTML
const imagenPrincipal = document.getElementById("imagenPrincipal");
const dotsContainer = document.getElementById("dotsContainer");
const btnIzquierda = document.getElementById("btnIzquierda");
const btnDerecha = document.getElementById("btnDerecha");

let indiceActual = 0;  // Qué imagen estamos viendo XD

//  Mostrar la imagen actual
function mostrarImagen() {
    imagenPrincipal.src = images[indiceActual];
    actualizarBolitas();
}

//  Crear y actualizar las bolitas
function actualizarBolitas() {
    dotsContainer.innerHTML = "";
    
    for (let i = 0; i < images.length; i++) {
        const bolita = document.createElement("div");
        bolita.classList.add("dot");
        
        if (i === indiceActual) {
            bolita.classList.add("active");
        }
        
        bolita.addEventListener("click", () => {
            indiceActual = i;
            mostrarImagen();
        });
        
        dotsContainer.appendChild(bolita);
    }
}

// Flecha derecha siguiente imagen
btnDerecha.addEventListener("click", () => {
    if (indiceActual < images.length - 1) {
        indiceActual++;
    } else {
        indiceActual = 0;
    }
    mostrarImagen();
});

//  Flecha izquierda (imagen anterior)
btnIzquierda.addEventListener("click", () => {
    if (indiceActual > 0) {
        indiceActual--;
    } else {
        indiceActual = images.length - 1;
    }
    mostrarImagen();
});

// Por ultimo iniciar con la primera imagen
mostrarImagen();