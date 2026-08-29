// Curso: Algoritmos
// Professor: Gustavo Guanabara
// Autor: Franciney de Araujo
// Data: 28/08/2026
// Crie um programa que leia o nome e o salário de um funcionário, mostrando no final uma mensagem."

// declaraç~eos
// entradas
// processamento
// saidas

class Program
{
    // double salario = 0 ; 
    static void Main()
    {
        // declarações
        string nome = "";
        double salario = 0;

        // entradas
        System.Console.Write("Digite seu nome: ");
        nome = Console.ReadLine();

        System.Console.Write("Digite seu salario: ");
        salario = double.Parse(Console.ReadLine());

        System.Console.WriteLine($"Nome: {nome}");
        System.Console.WriteLine($"Salario: {salario}");

    }
}