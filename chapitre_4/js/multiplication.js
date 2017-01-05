var nombre = 0;

if ((nombre >= 2) || (nombre <= 9)) {
    nombre = Number(prompt("Entrez un nombre entre 2 et 9 :"));
} else {
    console.log("Nombre non valide");
}

console.log("Voici la table de multiplication de " + nombre);

for (var i = 1 ; i <= 10 ; i++) {
    var result = nombre * i
    console.log(nombre + " x " + i + " = " + result);
}