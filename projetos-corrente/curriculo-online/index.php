<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Currículo Online</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>

    <main class="login-container">
        <section class="login-card">
            <header class="login-header">
                <div class="logo-circle">
                    <img src="assets/images/favicon.png" alt="Ícone de perfil e documentos">
                </div>
                <h1>Currículo Online - Login</h1>
            </header>

            <form action="#" method="POST" class="login-form">
                <div class="input-group">
                    <div class="field">
                        <label for="email" class="sr-only">E-mail</label>
                        <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="E-mail" 
                        autofocus 
                        required>
                    </div>
                    
                    <div class="field password-field">
                        <label for="password" class="sr-only">Senha</label>
                        <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Senha" 
                        required>
                    </div>
                </div>

                <div class="registration-area">
                    <span>Não tem login?</span>
                    <a href="cadastrar-usuario.php" class="btn-signup">Cadastre-se</a>
                </div>

                <button type="submit" class="btn-login">Entrar</button>
            </form>

            <footer class="login-footer">
                <p>© <?= date('Y') ?> Franciney Araujo. All rights reserved.</p>
            </footer>
        </section>
    </main>

</body>
</html>