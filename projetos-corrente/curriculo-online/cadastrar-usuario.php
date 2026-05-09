<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/style-cadastrar-usuario.css">
    <title>Cadastrar Usuário</title>
</head>
<body>
   <div class="container">
        <section class="header">
            <h2>Nova conta</h2>
        </section>

        <form class="form" action="#" id="form">
            <div class="form-content">
                <label for="nome"><sup>*</sup>Nome Completo</label>
                <input 
                type="text" 
                name="nome" 
                id="nome"
                placeholder="Digite seu nome completo"/>
                <a></a>
            </div>
            <div class="form-content">
                <label for="nacionalidade">Nacionalidade</label>
                <input 
                type="text" 
                name="nacionalidade" 
                id="nacionalidade"
                value="Brasileiro(a)"/>
                <a></a>
            </div>
            <div class="form-content">
                <label for="estado-civil">Estado Civil</label>
                <select id="estado-civil" name="estado-civil">
                    <option value="Solteiro">Solteiro(a)</option>
                    <option value="Solteiro">Casado(a)</option>
                    <option value="Solteiro">Viúvo(a)</option>
                    <option value="Solteiro">Divorciado(a)</option>
                </select>
                <a></a>
            </div>
            <div class="form-content">
                <label for="idade">Idade</label>
                <input 
                type="number" 
                name="idade" 
                id="idade"
                step="1"
                min="1"
                placeholder="Digite sua idade"/>
                <a></a>
            </div>
            <div class="form-content">
                <label for="endereco">Endereço completo</label>
                <input 
                type="text" 
                name="endereco" 
                id="endereco"
                placeholder="Rua, Travessa, Quadra..."/>
                <a></a>
            </div>
            <div class="form-content">
                <label for="celular">Celular</label>
                <input 
                type="tel" 
                name="celular" 
                id="celular"
                placeholder="(98) xxxx-xxx"/>
                <a></a>
            </div>
            <div class="form-content">
                <label for="email"><sup>*</sup>E-mail</label>
                <input 
                type="email" 
                name="email" 
                id="email"
                autocomplete="email"
                placeholder="exemplo@gmail.com"/>
                <a></a>
            </div>
            <div class="form-content">
                <label for="senha"><sup>*</sup>Senha</label>
                <input 
                type="password" 
                name="senha" 
                id="senha"
                autocomplete="current-password"
                placeholder="Digite uma senha"/>
                <a id="msg-validacao">Crie uma senha</a>
            </div>
            <div class="form-content">
                <label for="senha"><sup>*</sup>Confirmação de senha</label>
                <input 
                type="password" 
                name="senha-confirma" 
                id="confirma-senha"
                placeholder="Digite sua senha novamente"/>
                <a id="msg-conf">Confirme sua senha</a>
            </div>
            <button type="submit">Cadastrar</button>
        </form>
   </div>

   <script src="assets/js/form-validation.js"></script>
    
</body>
</html>