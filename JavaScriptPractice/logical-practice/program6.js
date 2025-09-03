// What will be the output?
const obj = {
    name : "Playwright",
};
obj.name = "JavaScript";
obj = {};

console.log(obj);

/* const obj = { name: "Playwright" };

obj is a constant reference to an object in memory.

You cannot reassign obj to another value, but you can mutate its properties.

obj.name = "JavaScript";

This is allowed ✅.

Now the object becomes: { name: "JavaScript" }.

obj = {};

❌ Error!

Since obj was declared with const, you cannot reassign it to a new object.

This line will throw:
TypeError: Assignment to constant variable.
 */