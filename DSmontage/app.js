const numberOfAttempts = 100;

const d10 = () => {
    return Math.floor(Math.random * 10 + 1);
};

const pRoll = (bonus, edges, banes) => {
    let tier = 0;
    let roll = 0;
    if (edges > 2) {
        edges = 2;
    }
    if (banes > 2) {
        banes = 2;
    }
    edges = edges - banes;
    if (edges === 1) {
        bonus = bonus + 2;
    }
    if (edges === -1) {
        bonus = bonus - 2;
    }
    roll = d10() + d10() + bonus;
};
