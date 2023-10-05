
  function hasTargetSum(arr, target) {

  // Write your algorithm here
    const seenNumbers = new Set();
  
    for (const num of arr) {
      const complement = target - num;
  
      if (seenNumbers.has(complement)) {
        return true;
      }
  
      seenNumbers.add(num);
    }
  
    return false;
  }
  

/* 
  Write the Big O time complexity of your function here
  The time complexity of this function is O(n), where n is the length of the input array. This is because we iterate through the array once, performing constant-time operations for each element.


*/

/* 
  Add your pseudocode here
  1. Initialize an empty set called `seenNumbers`.
2. Iterate through each element `num` in the input array `arr`.
   - Calculate the complement (`complement = target - num`).
   - If `complement` is found in `seenNumbers`, return true (pair found).
   - Otherwise, add `num` to `seenNumbers`.
3. If no pair is found after iterating through the entire array, return false.

*/

/*
  Add written explanation of your solution here
  The function hasTargetSum takes an array of integers (arr) and a target integer (target) as inputs. It uses a set called seenNumbers to keep track of the numbers it has encountered during the iteration.

For each element in the array, it calculates the complement needed to reach the target (target - num). It checks if this complement is already in seenNumbers. If it is, this means a pair of numbers has been found that adds up to the target, and the function returns true. If not, the current number (num) is added to seenNumbers for future reference.

If the entire array is traversed without finding a pair, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // Output: true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25));   // Output: true
console.log(hasTargetSum([1, 2, 5], 4));            // Output: false
console.log(hasTargetSum([1, 2, 3, 4], 8));         // Output: true (3 + 5 = 8)

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
