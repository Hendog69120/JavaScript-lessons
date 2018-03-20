var pElt = document.querySelector("p");
pElt.style.color = "red";
pElt.style.margin = "50px";
//Pour utiliser des propriété CSS en JS il faut supprimer les tirets.(Normes CamelCase)
pElt.style.fontFamily = "Arial";
pElt.style.backgroundColor = "black";

var paragraphesElts = document.getElementsByTagName("p");
console.log(paragraphesElts[0].style.color); // Affiche "red"
console.log(paragraphesElts[1].style.color); // Affiche "green"
console.log(paragraphesElts[2].style.color); // N'affiche rien

var stylePara = getComputedStyle(document.getElementById("para"));
console.log(stylePara.fontStyle); // Affiche "italic"
console.log(stylePara.color); // Affiche la couleur bleue en valeurs RGB

/*La propriété JavaScript style représente l'attribut style d'un élément du DOM. 
Elle permet de modifier le style de cet élément en définissant la valeur de ses propriétés CSS.

Les propriétés CSS composées s'écrivent avec la norme camelCase en JavaScript. 
Par exemple, font-family devient fontFamily .

La propriété JavaScript style est insuffisante pour accéder au style d'un élément. 
Pour cela, on utilise la fonction getComputedStyle.*/


