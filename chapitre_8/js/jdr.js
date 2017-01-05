"use strict";

/*var Personnage = {
    nom: "",
    sante: 0,
    force: 0,
    xp: 0,

    // Renvoie la description du personnage
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie, " +
            this.force + " en force et " + this.xp + " points d'expérience";
        return description;
    }
};

var perso1 = Object.create(Personnage);
perso1.nom = "Aurora";
perso1.sante = 150;
perso1.force = 25;

var perso2 = Object.create(Personnage);
perso2.nom = "Glacius";
perso2.sante = 130;
perso2.force = 35;

console.log(perso1.decrire());
console.log(perso2.decrire());

//On peut noter que le processus de création d'un personnage est un peu répétitif : pour chaque personnage, il faut successivement donner une valeur à chacune de ses propriétés. On peut faire mieux en créant une fonction d'initialisation dans l'objet Personnage.

var Personnage = {
    // Initialise le personnage
    init: function (nom, sante, force) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.xp = 0;
    },

    // Renvoie la description du personnage
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie, " +
            this.force + " en force et " + this.xp + " points d'expérience";
        return description;
    }
};

var perso1 = Object.create(Personnage);
perso1.init("Aurora", 150, 25);

var perso2 = Object.create(Personnage);
perso2.init("Glacius", 130, 30);

console.log(perso1.decrire());
console.log(perso2.decrire());*/

//Tout comme un joueur,  un adversaire simulé par l'ordinateur aura un nom, des points de vie et de force. En revanche, un ennemi ne gagnera pas de points d'expérience, mais possèdera deux caractéristiques particulières : sa race et le nombre de points d'expérience gagnés lorsqu'il sera tué par un joueur.

//Joueurs et adversaires sont donc tous deux des personnages, avec des points communs et des spécificités qui les distinguent. Notre nouvelle modélisation objet reflète cette distinction.

/*var Personnage = {
    // Initialise le personnage
    initPerso: function (nom, sante, force) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
    }
};

var Joueur = Object.create(Personnage); // Création du joueur avec Personnage comme prototype
// Initialise le joueur
Joueur.initJoueur = function (nom, sante, force) {
    this.initPerso(nom, sante, force); // On fait appel à initPerso() pour définir les propriétés communes
    this.xp = 0; // L'expérience du joueur est toujours initialisée à 0
};
// Renvoie la description du joueur
Joueur.decrire = function () {
    var description = this.nom + " a " + this.sante + " points de vie, " +
        this.force + " en force et " + this.xp + " points d'expérience";
    return description;
};

var Adversaire = Object.create(Personnage);
// Initialise l'adversaire
Adversaire.initAdversaire = function (nom, sante, force, race, valeur) {
    this.initPerso(nom, sante, force);
    this.race = race; // on rajoute 2 propriétés propres à adversaire qe le joueur n'a pas
    this.valeur = valeur;
};

// Une fois ces objets modèles définis, nous pouvons les utiliser pour créer nos personnages : les joueurs Aurora et Glacius (avecJoueur comme prototype), ainsi que le vilain monstre ZogZog (avecAdversaire comme prototype).

// ...

var joueur1 = Object.create(Joueur);
joueur1.initJoueur("Aurora", 150, 25);

var joueur2 = Object.create(Joueur);
joueur2.initJoueur("Glacius", 130, 30);

console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros :");
console.log(joueur1.decrire());
console.log(joueur2.decrire());

var monstre = Object.create(Adversaire);
monstre.initAdversaire("ZogZog", 40, 20, "orc", 10);

console.log("Un affreux monstre arrive : c'est un " + monstre.race + " nommé " + monstre.nom);*/

//Voici comment nous allons introduire les combats dans notre jeu. Un joueur peut attaquer un adversaire, mais l'inverse est aussi vrai. Un personnage attaqué voit ses points de vie diminués de la valeur de force de l'attaquant. Si ce nombre de points de vie tombe à zéro, alors le personnage meurt. Si son vainqueur est un joueur, il reçoit un nombre de points d'expérience égal à la valeur de l'adversaire tué.

//On peut donc considérer que l'attaque est une capacité commune aux joueurs et aux adversaires, avec une particularité (le gain d'expérience en cas de victoire) spécifique aux joueurs. Voici la modélisation objet associée.

var Personnage = {
    // Initialise le personnage
    initPerso: function (nom, sante, force) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.inventaire = {
        or: 10,
        cles: 1
        };
    },
    // Attaque un personnage cible
    attaquer: function (cible) {
        if (this.sante > 0) {
            var degats = this.force;
            console.log(this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de dégâts");
            cible.sante = cible.sante - degats;
            if (cible.sante > 0) {
                console.log(cible.nom + " a encore " + cible.sante + " points de vie");
            } else {
                cible.sante = 0;
                console.log(cible.nom + " est mort !");
            }
        } else {
            console.log(this.nom + " ne peut pas attaquer : il est mort...");
        }
    }
};

var Joueur = Object.create(Personnage);
// Initialise le joueur
Joueur.initJoueur = function (nom, sante, force) {
    this.initPerso(nom, sante, force);
    this.xp = 0;
};

// Renvoie la description du joueur
Joueur.decrire = function () {
    var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et " + this.xp + " points d'expérience, " + this.inventaire.or + " d'or et " + this.inventaire.cles + " clé.";
    return description;
};
// Combat un adversaire
Joueur.combattre = function (adversaire) {
    this.attaquer(adversaire);
    if (adversaire.sante === 0) {
        console.log(this.nom + " a tué " + adversaire.nom + " et gagne " + adversaire.valeur + " points d'expérience, " + adversaire.inventaire.or + " pièces d'or et " + adversaire.inventaire.cles + " clé.");
        this.xp += adversaire.valeur;
        this.inventaire.or += adversaire.inventaire.or;
        this.inventaire.cles += adversaire.inventaire.cles;
    }
};

var Adversaire = Object.create(Personnage);
// Initialise l'adversaire
Adversaire.initAdversaire = function (nom, sante, force, race, valeur) {
    this.initPerso(nom, sante, force);
    this.race = race;
    this.valeur = valeur;
};

// L'objet Personnage possède une nouvelle méthode attaquer() qui gère l'attaque d'une cible ainsi que les cas particuliers associés (mort de la cible ou attaquant déjà mort). L'objet Joueur gagne une méthode combattre() qui fait appel par délégation à la méthode attaquer() de Personnage et gère le gain d'expérience si l'adversaire meurt durant l'attaque. L'objet Adversaire n'est pas modifié, mais peut malgré tout attaquer un jouer grâce à la méthode attaquer() de Personnage, dont il bénéficie par délégation.

// Il ne nous reste plus qu'à utiliser ces objets pour mettre en scène un combat sans merci entre les joueurs et le monstre.

// ...

var joueur1 = Object.create(Joueur);
joueur1.initJoueur("Aurora", 150, 25);

var joueur2 = Object.create(Joueur);
joueur2.initJoueur("Glacius", 130, 30);

console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros :");
console.log(joueur1.decrire());
console.log(joueur2.decrire());

var monstre = Object.create(Adversaire);
monstre.initAdversaire("ZogZog", 40, 20, "orc", 10);

console.log("Un affreux monstre arrive : c'est un " + monstre.race + " nommé " + monstre.nom);

monstre.attaquer(joueur1);
monstre.attaquer(joueur2);

joueur1.combattre(monstre);
joueur2.combattre(monstre);

console.log(joueur1.decrire());
console.log(joueur2.decrire());