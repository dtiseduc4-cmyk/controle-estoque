import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Controla páginas protegidas
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  // Carrega nível do usuário
  const nivel = localStorage.getItem("nivel") || "operador";

  // Esconde itens que exigem admin
  if (nivel !== "admin") {
    document.querySelectorAll(".admin-only").forEach(el => el.style.display = "none");
  }
});

// Botão de sair
window.sair = function () {
  signOut(auth).then(() => {
    localStorage.removeItem("nivel");
    window.location.href = "login.html";
  });
};
