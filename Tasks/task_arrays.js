// Let’s try 5 array operations.

// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle with “Classics”. Your code for finding the middle value should work
// for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.
// The array in the process:

// Jazz, Blues
// Jazz, Blues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll

let ar = ["Jazz", "Blues"];
ar.push("Rock-n-Roll");

ar.at(ar.length/2) = "Classics";
ar[Math.floor((styles.length - 1) / 2)] = "Classics";

alert(ar.pop());
ar.shift("Rap", "Reggae");



// Write the function sumInput() that:

// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.


function sumInput(){
    while(prompt != undefined || prompt != num){
    let values = +prompt("Enter the value: ")
    }
    let sum = 0;
    for(let i = 0; i < values; i++){
        sum += values[i];
    }
}



// Please note the subtle, but important detail of the solution.
//  We don’t convert value to number instantly after prompt, because after value = +value 
//  we would not be able to tell an empty string (stop sign) from the zero (valid number). 
//  We do it later instead.

 function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("A number please?", 0);

    // should we cancel?
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert( sumInput() );




// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

// The task is: find the contiguous subarray of arr with the maximal sum of items.

// Write the function getMaxSubSum(arr) that will return that sum.

// For instance:

// getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (take all)
// If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:

// getMaxSubSum([-1, -2, -3]) = 0
// Please try to think of a fast solution: O(n2) or even O(n) if you can.


function getMaxSubSum([]){
    let sum = 0;
    for(let i = 0; i < [].length; i++){
        if(sum < [i]){
            sum += [i];
        }
    }
}

// KADANE's ALGORITHM


function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0
