// Do while loops are similar to while loops - just written in a different order e.g. Do this whilst this is true
// Due to the nature of how a DO WHILE loop is ordered, the if statement is always executed once

let i = 0;
do {
    if (i % 2 !== 0) console.log(i);
    i++;
} while (i <= 5);