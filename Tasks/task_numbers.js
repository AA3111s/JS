// Create a function readNumber which prompts for a number until the visitor
//  enters a valid numeric value.

// The resulting value must be returned as a number.

// The visitor can also stop the process by entering an empty line or pressing “CANCEL”. 
// In that case, the function should return null.

function readNumber(){
    let number;
    do {
        number = prompt("Enter a value: ", 0);
    }
    while(!isNumber(number));

    if (number === null || number === ' '){
        return null;
    } else return +number;
}



// Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

// Any number from the interval min..max must appear with the same probability.

// Examples of its work:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5


// There are many correct solutions to the task. One of them is to adjust interval borders. To ensure the same intervals, we can generate values from 0.5 to 3.5, thus adding the required probabilities to the edges:

 function randomInteger(min, max) {
  // now rand is from  (min-0.5) to (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

alert( randomInteger(1, 3) );

// An alternative way could be to use Math.floor for a random number from min to max+1:

 function randomInteger(min, max) {
  // here rand is from min to (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

alert( randomInteger(1, 3) );

// Now all intervals are mapped this way:

// values from 1  ... to 1.9999999999  become 1
// values from 2  ... to 2.9999999999  become 2
// values from 3  ... to 3.9999999999  become 3
// All intervals have the same length, making the final distribution uniform.


// The built-in function Math.random() creates a random value from 0 to 1 (not including 1).

// Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

// Examples of its work:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525


// We need to “map” all values from the interval 0…1 into values from min to max.

// That can be done in two stages:

// If we multiply a random number from 0…1 by max-min, then the interval of possible values increases 0..1 to 0..max-min.
// Now if we add min, the possible interval becomes from min to max.
// The function:

 function random(min, max) {
  return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );