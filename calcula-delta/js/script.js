/* =========================================================
   ELEMENTOS DO DOM
   ========================================================= */

const formulario = document.querySelector("#formulario-delta");

const campoEquacao = document.querySelector("#equacao");

const campoResultado = document.querySelector("#resultado-delta");

const mensagem = document.querySelector("#mensagem");


/* =========================================================
   EVENTO DO FORMULÁRIO
   ========================================================= */

formulario.addEventListener("submit", function (evento) {

    // Impede o recarregamento da página
    evento.preventDefault();

    // Limpa mensagens anteriores
    mensagem.textContent = "";

    // Obtém a equação digitada
    const equacao = campoEquacao.value.trim();

    // Verifica se o campo está vazio
    if (equacao === "") {

        mostrarErro("Digite uma equação do segundo grau.");

        return;
    }


    // Tenta extrair os coeficientes usando Regex
    const coeficientes = extrairCoeficientes(equacao);


    // Verifica se a equação foi reconhecida
    if (!coeficientes) {

        mostrarErro(
            "Não foi possível identificar a equação. " +
            "Use um formato como: 2x^2 + 3x - 5 = 0"
        );

        return;
    }


    // Extrai os valores encontrados
    const { a, b, c } = coeficientes;


    // Uma equação do segundo grau precisa ter a diferente de zero
    if (a === 0) {

        mostrarErro(
            "O coeficiente de x² não pode ser zero."
        );

        return;
    }


    // Calcula o Delta
    const delta = calcularDelta(a, b, c);


    // Exibe o resultado
    campoResultado.value = delta;


});


/* =========================================================
   EXTRAIR COEFICIENTES
   ========================================================= */

function extrairCoeficientes(equacao) {

    /*
        Remove espaços da equação.

        Exemplo:

        "2x^2 + 3x - 5 = 0"

        transforma-se em:

        "2x^2+3x-5=0"
    */

    const texto = equacao
        .replace(/\s+/g, "")
        .toLowerCase();


    /*
        Regex para identificar:

        a x^2
        b x
        c

        Exemplos:

        2x^2
        -x^2
        +3x
        -5
    */

    const regex =
        /^([+-]?(?:\d+(?:[.,]\d+)?)?)x\^2([+-]?(?:\d+(?:[.,]\d+)?)?)x([+-]?(?:\d+(?:[.,]\d+)?))=0$/;


    const resultado = texto.match(regex);


    // Se não encontrou o padrão, retorna null
    if (!resultado) {

        return null;
    }


    /*
        resultado[1] = coeficiente a
        resultado[2] = coeficiente b
        resultado[3] = coeficiente c
    */

    let valorA = resultado[1];

    let valorB = resultado[2];

    let valorC = resultado[3];


    /*
        Quando o usuário escreve:

        x^2

        não existe o número 1 escrito.

        Portanto:

        x^2 → a = 1

        -x^2 → a = -1
    */

    if (valorA === "" || valorA === "+") {

        valorA = "1";

    } else if (valorA === "-") {

        valorA = "-1";
    }


    /*
        O mesmo acontece com o coeficiente de x:

        +x → 1

        -x → -1
    */

    if (valorB === "" || valorB === "+") {

        valorB = "1";

    } else if (valorB === "-") {

        valorB = "-1";
    }


    /*
        Permite que o usuário utilize vírgula
        como separador decimal.

        Exemplo:

        2,5 → 2.5
    */

    valorA = valorA.replace(",", ".");

    valorB = valorB.replace(",", ".");
    valorC = valorC.replace(",", ".");


    return {

        a: Number(valorA),

        b: Number(valorB),

        c: Number(valorC)

    };
}


/* =========================================================
   CALCULAR DELTA
   ========================================================= */

function calcularDelta(a, b, c) {

    /*
        Fórmula:

        Δ = b² - 4ac
    */

    return (b ** 2) - (4 * a * c);
}


/* =========================================================
   EXIBIR ERRO
   ========================================================= */

function mostrarErro(texto) {

    mensagem.textContent = texto;

    campoResultado.value = "--";
}