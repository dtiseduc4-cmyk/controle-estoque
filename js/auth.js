import { auth, db } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

onAuthStateChanged(auth, async (user) => {
  // Se estiver na página de login e já estiver logado → manda para index
  if (window.location.pathname.includes("login.html")) {
    if (user) {
      window.location.href = "index.html";
    }
    return; 
  }

  // Se estiver em qualquer outra página e NÃO estiver logado → volta ao login
  if (!user) {
    window.location.href = "login.html";
  }
});

// Função sair
window.sair = function () {
  signOut(auth).then(() => {
    localStorage.removeItem("nivel");
    window.location.href = "login.html";
  });
};
