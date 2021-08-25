// Displaying odd Numbers 1 - 5

for (let i = 0; i <= 5; i++) {
    if (i % 2 !== 0) console.log(i); // if the REMAINDER (%) of the division of i by 2 is not equal to 0, that means i is an odd number
}

// Displaying even Numbers 1 - 5

for (let i = 0; i < 5; i++) {
    if (i % 2 === 0) console.log(i); // if the REMAINDER (%) of the division of i by 2 is equal to 0, that means i is an even number
}

// Writing the other way around

for (let i = 5; i > 1; i--) { // simple rearrange the formula. i becomes 5 and the < sign gets flipped, ENSURE that changes are decremented
    if (i % 2 === 0) console.log(i); // if the REMAINDER (%) of the division of i by 2 is equal to 0, that means i is an even number
}