// Verifica se está logado
if (localStorage.getItem("logado") !== "true") {
    window.location.href = "login.html";
}

// Função de sair
window.sair = function () {
    localStorage.removeItem("logado");
    window.location.href = "login.html";
};
