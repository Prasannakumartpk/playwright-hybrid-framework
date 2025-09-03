function outer(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const counter = outer();
console.log(counter());

/* outer() function runs

Inside it, let count = 0; is created.

It returns an inner function (not executed yet, just returned).

const counter = outer();

Now counter holds a reference to the inner function returned from outer.

The variable count is preserved in memory because the inner function closes over it.

👉 This is what we call a closure.

console.log(counter());

Calls the inner function.

Inside the inner function:

count++ → increases from 0 to 1.

Returns 1. */