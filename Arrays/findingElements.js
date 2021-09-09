// Finding PRIMITIVE types

const numbers = [1, 2, 3, 4]

console.log(numbers.indexOf(2));        // This will return the index (position of number 2 which will be 1)
console.log(numbers.indexOf('a'));      // This will AUTOMATICALLY return -1 where 'a' is not an element in the array, therefore -1 by default
console.log(numbers.lastIndexOf());     // This will return the last index number of the sequence e.g. if there's 5 in total, the last index will be 4

console.log(numbers.includes[1]);       // Double checks to see if 1 exists in the array

// Finding REFERENCE types
// Where a REFERENCE type is immutable, this will be different to finding a PRIMITIVE type

const classes = [
    { id: 01, name: 'science'},
    { id: 02, name: 'english'},
];

//console.log(classes.find({id: 01, name: 'science'}));

// When you have an ARRAY with REFERENCE types, you need to use the FIND method

var findElement = classes.find(function(course) { // classes.findIndex(function(course)) will also return the INDEX of the requested
    return course.name == "english";
})

console.log(findElement);