var valeurs = [11, 3, 7, 2, 9, 10];

var max = 0;

for (var i=0; i < valeurs.length; i++) {
    max = Math.max(valeurs[i]);
};

console.log("Le maximum des éléments vaut " + max);

// Autre méthode

var valeurs = [11, 3, 7, 2, 9, 10];

var max = valeurs[0];
// L'indice commence à 1 puisque le maximum est initialisé avec la 1ère valeur du tableau
for (var i = 1; i < valeurs.length; i++) {
    if (valeurs[i] > max) {
        max = valeurs[i];
    }
}
console.log("Le maximum des éléments vaut " + max);