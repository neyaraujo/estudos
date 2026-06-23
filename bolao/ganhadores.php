<?php
require_once 'acoes/conexao.php';
require_once 'times.php';

    // APOSTAS FEITAS
    $sql2 = "SELECT * FROM participantes
    WHERE pagamento = 'sim'";
    $resultado2 = mysqli_query($con, $sql2);
    $apostas = $resultado2->num_rows;   

// DADOS DO JOGO
    $valor_aposta = 5;
    $taxa = 20/100;
    $total = ($valor_aposta * $apostas) * (1 - $taxa); 
    $ganhadores = "";
    $jogo = false;
    $msg = "";
    $placar_casa = "";
    $placar_visitante = "";

if (isset($_GET['btn_ganhadores'])) {
    $placar_casa = mysqli_escape_string($con, $_GET['placar_casa']);
    $placar_visitante = mysqli_escape_string($con, $_GET['placar_visitante']);

    if ($placar_casa =="" || $placar_visitante =="") {
        $ganhadores = "";

        $msg = "Preencha o resultado do jogo.";

    } else {
    // GANHADORES
        $sql = "SELECT * FROM participantes
        WHERE pagamento = 'sim'
        AND time_casa = '$placar_casa'
        AND time_visitante = $placar_visitante";
        $resultado = mysqli_query($con, $sql);
        $ganhadores = $resultado->num_rows;  
        
        if ($resultado->num_rows > 0) {
            $premio = $total / $ganhadores;
        }else {

        }
        
        $jogo = true;
        
    }


}
   






?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ganhadores</title>
</head>
<body>
    <style>
        .form__placar {
            display: flex;
            justify-content: center;
            gap: 10px;
        }
        .form__placar input {
            width: 50px;
            text-align: center;
        }
        .form__btn {
            margin-top: 10px;
            padding: 10px;
            display: block;
            width: 100%;
        }

        /* HEADER */
        .header {
            margin: 0 auto;
            max-width: 450px;
        }
        .header__photo {
            width: 100%;
        }
        .msg__container {
            position: relative;
            display: block;
        }
        .msg.ativo {
            width: 100%;
            position: absolute;
            top: -30px;
            display: inline-block;
            color: orangered;
            padding: 10px;
            text-align: center;
            
        }
        .msg {
            display: none;
        }
    </style>
    <?php require_once 'header.php';?>

    <div class="header">
        <img class="header__photo" src="img/header-ganhadores-1080.jpg" alt="">
    </div>
    <div class="msg__container">
        <a id="msg" class="msg ativo"><?= ($msg)?? '' ?></a>   
    <div> 

    <form action="" method="$_GET">
        <div class="form__placar">
            <label for="placar_casa"><?= $nome_casa ?></label>
            <input value="<?= $placar_casa ?>" type="number" name="placar_casa" id="placar_casa">
            <input value="<?= $placar_visitante ?>" type="number" name="placar_visitante" id="placar_visitante">
            <label for="placar_visitante"><?= $nome_visitante ?></label>
        </div>
        <input class="form__btn" type="submit" value="Ganhadores" name="btn_ganhadores">
    </form>

<?php
echo "
    <style>
        * {
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
        }

        body {
            max-width: 450px;
            margin: 0 auto;
            font-family: Arial, Helvetica, sans-serif;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        th, td {
            border: 1px solid #ccc;
            text-align: center;
        }
</style>
";

echo "<main>
        <table>
            <thead>
                <tr>
                    <th>Ganhadores</th>
                    <th>Apostas</th>
                    <th>Valor</th>
                    <th>Taxa</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <td>$ganhadores</td>
                <td>$apostas</td>
                <td>$valor_aposta</td>
                <td>$taxa</td>
                <td>$total</td>
            </tbody>
            
        </table>";

    echo "
        <table>
            <thead>
                <tr>
                    <th>NOME</th>
                    <th>PRÊMIO</th>
                </tr>
            </thead>
            <tbody>";
            if ($jogo) {
                while ($dados = mysqli_fetch_array($resultado)) {
                    $nome = $dados['nome'];
                    echo "
                        <tr>
                            <td>$nome</td>
                            <td>$premio</td>
                        </tr>
                    ";
                }     

            }
                            
    echo "    
            </tbody>
        </table>
    </main>
";
?>
<a href="ganhadores.html">Visão dos usuários</a>
</body>
</html>
<?php
$html = '
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            heigth: 100vh;
            max-width: 450px;
            margin: 0 auto;
            font-family: Arial, Helvetica, sans-serif;
        }
        .header {
            width: 100%;
        }
        .header__photo {
            width: 100%;
        }
        .main {
            max-width: 1080px;
            padding: 10px;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        thead {
            background: yellow;
        }
        table {
            margin: 10px 0;
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        th, td {
            text-align: center;
            font-size: 10px;
            border: 1px solid #ccc;
        }

        .form__placar {
            display: flex;
            justify-content: center;
            gap: 10px;
        }
        .form__placar input {
            width: 50px;
            text-align: center;
        }
        footer {
            padding: 20px;
            position: absolute;
            bottom: 0;
        }
    </style>
</head>
<body>
    <header class="header">
        <img class="header__photo" src="img/header-ganhadores-1080.jpg" alt="">
    </header>
    <div class="msg__container">

    </div>

    <form action="" method="$_GET">
        <div class="form__placar">
            <label for="placar_casa">'.$nome_casa.'</label>
            <input disabled value="'.$placar_casa.'" type="number" name="placar_casa">
            <input disabled value="'.$placar_visitante.'" type="number" name="placar_visitante">
            <label for="placar_casa">'.$nome_visitante.'</label>
        </div>
    </form>
    <main>
        <table>
            <thead>
                <tr>
                    <th>Ganhadores</th>
                    <th>Apostas</th>
                    <th>Valor</th>
                    <th>Taxa</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <td>'.$ganhadores.'</td>
                <td>'.$apostas.'</td>
                <td>'.$valor_aposta.'</td>
                <td>'.$taxa.'</td>
                <td>'.$total.'</td>
            </tbody>
            <table>
                <thead>
                    <tr>
                        <th>NOME</th>
                        <th>PRÊMIO</th>
                    </tr>
                </thead>
                <tbody>';
                            $sql = "SELECT * FROM participantes
                            WHERE pagamento = 'sim'
                            AND time_casa = '$placar_casa'
                            AND time_visitante = '$placar_visitante'";            
                            $resultado = mysqli_query($con, $sql);

                            while ($dados = mysqli_fetch_assoc($resultado)) {
                                $nome = $dados['nome'];
                                $html .='<tr>';
                                $html .='<td>'.$nome.'</td>';
                                $html .='<td>'.$premio.'</td>';
                                $html .='<tr>';                   
                            }

    $html .='</tbody>
            </table>';
$html .='
        </table>
        <div>
            <p>Lista dos <a href="https://neyaraujo.github.io/estudos/bolao/index.html">Participantes</a><p>
        </div>
    </main>
    <footer>
        &copy; Franciney de J. Araujo, Todos os direitos revervados.
    </footer>
</body>
</html>
';

file_put_contents('ganhadores.html', $html);
?>