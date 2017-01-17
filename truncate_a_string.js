// TRUNCATE A STRING

/* Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
Note that inserting the three dots to the end will add to the string length.
However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string. */ 


// Using .slice method

function truncateString(str, num) {
  // Truncate string to its max length if its length is greater than num
  if (str.length > num) {
    // If num is less than or equal to three, count the dots towards the max length
    if (num <= 3) {
      return str.slice(0, num) + "...";
    }  
    // If num is greater than three, don't count the dots towards the max length
    else if (num > 3) {
      return str.slice(0, (num - 3)) + "..."; 
    }
  }
  // Don't truncate the string if its length is less than or equal to num.  
  return str; 
}






// Test Cases:
truncateString("A-tisket a-tasket A green and yellow basket", 11) // => "A-tisket..." 
truncateString("Peter Piper picked a peck of pickled peppers", 14) // => "Peter Piper..."
truncateString("A-", 1) // => "A..."
truncateString("Absolutely Longer", 2) // => "Ab..."
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length // => "A-tisket a-tasket A green and yellow basket"
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) // =>  "A-tisket a-tasket A green and yellow basket"

