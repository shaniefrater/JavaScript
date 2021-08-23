// Arithmetic Operators are used for performing calculations
// An operator takes two operants and produces a new value

let x = 10;
let y = 11;

console.log(x + y); // Addition operator
console.log(x - y); // Subtraction operator
console.log(x * y); // Multiplication operator
console.log(x / y); // Division operator
console.log(x % y); // Remainder of division operator
console.log(x ** y); // Expantiation operator (x to the power of y)

// Increment (++) The value changes dependent on where the ++ are situated

console.log(++x); // Where the ++ is positioned BEFORE x, the value of x will be incremented by 1 first e.g. 10 + 1 = 11, returns 11
console.log(x++); // Where the ++ is positioned AFTER x, you see the value of x displayed first (console.log) before it is incremented when called again

// E.g.

console.log(x++); // Returns 10 as it needs to be called again to be incremented
console.log(x); // Now that the value of x has been incremented, this replaces x and will return 11


// Decrement (--)

console.log(--x); // Where the -- is positioned BEFORE x, the value of x will be decremented by 1 first e.g. 10 - 1 = 9, returns 9

console.log(x--); // Where the -- is positioned AFTER x, the value of x will be returned before being decremented by 1, initially returns 10
console.log(x); // The new value of x is revealed
