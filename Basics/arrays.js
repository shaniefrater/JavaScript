
let selectedColours = ['red', 'blue', 'green', 'pink'];
console.log(selectedColours);

// Each element has an index which indicates the position of the element in the array (Red = 0, Blue = 1, Green = 2, Pink = 3)
// To access a specific element in the array,  you need to specify the index

console.log(selectedColours[2]);

// Where JavaScript is a Dynamic Language, elements can change at runtime meaning that you are able to specify and add to things such as arrays

let carTypes = ['Mercedes', 'Audi', 'Ford'] // These are indexes of 0, 1, 2
carTypes[3] = 'BMW' // By speficying index 3 which didn't currently exist, you are ADDING to the list
console.log(carTypes);

// Returning the length of an array (auto calculator etc) 

console.log(carTypes.length); // Using the "Dot Notation" this will return how many elements are stored in this array

// noType is an Object
// null is undefined
// document.forms (id of the form)
// eckmouth5 not eckmouth 6

console.log(Math.min("-1", "6.0f", "-1.1", "0.9", "9.3"));
console.log(Math.max(-5, -2, 1, 2.2, -1));

const myArray = [1, -3, -2,  -3.5,  4,  6]
console.log(Math.min(myArray));

// for (i=0; i < myArray.length; i++ ) {
//     console.log(myArray[i]);
// }

// const myString = "Hello  Word! ";
// console.log(myString.slice(8, 9));

// const  myString1 = "Hello Word! "
// console.log(myString1.length);

// console.log(myString1.lastIndexOf(" "));

const myString = "Hello Word! ";
console.log(myString.indexOf("o", 5));

// NaN?
// console.log(Math.pow(-4, 0.5))
// console.log(Math.sqrt(-9));