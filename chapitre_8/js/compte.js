"use strict";

// TODO : ajoutez ici la définition des objets nécessaires

var CompteBancaire = {
    
    initCB: function (titulaire, solde) {
        this.titulaire = titulaire;
        this.solde = solde;
    },
    
    crediter: function (montant) {
        this.solde = this.solde + montant;
    },
    
    debiter: function (montant) {
        this.solde = this.solde  - montant;
    },
    
     decrire: function () {
        var description = "Titulaire : " + this.titulaire + ", solde : " + this.solde + " euros";
        return description;
    }
};

var CompteEpargne = {
    
    initCE: function (titulaire, solde, interets) {
        this.titulaire = titulaire;
        this.solde = solde;
        this.interets = interets;
    },
    
    crediter: function (montant) {
        this.solde = this.solde + montant;
    },
    
    debiter: function (montant) {
        this.solde = this.solde  - montant;
    },
    
    ajouterInterets: function (interets) {
        var result = this.solde * this.interets;
        this.solde = this.solde + result; 
    },
    
     decrire: function () {
        var description = "Titulaire : " + this.titulaire + ", solde : " + this.solde + " euros";
        return description;
    }
};

/* Correction pour éviter la répétition de code:

var CompteBancaire = {
    // Initialise le compte bancaire
    initCB: function (titulaire, solde) {
        this.titulaire = titulaire;
        this.solde = solde;
    },
    // Crédite le compte d'un certain montant
    crediter: function (montant) {
        this.solde = this.solde + montant;
    },
    // Débite le compte d'un certain montant
    debiter: function (montant) {
        this.solde = this.solde - montant;
    },
    // Renvoie la description du compte
    decrire: function () {
        var description = "Titulaire : " + this.titulaire +
            ", solde : " + this.solde + " euros";
        return description;
    }
};

var CompteEpargne = Object.create(CompteBancaire);
// Initialise le compte épargne
CompteEpargne.initCE = function (titulaire, solde, interets) {
    this.initCB(titulaire, solde);
    this.interets = interets;
};
// Calcule et ajoute les intérêts au solde cu compte
CompteEpargne.ajouterInterets = function () {
    var result = this.solde * this.interets;
        this.solde = this.solde + result; 
};*/


var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);

// Calcule et ajoute les intérêts au solde du compte
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());