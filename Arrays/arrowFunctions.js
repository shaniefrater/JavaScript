// Arrow functions can clean up Java code (shorter and cleaner)

const classes = [
    { id: 01, name: 'science'},
    { id: 02, name: 'english'},
];

var findElement = classes.find(function(course) { 
    return course.name == 'english';
})

// E.g. the above can be simplified to:
// 1. Remove the function keyword
// 2. Separate the parameter (course) from the body by adding the arrow =>
// 3. Remove the parenthesis IF a string has a single parameter OR keep the parenthesis if 
// 4  If the function is a single line of code and RETURNING a value, omit the RETURN keyword and put on a single line



const classes = [
    { id: 01, name: 'science'},
    { id: 02, name: 'english'},
];

var findElement = classes.find(course => course.name == "english"
);

console.log(findElement);
