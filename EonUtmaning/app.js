function calcChallenge() {
	let antalMedKontroll = [];
	let dennaKontroll = 0;
	const diceFirst = Number(document.getElementById("diceFirst").value);
	const bonusFirst = Number(document.getElementById("bonusFirst").value);
	const diffFirst = Number(document.getElementById("diffFirst").value);
	const diceSecond = Number(document.getElementById("diceSecond").value);
	const bonusSecond = Number(document.getElementById("bonusSecond").value);
	const diffSecond = Number(document.getElementById("diffSecond").value);
	const diceThird = Number(document.getElementById("diceThird").value);
	const bonusThird = Number(document.getElementById("bonusThird").value);
	const diffThird = Number(document.getElementById("diffThird").value);
	const howMany = Number(document.getElementById("howMany").value);
	for (let i = 0; i < howMany; i++) {
		dennaKontroll =
			kontroll(diceFirst, bonusFirst, diffFirst) +
			kontroll(diceSecond, bonusSecond, diffSecond) +
			kontroll(diceThird, bonusThird, diffThird);
		if (typeof antalMedKontroll[dennaKontroll] === "number") {
			antalMedKontroll[dennaKontroll]++;
		} else {
			antalMedKontroll[dennaKontroll] = 1;
		}
	}
	for (let i = 0; i < antalMedKontroll.length; i++) {
		console.log(`${antalMedKontroll[i]} slag med ${i} kontroll.`);
	}
}

const t6 = () => {
	return Math.floor(Math.random() * 6 + 1);
};

const oneObt6 = () => {
	let value = t6();
	if (value === 6) {
		value = oneObt6() + oneObt6();
	}
	return value;
};

const obT6 = (antal) => {
	let value = 0;
	for (let n = 0; n < antal; n++) {
		value += oneObt6();
	}
	return value;
};

const kontroll = (antal, bonus, diff) => {
	let slag = obT6(antal);
	slag = slag + bonus;
	if (slag < diff) {
		return 0;
	} else {
		return 1 + Math.floor((slag - diff) / 5);
	}
};
