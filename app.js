// --- CONFIGURATION ---
const PASS = "SK7-ALPHA"; // Mot de passe

// --- GESTION DE LA CONNEXION ---
function login() {
    let passInput = document.getElementById('pass').value.toUpperCase();
    
    if (passInput === PASS) {
        document.getElementById('auth').classList.add('hidden');
        document.getElementById('app').classList.remove('hidden');
        
        // Démarrage des systèmes
        startMatrix();
        startClock();
        bootAnimation();
    } else {
        document.getElementById('err').style.display = 'block';
        document.getElementById('pass').value = '';
    }
}

// Permet de valider avec la touche "Entrée"
document.getElementById('pass').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        login();
    }
});

// --- HORLOGE EN TEMPS RÉEL ---
function startClock() {
    setInterval(() => {
        document.getElementById('clock').innerText = new Date().toLocaleTimeString('fr-FR');
    }, 1000);
}

// --- ANIMATION DE DÉMARRAGE (Machine à écrire) ---
function bootAnimation() {
    let text = "INITIALISATION DU SYSTÈME...\nCONNEXION AU SERVEUR BLACKCORE...\nACCÈS AUTORISÉ. BIENVENUE AGENT.";
    let i = 0;
    let el = document.getElementById('content');
    el.innerHTML = "<h2 class='neon'>CONSOLE</h2><p id='boot-text'></p>";
    let textEl = document.getElementById('boot-text');

    function type() {
        if (i < text.length) {
            if (text[i] === '\n') {
                textEl.innerHTML += "<br><br>> ";
            } else {
                textEl.innerHTML += text[i];
            }
            i++;
            setTimeout(type, 30);
        }
    }
    textEl.innerHTML = "> ";
    type();
}

// --- NAVIGATION DANS L'INTERFACE ---
function show(type) {
    let c = document.getElementById('content');

    if (type === 'members') {
        c.innerHTML = `
        <h2>LISTE DES MEMBRES</h2>
        <ul class='list'>
            <li>Utilisateur_01 [ACTIF]</li>
            <li>Utilisateur_02 [HORS-LIGNE]</li>
            <li>Utilisateur_03 [EN MISSION]</li>
        </ul>`;
    }

    if (type === 'clans') {
        c.innerHTML = `
        <h2>RÉSEAU DES CLANS</h2>
        <ul class='list'>
            <li>Division Alpha (Section Assaut)</li>
            <li>Division Beta (Cyber-Guerre)</li>
        </ul>`;
    }

    if (type === 'stats') {
        c.innerHTML = `
        <h2>STATISTIQUES GLOBALES</h2>
        <ul class='list'>
            <li>Effectif total : 0</li>
            <li>Opérations réussies : 100%</li>
            <li>Statut Serveur : OPTIMAL</li>
        </ul>`;
    }

    if (type === 'recrutement') {
        c.innerHTML = `
        <h2>PROTOCOLE DE RECRUTEMENT</h2>
        <p>Transmettez ces liens sécurisés aux nouvelles recrues :</p>
        <div class='link-box'>
            <a href='#' target='_blank'>[ REJOINDRE LE GROUPE WHATSAPP ]</a>
            <a href='#' target='_blank'>[ REJOINDRE LE CANAL WHATSAPP ]</a>
        </div>`;
    }
}

// --- EFFET MATRIX (Pluie de code bleue) ---
function startMatrix() {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');

    // Ajustement de la taille du canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const letters = "01NAXESYSTEMX";
    const fontSize = 16;
    let columns = canvas.width / fontSize;
    const drops = [];

    // Initialisation des gouttes
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    function draw() {
        // Fond semi-transparent pour l'effet de traînée
        ctx.fillStyle = "rgba(2, 4, 15, 0.1)"; // Correspond à --bg du CSS
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#00bfff"; // Couleur bleue de NAXE
        ctx.font = fontSize + "px 'Share Tech Mono'";

        for (let i = 0; i < drops.length; i++) {
            let text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            // Réinitialisation de la goutte aléatoirement
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 50);
            }
