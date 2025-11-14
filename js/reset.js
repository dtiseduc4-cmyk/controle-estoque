import { auth } from "./firebase.js";
import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

document.getElementById("resetForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("emailReset").value;

  try {
    await sendPasswordResetEmail(auth, email);
    alert("E-mail enviado! Verifique sua caixa de entrada.");
  } catch (err) {
    alert("Erro: " + err.message);
  }
});
