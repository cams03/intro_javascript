"use strict";

var perso = {
    nom: "Aurora",
    sante: 150,
    force: 25,
    xp: 0,
    
     // Création d'une propriété decrire définie par une fonction qui envoie la description du personnage
    
    //Une propriété dont la valeur est une fonction est appelée une méthode. Une méthode permet de définir une action pour un objet. On dit également qu'une méthode ajoute à cet objet un comportement.
    
    //Pour appeler une méthode nomMethode sur un objet nomObjet, on utilise la syntaxe nomObjet.nomMethode().
    decrire: function () {
    
    //Un nouveau mot-clé apparaît : this. Il est défini automatiquement par JavaScript à l'intérieur d'une méthode et représente l'objet sur lequel la méthode a été appelée (ici perso)
    //La méthode decrire() ne prend plus de personnage en paramètre : elle utilise this pour accéder aux propriétés de l'objet sur lequel elle a été appelée.
        var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et " + this.xp + " points d'expérience";
        return description;
    }
};

console.log(perso.decrire());

// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

// Aurora apprend une nouvelle compétence
perso.xp = perso.xp + 15;

console.log(perso.decrire());