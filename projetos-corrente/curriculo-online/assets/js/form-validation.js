form.addEventListener("submit",(event) => {
    event.preventDefault();
    const form = document.getElementById("form");
    const nome = document.getElementById("nome");
    const nacionalidade = document.getElementById("nacionalidade");
    const estado_civil = document.getElementById("estado-civil");
    const idade = document.getElementById("idade");
    const endereco = document.getElementById("endereco");
    const celular = document.getElementById("celular");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const confirma_senha = document.getElementById("confirma-senha");


    checkForm();
    

    function checkInputNome(){
        const nomeValue = nome.value;
        if(nomeValue === ''){
            erroInput(nome, "Preencha o nome completo");
        }else{
            const formItem = nome.parentElement;
            formItem.classList.remove('error');
        }
    }
    
    function checkImputEmail() {
        const emailValue = email.value;
        
        if(emailValue === ''){
            erroInput(email, "O email é obrigatório")
        }else{
            const formItem = email.parentElement;
            formItem.classList.remove('error')
        }
    }

    function checkInputPassword(){
        const senhaValue = senha.value;

        if(senhaValue === ''){
            erroInput(senha, "A senha é obrigatória");
        }else if(senhaValue.length < 6){
            erroInput(senha, "A sua senha precisa ter no mínimo 6 caracteres.");
        }else {
            const formItem = senha.parentElement;
            formItem.classList.remove('error');
        }
    }

    function checkSenhaConfirmacao(){
        const senhaValue = senha.value;
        const confirmaSenhaValor = confirma_senha.value;

        if(confirmaSenhaValor === ''){
            erroInput(confirma_senha, "A confirmação de senha é obrigatória");
        }else if(confirmaSenhaValor !== senhaValue){
            erroInput(confirma_senha, "As senhas não são iguais")
        }else{
            const formItem = confirma_senha.parentElement;
            formItem.classList.remove('error');
        }
    }

    function erroInput(input, message){
        const formItem = input.parentElement;
        const textMessage = formItem.querySelector("a");

        textMessage.innerText = message;

        formItem.classList.add('error')
    }

    function checkForm(){
        checkInputNome()
        checkImputEmail()
        checkInputPassword()
        checkSenhaConfirmacao()

        const formItems = form.querySelectorAll(".form-content");

        const isValid = [...formItems].every((item)=> {
            return item.className === "form-content"
        });     
        
        if(isValid){
            alert("CADASTRADO COM SUCESSO")
        }

        
    }

})







