let age = 65;
let kategori =
    age < 13
        ? "ett barn"
        : age < 18
        ? "tonåring"
        : age < 20
        ? "tonårig vuxen"
        : age < 65
        ? "vuxen"
        : "pensionär";

if (age < 0 || isNaN(age)) {
    console.log("Ogiltig ålder!");
} else {
    console.log(`En person som är ${age} år är ${kategori}.`);
}
