<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Painel</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            /* outline: 1px solid red; */
        }

        body {
            margin: 0 auto;
            max-width: 450px;
            height: 100vh;
        }
        .container {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            align-content: center;
            gap: 20px;
            padding: 20px;
            
        }
        .container__item {
            padding: 10px;
            flex: 1 1 150px;
            height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;

            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

            transition: transform 0.3s ease-in-out;
        }

        .container__item:hover {
            transform: scale(1.1);
        }
        .container__item.um {
            background: blue;
            color: #fff;
        }

    </style>
</head>
<body>

    <div class="container">
        <div class="container__item um">Cadastrar/Editar</div>
        <div class="container__item dois">Ganhadores</div>
        <div class="container__item tres">Participantes</div>
        <div class="container__item quatro">Participantes</div>
    </div>
    
</body>
</html>