// Modification du contenu HTML de la liste : ajout d'un langage
document.getElementById("langages").innerHTML += '<li id="c">C</li>';

/*/ Suppression du contenu HTML de la liste
//document.getElementById("langages").innerHTML = "";

L'utilisation deinnerHTMLconduit à manipuler des chaînes de caractères pour représenter des éléments HTML ainsi que leurs propriétés. 
Afin de préserver la lisibilité du code et d'éviter les erreurs, il convient de réserver son utilisation à de petites modifications.
Vous découvrirez plus loin une solution plus universelle pour ajouter des éléments au DOM. */

// Modification du contenu textuel du premier titre
document.querySelector("h1").textContent += " de programmation";

// Définition de l'attribut "id" du premier titre
document.querySelector("h1").setAttribute("id", "titre");

var titreElt = document.querySelector("h1"); // Accès au premier titre h1
titreElt.classList.remove("debut"); // Suppression de la classe "debut"
titreElt.classList.add("titre"); // Ajout de la classe "titre"
console.log(titreElt);

var pythonElt = document.createElement("li"); // Création d'un élément li
pythonElt.id = "python"; // Définition de son identifiant
pythonElt.textContent = "Python"; // Définition de son contenu textuel
document.getElementById("langages").appendChild(pythonElt); // Insertion du nouvel élément

// ou une autre méthode :

var rubyElt = document.createElement("li"); // Création d'un élément li
rubyElt.id = "ruby"; // Définition de son identifiant
rubyElt.appendChild(document.createTextNode("Ruby")); // Définition de son contenu textuel
document.getElementById("langages").appendChild(rubyElt); // Insertion du nouvel élément

var perlElt = document.createElement("li"); // Création d'un élément li
perlElt.id = "perl"; // Définition de son identifiant
perlElt.textContent = "Perl"; // Définition de son contenu textuel
// Ajout du nouvel élément avant l'identifiant identifié par "php"
document.getElementById("langages").insertBefore(perlElt, 
    document.getElementById("php"));

/* Il existe également une méthode plus récente qui permet de définir encore plus précisément la position des éléments insérés :insertAdjacentHTML. 
On l'appelle sur un élément existant et elle prend en paramètres une position et une chaîne de caractères HTML qui représente le nouveau contenu à ajouter. 
La position du nouveau contenu doit être une valeur parmi :

beforebegin: avant l'élément existant lui-même.

afterbegin: juste à l'intérieur de l'élément existant, avant son premier enfant.

beforeend: juste à l'intérieur de l'élément existant, après son dernier enfant.

afterend: après l'élément existant lui-même.
*/
// Ajout d'un élément au tout début de la liste
document.getElementById('langages').insertAdjacentHTML("afterBegin", 
    '<li id="javascript">JavaScript</li>');

var bashElt = document.createElement("li"); // Création d'un élément li
bashElt.id = "bash"; // Définition de son identifiant
bashElt.textContent = "Bash"; // Définition de son contenu textuel
// Remplacement de l'élément identifié par "perl" par le nouvel élément
document.getElementById("langages").replaceChild(bashElt, document.getElementById("perl"));

// Suppression de l'élément identifié par "bash"
document.getElementById("langages").removeChild(document.getElementById("bash"));

// Exercice du chapitre (ajouter une URL en fin de page).
var pElt = document.createElement("p");
var lienElt = document.createElement("a");
lienElt.href = "https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation";
lienElt.textContent = "liste";
pElt.appendChild(document.createTextNode("En voici une "));
pElt.appendChild(lienElt);
pElt.appendChild(document.createTextNode(" plus complète."));
document.getElementById("contenu").appendChild(pElt);

