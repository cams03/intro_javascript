for (var nombre = 1 ; nombre <= 100; nombre++) {

    if ((nombre % 5 === 0) && (nombre % 3 === 0)) {
        console.log("Fizzbuzz");
    } else if (nombre % 5 === 0) {
        console.log("Buzz");
    } else if (nombre % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(nombre);
    }
}