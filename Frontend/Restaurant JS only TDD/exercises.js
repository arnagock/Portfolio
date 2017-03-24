/*
### isString
Create a function that returns `true` when the parameter passed is a string and `false` otherwise.
*/

function isString(str) {
  return typeof str === 'string';
}
module.exports.isString = isString;
// console.log(isString('hello')); // => true
// console.log(isString(['hello'])); // => false
// console.log(isString('this is a long sentence')); // => true
// console.log(isString({ a: 2 })); // => false

/*
### isArray
Create a function that returns `true` when the parameter passed is a string and `false` otherwise.
*/

function isArray(arr) {
  return Array.isArray(arr); // ES6 :)
}
module.exports.isArray = isArray;
// console.log(isArray('hello')); // => false
// console.log(isArray(['hello'])); // => true
// console.log(isArray([2, {}, 10])); // => true
// console.log(isArray({ a: 2 })); // => false

/*
### Check for types in array
Create a function that checks whether all the element of an array are the same datatype
For example, whether they are all a `String` or a `number`.
*/

function typeOfElement(element) {
  if (typeof element === 'object') {
    return Array.isArray(element) ? 'array' : 'object';
  }

  return typeof element;
}

module.exports.typeOfElement = typeOfElement;

function areSameType(elements) {
  var firstElementType = typeOfElement(elements[0]);

  for(var i = 1; i < elements.length; i++) {
    var currentType = typeOfElement(elements[i]);
    if (currentType !== firstElementType) {
      return false;
    }
  }

  return true;
}
module.exports.areSameType = areSameType;
// console.log(areSameType(['hello', 'world', 'long sentence'])); // => true
// console.log(areSameType([1, 2, 9, 10])); // => true
// console.log(areSameType([['hello'], 'hello', ['bye']])); // => false
// console.log(areSameType([['hello'], [1, 2, 3], [{ a: 2 }]])); // => true

/*
### Sort and remove duplicated characters
Take 2 strings s1 and s2 including only letters from a to z.
Return a new sorted string, the longest possible, containing distinct letters, - each taken only once - coming from s1 or s2.
*/

function longest(str1, str2) {
  var chrs = [];
  var longStr = str1 + str2;
  for (var i = 0; i < longStr.length; i++) {
    var chr = longStr[i];
    if (chrs.indexOf(chr) === -1) {
      chrs.push(chr);
    }
  }

  return chrs.sort().join('');
}
module.exports.longest = longest;
// console.log(longest('abcccaa', 'acddddffzzz')); // => 'abcdfz'
//
// a = 'xyaabbbccccdefww'
// b = 'xxxxyyyyabklmopq'
// console.log(longest(a, b)); // => 'abcdefklmopqwxy'
//
// a = 'abcdefghijklmnopqrstuvwxyz'
// console.log(longest(a, a)); // => 'abcdefghijklmnopqrstuvwxyz'

/*
### Convert number to reversed array of digits
Given a random number. You have to return the digits of this number within an array in reverse order.
*/

function convert(num) {
  return num
    .toString()
    .split('')
    .map(Math.floor)
    .sort()
    .reverse()
}
module.exports.convert = convert;
// console.log(convert(429563)); // => [9, 6, 5, 4, 3, 2]
// console.log(convert(324)); // => [4, 3, 2]

/*
### Count repetitions
You will be given an array of string:
['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante']
Return an object where the keys are the string and the value for each key is how many
repetitions they have in the provided array
*/

function countRepetitions(elements) {
  return elements.reduce(function(acc, el) {
    if (acc[el]) {
      acc[el] += 1;
    } else {
      acc[el] = 1;
    }

    return acc;
  }, {});
}
module.exports.countRepetitions = countRepetitions;
// var elements = ['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante'];
//console.log(countRepetitions(elements));

/*
### Cat and Mouse
You will be given a string featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.
You need to find out if the cat can catch the mouse from it's current position. The cat can jump three characters. So:
*/

