/*Escribe una función llamada coincidencia, que dada una palabra, la
busque en una frase y devuelva la cantidad de veces que aparece la
palabra en la frase. La palabra y la frase deben ser los parámetros de
la función. */

function busqueda(frase, palabra){

    let separarEnPalabras = frase.split(" ");
    let resultado = 0

    separarEnPalabras.forEach(p => {
        if (palabra == p) 
            resultado++;
    });



    console.log("La palabra "+palabra+" se encontró "+resultado+" veces");
}

busqueda("Estoy en esos tiempos en que gota a gota la mente se agota, pasan los dias y apenas lo notas, la rutina es implacable, el mal humor te arropa, y luces como un don nadie con cualquier ropa","gota")// La palabra gota se encontró 2 veces
