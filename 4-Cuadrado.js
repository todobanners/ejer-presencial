/*Escribe una función llamada cuadrado, que recibe un entero, que
dibuje cuadrados con asteriscos en todos los lados, pero con el centro
hueco, en base a un parámetro dado. */

function cuadrado(tamanio){
    if (tamanio > 0) {
        
        for (let filas = 0; filas < tamanio; filas++) {
            let filaString = "";
            for (let columnas = 0; columnas < tamanio; columnas++) {
                if (filas == 0 || filas == (tamanio - 1)) {
                   filaString += "* "
                } else if(columnas == 0 || columnas == (tamanio - 1)){
                    filaString += "* "
                } else {

                    filaString += "  "
                }
            }
            console.log(filaString);
        }
    
    } else {
        console.log("El tamaño debe ser superior a 0");
    }
}

cuadrado(5)