function updateNames(cats, firstCatsName) {
    firstCatsName = 'Ginger';
    cats.names[0] = 'Ginger';
}

var cats = {
    names: ['Tiddles', 'Smokey', 'Whiskers', 'Claude'],
};

var firstCatsName = 'Gizmo';

updateNames(cats, firstCatsName);

console.log(cats, firstCatsName);

// 

function modulusIt(x) {
    x %= 3;
    return x;
}

const a = 9;
let result = modulusIt(a);

console.log(a);
console.log(result);

//

function borrow(name, number, book) {
    name = name.toUpperCase();
    number = number + "-1";
    book.name = book.name.toUpperCase();
    book.author = book.author.toUpperCase();
}

let name = 'bob';
let number = '123678';
let book = { name: 'Intro to Java', author: 'A. Guru' };

borrow(name, number, book);

console.log(name, number, book.name, book.author);

function mixIt(arr) {
    arr = [7, 8, 9];
};

let originalArray = [1, 2, 3];
mixIt(originalArray);

console.log(originalArray);

function addIt(a, b) {
    a = a + b;
}

let x = 10;
let y = 20;

addIt(x, y)
console.log(x);
console.log(y);

//

// function refurbish(house, numBathrooms) {
//     house.numBathrooms = numBathrooms;
// }

// let house = {
//     numBathrooms: 3
// };

// refurbish(house, 4);

// console.log(house.numBathrooms); 

function refurbish(house) {
    house = {
        numBathrooms: 5
    };
}

let house = {
    numBathrooms: 3
};

refurbish(house);

console.log(house.numBathrooms); 
