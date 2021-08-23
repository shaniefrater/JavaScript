// Objects are like people, each with their own qualities (properties)
// When you have multiple properties that can fit into an object, like a car, here you will use it

let myself = {
    firstName: "Shanie",
    age: 23
}

console.log(myself);

let car = {
    brand: "Mercedes",
    colour: "Gunmetal Grey",
    wheelType: "Alloys",
    tints: true
}

console.log(car);

// Each property included is calleld a Key Value Pair
// If you want to change one of the Key Value Pairs, you need to access the "Dot Notation"

car.brand = "BMW";

console.log(car);

// You can also use the "Dot Notation" to read the value of a property and be specific

console.log(car.tints);

// An alternative way to access the value of a property is the "Bracket Notation"

car['brand'] = "Audi";

console.log(car.brand);

