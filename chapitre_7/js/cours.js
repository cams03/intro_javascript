var stylo = { // création d'objet via une variable
    type: "bille",
    couleur: "bleu",
    marque: "Bic"
};

// création d'un objet via un Constructeur MonObjet
function MonObjet() {
    // Initialisation de l'objet
    // ...
}
// Instanciation d'un objet à partir du constructeur
var monObj = new MonObjet();

// Pour accéder aux propriétés d'un objet
console.log(stylo.type); // Affiche "bille"
console.log(stylo.couleur); // Affiche "bleu"
console.log(stylo.marque); // Affiche "Bic"

// Autre syntaxe pour accéder aux propriétés d'un objet
console.log(stylo['type']); // Affiche "bille"
console.log(stylo['couleur']); // Affiche "bleu"
console.log(stylo['marque']); // Affiche "Bic"

//Comment afficher les caractéristiques d'un objet en une seule ligne
console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

//Une fois un objet créé, on peut modifier les valeurs de ses propriétés avec la syntaxe monObjet.maPropriete = nouvelleValeur
var stylo = {
    type: "bille",
    couleur: "bleu",
    marque: "Bic"
};

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur); // affiche "écrit en bleu"

stylo.couleur = "rouge"; // Modifie la couleur de l'encre du stylo

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur); // affiche "écrit en rouge"

//JavaScript offre même la possibilité d'ajouter dynamiquement de nouvelles propriétés à un objet déjà créé.
var stylo = {
    type: "bille",
    couleur: "bleu",
    marque: "Bic"
};

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

stylo.prix = 2.5; // Ajout de la propriété prix à l'objet stylo

console.log("Il coûte " + stylo.prix + " euros");
