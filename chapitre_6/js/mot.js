"use strict";

function compterNbVoyelles(mot) {
    
    let nbVoyelles = 0;
    
    for (let i=0 ; i < mot.length ; i++) { // La boucle s'effectue autant de fois qu'il y a de lettres dans le mot saisi grâce a i<mot.length
        let lettre = mot[i].toLowerCase(); // La lettre correspondant à l'index du mot saisi sera convertie en minuscule
        
        if ((lettre === a) || (lettre === e) || (lettre === i) || (lettre === o) || (lettre === u) || (lettre === y)) {
            nbVoyelles++; // On incrémente pour passer à la lettre suivante lorsque le prochain tour de boucle va s'effectuer
        }
    }
return nbVoyelles;
}

function inverser(mot) {
    
    let motInverse = "";
    
    for (let i =0; i < mot.length ; i++) {
        motInverse = mot[i] + motInverse;
    }
 return motInverse;
}

let saisie = prompt("Saisissez un mot :"); 

let longueurMot = saisie.length;

console.log("Le mot " + saisie + " contient " + longueurMot + " caractères");
console.log("Il s'écrit en minuscules " + saisie.toLowerCase());
console.log("Il s'écrit en majuscules " + saisie.toUpperCase());

let nbVoyelles = compterNbVoyelles(saisie);
console.log(saisie + " contient " + nbVoyelles + " voyelles et " + (longueurMot - nbVoyelles) + " consonnes");

let motInverse = inverser(saisie);
console.log("Il s'écrit à l'envers " + inverser(saisie));


 if (newWord.toLowerCase() === saisie.toLowerCase()) {
        console.log("C'est un palindrome !")
    } else {
        console.log("Ce n'est pas un palindrome !");
    }
