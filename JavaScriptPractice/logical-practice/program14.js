
sayHello();
function sayHello(){
    console.log("Hello");
 }
 /* Function declarations are hoisted completely (both name and definition).

So, you can call sayHello() before its definition.

✅ Prints:

Hello */

sayHi();
var sayHi = function(){
    console.log("Hi");
 }

 /* Variables declared with var are hoisted, but only their declaration, not assignment.

During hoisting, JS treats it as:

var sayHi; // hoisted, initialized as undefined
sayHi();   // ❌ TypeError, because sayHi is undefined at this point
sayHi = function() { console.log("Hi"); }


So when sayHi(); is called before assignment, it throws:

TypeError: sayHi is not a function */