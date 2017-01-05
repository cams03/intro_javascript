/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

var Contacts = { 
    
    init: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    
    decrire: function () {
        var description = "Nom : " + this.nom + ", Prénom : " + this.prenom;
        return description;
    }
};

var personne1 = Object.create(Contacts);
personne1.init("Lévisse", "Carole");

var personne2 = Object.create(Contacts);
personne2.init("Nelsonne", "Mélodie");

var table = [];
table.push(personne1);
table.push(personne2);

console.log("Bienvenue dans le gestionnaire des contacts !");

var saisieMenu = 1;

while (saisieMenu !== 0) {
    
    console.log("1 : Lister les contacts \n2 : Ajouter un contact \n0 : Quitter");
    
    saisieMenu = Number(prompt("Choisissez une option", "<Entrez une option>"));
    
    if ((saisieMenu !== 0) && (saisieMenu !==1) && (saisieMenu !== 2)) {
        console.log("Avez-vous fait une erreur? Les choix possibles sont 1, 2 ou 0. Entrez de nouveau une option");
    }
        
    if (saisieMenu === 1) {
        console.log("Voici la liste de vos contacts :");
        table.forEach(function (personne) {
        console.log(personne.decrire());
        });
        
    } else if (saisieMenu === 2) {
        nom = prompt("Entrez un nom :", "<Entrez un nom>");
        prenom = prompt("Entrez un prénom :", "<Entrez un prénom>");
        var newContact = Object.create(Contacts);
        newContact.init(nom, prenom);
        table.push(newContact);
        console.log("Le nouveau contact a été ajouté");
        
    } else if (saisieMenu === 0) {
        console.log("Au revoir !");
    } 
};

