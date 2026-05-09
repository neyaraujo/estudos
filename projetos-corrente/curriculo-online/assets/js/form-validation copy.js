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
    const msg = document.getElementById("msg-conf");
    const container = msg.closest(".form-content");

    const dadosObjeto = {
        nome:               nome,
        // nacionalidade:      nacionalidade,
        // estado_civil:       estado_civil,
        // idade:              idade,
        // endereco:           endereco,
        // celular:            celular,
        email:              email,
        // senha:              senha,
        // confirma_senha:    confirma_senha
    }
    const dadosArray = Object.values(dadosObjeto); // transforma em array com elementos html


    for (let i = dadosArray.length -1; i >=0; i--) {
        let element = (dadosArray[i]);
        checkInputElement(element);
    }
        validaCampoSenha()
        validaConfirmacaoSenha(senha, confirma_senha)

        
    function checkInputElement(element){
        if(element.value === '') {
            errorInput(element)
        } else{
            const formItem = element.parentElement;
            formItem.classList = "form-content";
        }
    }
        
    function errorInput(element) {
        const formItem = element.parentElement;
        const textMessage = formItem.querySelector("a");
        textMessage.innerText = textMessage.textContent;
        formItem.className = "form-content error";
    }
        
    function validaCampoSenha() {
        let txt = senha.value;
        let n = txt.length;
            
        let msg = document.getElementById("msg-validacao");
        let pai = msg.closest(".form-content");
            
        if (n < 6) {
            pai.classList.add("error");
            msg.innerText = `Sua senha tem apenas ${n} caracteres, precisa ter 6 ou mais`;
            senha.focus();
            return false;
        } else {
            pai.classList.remove("error");
            msg.innerText = "";
            return true;
        }
    }

    function validaConfirmacaoSenha(senha, confirma_senha) {

        if (senha.value === confirma_senha.value) {
            container.classList.remove("error");
            msg.innerText = "";
            return true;
        } else {
            container.classList.add("error");
            msg.innerText = "As senhas são diferentes";
            return false;
        }
    }
})





