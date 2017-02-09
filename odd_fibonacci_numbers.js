// SUM ALL ODD FIBONACCI NUMBERS

/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) // 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

*/



function sumFibs(num) {     // num = 4 
  
  var fibNum = 1;  
  var totalNums = [1];  
  var oddNums = [];
  var oddSum;
  
  // Store all fib numbers in an array
  for (var i = 1; fibNum <= num; i++){         // 1 < 4 
    totalNums.push(fibNum);                   // [1, 1, 2, 3]  
    fibNum = fibNum + totalNums[i-1];        // fibNum = 1 + [1-1] = 1
  }
  
  // Store odd fib numbers in oddNums array
  for (var j = 0; j < totalNums.length; j++) {
      if (totalNums[j] % 2 === 1) {             
          oddNums.push(totalNums[j]);            // [1, 1, 3] 
      }  
  }
  
  // Sum all numbers in oddNums array
  oddSum = oddNums.reduce(function(a, b) {
      return a + b;
   }, 0);
  

  return oddSum;
}




// TEST CASES
sumFibs(1) // a number.
sumFibs(1000) // 1785.
sumFibs(4000000) // 4613732.
sumFibs(4) // 5.
sumFibs(75024) // 60696.
sumFibs(75025) // 135721.