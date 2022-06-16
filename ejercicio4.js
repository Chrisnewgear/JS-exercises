//INVERTIR UN TEXTO INGRESAO SIN UTILIZAR METODOS INTERNOS DEL LENGUAJE

function invertir(texto){
    
    let invertido = "";

    for(let letra of texto){
        invertido = letra + invertido;
    }

    return invertido;
}

console.log("El texto invertido es: " , invertir("Christian Sanchez esta gordo"));

//UTILIZANDO METODOS DEL LENGUAJE
function invertir(texto){
    return texto.split("").reverse().join("");
}

console.log("El texto invertido es:", invertir("Christian Sanchez esta gordo"));