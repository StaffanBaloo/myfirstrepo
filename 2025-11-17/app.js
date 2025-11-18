//"use strict";
// --- Setup (Nytt tema: Skola) ---
class Student {
    constructor(namn, major) {
        this.namn = namn;
        this.major = major;
        this.courses = [];
    }

    // Metod som läser 'this'
    getMajor() {
        return this.major;
    }

    getMajorArrow = () => {
        return this.major;
    };
    // Metod som ändrar 'this'
    addCourse(courseName) {
        this.courses.push(courseName);
        // Returnerar inget
    }
}

// Skapa instanser
const student1 = new Student("Anna", "IT");
const student2 = new Student("Björn", "Ekonomi");

// En array av instanser
const allStudents = [student1, student2];

// Ett vanligt objekt (inte en klass)
const school = {
    name: "Dataskolan",
    staff: ["Erik", "Stina"],

    getName() {
        // 'this' pekar på 'school'
        return this.namn;
    },

    getNameArrow: () => {
        // FÄLLA: 'this' pekar INTE på 'school'
        return this.namn;
    },
};

// Återställningsvariabler
let result = null;
let count = 0;

const fn = student1.getMajorArrow;
console.log(fn);
