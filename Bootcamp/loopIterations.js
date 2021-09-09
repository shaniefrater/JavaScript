// You want to skip over the loop iterations that are even numbers and break out of the loop altogether if a duplicate value is found. Extend the code below to do this.

let myMdArray = [
    [1, 2, 3],
    [4, 5, 6],
    [6, 8, 9],
  ];
  
  for (let i = 0; i < myMdArray.length; i++) {
    let nestedArrayLength = myMdArray[i].length;
  
    for (let j = 0; j < nestedArrayLength; j++) {
      console.log(myMdArray[i][j]); // 1, 2, 3, 2, 3, 4, 5, 6, 7
    }
  }

  