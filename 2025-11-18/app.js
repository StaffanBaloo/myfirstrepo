//"use strict";
// --- Setup (Tema: Kamera) ---
class Camera {
    constructor(model, iso) {
        this.model = model;
        this.iso = iso;
    }

    // Vanlig metod: 'this' är flexibel
    takePicture() {
        return `Bild tagen med ${this.model}`;
    }

    // Pil-metod: 'this' är låst
    getISO = () => {
        return this.iso;
    };
}

// Skapa instanser
const camera1 = new Camera("Nikon", 100);
const camera2 = new Camera("Canon", 400);

// Ett vanligt objekt (inte en klass)
const studioLight = {
    model: "Godox",
    power: 50,

    getName() {
        // 'this' pekar på 'studioLight'
        return this.model;
    },

    getNameArrow: () => {
        // FÄLLA: 'this' pekar INTE på 'studioLight'
        return this.model;
    },
};

// En global funktion
function globalGetModel() {
    // 'this' är global/undefined
    return this.model;
}

// Återställningsvariabler
let result = null;

result = studioLight.getNameArrow();

console.log(result);

class Spelare {
    constructor(namn) {
        this.namn = namn;
        this.hp = 100;
    }

    takeDamage(amount) {
        this.hp -= amount;
    }

    getHP() {
        return this.hp;
    }
}
