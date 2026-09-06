"use strict";


/* =========================================================
   ELEMENTOS DO DOM
   ========================================================= */

const elementos = {

    numeros: document.querySelector("#rifa-numeros"),

    selecionado: document.querySelector("#rifa-selecionado"),

    numeroInput: document.querySelector("#numero"),

    formulario: document.querySelector("#formulario-rifa"),

    nomeInput: document.querySelector("#nome"),

    telefoneInput: document.querySelector("#telefone"),

    mensagem: document.querySelector("#formulario-mensagem")

};


/* =========================================================
   CONFIGURAÇÕES
   ========================================================= */

const configuracoes = {

    quantidadeNumeros: 100,

    urlNumeros: "php/listar_numeros.php"

};


/* =========================================================
   ESTADO DA RIFA
   ========================================================= */

let numeroSelecionado = null;

let numerosIndisponiveis = [];


/* =========================================================
   BUSCAR NÚMEROS RESERVADOS
   ========================================================= */

async function carregarNumerosIndisponiveis() {

    try {

        const resposta = await fetch(
            configuracoes.urlNumeros
        );


        if (!resposta.ok) {

            throw new Error(
                "Erro ao consultar os números."
            );

        }


        const dados = await resposta.json();


        if (!dados.sucesso) {

            throw new Error(
                dados.mensagem ||
                "Não foi possível carregar os números."
            );

        }


        numerosIndisponiveis = dados.numeros;


    } catch (erro) {

        console.error(
            "Erro ao carregar números:",
            erro
        );


        /*
         * Se houver erro na consulta,
         * não vamos considerar os números
         * automaticamente como disponíveis.
         */

        numerosIndisponiveis = [];

    }

}


/* =========================================================
   VERIFICAR DISPONIBILIDADE
   ========================================================= */

function numeroEstaIndisponivel(numero) {

    return numerosIndisponiveis.includes(numero);

}


/* =========================================================
   CRIAR BOTÃO DE NÚMERO
   ========================================================= */

function criarBotaoNumero(numero) {

    const botao = document.createElement("button");


    botao.type = "button";


    botao.classList.add(
        "rifa__numero"
    );


    botao.dataset.numero = numero;


    /*
     * Conteúdo do botão.
     */

    botao.innerHTML = `
        <span class="rifa__numero-valor">
            ${numero}
        </span>
    `;


    /*
     * Verifica se o número já está reservado.
     */

    if (numeroEstaIndisponivel(numero)) {

        botao.classList.add(
            "rifa__numero--indisponivel"
        );


        botao.disabled = true;


        botao.setAttribute(
            "aria-label",
            `Número ${numero} indisponível`
        );


    } else {

        botao.setAttribute(
            "aria-label",
            `Número ${numero} disponível`
        );


        botao.addEventListener(
            "click",
            selecionarNumero
        );

    }


    return botao;

}


/* =========================================================
   CRIAR OS 100 NÚMEROS
   ========================================================= */

function criarNumeros() {

    elementos.numeros.innerHTML = "";


    for (
        let numero = 1;
        numero <= configuracoes.quantidadeNumeros;
        numero++
    ) {

        const botao =
            criarBotaoNumero(numero);


        elementos.numeros.appendChild(
            botao
        );

    }

}


/* =========================================================
   SELECIONAR NÚMERO
   ========================================================= */

function selecionarNumero(evento) {

    const botao = evento.currentTarget;


    const numero = Number(
        botao.dataset.numero
    );


    /*
     * Verificação de segurança.
     */

    if (numeroEstaIndisponivel(numero)) {

        return;

    }


    /*
     * Remove a seleção anterior.
     */

    const botaoAnterior =
        elementos.numeros.querySelector(
            ".rifa__numero--selecionado"
        );


    if (botaoAnterior) {

        botaoAnterior.classList.remove(
            "rifa__numero--selecionado"
        );

    }


    /*
     * Seleciona o novo número.
     */

    botao.classList.add(
        "rifa__numero--selecionado"
    );


    numeroSelecionado = numero;


    /*
     * Atualiza o input hidden.
     */

    elementos.numeroInput.value =
        numero;


    /*
     * Mostra o número selecionado.
     */

    elementos.selecionado.textContent =
        `Número selecionado: ${numero}`;


    /*
     * Limpa mensagem anterior.
     */

    elementos.mensagem.textContent = "";

}


/* =========================================================
   VALIDAR NÚMERO
   ========================================================= */

function validarNumero() {

    if (
        numeroSelecionado === null ||
        elementos.numeroInput.value === ""
    ) {

        elementos.mensagem.textContent =
            "Escolha um número da rifa.";

        return false;

    }


    return true;

}


/* =========================================================
   VALIDAR NOME
   ========================================================= */

function validarNome() {

    const nome =
        elementos.nomeInput.value.trim();


    if (nome === "") {

        elementos.mensagem.textContent =
            "Preencha seu nome.";

        elementos.nomeInput.focus();

        return false;

    }


    return true;

}


/* =========================================================
   VALIDAR TELEFONE
   ========================================================= */

function validarTelefone() {

    const telefone =
        elementos.telefoneInput.value.trim();


    /*
     * Verifica se foi preenchido.
     */

    if (telefone === "") {

        elementos.mensagem.textContent =
            "Preencha seu telefone.";

        elementos.telefoneInput.focus();

        return false;

    }


    /*
     * Remove espaços, parênteses,
     * hífen e qualquer outro caractere.
     */

    const telefoneNumeros =
        telefone.replace(/\D/g, "");


    /*
     * Celular brasileiro:
     *
     * 2 dígitos do DDD
     * + número 9
     * + 8 dígitos
     *
     * Exemplo:
     * 98987239890
     */

    const regexTelefone =
        /^[1-9]{2}9\d{8}$/;


    if (!regexTelefone.test(telefoneNumeros)) {

        elementos.mensagem.textContent =
            "Informe um número de celular válido.";

        elementos.telefoneInput.focus();

        return false;

    }


    return true;

}


/* =========================================================
   VALIDAR FORMULÁRIO
   ========================================================= */

function validarFormulario(evento) {

    /*
     * Impede o envio inicialmente.
     */

    evento.preventDefault();


    /*
     * Limpa mensagem anterior.
     */

    elementos.mensagem.textContent = "";


    /*
     * 1 - Verificar número.
     */

    if (!validarNumero()) {

        return;

    }


    /*
     * 2 - Verificar nome.
     */

    if (!validarNome()) {

        return;

    }


    /*
     * 3 - Verificar telefone.
     */

    if (!validarTelefone()) {

        return;

    }


    /*
     * Se chegou aqui,
     * todos os campos foram validados.
     *
     * Agora o formulário pode ser enviado
     * para php/salvar.php.
     */

    elementos.formulario.submit();

}


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

async function iniciarRifa() {

    /*
     * Primeiro consulta o banco.
     */

    await carregarNumerosIndisponiveis();


    /*
     * Depois cria os 100 números.
     */

    criarNumeros();

}


/* =========================================================
   EVENTO DO FORMULÁRIO
   ========================================================= */

function configurarFormulario() {

    elementos.formulario.addEventListener(
        "submit",
        validarFormulario
    );

}


/* =========================================================
   INICIAR QUANDO O HTML ESTIVER PRONTO
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        iniciarRifa();

        configurarFormulario();

    }
);