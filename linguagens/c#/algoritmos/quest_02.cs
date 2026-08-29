// Curso: Algoritmos
// Professor: Gustavo Guanabara
// Autor: Franciney de Araujo
// Data: 28/08/2026
// faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boas-vindas para ela:"

// ALGORITMO
// leia(nome)
// leia(salario)
// escreva "Meu nome é (nome), meu salario é (salario)"



class Program
{

    static void Main()
    {
        // leia(nome)
        string nome = "Ana";

        // leia(salario)
        double salario = 2500.50;

        // escreva "Meu nome é (nome), meu salario é (salario)"
        Console.WriteLine($"Menu nome é {nome}, meu salario é {salario}");
    }
}