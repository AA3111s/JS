// Is it possible to create functions A and B so that new A() == new B()?

function A() { 
    // ... 
    }
function B() { 
    // ... 
    }

let a = new A();
let b = new B();

alert( a == b ); // true
// If it is, then provide an example of their code.

/*
Yes, it’s possible.

If a function returns an object then new returns it instead of this.

So they can, for instance, return the same externally defined object obj:

 let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true 
*/

// Create a constructor function Calculator that creates objects with 3 methods:

// read() prompts for two values and saves them as object properties with names a and b
// respectively.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.
// For instance:

function Calculator() {
    this.read = function() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
        return this.a, this.b;
    },
    this.sum = function() {
        return this.a + this.b;
    },
    this.mul = function() {
        return this.a * this.b;
    }
}
let calculator = new Calculator();
calculator.read();

alert( "Sum = " + calculator.sum() );
alert( "Mul = " + calculator.mul() );

//absolutely correct piecec of code, can remove the return statement in read() method,
// because the properties a and b are already saved in the object, and can be 
// accessed by sum() and mul() methods.


/*
Create a constructor function Accumulator(startingValue).

Object that it creates should:

Store the “current value” in the property value. The starting value is set to the 
argument of the constructor startingValue.
The read() method should use prompt to read a new number and add it to value.
In other words, the value property is the sum of all user-entered values with 
the initial value startingValue.

Here’s the demo of the code:
*/

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt('How much to add?', 0);
    }
};

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values


// i created read() as a standalone method in the accumulator object
// but that threw errors because it was trying to access the value property of the 
// accumulator object, which is not defined in the global scope. By defining read() 
// as a method within the Accumulator constructor, it has access to the value property 
// through the this keyword, allowing it to properly update the value when read() is called.

// done