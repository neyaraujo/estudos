const form = document.getElementById("loginForm");
const senha = document.getElementById("senha");
const togglePassword = document.getElementById("togglePassword");
const message = document.getElementById("message");

togglePassword.addEventListener("click", () => {

    const isPassword =
        senha.getAttribute("type") === "password";

    senha.setAttribute(
        "type",
        isPassword ? "text" : "password"
    );

    togglePassword.innerText =
        isPassword ? "🙈" : "👁";
});

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const telefone =
        document.getElementById("telefone").value.trim();

    const senhaValue =
        senha.value.trim();

    if (telefone === "" || senhaValue === "") {

        message.style.display = "block";

        return;
    }

    message.style.display = "none";

    alert("Login realizado com sucesso!");
});
