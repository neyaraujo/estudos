<?php

declare(strict_types=1);

require_once "conexao.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: ../index.html");
    exit;
}

$numero = filter_input(
    INPUT_POST,
    "numero",
    FILTER_VALIDATE_INT
);

$nome = trim($_POST["nome"] ?? "");
$telefone = trim($_POST["telefone"] ?? "");


// Validar número
if (
    $numero === false ||
    $numero === null ||
    $numero < 1 ||
    $numero > 100
) {
    die("Número da rifa inválido.");
}


// Validar nome
if ($nome === "") {
    die("Informe seu nome.");
}

if (mb_strlen($nome) > 100) {
    die("Nome muito longo.");
}


// Limpar telefone
$telefoneNumeros = preg_replace(
    '/\D/',
    '',
    $telefone
);


// Validar celular
if (!preg_match('/^[1-9]{2}9\d{8}$/', $telefoneNumeros)) {
    die("Telefone celular inválido.");
}


try {

    // Verificar se o número já foi reservado
    $sql = "
        SELECT id
        FROM participantes
        WHERE numero = :numero
        LIMIT 1
    ";

    $consulta = $conexao->prepare($sql);

    $consulta->execute([
        ":numero" => $numero
    ]);

    if ($consulta->fetch()) {
        die("Este número já foi reservado.");
    }


    // Salvar reserva
    $sql = "
        INSERT INTO participantes
            (numero, nome, telefone)
        VALUES
            (:numero, :nome, :telefone)
    ";

    $consulta = $conexao->prepare($sql);

    $consulta->execute([
        ":numero" => $numero,
        ":nome" => $nome,
        ":telefone" => $telefone
    ]);


    // ID criado pelo MySQL
    $idReserva = $conexao->lastInsertId();


    // Ir para o comprovante
    header(
        "Location: comprovante.php?id=" .
        urlencode($idReserva)
    );

    exit;


} catch (PDOException $erro) {

    if ($erro->getCode() === "23000") {
        die("Este número acabou de ser reservado por outra pessoa.");
    }

    error_log($erro->getMessage());

    die("Não foi possível realizar a reserva.");
}