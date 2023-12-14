// Try this one:
// input: An array of arrays of words and definitions
// output: Build a tree that would be used as a dictionary.
// Use cases
// ****************************
// Use case 1
// If given this:
// [
// 	['and','AND_DEFINITION']
// ]
// The resulting tree should be
// [{
// 	letter: 'a'
// 	definition: null,
// 	children: [{
// 		letter: 'n',
// 		definition: null,
// 		children: [{
// 			letter: d,
// 			definition: 'AND_DEFINITION'
// 		}]
// 	}]
// }]

// const treeDictionary = {};

// for (i = 0; i < Array.length; i++) {}

// class Tree {
//   constructor() {
//     this.root = null;
//   }

//   add(data) {
//     this.children.push(new Node(data));
//   }
// }

//Array method practice

//MAP
// const finalParticipants = ["Taylor", "Donald", "Don", "Natasha", "Bobby"];

// // add string after each final participant

// const announcements = finalParticipants.map((p) => {
//   return p + " joined the party.";
// });

// console.log(announcements);

// Map
// const list = [1, 2, 3, 4];
// console.log(list.map((num) => num * 2)); // [2, 4, 6, 8]

//filter - Returns a new array with all elements that pass the test implemented by the provided function.
// const randomNumbers = [4, 11, 42, 14, 39];
// const returnedNums = randomNumbers.filter((x) => {
//   return x % 2 === 0;
// });
// console.log(returnedNums);

//REDUCE - Reduce the array to a single value. The value returned by the function is stored in an accumulator (result/total).
// const arrayOfNumbers = [1, 2, 3, 4];
// const reducedNums = arrayOfNumbers.reduce((total, current) => {
//   return total + current;
// });
// console.log(reducedNums);
