// What will be the output?
for(var i = 0; i < 3; i++){
    setTimeout(() => console.log(i), 3000)
}

for(let i = 0; i < 3; i++){
    setTimeout(() => console.log(i), 3000)
}

/* Case 1: Using var

var is function-scoped (not block-scoped).

That means inside the loop, the same i variable is being updated in each iteration.

By the time setTimeout runs (after 3 seconds), the loop has already finished, and i equals 3.

So, all 3 callbacks print the same final value.

Case 2: Using let

let is block-scoped, so in each iteration of the loop, a new copy of i is created.

When setTimeout runs, it remembers the correct value of i from that iteration (closure behavior).

Therefore, you get 0, 1, 2 printed correctly. */