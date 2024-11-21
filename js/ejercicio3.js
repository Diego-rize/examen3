function contarVocales(texto) {
    // Expresion para encontrar las vocales en varias de sus formas
    const coincidencias = texto.match(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g);

    // Comprobar si hay coincidencias y devolver la cantidad de vocales.
    if (coincidencias) {
        return coincidencias.length;
    } else {
        return 0;
    }
}

// Solicitar un texto mediante una alerta.
const textoIngresado = prompt("Por favor, ingresa un texto:");

// Contar las vocales del texto ingresado.
const numeroDeVocales = contarVocales(textoIngresado);

// Mostrar el resultado en la consola.
console.log(`El número de vocales en el texto ingresado es: ${numeroDeVocales}`);