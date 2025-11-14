import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

document.getElementById("formCadastro").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("emailCadastro").value;
  const senha = document.getElementById("senhaCadastro").value;
  const nivel = document.getElementById("nivel").value;

  try {
    const cred = await createUserWithEmailAndPassword(auth, email, senha);

    localStorage.setItem("nivel-" + cred.user.uid, nivel);

    alert("Usuário criado com sucesso!");
    document.getElementById("formCadastro").reset();

  } catch (err) {
    alert("Erro: " + err.message);
  }
});
