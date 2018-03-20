function clic() {
    console.log("Clic !");
}

var boutonElt = document.getElementById("bouton");
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", clic);


/*
var boutonElt = document.getElementById("bouton");
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", function () {
    console.log("clic");
});
Dans ce cas, la fonction n'est plus identifiée par un nom et ne peut plus être utilisée ailleurs dans le programme. 
Il s'agit d'une fonction anonyme. Les fonctions anonymes sont fréquemment utilisées en JavaScript.*/

// Suppression du gestionnaire pour l'événement click (uniquepement sur les fonctions non anonyme)
boutonElt.removeEventListener("click", clic);

/*Événements clavier

Appui ou relâchement d'une touche du clavier

Événements souris

Clic avec les différents boutons, appui ou relâchement d'un bouton de la souris, survol d'une zone avec la souris

Événements fenêtre

Chargement ou fermeture de la page, redimensionnement, défilement (scrolling)

Événements formulaire

Changement de cible de saisie (focus), envoi d'un formulaire.*/

// Ajout d'un gestionnaire qui affiche le type et la cible de l'événement
document.getElementById("bouton").addEventListener("click", function (e) {
    console.log("Evènement : " + e.type + 
        ", texte de la cible : " + e.target.textContent);
});
/*La plupart des propriétés de l'objetEvent dépendent du type d'événement déclenché. 
Parmi les propriétés présentes dansEvent, quel que soit le type d'événement,
typerenvoie le type ettarget renvoie la cible de l'événement, 
c'est-à-dire l'élément du DOM auquel l'événement est destiné.

Le code ci-dessous utilise l'objetEventpour afficher le type de l'événement déclenché ainsi que 
le texte de l'élément cible lors d'un clic sur le bouton de notre page web. Cet objet est fourni à la fonction 
qui gère l'événement sous la forme d'un paramètre nommé "e". 
Le choix du nom du paramètre est libre, et vous pourrez rencontrer également le nomevent.

Événements clavier

Appui ou relâchement d'une touche du clavier

Événements souris

Clic avec les différents boutons, appui ou relâchement d'un bouton de la souris, survol d'une zone avec la souris

Événements fenêtre

Chargement ou fermeture de la page, redimensionnement, défilement (scrolling)

Événements formulaire

Changement de cible de saisie (focus), envoi d'un formulaire
*/
// Gestion de l'appui sur une touche du clavier produisant un caractère
document.addEventListener("keypress", function (e) {
    console.log("Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode));
});

// Affiche des informations sur un événement clavier
function infosClavier(e) {
    console.log("Evènement clavier : " + e.type + ", touche : " + e.keyCode);
}

// Gestion de l'appui et du relâchement d'une touche du clavier
document.addEventListener("keydown", infosClavier);
document.addEventListener("keyup", infosClavier);

// Renvoie le nom du bouton souris à partir de son code
function getBoutonSouris(code) {
    var bouton = "inconnu";
    switch (code) {
    case 0: // 0 est le code du bouton gauche
        bouton = "gauche";
        break;
    case 1: // 1 est le code du bouton du milieu
        bouton = "milieu";
        break;
    case 2: // 2 est le code du bouton droit
        bouton = "droit";
        break;
    }
    return bouton;
}

// Affiche des informations sur un événement souris
function infosSouris(e) {
    console.log("Evènement souris : " + e.type + ", bouton " +
        getBoutonSouris(e.button) + ", X : " + e.clientX + ", Y : " + e.clientY);
}

// Gestion du clic souris
document.addEventListener("click", infosSouris);

// Gestion de l'appui et du relâchement d'un bouton de la souris
document.addEventListener("mousedown", infosSouris);
document.addEventListener("mouseup", infosSouris);

// Gestion de la fin du chargement de la page web
window.addEventListener("load", function () {
    console.log("Page entièrement chargée");
});

// Gestion de la fermeture de la page web
window.addEventListener("beforeunload", function (e) {
    var message = "On est bien ici !";
    e.returnValue = message; // Provoque une demande de confirmation (standard)
    return message; // Provoque une demande de confirmation (certains navigateurs)
});

// Gestion du clic sur le document
document.addEventListener("click", function () {
    console.log("Gestionnaire document");
});
// Gestion du clic sur le paragraphe
document.getElementById("para").addEventListener("click", function () {
    console.log("Gestionnaire paragraphe");
});
// Gestion du clic sur le bouton
document.getElementById("propa").addEventListener("click", function (e) {
    console.log("Gestionnaire bouton");
});

// Gestion du clic sur le bouton
document.getElementById("propa").addEventListener("click", function (e) {
    console.log("Gestionnaire bouton");
    e.stopPropagation(); // Arrêt de la propagation de l'événement
});

// Gestion du clic sur le lien interdit
document.getElementById("interdit").addEventListener("click", function (e) {
    console.log("Continuez plutôt à lire le cours ;)");
    e.preventDefault(); // Annulation de la navigation vers la cible du lien
});