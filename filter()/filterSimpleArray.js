// Challenge #1
// Create a function that filters strings by length given two arguments: minimum length, maximum length
// Either argument may be missing. if both are missing, return the original array

function filterStringsByLength(arrayOfStrings, minLength, maxLength) {
  arrayOfStrings = arrayOfStrings.filter(string => string.length >= (minLength ?? 0));
  arrayOfStrings = arrayOfStrings.filter(string => string.length <= (maxLength ?? string.length));
  return arrayOfStrings;
}

const arrayOfStrings = ['', 'a', 'bc', 'def', 'ghij', 'klmno', 'pqrstu', 'vwxyz12'];
const nums = [1,2,3,4,5]

const wordsAtLeast3Characters = filterStringsByLength(arrayOfStrings, 3);
console.log(wordsAtLeast3Characters);
// OUTPUT
// [ 'def', 'ghij', 'klmno', 'pqrstu', 'vwxyz12' ]

const wordsNoLongerThan5Characters = filterStringsByLength(arrayOfStrings, null, 5);
console.log(wordsNoLongerThan5Characters);
// OUTPUT
// [ '', 'a', 'bc', 'def', 'ghij', 'klmno' ]

const wordsAtLeast3CharactersAndNoLongerThan5Characters = filterStringsByLength(arrayOfStrings, 3, 5);
console.log(wordsAtLeast3CharactersAndNoLongerThan5Characters);
// OUTPUT
// [ 'def', 'ghij', 'klmno' ]

let minAndMaxNotProvided = filterStringsByLength(arrayOfStrings);
console.log(minAndMaxNotProvided);
// OUTPUT
// ['', 'a', 'bc', 'def', 'ghij', 'klmno', 'pqrstu', 'vwxyz12']


// Challenge #2
// Create a function that filters an array of numbers, given two arguments: minimum and maximum.
// Either argument may be missing. if both are missing, return the original array

function filterNumbersBySize(arrayOfNumbers, minSize, maxSize) {
  arrayOfNumbers = arrayOfNumbers.filter(number => number >= (minSize ?? number));
  arrayOfNumbers = arrayOfNumbers.filter(number => number <= (maxSize ?? number));
  return arrayOfNumbers;
}

const arrayOfNumbers = [-12, -4, 0, 2, 11, 63, 1001];

const numbersMinus5AndUp = filterNumbersBySize(arrayOfNumbers, -5);
console.log(numbersMinus5AndUp);
// OUTPUT
// [ -4, 0, 2, 11, 63, 1001 ]

const numbersNoGreaterThan10 = filterNumbersBySize(arrayOfNumbers, null, 10);
console.log(numbersNoGreaterThan10);
// OUTPUT
// [ -12, -4, 0, 2 ]

const numbersBetweenMinus4And11 = filterNumbersBySize(arrayOfNumbers, -4, 11);
console.log(numbersBetweenMinus4And11);
// OUTPUT
// [ -4, 0, 2, 11 ]

minAndMaxNotProvided = filterNumbersBySize(arrayOfNumbers);
console.log(minAndMaxNotProvided);
// OUTPUT
// [-12, -4, 0, 2, 11, 63, 1001]