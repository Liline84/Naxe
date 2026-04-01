document.addEventListener("DOMContentLoaded", () => {
    // 1. Animation de la machine à écrire pour le message d'accueil
    const typewriterText = "NIVEAU D'ACCRÉDITATION REQUIS. VEUILLEZ IDENTIFIER VOTRE RANG.";
    const typeTarget = document.getElementById("typewriter");
    let i = 0;

    function typeWriter() {
        if (i < typewriterText.length) {
            typeTarget.innerHTML += typewriterText.charAt(i);
            i++;
            setTimeout(typeWriter, 40); // Vitesse de frappe
        }
    }
    
    // Lancer l'animation après un petit délai
    setTimeout(typeWriter, 500);

    // 2. Gestion de l'authentification
    const authBtn = document.getElementById("auth-btn");
    const passInput = document.getElementById("pass-input");
    const errorMsg = document.getElementById("error-msg");
    const gatewayScreen = document.getElementById("auth-gateway");
    const commandCenter = document.getElementById("command-center");

    // LE MOT DE PASSE SECRET (Tu peux le changer ici)
    const SECRET_CODE = "SK7-ALPHA";

    function checkPassword() {
        const userInput = passInput.value.toUpperCase(); // Accepte majuscules et minuscules

        if (userInput === SECRET_CODE) {
            // Succès
            errorMsg.classList.add("hidden");
            
            // Effet visuel de transition
            gatewayScreen.style.opacity = "0";
            gatewayScreen.style.transition = "opacity 0.5s ease";
            
            setTimeout(() => {
                gatewayScreen.classList.add("hidden");
                commandCenter.classList.remove("hidden");
                
                // Effet d'apparition du tableau de bord
                commandCenter.style.opacity = "0";
                commandCenter.style.animation = "fadeIn 1s forwards";
            }, 500);

        } else {
            // Échec
            errorMsg.classList.remove("hidden");
            passInput.value = ""; // Vide le champ
            passInput.focus(); // Remet le curseur dedans
            
            // Petit effet de secousse (shake) sur la boite
            const box = document.querySelector(".auth-box");
            box.style.transform = "translateX(10px)";
            setTimeout(() => box.style.transform = "translateX(-10px)", 50);
            setTimeout(() => box.style.transform = "translateX(10px)", 100);
            setTimeout(() => box.style.transform = "translateX(0)", 150);
        }
    }

    // Déclencher au clic sur le bouton
    authBtn.addEventListener("click", checkPassword);

    // Déclencher en appuyant sur la touche "Entrée"
    passInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            checkPassword();
        }
    });
});
