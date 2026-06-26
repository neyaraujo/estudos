<?php

use LDAP\Result;

session_start();
// CONEXAO
require_once 'acoes/conexao.php';

$nome_casa = "BRASIL";
$nome_visitante = "JAPÃO";


?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
    body {
        margin: 0 auto;
        padding: 10px;
        max-width: 450px;
        height: 100vh;

    }


    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-content: center;
        gap: 5px;
        
    }
    .form__label {
        font-size: 12px;
    }
    .form__input {
        font-size: 12px;
    }
    form input[type="number"] {
        width: 50px;
    }
    .form__placar {
        align-self: center;
    }
    table {
        margin-top: 10px;
        border-collapse: collapse;
        width: 100%;
        font-size: 11px;

        box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5);
    }
    th, td {
        border: 1px solid #ccc;
        text-align: center;
        padding: 5px;
    }
    .header__title {
        text-align: center;
    }
    .submit {
        width: 100%;
        background: green;
        padding: 5px;
        border-radius: 5px;
        color:#fff;
        cursor: pointer;

    }

</style>
    <title>Cadastro de Participantes</title>
    <body>

    <!-- CABEÇALHO -->
    <?php require_once 'header.php';?>
    

<h2 class="header__title">Cadastro de Participantes</h2>
<?php 
    if(isset($_GET['id'])) {
        $_SESSION['id'] = $_GET['id'];

        $id_logado = $_GET['id'];
        $sql = "SELECT * FROM participantes
        WHERE id = '$id_logado'";
        $resultado = mysqli_query($con, $sql);
        $dados = mysqli_fetch_assoc($resultado);
        $nome = $dados['nome']; 
    }
?>

<form action="" method="post">
        <label for="nome">Digite seu nome</label>
        <input type="text" name="nome" id="nome" value="<?= ($nome)?? '' ?>">
        <div class="form__placar">
            <label class="form__label" for="time_casa"><?= $nome_casa ?></label>
            <input class="form__input" type="number" name="time_casa" id="time_casa">
            <span class="form__vs">x</span>
            <input class="form__input" type="number" name="time_visitante" id="time_visitante">
            <label class="form__label" for="time_visitante"><?= $nome_visitante ?></label>
        </div>
        <div>
        <label for="pagamento">Pagou?</label>
        <select name="pagamento" id="pagamento">
            <option value="nao">Não</option>
            <option value="sim">Sim</option>
        </select>
        </div>
        <input class="submit" type="submit" value="Cadastrar" name="btn_cadastrar">
    
</form>
</body>
</html>

<?php 
    // CRIAR PARTICIPANTE
    require_once 'acoes/cadastrar-participante.php';
    // CONSULTA
    require_once 'acoes/consulta-participantes.php';
    
?>

