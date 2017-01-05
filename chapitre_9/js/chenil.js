"use strict";

var Chien = {
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    
    aboyer: function () {
        var aboiement = "ouaf";
        if (this.taille < 30) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 30) {
            aboiement = "Grr ! Grr !"
        };
    return aboiement;
    },
    
    decrire: function () {
        var description = this.nom + " est un " + this.race + " mesurant " + this.taille + " cm. Il aboie : " + this.aboyer();
        return description;
    }
};

var chien1 = Object.create(Chien);
chien1.init("Crockdur", "mâtin de Naples", 75);

var chien2 = Object.create(Chien);
chien2.init("Pupuce", "bichon", 22);

var chien3 = Object.create(Chien);
chien3.init("Medor", "labrador", 58);

var chenil = [];
chenil.push(chien1);
chenil.push(chien2);
chenil.push(chien3);

console.log("Le chenil héberge " + chenil.length + " chiens :");

chenil.forEach(function (chien) {
    console.log(chien.decrire());
});