const PASS = "NAXE-7";

function login() {
    let music = document.getElementById('bgMusic');
    let v = document.getElementById('pass').value.toUpperCase();
    if (v === PASS) {
          // Lancement Musique + Interface
        music.play().catch(() => console.log("Audio nécessite une interaction utilisateur."));
        document.getElementById('app').classList.remove('hidden');
        document.getElementById('auth').classList.add('hidden');
        document.getElementById('app').classList.remove('hidden');
        startClock();
        startMatrix();
    } else {
        document.getElementById('err').style.display = 'block';
    }
}

function startClock() {
    setInterval(() => {
        document.getElementById('clock').innerText = new Date().toLocaleTimeString('fr-FR');
    }, 1000);
}

function show(type) {
    let c = document.getElementById('content');

    if (type === 'members') {
        c.innerHTML = `<h2><i class="fas fa-users"></i> UNITÉS ACTIVES</h2>
        <p>👤 GOD NOLA D</p>
        <p>👤 KIRA</p>
        <p>👤 THE QUEEN</p>
        <p>👤 THE REAL DEMON</p>
        <p>👤 SUKUNA</p>
        <p>👤 ITACHI</p>
        <p>👤 WEDDO </p>`;
    }

    if (type === 'clans') {
        c.innerHTML = `<h2><i class="fas fa-sitemap"></i> ALLIANCES</h2>
        <p>> SECTEUR ALPHA : OPÉRATIONNEL</p>
        <p>> SECTEUR BETA : EN ATTENTE</p>`;
    }

    if (type === 'stats') {
        c.innerHTML = `<h2><i class="fas fa-shield-alt"></i> DATA CORE</h2>
        <p>MEMBRES : 7</p>
        <p>SERVEUR : UNKNOW</p>
        <p>ENCRYPTAGE : ###-###</p>
        <p>DEV : <a href="https://whatsapp.com/channel/0029VagHuWO1iUxa0DCwBK16"style="background:blue;color:white;padding:2px 10px;border-radius:10px;text-decoration:none">Click</a></p>`;
    }

    if (type === 'recrutement') {
        c.innerHTML = `<h2><i class="fas fa-user-plus"></i> PROTOCOLE RECRUTEMENT</h2>
        <p style="margin-bottom:15px; font-size:0.8rem; opacity:0.8;">Transmettez ces liens aux recrues :</p>
        <div class="recruit-box">
            <a href="#" class="recruit-link"> <i class="fab fa-whatsapp"></i> GROUPE WHATSAPP </a>
            <a href="https://whatsapp.com/channel/0029VbCSQTPJP20ygw0K7z2I" class="recruit-link"> <i class="fab fa-whatsapp"></i> CHANNEL OFFICIEL </a>
        </div>`;
    }
}

// MATRIX EFFECT (Simplifié)
function startMatrix() {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const letters = "01";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
        ctx.fillStyle = "rgba(1, 4, 9, 0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#00bfff";
        for (let i = 0; i < drops.length; i++) {
            const text = letters.charAt(Math.floor(Math.random() * letters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }
    setInterval(draw, 50);
}
