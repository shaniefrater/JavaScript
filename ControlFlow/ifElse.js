// Two types of Conditional Statements (If/Else & Switch/Case)

// if (condition) {
//     statement
// } 
// else if (another condition) {
//     statement
// }
// else (if none of the above fit) {
//    statement
// }

let hour = 22;

if (hour >= 6 && hour < 12) {
    console.log("Good morning");
}

else if (hour >= 12 && hour < 18) {
    console.log("Good Afternoon");
}
else { 
    console.log("Goodnight");
}
