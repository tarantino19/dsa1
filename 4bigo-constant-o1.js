//01 - "constant time" regardless of the number of inputs
//example - you know exactly where to find an item - no matter if the input grows or shrinks

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const findNumberTwo = (number) => {
	const numberFound = numbers[0];

	if (numberFound === number) {
		return true;
	}

	return false;
};

console.log(findNumberTwo(2)); //true
console.log(findNumberTwo(100)); //false

//01 - finding a value without loops

/**constant - ex acceessing value in arrays (value look up), linear - loops , quadratic - nested loops, logarithmic - factional finding */
