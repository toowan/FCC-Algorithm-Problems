// Confirm the Ending

function confirmEnding(str, target) {

  // Specify the start index of the char to not include in the returned substring
  var startIndex = (str.length - target.length);
  // Specify the end index of the char to NOT include in the returned substring
  var endIndex = (str.length);

  // Slice out the end substring that matches the length of the target
  var endSubstring = str.substring(startIndex, endIndex);

  // If the target matches the end substring, return true
  if target === endSubstring {
    return true
  };
}


// TEST CASES

confirmEnding("Bastian", "n") // => true.
confirmEnding("Connor", "n") // => false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") // => false.
confirmEnding("He has to give me a new name", "name") // => true.
confirmEnding("Open sesame", "same") // => true.
confirmEnding("Open sesame", "pen") // => false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") // => false.
