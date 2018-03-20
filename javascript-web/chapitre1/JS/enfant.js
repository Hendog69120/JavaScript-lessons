/*
 Exercice : afficher l'enfant d'un objet du DOM
*/

// Affiche un enfant d'un objet du DOM
// Le paramètre noeud est l'objet du DOM
// Le paramètre indice est l'indice de l'enfant à afficher
function afficherEnfant(noeud, indice) {
    // TODO : compléter la fonction

}

// Doit afficher le noeud h1
afficherEnfant(document.body, 1);
console.log(document.body.childNodes[2]);
// Doit afficher l'erreur "Indice incorrect"
// L'indice demandé est négatif
afficherEnfant(document.body, -1);
console.error("Indice incorrect");
// Doit afficher l'erreur "Indice incorrect"
// Le noeud body a moins de 9 noeuds enfants
afficherEnfant(document.body, 8);
console.error("Indice incorrect");
// Doit afficher l'erreur "Type de noeud incorrect"
// Le premier noeud enfant de body est textuel et n'a donc pas d'enfants
afficherEnfant(document.body.childNodes[0], 0);
console.error("Type de noeud incorrect");