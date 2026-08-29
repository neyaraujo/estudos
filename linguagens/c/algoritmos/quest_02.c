// Curso: Algoritmos
// Professor: Gustavo Guanabara
// Autor: Franciney de Araujo
// Data: 25/08/2026
// Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boas vindas para ela:"

#include <stdio.h>


int main() {
    char nome[50];

    printf("Digite seu nome: ");
    scanf("%49s", nome);
    
    printf("Ola %s seja bem vindo!", nome);
}