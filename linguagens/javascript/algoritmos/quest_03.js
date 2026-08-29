// Curso: Algoritmos
// Professor: Gustavo Guanabara
// Autor: Franciney de Araujo
// Data: 25/08/2026
// Crie um programa que leia o nome e o salário de um funcionário, mostrando no final uma mensagem."


const readline = require("readline");

// Cria a interface de entrada e saída do terminal.
const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Primeira pergunta: recebe o nome.
entrada.question("Digite seu nome: ",(nome) => {

    // Segunda pergunta: recebe o salário.
    entrada.question("Digite seu salário: ", function(salario) {

        // Mostra os dados informados pelo usuário.
        console.log("Meu nome é ", nome, "meu salário é R$", salario)

        // Fecha a interface do readline.
        entrada.close();

    })

})





