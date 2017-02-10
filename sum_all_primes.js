// SUM ALL PRIMES 

/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

*/



function sumPrimes(max) {   // max = 10
  var primeSum;
  var primeNums = []; 

  
  // Helper function to check if num is prime  
  function isPrime(num) {
      // Not prime if less than 2. 
      if (num < 2) {
        return false;
      }
      
      // Check all divisors starting at 2
      for (var i = 2; i < num; i++) {
          // If num is divided evenly by divisor with no remainder, its not a prime. 
          if(num % i === 0)
              return false;
      }
      return true;
  }
  
  // Loop through 0 to the given max. If prime, push into primeNums array.
  for (var j = 0; j <= max; j++) {
    if (isPrime(j)) {
      primeNums.push(j); 
    }
  }
  

  // Sum all numbers in primeNums array
  primeSum = primeNums.reduce(function(a, b) {
      return a + b;
   }, 0);
  
  
  return primeSum;
}



// TEST CASES
sumPrimes(10) // a number.
sumPrimes(10) // 17.
sumPrimes(977) // 73156.