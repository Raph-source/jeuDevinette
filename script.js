// Tableau de contenu
const contenu = [
    "Sans parler: Papa Wenzy", 
    "Sans parler: Aggée",
    "Sans parler: Mr Deoel",
    "Sans parler: Mr Guelord",
    "Jobabu",
    "Gloria",
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

let temps = 10;
let trouver = 0;
let ok = document.getElementById("OK");
let ko = document.getElementById("KO");

function reductionTemps() {
    document.getElementById('time').innerText = temps;
    if (temps === 0) {
        ok.disabled = true;
        ko.disabled = true;
        clearInterval(timer);
        document.getElementById('trouver').innerText = "Trouver : " + trouver;
    } else {
        temps--;
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
