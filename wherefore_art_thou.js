// WHEREFORE ART THOU
/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.
*/



function whatIsInAName(collection, source) {
  
  var arr = [];
  // Loop through collection array
  for (var i = 0; i < Object.keys(collection).length; i++) {
    var includeMember = true;
    var collectionMember = collection[i]; // { "a": 1, "b": 2 }

    // Loop through source items
    for (var j = 0; j < Object.keys(source).length; j++){

      var sourceKeys = Object.keys(source); // ['a', 'b']
      var sourceKey = sourceKeys[j]; // 'a'
   
   	  // If collection pair does NOT have the same key as source and their values are NOT the same, includeMember is false. 
      if (!(collectionMember.hasOwnProperty(sourceKey) && 
            source[sourceKey] === collectionMember[sourceKey])) {
        includeMember = false; 
      }
    }

    // If includeMember is true, push that collection pair into an array. 
    if (includeMember) {
      arr.push(collectionMember); 
    } 
  }
  
  console.log(arr);

  // Only change code above this line
  return arr;
}


// TEST CASES
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) // => [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) // => [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) // => [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) // => [{ "a": 1, "b": 2, "c": 2 }].
