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
            font-family: Arial, Helvetica, sans-serif;
        }
        .painel {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            align-content: center;
            gap: 20px;
            padding: 20px;
            
            
        }
        .painel__item {
            padding: 10px;
            flex: 1 1 150px;
            height: 150px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;

            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

            transition: transform 0.3s ease-in-out;
        }

        .painel__item:hover {
            transform: scale(1.1);
        }
        .painel__item.um {
            background: blue;
        }
        .painel__item.dois {
            background: green;
        }
        .painel__item.tres {
            background: yellow;
        }
        .painel__item.quatro {
            background: darkorchid;
        }
        .painel__link {
            padding: 20px;
            text-decoration: none;
        }
        .um a {
            color: #fff;
        }
        .dois a {
            color: #fff;
        }
        .tres a {
            color: #000;
        }
        .quatro a {
            color: #fff;
        }

    </style>
</head>
<body>

    <ul class="painel">
        <li class="painel__item um">
            <a class="painel__link" href="criador.php">Cadastrar/Editar</a>
        </li>
        <li class="painel__item dois">
            <a class="painel__link" href="index.html">Participantes</a>
        </li>
        <li class="painel__item tres">
            <a class="painel__link" href="https://www.google.com/search?q=tabela+dos+jogos+da+copa+do+mundo+2026&oq=tabela+dos+jogos&gs_lcrp=EgZjaHJvbWUqDQgAEAAYgwEYsQMYgAQyDQgAEAAYgwEYsQMYgAQyBggBEEUYOTINCAIQABiDARixAxiABDINCAMQABiDARixAxiABDINCAQQABiDARixAxiABDIGCAUQABgDMg0IBhAAGIMBGLEDGIAEMg0IBxAAGIMBGLEDGIAEMg0ICBAAGIMBGLEDGIAEMgYICRAAGAPSAQk5NTk2ajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8#sie=lg;/m/0r4xs1m;2;/m/030q7;br;fp;1;;;;-1" target="_blank">Jogos</a>
        </li>
        <li class="painel__item quatro">
            <a class="painel__link" href="https://www.youtube.com/watch?v=7kdzXhc90xw" target="_blank">Ao Vivo</a>
        </li>

</ul>
    
</body>
</html>