<?php 
$sql = "SELECT * FROM participantes";
    $resultado = mysqli_query($con, $sql);

    echo "
        <table>
            <tr>
                <th>Nº</th>
                <th>NOME</th>
                <th>$nome_casa</th>
                <th>X</th>
                <th>$nome_visitante</th>
                <th>STATUS</th>
            </tr>";

            while ($dados = mysqli_fetch_assoc($resultado)) {
                $id = $dados['id'];
                $nome = $dados['nome'];
                $time_casa = $dados['time_casa'];
                $time_visitante = $dados['time_visitante'];
                $pagamento = pagamento($dados['pagamento']);

                echo "
                    <tr>
                        <td>$id</td>
                        <td>$nome</td>
                        <td>$time_casa</td>
                        <td>X</td>
                        <td>$time_visitante</td>
                        <td><a href='criador.php?id=$id'>$pagamento</a></td>
                    </tr>
                ";
            }

    echo "
        </table>
    ";

    function pagamento($tipo) {
        if($tipo === 'nao') {
            return '<span style="color:red">PD</span>';
        }elseif($tipo ==='sim'){
            return '<span style="color:green">PG</span>';
        }else {
            return $tipo;
        }
    }
?>