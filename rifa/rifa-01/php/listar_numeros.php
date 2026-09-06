<?php

declare(strict_types=1);

header("Content-Type: application/json; charset=utf-8");

require_once "conexao.php";


try {

    /*
     * Consulta somente os números.
     */
    $sql = "
        SELECT numero
        FROM participantes
        ORDER BY numero
    ";

    $consulta = $conexao->query($sql);

    $numeros = $consulta->fetchAll(PDO::FETCH_COLUMN);


    /*
     * Converte os valores para inteiros.
     */
    $numeros = array_map(
        "intval",
        $numeros
    );


    /*
     * Retorna os números em JSON.
     */
    echo json_encode(
        [
            "sucesso" => true,
            "numeros" => $numeros
        ],
        JSON_UNESCAPED_UNICODE
    );


} catch (PDOException $erro) {

    http_response_code(500);

    echo json_encode(
        [
            "sucesso" => false,
            "numeros" => [],
            "mensagem" => "Não foi possível consultar os números."
        ],
        JSON_UNESCAPED_UNICODE
    );
}