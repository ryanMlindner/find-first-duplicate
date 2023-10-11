function findFirstDuplicate(arr) {
  // type your code here
  let compArr = []
  let sol = -1
  //not using foreach because it cant be ended prematurely(afaik)
  for (index = 0; index < arr.length; index++){
  let element = arr[index]
    if (compArr.includes(element)) {
      sol = element
      break
    }
    else {compArr.push(element)}
  }
  return sol;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
/**
 * given an array of integers, find the first instance of a repeated number, or return -1 if none
 * min n time complexity? have to go through the whole array once excepting edge cases
 * where theres a repeat in the beginning of the array, then the case is trivial anyway
 * 
 * iterate over the array, storing unique values
 * compare each value in the array to the previous uniques, if it matches
 * return that value
 * if you go through the whole array without finding a match
 * return -1
 */
// And a written explanation of your solution
/**
 * theres definitely a more clever solution to this, but brute forcing seems to be fine
 * with a problem this simple. Iterating over the whole array is an easy way to find a double,
 * theres another easier to write solution that would be ~equal or less efficient depending
 * on the language written in, making a set first and then if the set is shorter than the
 * array, the array has doubles.
 * however, iterating over and making a new array to compare as you go works just fine, 
 * assuming the test cases dont have an array that is larger than 1E+9 or something
 * considering how fast the clone went with my slow internet, it does not
 */
