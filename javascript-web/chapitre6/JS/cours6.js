var pseudoElt = document.getElementById("pseudo");
pseudoElt.value = "MonPseudo";

// Affichage d'un message contextuel pour la saisie du pseudo
pseudoElt.addEventListener("focus", function () {
    document.getElementById("aidePseudo").textContent = "Entrez votre pseudo";
});
// Suppression du message contextuel pour la saisie du pseudo
pseudoElt.addEventListener("blur", function (e) {
    document.getElementById("aidePseudo").textContent = "";
});

// Focus sur la zone de saisie du pseudo
pseudoElt.focus();

// Affichage de la demande de confirmation d'inscription
document.getElementById("confirmation").addEventListener("change", function (e) {
    console.log("Demande de confirmation : " + e.target.checked);
});

// Affichage du type d'abonnement choisi
var aboElts = document.getElementsByName("abonnement");
for (var i = 0; i < aboElts.length; i++) {
    aboElts[i].addEventListener("change", function (e) {
        console.log("Formule d'abonnement choisie : " + e.target.value);
    });
}

// Affichage du code de nationalité choisi
document.getElementById("nationalite").addEventListener("change", function (e) {
    console.log("Code de nationalité : " + e.target.value);
});

var form = document.querySelector("form");
console.log("Nombre de champs de saisie : " + form.elements.length); // Affiche 10
console.log(form.elements[0].name); // Affiche "pseudo"
console.log(form.elements.mdp.type); // Affiche "password"

// Affiche de toutes les données saisies ou choisies
form.addEventListener("submit", function (e) {
    var pseudo = form.elements.pseudo.value;
    var mdp = form.elements.mdp.value;
    var courriel = form.elements.courriel.value;
    console.log("Vous avez choisi le pseudo " + pseudo + ", le mot de passe " +
        mdp + " et le courriel " + courriel);
    if (form.elements.confirmation.checked) {
        console.log("Vous avez demandé une confirmation d'inscription par courriel");
    } else {
        console.log("Vous n'avez pas demandé de confirmation d'inscription par courriel");
    }
    switch (form.elements.abonnement.value) {
    case "abonewspromo":
        console.log("Vous êtes abonné(e) à la newsletter et aux promotions");
        break;
    case "abonews":
        console.log("Vous êtes abonné(e) à la newsletter");
        break;
    case "aborien":
        console.log("Vous n'êtes abonné(e) à rien");
        break;
    default:
        console.log("Erreur : code d'abonnement non reconnu");
    }
    switch (form.elements.nationalite.value) {
    case "FR":
        console.log("Vous êtes français(e)");
        break;
    case "BE":
        console.log("Vous êtes belge");
        break;
    case "SUI":
        console.log("Vous êtes suisse");
        break;
    default:
        console.log("Erreur : code de nationalité non reconnu");
    }
    e.preventDefault(); // Annulation de l'envoi des données
});

// Vérification de la longueur du mot de passe saisi
document.getElementById("mdp").addEventListener("input", function (e) {
    var mdp = e.target.value; // Valeur saisie dans le champ mdp
    var longueurMdp = "faible";
    var couleurMsg = "red"; // Longueur faible => couleur rouge
    if (mdp.length >= 8) {
        longueurMdp = "suffisante";
        couleurMsg = "green"; // Longueur suffisante => couleur verte
    } else if (mdp.length >= 4) {
        longueurMdp = "moyenne";
        couleurMsg = "orange"; // Longueur moyenne => couleur orange
    }
    var aideMdpElt = document.getElementById("aideMdp");
    aideMdpElt.textContent = "Longueur : " + longueurMdp; // Texte de l'aide
    aideMdpElt.style.color = couleurMsg; // Couleur du texte de l'aide
});

// Contrôle du courriel en fin de saisie
document.getElementById("courriel").addEventListener("blur", function (e) {
    // Correspond à une chaîne de la forme xxx@yyy.zzz
    var regexCourriel = /.+@.+\..+/;
    var validiteCourriel = "";
    if (!regexCourriel.test(e.target.value)) {
        validiteCourriel = "Adresse invalide";
    }
    document.getElementById("aideCourriel").textContent = validiteCourriel;
});

/*
abc

La chaîne contient "abc"

abc, abcdef, 123abc456 test()===true

abdc, 1bca, adbc, ABC  test()===false
+++++

[abc]

La chaîne contient soit "a", soit "b", soit "c"

abc, daef, bbb, 12c34 test()===true

def, xyz, 123456, BBB test()===false
+++++

[a-z]

La chaîne contient n'importe quelle lettre minuscule de l'alphabet

abc, 12f43, _r_  test()===true

123, ABC, _-_ test()===false
+++++++

[0-9] ou \d

La chaîne contient un chiffre

123, ab4c, a56 test()===true

abc test()===false
+++++++

a.c

La chaîne contient "a" suivi d'un caractère (n'importe lequel) suivi de "c"

abc, acc, 12a.c34 test()===true

ac, abbc, ABC test()===false
+++++++

a\.c

La chaîne contient "a.c"

a.c, a.cdef, 12a.c34 test()===true

ac, abc test()===false
+++++++

a.+c

La chaîne contient "a" suivi d'un ou plusieurs caractères (n'importe lesquels) suivi de "c"

abc, abbc, 12a$ùc34 test()===true

ac, bbc test()===false
+++++++

a.*c

La chaîne contient "a" suivi de zéro ou plusieurs caractères (n'importe lesquels) suivi de "c"

abc, abbc, ac test()===true

ABC, bbc test()===false