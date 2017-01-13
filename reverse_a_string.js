// Reverse A String

function reverseString(str) {
  return str.split('').reverse().join('');
}

// Test Cases
reverseString("hello");

/*

'hello'.split('') => [ 'h', 'e', 'l', 'l', 'o' ]
[ 'h', 'e', 'l', 'l', 'o' ].reverse() => [ 'o', 'l', 'l', 'e', 'h' ]
[ 'o', 'l', 'l', 'e', 'h' ].join('') => 'olleh'

*/
