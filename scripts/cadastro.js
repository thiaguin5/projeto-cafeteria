const form = document.querySelector("form");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado de verdade

    // Verifica se os campos estão preenchidos
    if (inputNome.value !== "" && inputEmail.value !== "") {
        // Se os dois campos têm valor, mostra o alert de sucesso
        alert("Cadastro feito com sucesso");

        // Limpa os campos
        inputNome.value = "";
        inputEmail.value = "";
    } else {
        // Se algum campo estiver vazio, mostra alerta de erro
        alert("Por favor, preencha todos os campos");
    }
});










     