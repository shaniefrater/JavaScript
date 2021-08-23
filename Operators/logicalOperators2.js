// Logical Operators without Non-Booleans
// True always powers over False
// Falsy (undefined, null, 0, false, '' , NaN) = If any of these are used in a logical expression, falsy will be returned
// Truthy (Anything that isn't Falsy) e.g. 'Shanie' is not an empy string

false || true // returns true
false || 'Mosh' // returns Mosh
false || 1 // returns 1

false || 1 || 2 // Short Circuiting - will return only 1, anything after that isn't counted

let userColour = "Red";
let defaultColour = "Blue";
let chosenColour = userColour || defaultColour;

console.log(chosenColour); // This will return RED as the user has selected a colour HOWEVER, the below:

let userColour = "";
let defaultColour = "Blue";
let chosenColour = userColour || defaultColour;

console.log(chosenColour); // This will return BLUE as the chosen colour is falsy

