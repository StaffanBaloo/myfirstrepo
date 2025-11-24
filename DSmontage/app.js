const numberOfMontages = 10000;
const numberHeroes = 5;
const maxAttempts = 2 * numberHeroes;
const succThreshold = numberHeroes + 1; // Moderate difficulty: needs 1 more success than the number of heroes. To make easy/hard, subtract/add 1.
const failThreshold = maxAttempts - succThreshold;
const montages = [];
let aMontage = [];
let montageSuccesses = 0;
let montageFailures = 0;
let montagePartial = 0;
let montageConsequences = 0;
let avgConsequences = 0;

const die = (sides) => {
    return Math.floor(Math.random() * sides + 1);
};

const dice = (nbr, sides) => {
    let total = 0;
    for (i = 0; i < nbr; i++) {
        total = total + die(sides);
    }
    return total;
};

const randBonus = () => {
    const roll = die(20);
    // Roll d20, on a 1 bonus is 0, 2-3 +1, 4-6 +2, 7-12 +3, 13+ +4
    let bonus = 0;
    if (roll > 1) {
        bonus++;
    }
    if (roll > 3) {
        bonus++;
    }
    if (roll > 6) {
        bonus++;
    }
    if (roll > 12) {
        bonus++;
    }
    return bonus;
};

const pRoll = (bonus, edges, banes) => {
    let tier = 0;
    let roll = 0;
    let natroll = 0;
    //max 2 each of edges and banes
    if (edges > 2) {
        edges = 2;
    }
    if (banes > 2) {
        banes = 2;
    }

    // Edges and banes cancel out
    edges = edges - banes;

    // If there is one edge or one bane, increase or decrease the bonus by 2
    if (edges === 1) {
        bonus = bonus + 2;
    }
    if (edges === -1) {
        bonus = bonus - 2;
    }

    // Roll 2d10
    natroll = dice(2, 10);
    roll = natroll + bonus;
    // A natural 19-20 is a crit which we'll call tier 4.
    if (natroll > 18) {
        tier = 4;
    } else {
        if (roll < 12) {
            tier = 1;
        } else if (roll < 17) {
            tier = 2;
        } else {
            tier = 3;
        }
        // If there's a double edge, increase the result by 1 tier but not above 3.
        if (edges === 2 && tier < 3) {
            tier++;
        }
        // If there's a double bane, reduce the result by 1 tier but not below 1.
        if (edges === -2 && tier > 1) {
            tier--;
        }
    }
    return tier;
};

const doMontage = () => {
    let nbrSucc = 0;
    let nbrFail = 0;
    let nbrCons = 0;
    let attempts = 0;
    let tier = 0;
    let aBonus = 0;
    let finalResult = "";
    while (
        attempts < maxAttempts &&
        nbrSucc < succThreshold &&
        nbrFail < failThreshold
    ) {
        attempts++;
        aBonus = randBonus();
        tier = pRoll(aBonus, 0, 0);
        if (tier === 1) {
            nbrFail++;
        } else {
            nbrSucc++;
            if (tier === 2) {
                nbrCons++;
            }
        }
    }
    if (nbrSucc >= succThreshold) {
        finalResult = "Total Success";
    } else if (nbrFail >= failThreshold) {
        finalResult = "Total Failure";
    } else {
        finalResult = "Partial Success";
    }
    return [finalResult, nbrCons];
};

// Do numberOfMontages montages and put the results in the list montages
for (let i = 0; i < numberOfMontages; i++) {
    aMontage = doMontage();
    montages.push(aMontage);
}

// Go through the list of montages and count successes/failures and consequences
for (let i = 0; i < montages.length; i++) {
    aMontage = montages[i];
    if (aMontage[0] === "Total Success") {
        montageSuccesses++;
    }
    if (aMontage[0] === "Total Failure") {
        montageFailures++;
    }
    if (aMontage[0] === "Partial Success") {
        montagePartial++;
    }
    montageConsequences += aMontage[1];
}
avgConsequences =
    Math.round((100 * montageConsequences) / numberOfMontages) / 100; // calculate average number of consequences and round to 2 decimals

// Present results
console.log(`In ${numberOfMontages} attempts we got the following results:`);
console.log(montageSuccesses + " total successes.");
console.log(montageFailures + " total failures.");
console.log(montagePartial + " partial successes.");
console.log(
    "All in all, " +
        montageConsequences +
        " consequences which gives an average of " +
        avgConsequences +
        "."
);
