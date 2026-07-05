<?php
session_start();


function contadorAcessos() {
    if(!isset($_SESSION['visitou'])){

        $arquivo = "contador.txt";

        // LÉ O VALOR ATUAL
        $acessos = file_get_contents($arquivo);

        // SOMA 1 ACESSO
        $acessos++;

        // SALVA O NOVO VALOR
        file_put_contents($arquivo, $acessos);

        $_SESSION['visitou']= true;
    }

}

// echo "Visitas " . file_get_contents("contador.txt");

use LDAP\Result;

// CONEXAO
require_once 'acoes/conexao.php';
require_once 'times.php';

// $nome_casa = "BRASIL";
// $nome_visitante = "JAPÃO";


?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
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

        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 10px;
    }
    .form__label {
        font-size: 12px;
    }
    .form__input {
        font-size: 12px;
    }
    form input[type="number"] {
        width: 50px;
        padding: 5px;
        text-align: center;
    }
    form input[type="text"] {
        padding: 5px;
    }
    .form__placar {
        align-self: center;
    }
    select {
        padding: 5px;
    }
    table {
        margin-top: 10px;
        border-collapse: collapse;
        width: 100%;
        font-size:14px;

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
        padding: 10px;
        border-radius: 5px;
        color:#fff;
        cursor: pointer;
        margin: 20px 0;
        font-size: 20px;

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
        <label for="nome">Nome</label>
        <input type="text" name="nome" id="nome" value="<?= ($nome)?? '' ?>">
        <div class="form__placar">
            <label class="form__label" for="time_casa"><?= $nome_casa ?></label>
            <input class="form__input" type="number" name="time_casa" id="time_casa" placeholder="">
            <span class="form__vs">x</span>
            <input class="form__input" type="number" name="time_visitante" id="time_visitante" placeholder="">
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
    <meta http-equiv="refresh" content="60">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="img/cbf.ico" type="image/x-icon">
    <link rel="stylesheet" href="assets/css/bolao.css"?v=2></link>
    <title>Bolão Brasil</title>
    <style>
       
    </style>

</head>
<body>
    <header class="header">
        <div class="header__container">
            <img class="header__photo" src="img/logo-bolao.png" alt="">
        </div>
        <div class="hero">
            <img class="hero__photo" src="img/hero-1080x250.png" alt="">
        </div>
    </header>

    <!-- SLIDERS -->

    <link rel="stylesheet" href="assets/css/slider.css"?=v1>

    <section class="slider">
        <article class="slides">

            <input type="radio" name="radio-btn" id="radio1">
            <input type="radio" name="radio-btn" id="radio2">
            <input type="radio" name="radio-btn" id="radio3">
            <input type="radio" name="radio-btn" id="radio4">

            <div class="slide first">
                <img src="img/slide1.jpg"/>
            </div>

            <div class="slide">
                <img src="img/eletrica.jpg"/>
            </div>

            <div class="slide">
                <img src="img/eletrica2.jpg"/>
            </div>
            <div class="slide">
                <a href="rastreamento/index.html" target="_blank"><img src="img/eletrica3.jpg"/></a>
            </div>


            <article class="navigation-auto">
                <div class="auto-btn1"></div>
                <div class="auto-btn2"></div>
                <div class="auto-btn3"></div>
                <div class="auto-btn4"></div>
            </article>

            <article class="manual-navigation">
                <label for="radio1" class="manual-btn"></label>
                <label for="radio2" class="manual-btn"></label>
                <label for="radio3" class="manual-btn"></label>
                <label for="radio4" class="manual-btn"></label>
            </article>

        </article>
    </section>
    
    <script src="assets/js/slider.js"></script>
    

        <style>
            .result__title {
                font-size: 16px;
                padding: 10px;
                text-align: center;
            }
            .result__link {
                color: blue;
            }
            .regra {
                width: 100%;
            }
            .regra__titulo {
                font-size: 14px;
                text-align: center;
            }
            .regra__texto {
                font-size: 10px;
                text-align: center;
            }

            .result__link {
                color: yellow;
                text-decoration: none;
            }

            .destaque {
                color: yellow;
            }
        </style>

        <!-- LINK A LISTA DE GANHADORES -->

        <section class="result">
            <h2 class="result__title">
                <a class="result__link" href="comerciais.html">>>>&#x1f3c6; RESULTADO CLIQUI AQUI &#x1f3c6;<<<</a>
            </h2>
        </section>

        <!-- REGRAS DO BOLLAO -->

        <div class="regra">
            <h2 class="regra__titulo">
               >> Regra do Bolão <<
            </h2>

            <p class="regra__texto">
                <span class="destaque">Todo palpite</span> registrado será considerado <span class="destaque">definitivo</span>.<span class="destaque"> Não será permitido</span> efetuar o pagamento de apostas pendentes <span class="destaque">após o início da partida</span>. Será considerado apenas o placar dos <span class="destaque">90 minutos, incluindo os acréscimos</span>.
            </p>
        </div>

        <!-- AREA DE VOTAÇÃO-->
        <section class="votacao">
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
                </div class="erro">
                    <a class="erro__text ativo" id="msg-erro">>>> Você precisa especificar o placar <<<</a>
            </form>

            <div class="submit" id="btn-apostar">
                <img class="submit__btn" src="img/btn-submit.png" alt="">
            </div>
        </section>';
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
            display:block;
        }
        .footer__copyright {
            color: yellow;
            font-size: 11px;
            text-align: center;
            padding: 20px;
        }

        .confronto {
            width: 100%;
            margin-top: 20px;
        }
        .confronto__img {
            width: 100%;
            border: 2px solid #fff;
        }
    </style>

    <section class="confronto">
        <img class="confronto__img" src="img/confronto.jpg">
    </seciont>

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
            let mensagem = `' .$nome_casa. '${placar_brasil.value} x ${placar_adversario.value} ' . $nome_visitante . ' `;
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