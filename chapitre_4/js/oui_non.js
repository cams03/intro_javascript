var mot = prompt("Voulez vous jouer au ni oui ni non ?");

while ((mot !== "oui") && (mot !== "non")) {
    mot = prompt("Voulez vous jouer au ni oui ni non ?");
}

console.log("Vous avez perdu !");