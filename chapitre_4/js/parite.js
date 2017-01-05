var nb = Number(prompt("Entrez un nombre :"));

for (var i = nb ; i < nb + 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " est pair");
    } else {
        console.log(i + " est impair");
    }
}