var moyenne = Number(prompt("Entrez votre moyenne :"));

if (moyenne < 10) {
        console.log("Vous êtes recalé !");
} else if ((moyenne > 10) && (moyenne < 12)) {
        console.log("Vous êtes reçu(e) !");
} else if (moyenne >= 12) {
        console.log("Vous êtes reçu(e) avec mention !!");
} else {
        console.log("Cette moyenne est fausse");
}