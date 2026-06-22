<?php 
$sql = "SELECT * FROM participantes";
    $resultado = mysqli_query($con, $sql);

    echo "
        <table>
            <tr>
                <th>Nº</th>
                <th>NOME</th>
                <th>BRASIL</th>
                <th>X</th>
                <th>CROÁCIA</th>
            </tr>";

            while ($dados = mysqli_fetch_assoc($resultado)) {
                $id = $dados['id'];
                $nome = $dados['nome'];
                $time_casa = $dados['time_casa'];
                $time_visitante = $dados['time_visitante'];

                echo "
                    <tr>
                        <td>$id</td>
                        <td>$nome</td>
                        <td>$time_casa</td>
                        <td>X</td>
                        <td>$time_visitante<td>
                    </tr>
                ";
            }

    echo "
        </table>
    ";
?>