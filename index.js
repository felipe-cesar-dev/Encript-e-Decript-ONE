function mostrarBotaoCopiar() {
    let botao = document.querySelector('.botaoCopiar');
    botao.style.display = 'block';
}

function ocultarSecaoInformativa() {
    let boneco = document.querySelector('.bonecoSVG');
    let nenhuma = document.querySelector('.nenhuma');
    boneco.style.display = 'none';
    nenhuma.style.display = 'none';
}

function exibirTexto (textoParametro) {
    let secaoTexto = document.querySelector('.exibirTexto')
    secaoTexto.style.display = 'block'
    secaoTexto.innerHTML = textoParametro;
    return textoParametro;
}

function copiarTexto() {
    let textoParaCopiar = document.querySelector('.exibirTexto').innerHTML;;
    let botao = document.querySelector('.botaoCopiar');
    navigator.clipboard.writeText(textoParaCopiar);
    botao.innerHTML = 'Copiado <i class="fa-solid fa-check"></i>';
}

const statusBotaoCopiar = () => {
    let botao = document.querySelector('.botaoCopiar');
    botao.innerHTML = '<i class="fa-solid fa-copy"></i> Copiar'
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
    controleDeExibicao();
    statusBotaoCopiar();
}

function descriptar () {
    let input = document.querySelector('.textoDigitado');
    let texto = input.value;
    let decodificado = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    exibirTexto(decodificado);
    controleDeExibicao();
    statusBotaoCopiar();
}

