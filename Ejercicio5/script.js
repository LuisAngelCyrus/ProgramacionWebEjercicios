// Obtener los elementos del HTML
const montoInput = document.getElementById("monto");
const mesesInput = document.getElementById("meses");
const boton = document.getElementById("btnCalcular");
const contenedorResultados = document.getElementById("resultados");

// Tasas de interés que vamos a usar
const tasas = [15, 13.5, 9];

// Función principal que calcula el interés
function calcularInteres() {
    // Leer los valores que escribió el usuario
    let monto = parseFloat(montoInput.value);
    let meses = parseInt(mesesInput.value);
    
    // Validar que los datos sean correctos
    if (isNaN(monto) || monto <= 0) {
        alert("Por favor, ingresa un monto válido (mayor a 0)");
        return;
    }
    
    if (isNaN(meses) || meses < 1) {
        alert("Por favor, ingresa una cantidad de meses válida (mínimo 1)");
        return;
    }
    
    // Limpiar resultados anteriores
    contenedorResultados.innerHTML = "";
    
    // Calcular para cada tasa de interés
    for (let i = 0; i < tasas.length; i++) {
        let tasa = tasas[i];
        
        // Fórmula de interés compuesto
        let tasaDecimal = tasa / 100;
        let total = monto * Math.pow(1 + tasaDecimal, meses);
        let interesGenerado = total - monto;
        
        // Crear una tarjeta para mostrar el resultado
        let tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";
        tarjeta.innerHTML = `
            <p><span class="tasa"> Tasa: ${tasa}%</span></p>
            <p> Interés generado: $${interesGenerado.toFixed(2)}</p>
            <p> Total a recibir: <span class="total">$${total.toFixed(2)}</span></p>
        `;
        
        // Agregar la tarjeta al contenedor
        contenedorResultados.appendChild(tarjeta);
    }
}

// Cuando el usuario haga clic en el botón, se ejecuta la función
boton.addEventListener("click", calcularInteres);