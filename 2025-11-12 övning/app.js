// --- Setup (Ny: Klasser & Objekt) ---
class Player {
    // Körs när 'new Player(...)' anropas
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    // Vanlig metod (this = instansen)
    levelUp() {
        this.level++;
        return this.level;
    }

    // Pilfunktion (this = låst till instansen)
    getNameArrow = () => {
        return this.name;
    };
}

// Skapa instanser av klassen
const p1 = new Player("Kira", 10);
const p2 = new Player("Rax", 20);

// Ett vanligt objekt med metoder
const server = {
    id: 1,
    name: "Server_A",

    // Vanlig metod (this = server)
    getStatus() {
        return `Server ${this.id} is OK`;
    },

    // Pilfunktion (this = global/undefined)
    getStatusArrow: () => {
        return `Server ${this.id} is OK`;
    },
};

// Globala funktioner
function getGlobalName() {
    // this = global/undefined
    return this.name;
}

const getArrowName = () => {
    // this = global/undefined
    return this.name;
};
let result = "";

/* const fn1 = p1.levelUp;
result = fn1(); */

const fn2 = p1.getNameArrow;
result = fn2();
console.log(result);
