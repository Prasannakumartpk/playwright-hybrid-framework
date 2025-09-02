// What will be the output?
let a = 10;
function shadow(){
    let a = 20;
    console.log(a);
}
shadow();
console.log(a);

/* let a = 10;

A global variable a is declared and initialized with 10.

shadow() function is called:

Inside shadow, another variable a is declared with let a = 20;.

This shadows (hides) the outer/global a within the function scope.

So, when console.log(a) is executed inside the function, it prints 20.

After shadow() finishes:

The global a is still 10 (unchanged, because the inner a was a different variable).

So console.log(a) outside prints 10. */