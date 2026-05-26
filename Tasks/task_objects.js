let user = {}
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


// Write the function isEmpty(obj) which returns true if the object has no properties,
//  false otherwise.

// Should work like that:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

function isEmpty(obj){
    for(let key in obj){
        return true;
    }
    return false;
}


// We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
// Write the code to sum all salaries and store in the variable sum. Should be 390
//  in the example above.

// If salaries is empty, then the result must be 0.

for( let prop in salaries){
    let sum = salaries.Ann + salaries.John + salaries.Pete;
}
return sum = 0;

// i think my code is a little wrong as it's a for loop and it'd loop 3 times
// while im' summing all the properties at once

// ideal solution
let sum = 0;
for(let prop in salaries){
    sum += salaries[key];
}







// Create a function multiplyNumeric(obj) that multiplies all numeric
//  property values of obj by 2.
// For instance:
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
multiplyNumeric(menu);
// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
// Please note that multiplyNumeric does not need to 
// return anything. It should modify the object in-place.
// P.S. Use typeof to check for a number here.

function multiplyNumeric(obj){
    for(let prop in obj)
        if(typeof(prop) == typeof(1)){
            prop *= 2;
        }
}

//spent ig like 10 - 15 mins to figure out i was missing out on the most basic concept here

/*
so in the above code, the core problem is, in terms of the cabinet analogy, when i'm 
writing let prop in obj, that is i'm pointing at a file in the cabinet, object's key,
not the value, the value is INSIDE the file, so to point at the value the syntax is the
square bracket obj[key] this then points to the value IN the file
*/

// so likewise the correct code would be

function multiplyNumeric(obj){
    for( let prop in obj){
        if(typeof(obj[prop]) == number){
            obj[prop] *= 2;
        }
    }
}
