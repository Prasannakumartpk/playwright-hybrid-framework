// What will be the output?
function test(){
    if(true){
        var a = 1;
        let b = 2;
        const c = 3;
    }
    console.log(a);
    console.log(b);
    console.log(c);
}
test();

/* Inside the if(true) block:

var a = 1;
→ var is function-scoped, so a will be available throughout the entire function test(), not just inside the if block.

let b = 2;
→ let is block-scoped, so b exists only inside the if block. Outside, it’s not accessible.

const c = 3;
→ const is also block-scoped (like let), so c only exists inside the if block.

After the block ends:

console.log(a); ✅ Prints 1 (because a is var and still in scope).

console.log(b); ❌ Throws a ReferenceError (because b was block-scoped and is not accessible outside).

console.log(c); ❌ This line won’t even execute because the script already failed at console.log(b). */