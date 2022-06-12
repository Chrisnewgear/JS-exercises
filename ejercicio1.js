function tablaMultiplicar (numero){
    //let resultado = "#Tabla del "+numero+" #";
    let resultado = `#Tabla del ${numero} #\n`;

    for (i = 1; i <= 10; i++){
        let multiplicacion = (i * numero);

        resultado += `${i} x ${numero} = ${multiplicacion}\n`  
    }

    return resultado;
}

console.log(tablaMultiplicar(10));