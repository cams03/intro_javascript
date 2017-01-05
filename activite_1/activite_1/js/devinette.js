/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var saisie = Number(prompt("Entrez un nombre entre 1 et 100 :"));

for (var i=1 ; i <= 6 ; i++) {
    
    if  (saisie < solution) {
        console.log(saisie + " est trop petit");
        saisie = Number(prompt("Entrez un nombre entre 1 et 100 :"));
        
    } else if (saisie > solution) {
        console.log(saisie + " est trop grand");
        saisie = Number(prompt("Entrez un nombre entre 1 et 100 :"));
        
    } else {
        console.log("Vous avez deviné ! La solution était " + solution);
        console.log("Vous avez trouvé en 6 essais");
    }
};



