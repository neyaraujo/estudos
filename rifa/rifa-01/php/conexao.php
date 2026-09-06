<?php

declare(strict_types=1);

/*
 * Configurações do banco
 */

$servidor = "localhost";
$usuario  = "root";
$senha    = "";
$banco    = "rifa";


/*
 * Cria a conexão
 */

try {

    $conexao = new PDO(
        "mysql:host={$servidor};dbname={$banco};charset=utf8mb4",
        $usuario,
        $senha
    );

    /*
     * Configura o PDO para lançar exceções
     * quando ocorrer algum erro.
     */
    $conexao->setAttribute(
        PDO::ATTR_ERRMODE,
        PDO::ERRMODE_EXCEPTION
    );

    /*
     * Retorna os resultados como array associativo.
     */
    $conexao->setAttribute(
        PDO::ATTR_DEFAULT_FETCH_MODE,
        PDO::FETCH_ASSOC
    );

} catch (PDOException $erro) {

    http_response_code(500);

    die("Erro ao conectar ao banco de dados.");
}