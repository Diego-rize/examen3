function jugarPiedraPapelTijera() {
    const opciones = ["Piedra", "Papel", "Tijera"];

    // Obtener la elección mediante una alerta
    let eleccionUsuario = prompt("Elige: Piedra, Papel o Tijera").trim().toLowerCase();

    // Validar la entrada del usuario
    if (!["piedra", "papel", "tijera"].includes(eleccionUsuario)) {
        alert("Elección inválida. Por favor, ingresa Piedra, Papel o Tijera.");
        return;
    }

    // Convertir la primera letra a mayúscula para coincidir con las opciones
    eleccionUsuario = eleccionUsuario.charAt(0).toUpperCase() + eleccionUsuario.slice(1);

    // Generar la elección del PC
    const eleccionPC = opciones[Math.floor(Math.random() * opciones.length)];

    // Mostrar las elecciones en la consola
    console.log(`Tú elegiste: ${eleccionUsuario}`);
    console.log(`El PC eligió: ${eleccionPC}`);

    // Determinar el resultado y mostrarlo en la consola
    if (eleccionUsuario === eleccionPC) {
        console.log("¡Es un empate!");
    } else if (
        (eleccionUsuario === "Piedra" && eleccionPC === "Tijera") ||
        (eleccionUsuario === "Papel" && eleccionPC === "Piedra") ||
        (eleccionUsuario === "Tijera" && eleccionPC === "Papel")
    ) {
        console.log("¡Ganaste!");
    } else {
        console.log("¡Perdiste! El PC ganó.");
    }
}

jugarPiedraPapelTijera();