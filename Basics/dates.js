// Date object represents a point in time
// Days of the week always start from Sunday
// The Z in the time stands for ZULU time (GMT)
// Months start at 0, so January is 0, December is 11

let myDate = new Date;                   // Makes new instance for the current d/time scenario
console.log(myDate);

let myDate1 = new Date;
console.log(myDate1.toString());          // Creates a stringified date (Monday 6th September 2021 etc)

// Creating an alternative way of writing the date (Counting Milliseconds since 1st January 1970)

let today2 = new Date(1164411006456);   // 1164411006456 was 1164411006456 many milliseconds after 01/01/1970
console.log(today2);

let myPastDate = new Date(2021,01,15);  // Parsing in a previous date
console.log(myPastDate.toString());

// Complete the code below - if my output is Mon Sep 06 2021 15:07:13 GMT+0100, what was my input?

// let myDate = new Date;
// console.log(______);

// (a. console.log(myDate);
// (b. console.log(myDate.toString));
// (c. console.log(new Date);
// (d. console.log(Date);