// Multidimensional Array is essentially an array WITHIN an array

let myMdArray = [
    [1, 2, 3],
    [2, 3, 4],
    [5, 6, 7],
  ];

console.log(myMdArray); // [[1, 2, 3], [2, 3, 4], [5, 6, 7]]
  
  console.log(myMdArray[2][1]);         // To access particular parts of the array you need to perform the below: 
                                        // console.log(myMdArray[x][y]);
                                        // x = the index of the particular array e.g. 0th, 1st or 2nd array
                                        // y = the particular PLACEMENT INDEX of the number in the array
                                        // E.g. to locate 6 on the 3rd line is the 2nd Index Array and positioning is the 1st

