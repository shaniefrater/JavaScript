const name1 = "West Ham"
const name2 = "Arsenal"
const name3 = "Liverpool"
const name4 = "Manchester United"
const name5 = " man  city"

console.log(name1.length);             // .length returns the length of the string
console.log(name4.indexOf("ch"));      // returns the FIRST occurance of an element in a string = 4th index
console.log(name4.lastIndexOf("e"));   // returns the LAST occurance of an element in a string = 4th index
console.log(name3.endsWith("e"));      // TRUE or FALSE = returns FALSE as it doesn't

console.log(name4.trim);               // When spaces are used at the beginning or end, this can essentially clean up the code
console.log(name1.repeat(8));          // repeats string x amount of times
console.log(name3.substring(5, 8));    // take part of a string and return as NEW string e.g. Pool
console.log(name2.slice(2,5));              // slice

// In EVERY case, this is not changing the value, it is creating a new string

//What is logged when the following code runs? 

let popularCars = {
   mercedes: "White",
   lamborghini: "Red",
   audi: "Black",
   porsche: "Yellow"
}

console.log(popularCars.porsche.slice(1,3));
console.log(popularCars.lamborghini.lastIndexOf("i"));
