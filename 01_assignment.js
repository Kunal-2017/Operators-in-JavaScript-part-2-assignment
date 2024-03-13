// Que 1. Explain the usage of ternary operator with syntax and write a program to check whether the number is even or odd using the ternary operator.

/**  Syntax of Terniary Operator:
Some condition ? result1 : result2;

Ex:

let x = a > b ? a : b;
if a is greater than b then a is stored in x else b is stored in x.
The value of a or b is stored in x based on some condition.

Use of Terniary operator :-
 Terniary operator is used when we want to store the result in a variable which is based on some condition .
 Terniary operator is an expression while if else is a statement. In if else statement we can not store the result in a variable.
 so,this is the advantage of Terniary operator.
 
 **/
// To check if a number is even or odd

let numberToCheck = parseInt(prompt("Enter a number to check even or not"));
let result = (numberToCheck % 2 === 0) ? "Even Number" : "Odd Number";
console.log(`${numberToCheck} is an ${result}`);



