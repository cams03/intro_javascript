var jour = prompt("Entrez un jour :");

switch (jour) {
case "lundi":
    console.log("Demain nous serons " + jour);
    break;
case "mardi":
    console.log("Demain nous serons " + jour);
    break;
case "mercredi":
    console.log("Demain nous serons " + jour);
    break;
case "jeudi":
    console.log("Demain nous serons " + jour);
    break;
case "vendredi":
    console.log("Demain nous serons " + jour);
    break;
case "samedi":
    console.log("Demain nous serons " + jour);
    break;
case "dimanche":
    console.log("Demain nous serons " + jour);
    break;
default:
    console.log("Ce jour n'existe pas !");
    
}

// Solution avec un if
if (jour === "lundi") {
    console.log("Demain, nous serons mardi");
} else if (jour === "mardi") {
    console.log("Demain, nous serons mercredi");
} else if (jour === "mercredi") {
    console.log("Demain, nous serons jeudi");
} else if (jour === "jeudi") {
    console.log("Demain, nous serons vendredi");
} else if (jour === "vendredi") {
    console.log("Demain, nous serons samedi");
} else if (jour === "samedi") {
    console.log("Demain, nous serons dimanche");
} else if (jour === "dimanche") {
    console.log("Demain, nous serons lundi");
} else {
    console.log("Jour non reconnu !");
}