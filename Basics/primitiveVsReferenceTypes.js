// In JavaScript - there are TWO categories of types

// PRIMITIVE: Number / String / Boolean / Symbol / Undefined / null
// REFERENCE: Objects / Functions / Arrays

let x  = 10;
let y = x;

x = 20;
console.log(x)      // PRIMITIVE - Output will be (x = 20, y = 10) as both values are completely INDEPENDENT of eachother

// let x  = { value: 10};
// let y = x;

// x.value= 20;
// console.log(x)      // REFERENCE - Output wil be (x = 20, y = 20) as they are both referencing the SAME object

// Primitives are copied by their VALUE

let number = 10

function increase(number) {
    number++
}

increase(number);
console.log(number);

// References are copied by their