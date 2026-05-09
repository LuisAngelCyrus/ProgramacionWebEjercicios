// Arreglo con los nombres de los artistas
let artistas = [
    "Michael Jackson",
    "Daddy Yankee",
    "Bad Bunny",
    "Sabrina Carpenter",
    "Luis Fonsi",
    ];

// Arreglo bidimensional con los datos: [Álbumes, Grammys, Año]
let datos = [
    [5, 13, 1958],
    [4, 10,1977],
    [5, 3,1994],
    [4, 2, 1999], 
    [6, 1, 1978],
];

// Función que muestra los datos en la tabla
function mostrarDatos() {
    // Obtiene el contenedor de la tabla por su id
    let tabla = document.getElementById("tablaDatos");
    // Limpia la tabla para no duplicar datos
    tabla.innerHTML = "";

    // Recorre todos los artistas
    for (let i = 0; i < artistas.length; i++) {
        // Agrega una fila por cada artista con sus datos
        tabla.innerHTML += `<tr> <td>${artistas[i]}</td> <td>${datos[i][0]}</td> <td>${datos[i][1]}</td> <td>${datos[i][2]}</td> </tr>`;
    }
}