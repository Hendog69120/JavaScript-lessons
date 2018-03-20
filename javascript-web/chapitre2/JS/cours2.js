window.qs = function (selecteur) {
	return document.querySelector(selecteur);
}
window.qsa = function (selecteur) {
	return document.querySelectorAll(selecteur);
}

var titresElts = qsa("h2"); // Tous les titres h2
console.log(titresElts[0]); // Affiche le premier titre h2
console.log(titresElts.length); // Affiche 3

/*
Le nom de la variable titresElts stockant la liste des titres se termine par Elts, abréviation de "éléments". 
Cela permet d'indiquer que le contenu de cette variable correspond à des éléments du DOM, et non à de simples valeurs. 
Il s'agit d'une bonne pratique que nous allons adopter pour toute la suite de ce cours. 
Une variable stockant un seul élément du DOM sera suffixée par Elt, abréviation de "élément".
*/

// Tous les éléments ayant la classe "merveilles"
var merveillesElts = document.getElementsByClassName("merveilles");
for (var i = 0; i < merveillesElts.length; i++) {
    console.log(merveillesElts[i]);
}

// Elément portant l'identifiant "nouvelles"
console.log(qs("#nouvelles"));

/*
Contrairement aux deux précédentes, la méthode getElementById ne contient pas de "s" après le mot "Element". 
Attention aux étourderies ! N'hésitez pas à utiliser l'autocomplétion de Brackets pour éviter les erreurs.
*/

// Tous les éléments fils de l'élément d'identifiant "antiques" ayant la classe "existe"
console.log(document.getElementById("antiques").getElementsByClassName("existe").length); // Affiche 1
/*
Cependant, cette syntaxe est un peu lourde et sujette aux erreurs. 

Pour faciliter la sélection d'éléments suivant des critères complexes, le DOM s'est enrichi de deux nouvelles méthodes. 
La première, nommée querySelectorAll, permet de rechercher des éléments à partir d'un sélecteur CSS. 
+++++++++++++++++++++++++++++++*/

// Tous les paragraphes
console.log(document.querySelectorAll("p").length); // Affiche 3

// Tous les paragraphes à l'intérieur de l'élément identifié par "contenu"
console.log(document.querySelectorAll("#contenu p").length); // Affiche 2

// Tous les éléments ayant la classe "existe"
console.log(document.querySelectorAll(".existe").length); // Affiche 8

// Tous les éléments fils de l'élément identifié par "antiques" ayant la classe "existe"
console.log(document.querySelectorAll("#antiques > .existe").length); // Affiche 1

// Le premier paragraphe (donc uniquement le premier élement correspondant au sélecteur passé en paramètre)
console.log(document.querySelector("p"));

// Le contenu HTML de l'élément identifié par "contenu"
console.log(document.getElementById("contenu").innerHTML);
/*Cette propriété a été introduite par Microsoft et ne fait pas partie de la spécification DOM du W3C, 
mais elle est maintenant prise en charge par tous les principaux navigateurs.*/

// Le contenu textuel de l'élément identifié par "contenu"
console.log(document.getElementById("contenu").textContent);

// L'attribut href du premier lien
console.log(document.querySelector("a").getAttribute("href"));

/*Certains attributs sont directement accessibles sous la forme de propriétés. C'est notamment le cas pour les attributs id, href et value.*/
// L'identifiant de la première liste
console.log(document.querySelector("ul").id);
// L'attribut href du premier lien
console.log(document.querySelector("a").href);

/*On peut vérifier la présence d'un attribut sur un élément grâce à la méthode hasAttribute, comme dans l'exemple ci-après.*/
if (document.querySelector("a").hasAttribute("target")) {
    console.log("Le premier lien possède l'attribut target");
} else {
    console.log("Le premier lien ne possède pas l'attribut target");
}

// Liste des classes de l'élément identifié par "antiques"
var classes = document.getElementById("antiques").classList;
console.log(classes.length); // Affiche 1 : l'élément possède une seule classe
console.log(classes[0]); // Affiche "merveilles"

/*Vous avez aussi la possibilité de tester la présence d'une classe dans un élément en appelant la méthode contains sur la liste des classes.*/
if (document.getElementById("antiques").classList.contains("merveille")) {
    console.log("L'élément identifié par antiques possède la classe merveille");
} else {
    console.log("L'élément identifié par antiques ne possède pas la classe merveille");
}

/*
Plusieurs

Par balise

getElementsByTagName
+++++
Plusieurs

Par classe

getElementsByClassName
++++++++
Plusieurs

Autre que par balise ou par classe

querySelectorAll
++++++
Un seul

Par identifiant

getElementById

++++++
Un seul (le premier)

Autre que par identifiant

querySelector
*/

