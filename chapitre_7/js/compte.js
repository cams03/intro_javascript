"use strict";

var compte = {
    titulaire: "Alex",
    solde: 0,
    crediter: function (montant) {
        this.solde = this.solde + montant;
    },
    
    debiter: function (montant) {
        this.solde = this.solde - montant;
    },
    
    decrire: function () {
        var description = "Titulaire : " + this.titulaire + ", solde : " + this.solde + " euros";
        return description;
    }
};

console.log(compte.decrire());

var credit = Number(prompt("Entrez un montant à créditer :"));
compte.crediter(credit);

var debit = Number(prompt("Entrez un montant à débiter :"));
compte.debiter(debit);

console.log(compte.decrire());