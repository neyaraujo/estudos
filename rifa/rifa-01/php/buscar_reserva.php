```php
<?php

declare(strict_types=1);

header("Content-Type: application/json; charset=utf-8");

require_once "conexao.php";


$id = filter_input(
    INPUT_GET,
    "id",
    FILTER_VALIDATE_INT
);


if (
    $id === false ||
    $id === null ||
    $id < 1
) {

    http_response_code(400);

    echo json_encode([
        "sucesso" => false,
        "mensagem" => "Reserva inválida."
    ], JSON_UNESCAPED_UNICODE);

    exit;
}


try {

    $sql = "
        SELECT
            id,
            numero,
            nome,
            telefone,
            data_cadastro
        FROM participantes
        WHERE id = :id
        LIMIT 1
    ";

    $consulta = $conexao->prepare($sql);

    $consulta->execute([
        ":id" => $id
    ]);

    $reserva = $consulta->fetch();


    if (!$reserva) {

        http_response_code(404);

        echo json_encode([
            "sucesso" => false,
            "mensagem" => "Reserva não encontrada."
        ], JSON_UNESCAPED_UNICODE);

        exit;
    }


    echo json_encode([
        "sucesso" => true,
        "dados" => $reserva
    ], JSON_UNESCAPED_UNICODE);


} catch (PDOException $erro) {

    error_log(
        $erro->getMessage()
    );

    http_response_code(500);

    echo json_encode([
        "sucesso" => false,
        "mensagem" => "Erro ao consultar a reserva."
    ], JSON_UNESCAPED_UNICODE);
}
```
