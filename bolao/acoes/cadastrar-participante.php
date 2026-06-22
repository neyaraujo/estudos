<?php 
    if (isset($_POST['btn_cadastrar'])) {
        $nome = mysqli_real_escape_string($con, $_POST['nome']);
        $time_casa = mysqli_real_escape_string($con, $_POST['time_casa']);
        $time_visitante = mysqli_real_escape_string($con, $_POST['time_visitante']);

        $sql = "INSERT INTO participantes (nome, time_casa, time_visitante)
        VALUES ('$nome','$time_casa', '$time_visitante')";

        if ($nome ==='' || $time_casa ==='' || $time_visitante =='') {
            
        } else {
            mysqli_query($con, $sql);
            header('Location: cadastrado.php');

        }
    };

?>