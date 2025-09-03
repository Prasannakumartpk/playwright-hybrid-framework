// Special cases in JS
console.log(typeof something);
console.log(typeof null);
console.log(typeof function(){});

/* typeof something

something is not declared anywhere.

In JavaScript, typeof undeclaredVariable does not throw an error (unlike just using undeclaredVariable).

Instead, it returns:
"undefined"

typeof null

null is a special primitive value.

But due to a historical bug in JavaScript (from the first implementation in 1995), typeof null incorrectly returns:

"object"

This is considered a mistake, but it has never been fixed for backward compatibility. 

typeof function(){}

Functions are special objects in JavaScript.

typeof correctly identifies them with a dedicated type:

"function"*/