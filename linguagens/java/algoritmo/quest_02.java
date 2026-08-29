// Curso: Algoritmos
// Professor: Gustavo Guanabara
// Autor: Franciney de Araujo
// Data: 28/08/2026
// faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boas-vindas para ela:"


// bibliote para o objeto scanner
import java.util.Scanner;

class quest_02 {
    public static void main(String[] args) {

        // Declaração
        String nome = "";

        // Cria o Scanner
        Scanner scanner = new Scanner(System.in);

        // Entrada
        System.out.print("Digite seu nome: ");
        nome = scanner.nextLine();

        // Saída
        System.out.println("Seja bem vindo " + nome);

        scanner.close();
    }
}