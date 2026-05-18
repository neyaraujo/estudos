const form =
    document.getElementById("registerForm");

const senha =
    document.getElementById("senha");

const confirmarSenha =
    document.getElementById("confirmarSenha");

const errorMessage =
    document.getElementById("errorMessage");

const toggleButtons =
    document.querySelectorAll(".toggle-password");

toggleButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const targetId =
            button.getAttribute("data-target");

        const input =
            document.getElementById(targetId);

        const isPassword =
            input.type === "password";

        input.type =
            isPassword ? "text" : "password";

        button.innerText =
            isPassword ? "🙈" : "👁";

    });

});

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const telefone =
        document.getElementById("telefone")
            .value
            .trim();

    const check =
        document.getElementById("check");

    if (
        telefone === "" ||
        senha.value.trim() === "" ||
        confirmarSenha.value.trim() === ""
    ) {

        showError("Preencha todos os campos.");
        return;

    }

    if (senha.value !== confirmarSenha.value) {

        showError("As senhas não coincidem.");
        return;

    }

    if (!check.checked) {

        showError("Confirme a idade mínima.");
        return;

    }

    errorMessage.style.display = "none";

    alert("Conta criada com sucesso!");

});

function showError(message) {

    errorMessage.innerText = message;

    errorMessage.style.display = "block";

}
