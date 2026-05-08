let artistas = [
    "Michael Jackson",
    "Daddy Yankee",
    "Bad Bunny",
    "Sabrina Carpenter",
    "Luis Fonsi",
    ];

    let datos = [
        [5, 13, 1958],
        [4, 10,1977],
        [5, 3,1994],
        [4, 1, 1999], 
        [6, 1, 1978],
    ];

    function mostrarDatos() {
        let tabla = document.getElementById("tablaDatos");
        tabla.innerHTML = "";

        for (let i = 0; i < artistas.length; i++) {
            tabla.innerHTML += `<tr> <td>${artistas[i]}</td> <td>${datos[i][0]}</td> <td>${datos[i][1]}</td> <td>${datos[i][2]}</td> </tr>`;
        }
    }