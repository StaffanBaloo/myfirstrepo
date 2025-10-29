/* const todos = ["Jack", "Kate", "Sawyer", "Locke", "Arnst"];
const siffror = [4, 8, 15, 16, 23, 42];
const jaNej = [true, false, false, false, true];
const blandat = ["Martini", 7, true];
console.log(todos);
console.log(siffror);
console.log(jaNej);
console.log(blandat); */

/* const book = {
    author: "Jim Butcher",
    title: "Dead Beat",
    pageCount: 464,
    series: "The Dresden Files",
    haveRead: true,
};

const mememe = {
    name: "Staffan Johansson",
    town: "Lund",
    age: 49,
    phone: "0701234567",
};

const tvshow = {
    title: "Babylon 5",
    startYear: 1993,
    episodes: 111,
    episodeTitles: [
        "The Gathering",
        "Midnight on the Firing Line",
        "Soul Hunter",
        "Born to the Purple",
    ],
};

console.log(book);
console.log(mememe);
console.log(tvshow);
tvshow.episodeTitles.push("Infection");
console.log(tvshow);

const users = [
    { name: "Staffan", age: 49 },
    { name: "Ali", age: 32 },
    { name: "Olena", age: 20 },
];
console.log(users);
console.log(users[0].name); */

const products = [];
const product1 = {
    name: "Laptop",
    price: 12000,
    inStock: true,
};
const product2 = {
    name: "Bok",
    price: 119,
    inStock: false,
};

console.log("Produktlista:");
console.log(products);
console.log("Lägg till product 1:");
console.log(product1);
products.push(product1);
console.log("Ny lista:");
console.log(products);
console.log("Lägg till product 2:");
console.log(product2);
products.push(product2);
console.log("Ny lista:");
console.log(products);

for (const i of products) {
    console.log(
        `Produkt ${i + 1} är ${products[i].name} och kostar ${
            products[i].price
        } kr.`
    );
    if (products[i].inStock) {
        console.log("Den finns i lager!");
    } else {
        console.log("Den är tyvärr slut!");
    }
}
