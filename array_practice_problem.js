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

const treeDictionary = {};

for (i = 0; i < Array.length; i++) {}

class Tree {
  constructor() {
    this.root = null;
  }

  add(data) {
    this.children.push(new Node(data));
  }
}
