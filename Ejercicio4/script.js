// Lista de imágenes (tú descargarás las imágenes)
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

let indiceActual = 0;  // Qué imagen estamos viendo

// 1. Mostrar la imagen actual
function mostrarImagen() {
    imagenPrincipal.src = images[indiceActual];
    actualizarBolitas();
}

// 2. Crear y actualizar las bolitas
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

// 3. Flecha derecha (siguiente imagen)
btnDerecha.addEventListener("click", () => {
    if (indiceActual < images.length - 1) {
        indiceActual++;
    } else {
        indiceActual = 0;
    }
    mostrarImagen();
});

// 4. Flecha izquierda (imagen anterior)
btnIzquierda.addEventListener("click", () => {
    if (indiceActual > 0) {
        indiceActual--;
    } else {
        indiceActual = images.length - 1;
    }
    mostrarImagen();
});

// 5. Iniciar con la primera imagen
mostrarImagen();