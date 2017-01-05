// Renvoie le carré d'un nombre
function carre(x) {
  // TODO : compléter le code de la fonction
    var result = x * x;
    return result;
        
}

console.log(carre(0)); // Doit afficher 0
console.log(carre(2)); // Doit afficher 4
console.log(carre(5)); // Doit afficher 25

for (var i=0 ; i <= 10; i++) {
    console.log(carre(i));
};