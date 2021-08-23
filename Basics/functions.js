// Functions are one of the fundamental building blocks in JavaScript
// A set of statements that performs a task or calculates a value
// When declaring a function, you can omit the semi colon at the end
// Once the function is complete, you need to call it at the end functionName(); with the ; to indicate that this is statement

function sayHello() {
    console.log('Hello World');
}

sayHello();

// Functions can include inputs, these inputs change the way a function behaves


function greet(name) { // name is a variable that is only meaningful to this function, not accessible outside of the function
    console.log('Hello' + name) // name is an input to this function, so here you are concatonating two strings
}

greet('Shanie'); // When calling the sayHello function, you need to pass a value for the name variable (name parameter) 

// A parameter is what you have at the time of declaration (before the function is called/executed) 
// E.g. "name" is an PARAMETER to the sayHello function
// An argument is the actual value supplied for that parameter. 
// E.g. "Shanie" is an ARGUMENT to the sayHello function
// PARAMETER is what you have at time of declaration, VALUE is what's supplied for that actual parameter

function helloTwice(name) {
    console.log('Hello' + ' ' + name) 
}

helloTwice('Shanie'); 
helloTwice('Shanie Frater');

// You can call the function with as many different arguments as you need
// You can also add multiple parameters = function exampleOne(name + ' ' + lastName)
// Then call them = console.log('Hello' + name + ' ' + lastName)

function helloThirdExample(name, lastName) {
    console.log('Hello' + ' ' + name + ' ' + lastName) 
}

helloThirdExample('Shanie', 'Frater');
helloThirdExample('Frater', 'Shanie');