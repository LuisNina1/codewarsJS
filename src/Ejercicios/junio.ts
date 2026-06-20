const spitsTwoLetters = (str) => {
	if (!str) return [];
	const strSplit = str.split("");
	let twoLetters = "";

	for (let I = 0; I < strSplit.length; I++) {
		if (I % 2 === 0 && I > 0) {
			twoLetters += ",";
			twoLetters += strSplit[I];
			continue;
		}
		twoLetters += strSplit[I];
	}
	const arrayTwoLetters = twoLetters.split(",");

	if (arrayTwoLetters[arrayTwoLetters.length - 1].length < 2) {
		arrayTwoLetters[arrayTwoLetters.length - 1] += "_";
	}
	return arrayTwoLetters;
};

const letras = "";
console.log(spitsTwoLetters(letras));

//const strSplit = str.split(",");
