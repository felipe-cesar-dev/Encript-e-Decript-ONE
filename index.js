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

const controleDeExibicao = () => {
    ocultarSecaoInformativa();
    mostrarBotaoCopiar();
}

function exibirTexto (textoParametro) {
    let secaoTexto = document.querySelector('.exibirTexto');
    secaoTexto.style.display = 'block';
    secaoTexto.innerHTML = textoParametro;
    return textoParametro;
}

function copiarTexto() {
    let textoParaCopiar = document.querySelector('.exibirTexto').innerHTML;
    let botao = document.querySelector('.botaoCopiar');
    navigator.clipboard.writeText(textoParaCopiar);
    botao.innerHTML = 'Copiado <i class="fa-solid fa-check"></i>';
}

const statusBotaoCopiar = () => {
    let botao = document.querySelector('.botaoCopiar');
    botao.innerHTML = '<i class="fa-solid fa-copy"></i> Copiar'
}

function encriptar() {
    let input = document.querySelector('.textoDigitado');
    let texto = input.value;
    if (texto.trim() === '') {
        alert('Digite algo no campo abaixo!');
    } else {
        let codificado = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
        exibirTexto(codificado);
        controleDeExibicao();
        statusBotaoCopiar();
        input.value = '';
        checagemtexto();
    }
}

function descriptar() {
    let input = document.querySelector('.textoDigitado');
    let texto = input.value;
    if (texto.trim() === ''){
        alert('Digite algo no campo de texto!');
    } else {
        let decodificado = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
        exibirTexto(decodificado);
        controleDeExibicao();
        statusBotaoCopiar();
        input.value = ''
        checagemtexto();
    }
}

function checarMaiusculas(texto) {
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== texto[i].toLowerCase()) {
            alert('Letras maiúsculas foram ignoradas.');
            return;
        }
    }
}

function checarCaracteresEspeciais(texto) {
    const regex = /[^a-zA-Z0-9\s]/g;
    if (regex.test(texto)) {
        alert("Caracteres especiais foram ignorados.");
    }
}

const checagemtexto = () => {
    if (checarMaiusculas && checarCaracteresEspeciais) {
        alert ('Letras maiúsculas e/ou caracteres especiais foram ignorados')
    }
}


