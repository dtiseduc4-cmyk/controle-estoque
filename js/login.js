import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

document.getElementById("loginBtn").addEventListener("click", async () => {
    const email = email.value;
    const senha = senha.value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, senha);
        const user = userCredential.user;

        localStorage.setItem("uid", user.uid);

        window.location.href = "index.html"; // página inicial do sistema
    } catch (err) {
        alert("Erro ao entrar: " + err.message);
    }
});
