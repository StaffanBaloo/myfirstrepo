const calculateArea = (width, height) => {
    return width * height;
};

const findLargestNumber = (numbers) => {
    // Skapa en largestNumber-variabel som är undefined.
    let largestNumber;
    //Gå genom arrayen numbers.
    for (const nbr of numbers) {
        //Kolla till att börja med att nbr faktiskt är ett tal.
        if (typeof nbr === "number") {
            if (largestNumber === undefined) {
                //Om largestNumber är undefined (alltså om detta är det första talet i arrayen), är largestNumber automatiskt = nbr
                largestNumber = nbr;
            } else if (nbr > largestNumber) {
                //Annars, kolla om nbr är större än largestNumber och tilldela i så fall nbr till largestNumber.
                largestNumber = nbr;
            }
        }
    }
    return largestNumber;
};

const repeatMessage = (message, times) => {
    if (typeof message === "string" && typeof times === "number" && times > 0) {
        for (let i = 0; i < times; i++) {
            console.log(message);
        }
    } else {
        console.log("Fel input");
    }
};

let area = calculateArea(5, 10);
console.log(area);

let bigNum = findLargestNumber([5, 2, 9, 1]);
console.log(bigNum);

repeatMessage("Tjo faderittan!", 5);

const users = [
    { id: 1, name: "Alex", level: "premium", age: 30 },
    { id: 2, name: "Bea", level: "basic", age: 25 },
    { id: 3, name: "Carl", level: "premium", age: 40 },
];

const getUsersOverAge = (usersList, cutoff) => {
    // Antar att argumenten är korrekta
    let NewList = [];
    for (const user of usersList) {
        if (user.age > cutoff) {
            NewList.push(user.name);
        }
    }
    return NewList;
};

let newUserList = getUsersOverAge(users, 27);
console.log(newUserList);
