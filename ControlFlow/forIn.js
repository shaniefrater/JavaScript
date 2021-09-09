// For in is used to iterate over the properties of an element or in an array

var person = {
    name: "Shanie",
    age: 23
};

//for (key in person)         // In every interation, the key variable in the loop will hold one of the properties in the PERSON loop
//     console.log(key);       // output will be NAME followed by AGE

// Dot Notation - person.name
// Bracket Notation -  person['name'] when you don't know what property you're writing at the time. E.g. could be changing at runtime

for (key in person)         // In every interation, the key variable in the loop will hold one of the properties in the PERSON loop
 console.log(key, person['key']);