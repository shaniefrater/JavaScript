// Bitwise Operators are similar to Logical Operators but work on the INDIVIDUAL BITS of a number

// (1 = 0000001) - 7 0's equals 1 bit
// (2 = 0000010)
// (3 = 0000011)


console.log(1 | 2); // Single Line | represents a bitwise OR

// Result = 1 & 2 combined (00000011), HOWEVER if you convert the Binary Number to a number, the result equals 3

console.log(1 & 2); // Ampersands & represents a bitwise AND

// Result = Comparison of 1 & 2, will total 0:

// 1 = 00000001 
// 2 = 00000010
// First 7 0'S are 0, 8th is 0 and 1, this will be 0 by default and so on

// Bitwise operators will be used for Access Control Permissions, e.g. chmod 744
// Read (00000100 = 4), Write (0000010 = 2), Execute (000001 = 1)

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission); // output is 6

// You can check to see if you have permissions to view

let permission = myPermission >= 6 ? "User has permission" : "No permission";

// OR

let message = (myPermission & readPermission) ? "Permission Confirmed" : "Permission Denied";
console.log(message);

// With the BITWISE AND method, you can check to see those permissions whereas with the BITWISE OR, we can add permissions
