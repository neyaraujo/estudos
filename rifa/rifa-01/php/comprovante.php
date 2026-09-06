<?php

declare(strict_types=1);

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
    die("Reserva inválida.");
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
        die("Reserva não encontrada.");
    }


} catch (PDOException $erro) {

    error_log($erro->getMessage());

    die("Erro ao consultar a reserva.");
}


$numero = (int) $reserva["numero"];

$nome = htmlspecialchars(
    $reserva["nome"],
    ENT_QUOTES,
    "UTF-8"
);

$telefone = htmlspecialchars(
    $reserva["telefone"],
    ENT_QUOTES,
    "UTF-8"
);

$data = date(
    "d/m/Y H:i",
    strtotime($reserva["data_cadastro"])
);

$valor = number_format(
    $numero,
    2,
    ",",
    "."
);

?>

<!DOCTYPE html>

<html lang="pt-BR">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0">

    <meta
        name="description"
        content="Comprovante de reserva da Rifa Online">

    <title>Comprovante de Reserva</title>

    <link
        rel="stylesheet"
        href="../css/comprovante.css">

</head>

<body>

    <main class="comprovante">

        <section class="comprovante__cartao">

            <header class="comprovante__cabecalho">

                <h1 class="comprovante__titulo">
                    Rifa Online
                </h1>

                <p class="comprovante__subtitulo">
                    Comprovante de Reserva
                </p>

            </header>


            <div class="comprovante__numero">

                <span class="comprovante__numero-label">
                    Número reservado
                </span>

                <strong class="comprovante__numero-valor">
                    <?= $numero ?>
                </strong>

            </div>


            <div class="comprovante__dados">

                <div class="comprovante__item">

                    <span class="comprovante__label">
                        Nome
                    </span>

                    <strong class="comprovante__valor">
                        <?= $nome ?>
                    </strong>

                </div>


                <div class="comprovante__item">

                    <span class="comprovante__label">
                        Telefone
                    </span>

                    <strong class="comprovante__valor">
                        <?= $telefone ?>
                    </strong>

                </div>


                <div class="comprovante__item">

                    <span class="comprovante__label">
                        Valor
                    </span>

                    <strong class="comprovante__valor">
                        R$ <?= $valor ?>
                    </strong>

                </div>


                <div class="comprovante__item">

                    <span class="comprovante__label">
                        Data da reserva
                    </span>

                    <strong class="comprovante__valor">
                        <?= $data ?>
                    </strong>

                </div>


                <div class="comprovante__item">

                    <span class="comprovante__label">
                        Código da reserva
                    </span>

                    <strong class="comprovante__valor">
                        #<?= $id ?>
                    </strong>

                </div>

            </div>


            <footer class="comprovante__rodape">

                <p class="comprovante__mensagem">
                    Sua reserva foi registrada com sucesso!
                </p>

                <a
                    class="comprovante__botao"
                    href="../index.html">
                    Voltar para a rifa
                </a>

            </footer>

        </section>

    </main>

</body>

</html>