"use strict";

import { elementos } from "./seletores.js";
import { registros } from "./storage.js";
import { renderizar } from "./renderizadores.js";
import { atualizar } from "./atualizadores.js";
import { prencherFormulario } from "./formularios.js";
import { formatadores } from "./formatadores.js";
import { comprovante } from "./dados.js";


document.addEventListener("DOMContentLoaded", () => {


    // ===============================
    // ELEMENTOS DA PÁGINA
    // ===============================

    // Botões
    const menu = document.getElementById("menu");
    const menuRemetente = document.getElementById("menuRemetente");
    const menuDestinatario = document.getElementById("menuDestinatario");
    const menuFavorito = document.getElementById("menuFavorito");
    
    const btnSalvar = document.getElementById("btnSalvar");
    const btnNovo = document.getElementById("btnNovo");
    const btnExcluir = document.getElementById("btnExcluir");

    const btnPrint = document.getElementById("btnPrint");

    // Formulários
    const formRemetente = document.forms["formRemetente"];
    const formDestinatario = document.forms["formDestinatario"];

    // lista
    const favoritos = document.getElementById("favoritos");

    // ===================================
    // BANCO DE DADOS (LOCALSTORAGE)
    // ===================================

    // Retorna todos os registros
    function obterDados() {

        // se não existir nada, retorna um vetor vazio
        return JSON.parse(localStorage.getItem("cadastros")) || [];
    }

    // Salva todos os regsitros
    function salvarDados(dados) {
        localStorage.setItem("cadastros", JSON.stringify(dados));
    }

    // ======================================
    // AUTO INCREMENTO DO ID
    // ======================================

    // Reterna o próximo ID disponível
    function proximoId() {

        // Caso não existia, inicia em 1
            return Number(localStorage.getItem("proximoId")) || 1;
    }

    // Incrementa o próximo ID
    function incrementarId() {
        localStorage.setItem("proximoId", proximoId() + 1);
    }

    // =========================================
    // LISTAGEM
    // =========================================

    function atualizarLista() {
        // Limpa a lista
        favoritos.innerHTML = "";

        // busca todos os registros
        const dados = obterDados();

        // percorre todos os registros
        dados.forEach((registro, indice) => {
            const li = document.createElement("li");

            // Texto exibido
            li.textContent = registro.id + " - " + 
                formatadores.nome(registro.nome);

            // Ao clicar, carrega os dados

            li.addEventListener("click", () => {

                carregarRegistro(indice);

                // remove a classe efeito dos itens

                favoritos.querySelectorAll("li").forEach((li) => {
                    li.classList.remove("efeito");
                });

                // adiciona a classe efeito ao item selecionado
                
                li.classList.add("efeito");
                
                
                // inicializacao();

            })

            favoritos.appendChild(li);
        });
    }

    // ========================================
    // CARREGA UM REGISTRO
    // ========================================

    function carregarRegistro(indice) {
        const dados = obterDados();

        // Guarda o indice de vetor
        document.getElementById("indice").value = indice;

        // Carrega apenas o nome
        document.getElementById("nomeDestinatario").value = 
            formatadores.nome(dados[indice].nome);

        document.getElementById("chavePix").value = dados[indice].chavePix;

        document.getElementById("idDestinatario").value = dados[indice].chavePix;
    }


    // =========================================
    // BOTÃO ATUALIZAR
    // =========================================

    formRemetente.addEventListener("submit",() => {
        // impede o envio do formulário
        event.preventDefault()

        // carrega os dados do formulário em um objeto
        const dados = new FormData(formRemetente);

        atualizar.remetente(dados);

        registros.salvarRemetente()

    });
    
    function salvarRemetente(dados) {

        localStorage.setItem("remetente", JSON.stringify(dados));

    }

    function obterRemetente() {
        return JSON.parse(localStorage.getItem("remetente")) || [];
    }


    // ======================================
    // BOTÃO SALVAR
    // ======================================

    formDestinatario.addEventListener("submit", (event) => {

        // Impede o envio do formuário
        event.preventDefault();

        const dados = obterDados();

        const indice = document.getElementById("indice").value

        // ==========================================
        // NOVO CADASTRO
        // ==========================================

        if(indice == "") {
            const registro = {
                
                // Gera automaticamente o ID
                id: proximoId(),

                // Nome digitado
                nome: document.getElementById("nomeDestinatario").value,

                identificador: document.getElementById("chavePix").value,

                chavePix: document.getElementById("chavePix").value,


            };

            dados.push(registro);

            // Atualiza o próximo ID
            incrementarId();
            
        }

        // =========================================
        // ALTERAÇÃO
        // =========================================

        else {

            // Altera o nome
            dados[indice].nome = document.getElementById("nomeDestinatario").value;

            // Altera o a chave pix
            dados[indice].chavePix = document.getElementById("chavePix").value;

            // Altera o identificador
            dados[indice].identificador = document.getElementById("chavePix").value;
            

        }

        // Salva novamente
        salvarDados(dados);

        // Limpa formulário

        // formDestinatario.reset();

        // document.getElementById("indice").value = "";

        // Atualiza a lista
        atualizarLista()
    })


    // ===================================
    // BOTÃO EXCLUIR
    // ===================================

    btnExcluir.onclick = function(event) {
        const indice = document.getElementById("indice").value

        // Nada selecionado
        if(indice == "") return;

        const dados = obterDados();

        // Remove o registro
        dados.splice(indice, 1);

        // Salvao novamente;
        salvarDados(dados);

        formDestinatario.reset();

        document.getElementById("indice").value = "";

        // Atualiza lista
        atualizarLista();
    }

    // ===========================================
    // BOTÃO NOVO
    // ===========================================

    document.getElementById("btnNovo").onclick = function() {
        formDestinatario.reset();
        document.getElementById("indice").value = "";
    }


    // ===========================================
    // DUCPLO CLIQUE
    // ===========================================    

    document.addEventListener("dblclick", (event) => {

        formRemetente.classList.add("oculto");
        formDestinatario.classList.add("oculto");
        favoritos.classList.add("oculto");
        
        document.getElementById("comprovante")
            .classList.toggle("oculto");

        document.getElementById("menu")
            .classList.toggle("oculto");


        inicializacao();

    })


    btnPrint.addEventListener("click", () => {
        print();
    })

    // ========================================
    // MENU
    // ========================================

    // Menu Remetente
    menuRemetente.addEventListener("click", () => {
        removeCor()
        menuRemetente.classList.add("cor-menu");

        formDestinatario.classList.add("oculto");
        favoritos.classList.add("oculto");

        formRemetente.classList.remove("oculto");
    })    

    // Menu Destinatário

    menuDestinatario.addEventListener("click", () => {
        removeCor()
        menuDestinatario.classList.add("cor-menu");        

        formRemetente.classList.add("oculto");
        favoritos.classList.add("oculto");

        formDestinatario.classList.remove("oculto");
    })    

    // Menu Favorito

    menuFavorito.addEventListener("click", () => {
        removeCor()
        menuFavorito.classList.add("cor-menu"); 

        formDestinatario.classList.add("oculto");
        formRemetente.classList.add("oculto");

        favoritos.classList.remove("oculto");
    })

    


    function removeCor() {
        document.querySelectorAll(".menu__btn")
        .forEach(btn => {
            btn.classList.remove("cor-menu");
        })
    }



    // ========================================
    // INICIALIZAÇÃO
    // ========================================

    inicializacao();

    function inicializacao() {

        // Carrega a lista quando a página abrir
        atualizarLista();

        // Carrega os dados da transação
        atualizar.transacao();

        // Carrega os dados do remente
        registros.obterRemetente();

        // Carrega os dados no comprovante
        renderizar.renderizarComprovante()

        // Carrega os dados do remetente no formulario
        carregarRemetente()
    }

    function carregarRemetente() {

        const registros = obterRemetente();

        // Preenche os campos do formulario caso contrario, coloca vazio no input
        document.getElementById("nomeRemetente").value = registros.nome ?? "";
        document.getElementById("idRemetente").value = registros.identificador ?? "";
        document.getElementById("bancoRemetente").value = registros.banco ?? "";
        document.getElementById("agenciaRemetente").value = registros.agencia ?? "";
        document.getElementById("contaRemetente").value = registros.conta ?? "";
    };



});