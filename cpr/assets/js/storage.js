import { comprovante } from "./dados.js";
import { elementos } from "./seletores.js";


/* ============================
   REMETENTE
============================ */

function salvarRemetente() {

    localStorage.setItem(
        "remetente",
        JSON.stringify(comprovante.remetente)
    );

}

export const registros = {
    salvarRemetente,
    obterRemetente,
}

export function obterRemetente() {

    const dados = localStorage.getItem("remetente");

    if (!dados) return;

    Object.assign(
        comprovante.remetente,
        JSON.parse(dados)
    );

}



/* ============================
   DESTINATÁRIOS
============================ */


function buscarDados() {

    const dados = localStorage.getItem("destinatario");


    return dados
        ? JSON.parse(dados)
        : [];

}



function salvarDados(dados) {

    localStorage.setItem(
        "destinatario",
        JSON.stringify(dados)
    );

}



function proximoId() {

    const dados = buscarDados();


    if (dados.length === 0) {
        return 1;
    }


    return Math.max(
        ...dados.map(item => Number(item.id))
    ) + 1;

}



/* ============================
   CADASTRAR / EDITAR
============================ */


function cadastrar() {


    const dados = buscarDados();


    const id = Number(
        comprovante.destinatario.id
    );



    // EDITAR
    if (id) {


        const indice = dados.findIndex(
            item => Number(item.id) === id
        );


        if (indice !== -1) {


            dados[indice] = {

                ...comprovante.destinatario,

                id

            };


        }


    } 

    // NOVO
    else {


        dados.push({

            ...comprovante.destinatario,

            id: proximoId()

        });


    }



    salvarDados(dados);


    listar();


}



/* ============================
   LISTAR FAVORITOS
============================ */


function listar() {


    elementos.favoritos.innerHTML = "";


    const dados = buscarDados();



    dados.forEach(item => {


        const li = document.createElement("li");


        li.textContent =
            `${item.id} - ${item.nome}`;



        li.addEventListener(
            "click",
            () => carregarFormulario(item.id)
        );



        elementos.favoritos.appendChild(li);


    });


}



/* ============================
   CARREGAR NO FORMULÁRIO
============================ */


function carregarFormulario(id) {


    const dados = buscarDados();



    const item = dados.find(
        destinatario =>
        Number(destinatario.id) === Number(id)
    );



    if (!item) return;



    Object.assign(
        comprovante.destinatario,
        item
    );



    const form = document.forms.destinatario;

    form.id.value = item.id || "";
    form.nome.value = item.nome || "";
    form.identificador.value = item.identificador || "";
    form.descricao.value = item.descricao || "";
    form.chavepix.value = item.chavepix || "";
    form.instituicao.value = item.instituicao || "";
    form.agencia.value = item.agencia || "";
    form.conta.value = item.conta || "";
    form.tipo.value = item.tipo || "";



    form.classList.remove("oculto");


}



/* ============================
   REMOVER
============================ */


function remover(id) {


    let dados = buscarDados();



    dados = dados.filter(
        item =>
        Number(item.id) !== Number(id)
    );



    salvarDados(dados);


    listar();


}



/* ============================
   BUSCAR POR ID
============================ */


function buscarPorId(id) {


    return buscarDados().find(
        item =>
        Number(item.id) === Number(id)
    );

}


/* ============================
   EXPORTAÇÃO
============================ */

export const destinatario = {
    buscarDados,
    proximoId,
    cadastrar,
    listar,
    remover,
    buscarPorId,
    carregarFormulario
};