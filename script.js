// Tableau de contenu
const contenu = [
    "Sans parler: Papa Wenzy", 
    "Sans parler: Aggée",
    "Sans parler: Mr Deoel",
    "Sans parler: Mr Guelord",
    "Jobabu",
    "Sans parler: Gloria",
    "Axel",
    "Gerard"
];

// Fonction pour afficher un contenu aléatoire
function afficherContenu() {
    const randomIndex = Math.floor(Math.random() * contenu.length);
    document.getElementById("question").textContent = contenu[randomIndex];
}
//premier mot
afficherContenu();

let temps = 30;
let trouver = 0;
let ok = document.getElementById("OK");
let ko = document.getElementById("KO");
let time =  document.getElementById("timer");
let reduction = Math.floor(100/temps);
let width = 100;

function reductionTemps() {
    document.getElementById('time').innerText = `${temps} Sec`;
    if (temps === 0) {
        time.style.width = 0
        ok.disabled = true;
        ko.disabled = true;
        clearInterval(timer);
        document.getElementById('trouver').innerText = "Trouver : " + trouver;
        document.getElementById('question').innerText = "";
        document.getElementById('recommencer').hidden = false;
    } else {
        temps--;
        time.style.width = `${width -= reduction}%`;
    }
}

ok.addEventListener("click", function() {
    afficherContenu();
    trouver++;
});

ko.addEventListener("click", function() {
    afficherContenu();
});

let timer = setInterval(reductionTemps, 1000);
