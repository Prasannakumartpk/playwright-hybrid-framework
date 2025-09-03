// Normal function
function sumNumbers(a, b){
    return a + b;
}
console.log(sumNumbers(2, 3));

/* Declared with function.

Supports hoisting → you can call it before definition.

Has its own this context (important difference from arrow functions).

More verbose but very flexible. */

// Arrow function
const sumNumbers2 = (c, d) => (c+d)
console.log(sumNumbers2(2,3));

/* Arrow functions are expressions assigned to a variable.

They do not support hoisting → must be defined before use.

They do not have their own this; instead, they inherit this from their surrounding context (lexical this).

Shorter syntax, especially useful for inline functions. */