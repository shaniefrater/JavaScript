const numbers = [1, 2, 3, 4]
console.log(numbers.indexOf(2));        // This will return the index (position of 2 which will be 1)

const words = "The red fox jumped on the brown cat"
console.log(words.indexOf('o', 20));      // This will AUTOMATICALLY return -1 where 'a' is not an element in the array, therefore -1 by default

console.log(words.lastIndexOf('o', 19));     // This will return the last index number of the sequence e.g. if there's 5 in total, the last index will be 4

const myString = "Hello  Word! ";
console.log(myString.slice(1, 2));

const myString1 = "Hello Word! ";
console.log(myString1.indexOf("o",  5));


const horse = "Supercalifragilisticexpialidocious ";
console.log(horse.indexOf("a",  12));

const obj1 = { name: 'sha' };
const obj2 = { name: 'sha' };
console.log(obj1 == obj2);