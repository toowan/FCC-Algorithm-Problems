// MISSING LETTERS

/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/



// Using RegEx and .replace()
function convertHTML(str) {
  
  var newString = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
  
  return newString; 
}



//Using switch and cases
function convertHTML(str) {

  var strArray = str.split('');

  for (var i = 0; i < strArray.length; i++) {
    switch (strArray[i]) {
      case '<':
        strArray[i] = '&lt;';
        break;
      case '&':
        strArray[i] = '&amp;';
        break;
      case '>':
        strArray[i] = '&gt;';
        break;
      case '"':
        strArray[i] = '&quot;';
        break;
      case "'":
        strArray[i] = "&apos;";
        break;
    }
  }

  strArray = strArray.join('');
  return strArray;
}







// TEST CASES
convertHTML("Dolce & Gabbana") // Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") // Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve") // Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"') // Stuff in &​quot;quotation marks&​quot;.
convertHTML("Shindler's List") // Shindler&​apos;s List.
convertHTML("<>") // &​lt;&​gt;.
convertHTML("abc") // abc.