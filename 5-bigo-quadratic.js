//Quadratic time - nested loops
//o of n^2

const findPairs = (array) => {
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			console.log(array[i], array[j]);
		}
	}
};

findPairs([1, 2, 3, 4, 5]);
// 1 2
// 1 3
// 1 4
// 1 5
// 2 3
// 2 4
// 2 5
// 3 4
// 3 5
// 4 5
