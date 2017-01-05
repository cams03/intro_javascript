// TODO : écrire la fonction calculer()

function calculer(x, operation, y) {
    var resultat;
    if (operation === "+") {
        resultat = x+y;
    } else if (operation === "-") {
        resultat = x - y;
    } else if (operation === "*") {
        resultat = x * y;
    } else {
        resultat = x / y ;
    }
return resultat;
}

console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity