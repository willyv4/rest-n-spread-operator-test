// refactor this function with ES2015
function filterOutOdds(arr) {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

//refactored
const filterOutOddsRefactored = (...nums) =>
  nums.filter((num) => num % 2 === 0);

// Write a function called findMin
// that accepts a variable number of
// arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operator.

// first solution
const findMin = (...nums) =>
  nums.reduce((acc, currVal) => (currVal < acc ? currVal : acc));

//second
const findMin2 = (...nums) => Math.min(...nums);

// Write a function called mergeObjects
// that accepts two objects and returns
// a new object which contains all the
// keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// Write a function called doubleAndReturnArgs
// which accepts an array and a variable number
// of arguments. The function should return a
// new array with the original array values and
// all of additional arguments doubled.

const doubleAndReturnArgs = (arr, ...num) => [
  ...arr,
  ...num.map((val) => val * 2),
];

// For this section, write the following
// functions using rest, spread and refactor
// these functions to be arrow functions!
// Make sure that you are always returning
// a new array or object and not modifying
// the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

// first solutionion ???
const removeRandom = (items) => {
  let itemsCopy = [...items];
  let random = Math.floor(Math.random() * itemsCopy.length);
  return itemsCopy.filter((val, index) => index !== random);
};

/// second
const removeRandom2 = (items) => {
  let index = Math.floor(Math.random() * items.length);
  return [...items.slice(0, index), ...items.slice(index + 1)];
};

/** Return a new array with
 * every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with 
 * all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
  let newObj = { ...obj1, ...obj2 };
  return newObj;
};

/** Return a new object with a modified key and value. */
const update1 = (obj, key, val) => {
  const newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};

// or

const update = (obj, key, val) => ({ ...obj, [key]: val });

console.log(update({ 1: 2 }, "name", "will"));
