// //1 slow
// for (let i = 1; i < 20; i++) {
//   //fizzbuzz
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   }
//   //not fizz buzz
//   if (i % 3 !== 0 && i % 5 !== 0) {
//     console.log(i);
//   }
//   //fizz
//   if (i % 3 === 0) {
//     console.log("Fizz");
//   }
//   //Buzz
//   if (i % 5 === 0) {
//     console.log("Buzz");
//   }
// }

//2
// for (let i = 0; i < 20; i++) {
//   if (i % 15 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 === 0) {
//     console.log("Fizz");
//   } else if (i % 3 === 0) {
//     console.log("Buzz");
//   } else console.log(i);
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

// const answer = condition ? "It is true" : "It is not true";
// console.log(answer);

// fastest approcach Ternary Approch (condition ? exprIfTrue : exprIfFalse)
// for (let i = 1; i < 20; i++) {
//   let result = "";
//   result += i % 3 ? "" : "Fizz"; // Check if i is divisible by 3
//   result += i % 5 ? "" : "Buzz"; // Check if i is divisible by 5
//   console.log(result || i); // Output "Fizz", "Buzz", "FizzBuzz", or the number itself
// }

for (let i = 1; i < 20; i++) {
  let result = "";
  result += i % 3 ? "" : "Fizz";
  result += i % 5 ? "" : "Buzz";
  console.log(result || i);
}

for (i = 1; i < 20; i++) {
  let result = "";
  result += i % 3 ? "" : "Fizz";
  result += i % 5 ? "" : "Buzz";
  console.log(result || i);
}
