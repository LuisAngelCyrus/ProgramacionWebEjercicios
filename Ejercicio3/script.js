function calcularArea() {
    let radio = document.getElementById("radio").value;
    let area = Math.PI * Math.pow(radio, 2);
    document.getElementById("area").innerHTML = "Área del círculo: " + area.toFixed(2);
}

function calcularCircunferencia() {
    let radio = document.getElementById("radio").value;
    let circunferencia = 2 * Math.PI * radio;
    document.getElementById("circunferencia").innerHTML = "Circunferencia del círculo: " + circunferencia.toFixed(2);
}