//BIG O
//how to know the efficiency of the code - complexity of the code - is your code good?
//how to measure the performance of the code - how long does it take to run the code?
//how to measure the space complexity of the code - how much memory does the code take?

//time complexity - time how long, space complexity - space how much memory
//O(1) - constant time
//O(n) - linear time
//O(n^2) - quadratic time
//O(log n) - logarithmic time
//O(n log n) - linearithmic time
//O(n!) - factorial time

//O(n) - linear time
// as the number of inputs increase, the time it takes to run the code increases linearly
//loops are the most common reason for linear time complexity

const groceries = ['milk', 'eggs', 'bread', 'cheese', 'chicken', 'pork', 'bacon', 'turkey', 'salmon', 'tuna'];

const searchForItem = (item) => {
	for (let i = 0; i < groceries.length; i++) {
		if (groceries[i] === item) {
			return `${item} is in the groceries list`;
		}
	}

	// for (let i = 0; i < groceries.length; i++) {
	// 	if (groceries[i] === item) {
	// 		return `${item} is in the groceries list`;
	// 	}
	// }

	//o of n O(n)
};

console.log(searchForItem('milk')); //O(n) - linear time

//O(1) - constant time
//does not depend on the number of inputs
//constant time is when the time it takes to run the code does not depend on the number of inputs

//linear
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const findIndex = (number) => numbers.indexOf(number);

console.log(findIndex(2)); //0
console.log(findIndex(100)); //-1
