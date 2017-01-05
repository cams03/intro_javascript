var mousquetaires = ["Athos", "Portos", "Aramis"];

console.log("Voici les 3 mousquetaires :");
            
for (var i = 0; i < mousquetaires.length; i++) {
    console.log(mousquetaires[i]);
};

mousquetaires.push("D'Artagnan");

console.log("A présent ils sont 4 !");

mousquetaires.forEach(function (mousquetaire) {
    console.log(mousquetaire);
});