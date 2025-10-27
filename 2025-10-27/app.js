let age = 2;
/* let kategori =
    age < 13
        ? "ett barn"
        : age < 18
        ? "tonåring"
        : age < 20
        ? "tonårig vuxen"
        : age < 65
        ? "vuxen"
        : "pensionär";
 */
/* if (age < 0 || isNaN(age)) {
    console.log("Ogiltig ålder!");
} else {
    console.log(`En person som är ${age} år är ${kategori}.`);
} */
if (age < 0 || isNaN(age)) {
    console.log("Ogiltig ålder!");
} else if (age < 13) {
    console.log(`En person som är ${age} år är ett barn.`);
} else if (age < 18) {
    console.log(`En person som är ${age} år är en tonåring.`);
} else if (age < 20) {
    console.log(`En person som är ${age} år är en tonårig vuxen.`);
} else if (age < 65) {
    console.log(`En person som är ${age} år är vuxen.`);
} else {
    console.log(`En person som är ${age} år är pensionär.`);
}
