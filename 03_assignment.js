// Que 3. Use a nested ternary operator to check that a number is positive, negative or zero. You have to print “positive” if the number is positive and similarly for negative and zero also.

let num = parseInt(prompt("Enter a number to check positive or not"));

let result = (num === 0) ? "Zero" : (num > 0) ? "POSITIVE" : "NEGATIVE";
console.log(`${num} is a ${result} number`);
