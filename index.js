function mostrarBotaoCopiar() {
    let botao = document.querySelector('.botaoCopiar');
    botao.style.display = 'block';
}

function ocultarSecaoInformativa() {
    let ocultarSec = document.querySelector('.secaoInformativa');
    ocultarSec.style.display = 'none'
}

function exibirTexto (textoParametro) {
    let secaoTexto = document.querySelector('.exibirTexto')
    secaoTexto.style.display = 'block'
    secaoTexto.innerHTML = textoParametro;
    return textoParametro;
}

function copiarTexto() {
    let textoParaCopiar = document.querySelector('.exibirTexto').innerHTML;;
    navigator.clipboard.writeText(textoParaCopiar);
    alert('Texto copiado: ' + textoParaCopiar)
}

const controleDeExibicao = () => {
    ocultarSecaoInformativa();
    mostrarBotaoCopiar();
}

function encriptar () {
    let input = document.querySelector('.textoDigitado');
    let texto = input.value;
    let codificado = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    exibirTexto(codificado);
    controleDeExibicao()
    if (texto.trim() == "") {
        alert('Digite uma palavra ou texto')
        
    }
}

function descriptar () {
    let input = document.querySelector('.textoDigitado');
    let texto = input.value;
    let decodificado = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    exibirTexto(decodificado);
    controleDeExibicao();
}

