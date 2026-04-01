const PASS="SK7-ALPHA";

function login(){
    let v=document.getElementById('pass').value;
    if(v===PASS){
        document.getElementById('auth').classList.add('hidden');
        document.getElementById('app').classList.remove('hidden');
    }else{
        document.getElementById('err').style.display='block';
    }
}

function show(type){
    let c=document.getElementById('content');

    if(type==='members'){
        c.innerHTML=`
        <h2>Liste Membres</h2>
        <ul class='list'>
            <li>Membre 1</li>
            <li>Membre 2</li>
            <li>Membre 3</li>
        </ul>`;
    }

    if(type==='clans'){
        c.innerHTML=`
        <h2>Liste Clans</h2>
        <ul class='list'>
            <li>Clan Alpha</li>
            <li>Clan Beta</li>
        </ul>`;
    }

    if(type==='stats'){
        c.innerHTML=`
        <h2>Statistiques</h2>
        <p>Total membres: 0</p>`;
    }

    if(type==='recrutement'){
        c.innerHTML=`
        <h2>Recrutement</h2>
        <div class='link-box'>
            <a href='#'>Groupe WhatsApp</a>
            <a href='#'>Channel WhatsApp</a>
        </div>`;
    }
}
