/*Escribe una función llamada palindromo, que dada una cadena de
caracteres, compruebe si es palindromo o no, devolviendo true o false.
Los palíndromos son palabras que se leen igual aun estando
invertidas.*/

function esPalindromo(texto){
    let separarCadena = texto.split(""); // Separo el texto en caracteres
    let invertirCadena = separarCadena.reverse(); // invierto lo separado
    let unirCadena = invertirCadena.join(""); // unimos lo separado que ya esta invertido

    //comparamos si las cadenas son iguales

    if (unirCadena == texto) {
        console.log(texto+" es Palindromo")
        return true
    } else {
        console.log(texto+" no es Palindromo")
        return false
    }
}
esPalindromo("ana")//true
esPalindromo("radar")//true
esPalindromo("mouse")//false