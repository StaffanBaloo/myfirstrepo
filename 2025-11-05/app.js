const calculateArea = (width, height) => {
    return width * height;
};

const findLargestNumber = (numbers) => {
    let largestNumber;
    for (nbr, i of numbers) {
        console.log("Nummer "+i+" är "+nbr+".")
/*         if (typeof nbr === "Number") {
            if (largestNumber == undefined) {
                largestNumber = nbr;
            } else if (nbr > largestNumber) {
                largestNumber = nbr;
            }
   */      }
    }
/*     return largestNumber; */


let area = calculateArea(5, 10);
console.log(area);

let bigNum = findLargestNumber([5, 2, 9, 1]);
console.log(bigNum);
