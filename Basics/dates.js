// Date object represents a point in time
// Days of the week always start from Sunday
// The Z in the time stands for ZULU time (GMT)
// Months start at 0, so January is 0, December is 11
// When logging a date in a string, it's the correct form (27 / 02 / 2021 = January) VS cntstructed in number parameters = actual index form

let myDate = new Date;                   // Makes new instance for the current d/time scenario
console.log(myDate);

let myDate1 = new Date;
console.log(myDate1.toString());          // Creates a stringified date (Monday 6th September 2021 etc)

// Creating an alternative way of writing the date (Counting Milliseconds since 1st January 1970)

let today2 = new Date(1164411006456);   // 1164411006456 was 1164411006456 many milliseconds after 01/01/1970
console.log(today2);

let myPastDate = new Date(2021,01,15, 0, 0, 0, 0);  // Parsing in a previous date
console.log(myPastDate.toString());

// console.log(getFullMonth());
// Complete the code below - if the output is the current date and time (10/09/2021), what was my input?

let todaysDate = new Date;
console.log(todaysDate.toString());

// (a. console.log(myDate);
// (b. console.log(myDate.toString());
// (c. console.log(new Date);
// (d. console.log(Date);


const date = new Date("2021/2/27");
console.log(date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());

// toDateString(); will only show the date and NO time

let now = new Date();

let fiveDaysAgo = now.getDate()-5; // getting the date and minusing 5

now.setDate(fiveDaysAgo);

console.log(now.toString());