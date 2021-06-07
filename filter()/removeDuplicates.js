// Write a function to filter out any duplicates in an array
// Input type is an array of strings and/or numbers

function removeDuplicates(array) {
  return array.filter((item, index) => index === array.indexOf(item));
}

const arrayOfStrings = ['aa', 'bb', 'cc', 'dd', 'ee', 'aa', 'bb', 'cc'];

const arrayOfStringsWithoutDupes = removeDuplicates(arrayOfStrings);
console.log(arrayOfStringsWithoutDupes);
// OUTPUT
// [ 'aa', 'bb', 'cc', 'dd', 'ee' ]

const arrayOfNumbers = [0, 1, 1, 2, 3, 3, 3, 4, 5];

const arrayOfNumbersWithoutDupes = removeDuplicates(arrayOfNumbers);
console.log(arrayOfNumbersWithoutDupes);
// OUTPUT
// [ 0, 1, 2, 3, 4, 5 ]

const arrayOfNumbersAndStrings = arrayOfStrings.concat(arrayOfNumbers);

const arrayOfNumbersAndStringsWithoutDupes = removeDuplicates(arrayOfNumbersAndStrings);
console.log(arrayOfNumbersAndStringsWithoutDupes);
// OUTPUT
// [ 'aa', 'bb', 'cc', 'dd', 'ee', 0, 1, 2, 3, 4, 5 ]