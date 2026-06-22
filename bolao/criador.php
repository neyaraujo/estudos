<?php 
session_start();
// CONEXAO
require_once 'acoes/conexao.php';

$time_casa = "Brasil";
$time_visitante = "Croácia";


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <body>
        
    

<style>
    body {
        max-width: 450px;
        height: 100vh;
        margin: 0 auto;

    }

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-content: center;
        gap: 5px;
        
    }
    .form__label {

    }
    .form__input {

    }
    form input[type="number"] {
        width: 50px;
    }
    .form__placar {
        align-self: center;
    }
    table {
        margin: 0 auto;
        width: 450px;
    }
    th, td {
        text-align: center;
    }

</style>

<form action="" method="post">
    <label for="nome">Digite seu nome</label>
    <input type="text" name="nome" id="nome">
    <div class="form__placar">
        <label class="form__label" for="time_casa"><?= $time_casa ?></label>
        <input class="form__input" type="number" name="time_casa" id="time_casa">
        <span class="form__vs">x</span>
        <input class="form__input" type="number" name="time_visitante" id="time_visitante">
        <label class="form__label" for="time_visitante"><?= $time_visitante ?></label>
    </div>
    <input type="submit" value="Cadastrar" name="btn_cadastrar">
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
<html lang="en">
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
        }
        body {
            max-width: 1080px;
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
            margin: 0 auto;
            display: block;
            padding: 20px;

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
            border-radius: 5px;
            margin: 0 30px;
            padding: 5px;

            display: flex;  
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            align-items: center;

            position: relative;
        }
        .form__placar {
            display: flex;
            align-items: center;
            gap: 10px;
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
            width: 100%;
            position: relative;
        }
        .submit__btn {
            width: 100%;
            cursor: pointer;
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
    </style>
</head>
<body>
    <header class="header">
        <div class="header__container">
            <img class="header__photo" src="img/header-1080x400.jpg" alt="">
        </div>
        <div class="hero">
            <img class="hero__photo" src="img/hero-1080x250.jpg" alt="">
        </div>
        <form class="form">
            <div class="form__placar">
                <label class="form__label">BRASIL</label>
                <input class="form__input" id="placar-brasil" type="number"></input>
                <span class="form__vs">X<span>
                <input class="form__input" id="placar-adversario"></input>
                <label class="form__label">ESCÓCIA</label>
            </div>

            <a class="erro ativo" id="msg-erro">Você precisa especificar o placar</a>

            <div class="submit" id="btn-apostar">
                <img class="submit__btn" src="img/btn-submit.jpg" alt="">
            </div>
        </form>
    </header>';
?>
<?php 
    require_once 'acoes/conexao.php';    
    $sql = "SELECT * FROM participantes";
    $resultado = mysqli_query($con, $sql);  

    $html .= '$resultado';
?>
    
<?php 
$html .='
</body>
</html>
';

file_put_contents('index2.html', $html);
?>