// MAP THE DEBRIS

/*

Fill in the object constructor with the following methods below:

  getFirstName()
  getLastName()
  getFullName()
  setFirstName(first)
  setLastName(last)
  setFullName(firstAndLast)

Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.


*/

function orbitalPeriod(arr) {
  
  // Some global constants
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var object, altitude;
  
  // Calculate Orbital Period
  function calculateOrbital(altitude) {
    var semiMajorAxis = altitude + earthRadius; 
    var result = 2 * Math.PI * Math.sqrt((Math.pow(semiMajorAxis, 3))/GM); 
    return Math.round(result); 
  }

  // Loop through every object in the array
  for (var i in arr) {
    // Extract object from arr
    object = arr[i]; 
    
    // Retrieve average altitude
    altitude = object.avgAlt;

    // Add orbitalPeriod and its value to object
    object.orbitalPeriod = calculateOrbital(altitude); // calculate this value

    // Delete avgAlt from object
    delete object.avgAlt; 
  } 
  
  return arr;
}

// Test Cases

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) 
// [{name: "sputnik", orbitalPeriod: 86400}]

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) 
// [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].
​