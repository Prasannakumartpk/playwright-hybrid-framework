
for(const i = 0; i < 3; i++){
    setTimeout(() => console.log(i), 3000)
}

/* const i = 0;

Here, you are declaring the loop variable i with const.

A const variable cannot be reassigned after its first assignment.

In a for loop, the increment part (i++) tries to reassign i.

That means after the first iteration, JavaScript will attempt i = i + 1.

Since i is const, this is not allowed.

Therefore, the code throws an error immediately at runtime, before even running the setTimeout.
TypeError: Assignment to constant variable. */