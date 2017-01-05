var nombre1 = 5;
var nombre2 = 3;

// Solution utilisant d'une variable temporaire
var temp = nombre1;
nombre1 = nombre2;
nombre2 = temp;

// Ma solution

var nombre1 = nombre2;

nombre2 += 2;

console.log(nombre1); // Doit afficher 3
console.log(nombre2); // Doit afficher 5