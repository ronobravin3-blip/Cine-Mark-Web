
import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
}
from
"https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
    apiKey:  "AIzaSyCL4XDk1rjjT3TLRTs-sxXl9ioUwLtnD-w",
    authDomain: "cinemark-dbc44.firebaseapp.com",
    projectId: "cinemark-dbc44",
    appId: "1:107061944107:web:17712c313c0b57556e2f6e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerBtn =
document.getElementById("registerBtn");

if (registerBtn) {
    registerBtn.addEventListener("click", async(e) => {
    e.preventDefault();
        const email =
        document.getElementById("email").value;

        const password =
        document.getElementById("password").value;

        createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
        .then(() => {
            alert("Registration successful");
            window.location = "index.html";
        })
        .catch(error => {
            alert(error.code);
            console.log(error);
        });
    });
}

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
    loginBtn.addEventListener("click", async () => {

        const email = document.getElementById("email").value;

        const password = document.getElementById("password").value;

        
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login successful");
            window.location = "home.html";
        }
        catch (error){
            alert(error.message);
            console.log(error);
        };
    });
}

window.logout = function () {
    signOut(auth).then(() => {
        window.location = "index.html";
    });
};

onAuthStateChanged(auth, user => {

    const userEmail =
    document.getElementById("userEmail");

    if (userEmail && user) {
        userEmail.innerText =
        "Email: " + user.email;
    }
});