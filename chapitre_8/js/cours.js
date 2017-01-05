//Pour créer des modèles d'objet en JavaScript, on utilise les prototypes. En plus de ses propriétés particulières, tout objet JavaScript possède une propriété interne appelée prototype. Il s'agit d'un lien (on parle de référence) vers un autre objet.


// Création d'un objet générique
var unObjet = {
    a: 2
};

// Crée unAutreObjet avec unObjet comme prototype
var unAutreObjet = Object.create(unObjet);

console.log(unAutreObjet.a); // Affiche 2

//Si le prototype d'un objet ne possède pas une propriété recherchée, alors c'est dans son propre prototype que la recherche continue, jusqu'à arriver à la fin de chaîne des prototypes. Si la propriété n'a été trouvée dans aucun objet, son accès renvoie la valeur undefined.

var unObjet = {
    a: 2
};

// Crée unAutreObjet avec unObjet comme prototype
var unAutreObjet = Object.create(unObjet);

console.log(unAutreObjet.a); // Affiche 2

// Crée encoreUnObjet avec unAutreObjet comme prototype
var encoreUnObjet = Object.create(unAutreObjet);

console.log(encoreUnObjet.a); // Affiche 2
console.log(encoreUnObjet.b); // Affiche undefined

//Ce mode de relation entre les objets JavaScript est appelé délégation (ou héritage) : un objet délègue une partie de son fonctionnement à son prototype.