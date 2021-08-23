// Logical Operators are used to make decisions based on multiple conditions (Logical AND, Logical OR and Logical NOT)

// Logical AND (&&), returns TRUE if both operands are TRUE

let hasJob = true;
let hasSavings = true;
let loanEligibility = hasJob && hasSavings;

console.log(loanEligibility); // Logical AND

// Logical OR (||) - Returns true if ONE of the operants are true

let hasJob = true;
let hasSavings = true;
let loanEligibility = hasJob || hasSavings;

console.log(loanEligibility); // Logical OR (requires only ONE to be true)

// NOT operator (!) If something is not the case

let hasJob = false;
let hasSavings = false;
let loanEligibility = hasJob && hasSavings;

let applicationRefusal = !loanEligibility; // Returns application refusal if loanEligibility comes back as false

console.log(applicationRefusal);