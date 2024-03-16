

function encriptar () {
    let input = document.querySelector('.textoDigitado');
    let texto = input.value;
    var codificado = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat')
    console.log(codificado)
    
}

function descriptar () {
    let input = document.querySelector('.textoDigitado');
    let texto = input.value;
    var decodificado = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u')
    console.log(decodificado)

}


//var palavra = "carrao cavalo";
//var novaPalavra = palavra.replace(/a/g, "b");
//
//console.log(novaPalavra);