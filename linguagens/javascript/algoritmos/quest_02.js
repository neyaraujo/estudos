// Curso: Algoritmos
// Professor: Gustavo Guanabara
// Autor: Franciney de Araujo
// Data: 25/08/2026
// Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boas vindas para ela:"


// Importa o módulo "readline" do Node.js.
// Esse módulo permite receber dados digitados eplo teclado no terminal.
const readline = require("readline");

const entrada = readline.createInterface({

    // Cria uma interface de entrada e saída.
    // Essa interface será usada para conversar com o usuário pelo terminal.
    input: process.stdin,

    // Define que a saída de dados será exibida no terminal.
    // process.stdout = saída padrão (Standard Output).
    output: process.stdout
});

// Faz uma pergunta ao usuário no terminal.
// "Digite seu nome: " é a mensagem exibida.
// (nome) => { ... } é uma função que será executada.
// depois que o usuário digitar alguma coisa e pressionar ENTER.
entrada.question("Digite seu nome: ", (nome) => {

    // Exibe uma mensagem no terminal.
    // "Olá," é um texto.
    // nome contém aquilo que o usuário digitou.
    console.log("Olá, ", nome + " seja bem vindo!");

    // Fecha a interface readline.
    // Isso encerra a entrada de dados pelo teclado.
    entrada.close();
})
