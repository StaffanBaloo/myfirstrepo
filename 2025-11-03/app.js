//Baklänges-loop
for (let i = 10; i > 0; i--) {
    console.log(i);
}

//Summera tal
let summa = 0;
const even = [2, 4, 6, 8, 10];
for (const element of even) {
    summa += element;
}
console.log(summa);

// Nästlade loopar
//Yttre varv
for (let i = 1; i <= 5; i++) {
    let stars = ""; // Initialiserar stars för varje varv
    // Inre varv
    for (let j = 1; j <= i; j++) {
        stars += "*"; // Lägg till en * till stars
    }
    console.log(stars); // Skriv ut stars
}

/* const person = {
    name: "Alice",
    age: 30,
    city: "Malmö",
};
for (const key in person) {
    console.log("nyckel " + key + " ---> värde " + person[key]);
} */
