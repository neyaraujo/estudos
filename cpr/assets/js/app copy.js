"use strict";

import { elementos } from "./seletores.js";
import { salvarComprovante, carregarComprovante, destinatario } from "./storage.js";
import { renderizar } from "./renderizadores.js";
import { atualizar } from "./atualizadores.js";
import { prencherFormulario } from "./formularios.js";


document.addEventListener("DOMContentLoaded", () => {

    carregarComprovante();

    // ===============================
    // ELEMENTOS DA PÁGINA
    // ===============================

    const btn_remetente = document.querySelector("#btn_remetente");
    const btn_destinatario = document.querySelector("#btn_destinatario");
    const btn_favorito = document.querySelector("#btn_favorito");
    const btnPrint = document.getElementById("print");

    const formRemetente = document.forms["remetente"];
    const formDestinatario = document.forms["destinatario"];
    const formComprovante = document.forms["comprovante"];

    

    // Exibe e esconde o formulario
    function exibeFormularios() {

        formRemetente?.classList.add("oculto");
        formDestinatario?.classList.add("oculto");
    }

    function limparCoresMenu() {

        btn_remetente.style.color = "";
        btn_destinatario.style.color = "";
        btn_favorito.style.color = "";

    }



    /* ============================
       REMETENTE
    ============================ */


    btn_remetente?.addEventListener("click", () => {


        limparCoresMenu();


        btn_remetente.style.color = "#aaa";


        formRemetente.classList.remove("oculto");
        formDestinatario.classList.add("oculto");


    });



    /* ============================
       DESTINATÁRIO
    ============================ */


    btn_destinatario?.addEventListener("click", () => {


        limparCoresMenu();


        btn_destinatario.style.color = "#aaa";


        formDestinatario.classList.remove("oculto");
        formRemetente.classList.add("oculto");


    });



    /* ============================
       FAVORITOS
    ============================ */


    btn_favorito?.addEventListener("click", () => {


        limparCoresMenu();


        btn_favorito.style.color = "#aaa";


        esconderFormularios();


        destinatario.listar();


    });



    /* ============================
       DUPLO CLIQUE
       MOSTRAR COMPROVANTE
    ============================ */

    document.addEventListener("dblclick", () => {

        // Exibe os formularios
        exibeFormularios();


        limparCoresMenu();

        // Mostra o menu
        document.querySelector(".menu")
        ?.classList.toggle("oculto");

        // Oculta o comprovante
        elementos.comprovante
        ?.classList.toggle("oculto");



        if(localStorage.getItem("remetente")) {

            carregarComprovante();

            prencherFormulario();

        }


    });



    /* ============================
       SALVAR REMETENTE
    ============================ */


    formComprovante?.addEventListener(
        "submit",
        (event) => {


            event.preventDefault();


            const dados = new FormData(formComprovante);


            atualizar.remetente(dados);


            salvarComprovante();


            renderizar.renderizarComprovante();


        }
    );



    /* ============================
       SALVAR DESTINATÁRIO
    ============================ */


    formDestinatario?.addEventListener(
        "submit",
        (event) => {


            event.preventDefault();


            const dados = new FormData(formDestinatario);


            atualizar.destinatario(dados);


            destinatario.cadastrar();


            renderizar.renderizarComprovante();


        }
    );



    /* ============================
       IMPRIMIR
    ============================ */


    btnPrint?.addEventListener(
        "click",
        () => {

            window.print();

        }
    );


});