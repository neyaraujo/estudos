<?php 
    if (isset($_POST['btn_cadastrar'])) {
        $nome = mysqli_real_escape_string($con, $_POST['nome']);
        $time_casa = mysqli_real_escape_string($con, $_POST['time_casa']);
        $time_visitante = mysqli_real_escape_string($con, $_POST['time_visitante']);
        $pagamento = mysqli_real_escape_string($con, $_POST['pagamento']);

        if(isset($_GET['id'])){
            $id_logado = $_GET['id'];
            $sql = "UPDATE participantes
            SET 
                pagamento   = '$pagamento',
                nome        = '$nome'
            WHERE id = '$id_logado'";

            mysqli_query($con, $sql);
            header('Location: cadastro.php');
            exit();
        }

        $sql = "INSERT INTO participantes (nome, time_casa, time_visitante, pagamento)
        VALUES ('$nome','$time_casa', '$time_visitante', '$pagamento')";

        if ($nome ==='' || $time_casa ==='' || $time_visitante =='') {
            
        } else {
            mysqli_query($con, $sql);
            header('Location: cadastro.php');

        }
    };

?>