function isCaught(sequence) {
  var jumpLength = 3;
  for(var i = 0; i < sequence.length; i++) {
    var chr = sequence[i];
    if (chr === 'C') {
      for (var j = i-3 ; j <= i + jumpLength; j++) {
        var chr2 = sequence[j];
        if (chr2 === 'm') {
          return true;
        }
      }
    }
  }

  return false;
}

module.exports.isCaught = isCaught;
// console.log(isCaught('C.....m')); // => false
// console.log(isCaught('C...m')); // => true
// console.log(isCaught('..C..m')); // => true

/*
### Split the bill
Write a function to balance who has overpaid and should be compensated or who has paid less.
The function should take one parameter: an object which represent the members of the group and the amount spent by each.
The function should return an object with the same names, showing how much money the members should pay or receive.
*/

function splitTheBill(group) {
  var avg = Object.values(group).reduce(function(acc, val, index, values) {
    return acc + (val / values.length);
  }, 0);

  return Object.keys(group).reduce(function(acc, person) {
    acc[person] = Math.round((avg - group[person]));
    return acc;
  }, {});
}
module.exports.splitTheBill = splitTheBill;
// var group = {
//     Amy: 20,
//     Bill: 15,
//     Chris: 10
// }
//
// console.log(splitTheBill(group)); // => { Amy: -5, Bill: 0, Chris: 5 }

/*
### Exponentiation
Write a function that takes two integers. The first one will be the base `b` and the second one `n` will be the exponent.
The function should return the value of `b` raised to the power `n`.
Try to solve it with recursion.
You can try first with a loop and then try to implement the recursive approach.
*/

function exp(num, base) {
  if (base === 0) {
    return 1;
  }

  return num * exp(num, base - 1);
}
module.exports.exp = exp;
// console.log(exp(5, 3)); // => 125
// console.log(exp(2, 4)); // => 16
// console.log(exp(5, 1)); // => 5
// console.log(exp(6, 0)); // => 1

/*
### Factorial
If you don't know what a factorial is, first get yourself familiarized with the concept [here](https://en.wikipedia.org/wiki/Factorial).
It's simple, the factorial of a number is all they previous integers multiplied. For example the factorial of five -factorial is expressed with an exclamation mark- `5!` is `5 * 4 * 3 * 2 * 1` which is `120`.
Write a function that expects an integer greater than 0 and returns the factorial of that number.
Write a recursive approach for this problem.
*/

function factorial(num) {
  if (num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
}
module.exports.factorial = factorial;
// console.log(factorial(5)); // => 120
// console.log(factorial(4)); // => 24
// console.log(factorial(0)); // => 1

/*
### Fibonacci
If are not familiarized with the fibonacci series, please go check it [here](https://en.wikipedia.org/wiki/Fibonacci).
Write a function that expects an integer `n` and returns the first `n` numbers of the fibonacci series.
Write an recursive approach for this problem.
*/

function fibs(n) {
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }

  var prevFibs = fibs(n - 1);
  var lastIndex = prevFibs.length - 1;

  return prevFibs.concat([prevFibs[lastIndex] + prevFibs[lastIndex - 1]]);
}
module.exports.fibs = fibs;
// console.log(fibs(3)); // => [0, 1, 1]
// console.log(fibs(7)); // => [0, 1, 1, 2, 3, 5, 8]
// console.log(fibs(1)); // => [0]

/*
### Zero Sum
Write a function that expects an array of integers and returns an array of pairs with the indexes of two numbers that sum 0.
Do not repeat the pair again in the solution.
*/

function zeroSum(nums) {
  var pairs = [];
  for (var i = 0; i < nums.length - 1; i++) {
    var firstIterationNum = nums[i];
    for (var j = i + 1; j < nums.length; j++) {
      var secondIterationNum = nums[j];
      if (firstIterationNum + secondIterationNum === 0) {
        pairs.push([i, j]);
      }
    }
  }

  return pairs;
}
module.exports.zeroSum = zeroSum;
// console.log(zeroSum([1, 5, 0, -5, 3, -1])); // => [[0, 5], [1, 3]]
// console.log(zeroSum([1, -1])); // => [[0, 1]]
// console.log(zeroSum([0, 4, 3, 5])); // => []
