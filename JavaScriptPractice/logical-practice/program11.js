
console.log(5 + undefined);

console.log(5 - null);

/* 5 + undefined

The + operator:

If one operand is a string → concatenation.

Otherwise → tries to convert both to numbers.

undefined when converted to a number → NaN.

5 + NaN = NaN.

✅ Output:

NaN

5 - null

The - operator always expects numbers.

null when converted to a number → 0.

5 - 0 = 5.

✅ Output:

5*/