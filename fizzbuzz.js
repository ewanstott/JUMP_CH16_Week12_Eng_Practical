// fizz buzz workshop

// console.log(9 % 5); // % Remainder operator (outputs whats left over e.g. 9 % 5 = 4 (left over))

// const arr = [100, 101, 102, 103, 104, 105, 106, 108, 109];

// arr.forEach((item, index) => {
//   if (index % 3 === 0) {
//     console.log(item, index);
//   }
// });

//Attempt 1
// for (let i = 1; i < 20; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else i % 3 !== 0 || i % 5 !== 0;
//   console.log(i);
// }

//Attempt 2
// for (let i = 1; i < 20; i++) {
//   //fizzbuzz
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   }
//   //not fizzbuzz
//   if (i % 3 !== 0 && i % 5 !== 0) {
//     console.log(i);
//   }
//   //fizz only
//   if (i % 3 === 0 && i % 5 !== 0) {
//     console.log("Buzz");
//   }
//   //buzz only
//   if (i % 3 !== 0 && i % 5 === 0) {
//     console.log("Buzz");
//   }
// }

//Elegant approach
// for (let i = 1; i < 20; i++) {
//   if (i % 15 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }

//efficient approach (using caching (storing)) - 30% improvement in efficiency!
// for (let i = 1; i < 20; i++) {
//   let result = "";

//   if (i % 3 === 0) {
//     result += "Fizz";
//   }

//   if (i % 5 === 0) {
//     result += "Buzz";
//   }

//   console.log(result || i);
// }

// Ternary (2 outcomes, true or not true) - preferred over if statements as QUICKER!

// const answer = true ? "It is true" : "It is not true";
// console.log(answer);

// fastest approcach Ternary Approch (condition ? exprIfTrue : exprIfFalse)

for (let i = 1; i < 20; i++) {
  let result = "";

  //   result +=
  //     i % 15 === 0 ? "FizzBuzz" : i % 5 === 0 ? "Buzz" : i % 3 === 0 ? "Fizz" : i;

  // Russell 1.0:
  //   result += i % 3 === 0 ? "Fizz" : "";
  //   result += i % 5 === 0 ? "Buzz" : "";

  // Russell 2.0 (MORE EFFICIENT / BEST SOLUTION!!!)
  result += i % 3 ? "" : "Fizz";
  result += i % 5 ? "" : "Buzz";

  console.log(result || i);
}

// MOST EFFICIENT CODE (but much more complex)
// for (let i = 0; i < 20; )
//   console.log((++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);
