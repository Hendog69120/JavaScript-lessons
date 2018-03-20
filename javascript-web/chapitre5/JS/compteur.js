/*
Exercice : compter les clics
*/

function clic() {
	if (localStorage.compteurClics) {
    compteurClics++; };
    console.log(localStorage.compteurClics);
    document.getElementById("compteurClics").textContent = compteurClics;
}

var compteurClics = 0;

document.getElementById("clic").addEventListener("click", clic);

document.getElementById("desactiver").addEventListener("click", function () {
    document.getElementById("clic").removeEventListener("click", clic);
});
/*qs("#button"); //à modifier l'ensemble
if (localStorage.buttonElt) {
    localStorage.buttonElt = Number(localStorage.buttonElt) + 1;
    setTimeout(localStorage, 3000);
} else {
    localStorage.buttonElt = 1;
}
qs(".details_storage").innerHTML = "Vous avez cliquer le bouton " 
+ localStorage.buttonElt + " fois durant cette session.";*/