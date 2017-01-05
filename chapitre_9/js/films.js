var Films = {
    init: function (titre, sortie, realisateur) {
    this.titre = titre;
    this.sortie = sortie;
    this.realisateur = realisateur;
    },
    
    decrire: function () {
        var description = this.titre + " (" + this.sortie + ", " + this.realisateur + ")";
        return description;
    }
};

film1 = Object.create(Films);
film1.init("Vaiana", 2016, "Disney");

film2 = Object.create(Films);
film2.init("Harry Potter", 2015, "Rowling");

film3 = Object.create(Films);
film3.init("Star Wars", 1970, "Lucas");

var table = [film1, film2, film3];


table.forEach(function (film) {
    console.log(film.decrire());
});
