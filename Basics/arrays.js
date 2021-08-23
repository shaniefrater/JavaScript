
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


