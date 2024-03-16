

function encriptar () {
    let input = document.querySelector('.textoDigitado');
    let texto = input.value;
    let codificado = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    exibirTexto(codificado);
}

function descriptar () {
    let input = document.querySelector('.textoDigitado');
    let texto = input.value;
    let decodificado = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    exibirTexto(decodificado);
}

function exibirTexto (textoParametro) {
    let secaoTexto = document.querySelector('.exibirTexto')
    secaoTexto.innerHTML = textoParametro;
    return textoParametro;
}

function copiarDecodificado () {
    let textoDecod = document.querySelector('.exibirTexto');
    let copiar = textoDecod.textContent;
    let input = document.querySelector('.textoDigitado');
    input.value = copiar
}