// Curso: Algoritmos
// Professor: Gustavo Guanabara
// Autor: Franciney de Araujo
// Data: 25/08/2026
// Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boas vindas para ela:"


// Inclui a biblioteca de entrada e saída do C++.
// Permite utilizar std::cout e std::cin.
#include <iostream>

// Inclui a biblioteca responsável pelo tipo std::string.
#include <string>

// Função principal do programa.
// A execução do programa começa aqui.
int main() {

    // Declara uma variável chamada "nome".
    // std::string é utilizado para armazenar textos.
    std::string nome;

    // Exibe uma mensagem no terminal.
    // std::cout = saída de dados.
    std::cout << "Digite seu nome: ";

    // Lê o que o usuário digitar e armazena na variável "nome".
    // std::cin = entrada de dados.
    // O operador >> envia o valor recebido para a variável.
    std::cin >> nome;

    
    // Exibe uma mensagem junto com o conteúdo da variável "nome".
    // O operador << envia os valores para a saída (std::cout).
    std::cout << "Seja bem vindo, " << nome;

    // Indica que o programa terminou corretamente.
    // O valor 0 representa execução bem-sucedida.

    return 0;
}