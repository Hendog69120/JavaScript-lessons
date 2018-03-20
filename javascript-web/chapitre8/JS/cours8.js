/*/ Création d'une requête HTTP
var req = new XMLHttpRequest();
// La requête est asynchrone lorsque le 3ème paramètre vaut true ou est absent
req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt");
// Gestion de l'événement indiquant la fin de la requête
req.addEventListener("load", function () {
    // Affiche la réponse reçue pour la requête
    console.log(req.responseText);
});
req.send(null);*/


/*function afficher(reponse) {
    console.log(reponse);
}

ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", afficher);

               ou              */
ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", function (reponse) {
    console.log(reponse);
});

var avions = [
    {
        marque: "Airbus",
        couleur: "A320"
    },
    {
        marque: "Airbus",
        couleur: "A380"
    }
];
console.log(avions);
// Transforme le tableau d'objets JS en chaîne de caractères JSON
var texteAvions = JSON.stringify(avions);
console.log(texteAvions);
// Transforme la chaîne de caractères JSON en tableaux d'objets JavaScript
console.log(JSON.parse(texteAvions));

ajaxGet("http://localhost/javascript-web-srv/data/films.json", function (reponse) {
    // Transforme la réponse en tableau d'objets JavaScript
    var films = JSON.parse(reponse);
    // Affiche le titre de chaque film
    films.forEach(function (film) {
        console.log(film.titre);
    })
});

/*
Exercice : Remplir la liste avec le contenu du fichier langages.txt
*/

ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", function (reponse) {
    // Séparation du texte pour obtenir un tableau contenant les langages
    var langages = reponse.split(";");
    var listeElt = document.getElementById("langages");
    // Ajout de chaque langage dans la liste
    langages.forEach(function (langage) {
        var langageElt = document.createElement("li");
        langageElt.textContent = langage;
        listeElt.appendChild(langageElt);
    });
});