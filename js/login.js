document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    // Login fixo
    const USER = "admin";
    const PASS = "T3cn0l0g1@dmin";

    if (email === USER && senha === PASS) {
        localStorage.setItem("logado", "true");
        window.location.href = "index.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
});
