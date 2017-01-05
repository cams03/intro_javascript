// Renvoie un message de bienvenue
function direBonjour(prenom, nom) {
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

// TODO : faire saisir le prénom et le nom de l'utilisateur
// TODO : appeler direBonjour() avec les bons arguments et afficher son résultat

var p = prompt("Entrez votre prenom :");
var n = prompt("Entrez votre nom :");
console.log(direBonjour(p, n));