// Curso: Algoritmos
// Professor: Gustavo Guanabara
// Autor: Franciney de Araujo
// Data: 25/08/2026
// Crie um programa que leia o nome e o salário de um funcionário, mostrando no final uma mensagem."

#include <stdio.h>

int main() {

    char nome[50]= "";
    float salario = 0;

    printf("Digite seu nome: ");
    // scanf("%49s", nome);
    fgets(nome, sizeof(nome), stdin);

    printf("Digite seu salario: ");
    scanf("%f", &salario);

    printf("Ola %s seu salario e R$ %.2f", nome, salario);

    return 0;
}