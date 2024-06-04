/* Escribe una función llamada invertir, que dado una cadena de
caracteres, de vuelta la cadena invierta el orden de sus caracteres, sin
usar métodos propios del lenguaje, sólo estructuras de control.
*/

function invertir(texto){

    let resultado = "";

    for (let index = texto.length -1 ; index >= 0; index--) {
        resultado += texto[index];
    }

    console.log(resultado) 
}

invertir("Hola") // aloH
invertir("Teclado") // odalceT