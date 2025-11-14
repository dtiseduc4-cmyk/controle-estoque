import { auth, db } from "./firebase.js";
import { 
  signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

import { 
  doc, getDoc 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Login
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;

  try {
    // Autentica usuário
    const cred = await signInWithEmailAndPassword(auth, email, senha);
    const uid = cred.user.uid;

    // Busca o nível de permissão no Firestore
    const ref = doc(db, "users", uid);
    const snap = await getDoc(ref);

    if (snap.exists()) {
      const role = snap.data().role || "operador";
      localStorage.setItem("nivel", role);
    } else {
      // Se não existir, assume operador
      localStorage.setItem("nivel", "operador");
    }

    // Redireciona para o sistema
    window.location.href = "index.html";

  } catch (error) {
    alert("Erro ao fazer login: " + error.message);
  }
});