<?php
$html = '
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        :root {
        --verde-50:  #f0fdf4;
        --verde-100: #dcfce7;
        --verde-200: #bbf7d0;
        --verde-300: #86efac;
        --verde-400: #4ade80;
        --verde-500: #22c55e;
        --verde-600: #16a34a;
        --verde-700: #15803d;
        --verde-800: #166534;
        --verde-900: #14532d;         
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            // outline: 1px solid red;
        }
        body {
            color: #fff;
            background: #000;
            padding: 10px;
            max-width: 450px;
            margin: 0 auto;
            font-family: Arial, Helvetica, sans-serif;
        }
        .header {
            width: 100%;
        }
        .header__container {
            width: 100%;
        }
        .header__photo {
            width: 100%;
        }
        .hero {
            width: 100%;
        }
        .hero__photo {
            margin: 0 auto 10px;
            display: block;
            // padding: 20px;

            width: 90%;
        }

        /* ANIMAÇÃO */
        @keyframes anima {
            0% {
                transform: scale(1);
            }
            100% {
                transform: scale(1.05);
            }
        }
        .hero__photo {
            animation: anima; 
            animation-duration: 0.5s;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
            animation-direction: alternate;
        }
        .form {
            max-width: 100%;
            border: 1px solid var(--verde-900);
            border-radius: 10px;
            padding: 5px;

            display: flex;  
            justify-content: center;
            flex-wrap: wrap;
            align-items: center;
            position: relative;
        }
        .form__placar {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .form__label {
            font-size: 10px;
            font-weight: bold;
            color: var(--verde-900);
        }
        .form__vs {
            color: #16683a;
        }
        .form__input {
            width: 70px;
            padding: 5px;
            border-radius: 5px;
            font-size: 16px;

            text-align: center;
            color: var(--verde-900);
        } 
 /* SUBMIT */
        
        .submit {
            display: block;
            width: 200px;
            position: relative;
            margin: 0 auto;
        }
        .submit__btn {
            width: 100%;
            cursor: pointer;
            text-aling: center;
        }
        
        .erro {
            display: block;
            color: orange;
            text-align: center;
            position: absolute;
            top: -16px;
            font-size: 12px;
            
        }
        .erro.ativo {
            display: none;
        }  
            
        table {
            margin: 0 auto;
            width: 100%;
            border-collapse: collapse;
            color: #14532d;
            font-size: 11px;
        }
        thead {
            background: yellow;
            
        }
        th, td {
        border: 1px solid #ccc;
        padding: 5px;
        text-align: center;
        }
        .hidden {
            display: none;
        }
    </style>
</head>
<body>
    <header class="header">
        <div class="header__container">
            <img class="header__photo" src="img/header-1080x400.png" alt="">
        </div>
        <div class="hero">
            <img class="hero__photo" src="img/hero-1080x250.png" alt="">
        </div>
        <style>
            .status__title {
                font-size: 16px;
                padding: 10px;
                text-align: center;
            }
            .status__link {
                color: blue;
            }
        </style>
        <h2 class="status__title hidden">
            <a class="status__link" href="ganhadores.html">RESULTADO CLIQUI AQUI</a>
        </h2>

        <form class="form">
            <div class="form__placar">
                <label class="form__label">'.$nome_casa.'</label>
                <input 
                    class="form__input" 
                    id="placar-brasil" 
                    type="number"
                    min="0"
                    max="99"
                    maxlength="2">
                </input>

                <input 
                    class="form__input" 
                    id="placar-adversario"
                    type="number"
                    min="0"
                    max="99"
                    maxlength="2">
                </input>
                <label class="form__label">'.$nome_visitante.'</label>

            </div>
                <a class="erro ativo" id="msg-erro">Você precisa especificar o placar</a>
            </form>

            <div class="submit" id="btn-apostar">
                <img class="submit__btn" src="img/btn-submit.png" alt="">
            </div>
    </header>';
    $html .= '
        <table>
        <thead>
            <tr>
                <th>Nº</th>
                <th>NOME</th>
                <th>'.$nome_casa.'</th>
                <th>X</th>
                <th>'.$nome_visitante.'</th>
                <th>STATUS</th>
            </tr>
        </thead>
    ';
    require_once 'acoes/conexao.php';    
    $sql = "SELECT * FROM participantes";
    $resultado = mysqli_query($con, $sql);
    
    $numero = 1;
    while ($dados = mysqli_fetch_assoc($resultado)) {
        $id = $dados['id'];
        $nome = $dados['nome'];
        $time_casa = $dados['time_casa'];
        $time_visitante = $dados['time_visitante'];
        $pagamento = pagamento($dados['pagamento']);

        $html .= '<tr>';
        $html .= '<td>'.$numero.'</td>';
        $html .= '<td>'.$nome.'</td>';
        $html .= '<td>'.$time_casa.'</td>';
        $html .= '<td>x</td>';
        $html .= '<td>'.$time_visitante.'</td>';
        $html .= '<td>'.$pagamento.'</td>';
        $html .= '</tr>';

        $numero++;
    }
    $html .='<table>';
$html .='

    <style>
        .footer {
            font-size: 12px;
            padding: 10px;
        }
        .footer__copyright {
            position: absolute;
            bottom: 0;
            padding: 20px;
            color: #565656;
            text-align: center;
        }
    </style>
    <footer class="footer">
        <p class="footer__copyright">&copy; Franciney de J. Araújo. Todos os direitos reservados</p>
    </footer>
    <script>
        const btn_apostar = document.getElementById("btn-apostar");
        btn_apostar.addEventListener("click",apostar);


        function apostar() {
            const placar_brasil = document.getElementById("placar-brasil");
            const placar_adversario = document.getElementById("placar-adversario");
            let msg = document.getElementById("msg-erro");

            if (placar_brasil.value ==="" || isNaN(placar_brasil.value)) {
                msg.classList.remove("ativo");
                return;
            } else if (placar_adversario.value ==="" || isNaN(placar_adversario.value)) {
                msg.classList.remove("ativo");
                return;
            } else {
                msg.classList.add("ativo");
            }

            let telefone = "5598988508348";
            let mensagem = `Brasil ${placar_brasil.value} x ${placar_adversario.value} Escócia`;
            let url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

            placar_brasil.value = "";
            placar_adversario.value = "";

            window.open(url, "_blank");
        }
        function pagar () {
            let telefone = "5598988508348";
            let mensagem = "Quero pagar minha aposta";
            let url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

            window.open(url, "_blank");
        }
    </script>



</body>
</html>
';

file_put_contents('index.html', $html);
?>