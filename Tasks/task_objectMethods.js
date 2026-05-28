// Here the function makeUser returns an object.

// What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result


// short answer error big answer, had to understand from gemini

// the problem with the code is, object literals {...} do not create a new scope for 
// this, only functions do

// we call makeUser()
// since we called it as a regular function and not as something.makeUser() the this inside becomes
// undefined in strict mode or in global window object 

// so the object being returned looks like this 

user = {
  name: "John",
  ref: undefined
};

// when we try to call user.ref.name, we are essentially typing undefined.name, which 
// causes JavaScript to crash.




// ## Example 2: Why `user.ref().name` Works

// Now look at the fix:


function makeUser() {
  return {
    name: "John",    
    ref() {
      return this;
    }
  };
}

let user = makeUser();
alert( user.ref().name ); //  "John"

// ### What Changed?

// Instead of making `ref` a static property, we turned `ref()` into a **method** 
// (a function inside an object).

// 1. You call `makeUser()`, which returns the object. At this point, the
//  function `ref()` is just sitting there, waiting.
// 2. Then, you execute this line: `user.ref()`
// 3. This is the magic moment. You called `ref` using **dot notation** (`user.ref()`).

// JavaScript looks at the dot and says: "Aha! The function `ref` 
// is being called as a method on the `user` object. Therefore, `this` inside `ref` 
// must point to `user`."

// Because `this` successfully points to `user`, returning `this` 
// means it returns the whole object, allowing you to successfully grab `.name`.


// kinda understood something up there

// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties 
// with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.


let calculator = {
  read(){
    let a = +prompt("Enter a value", null);
    let b = +prompt("Enter another value", null);
  },
  sum(a, b){
    return a + b;
  },
  mul(a, b){
    return a * b;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );



// OMFG OMFG OMFG LESSGOGOGOGOGOO I WAS BREAKING MY HEAD FOR SO LONG THIS WAS SO FUCKING SIMPLEEEEEE

  let calculator = {
  read(){
    let a = +prompt("Enter a value", null);
    let b = +prompt("Enter another value", null);
    calculator.a = a;
    calculator.b = b;
  },
  sum(a, b){
    return calculator.a + calculator.b;
  },
  mul(a, b){
    return calculator.a * calculator.b;
  }
};

// so basically i went through all the notes and i saw that this tutorial was all about 
// this and methods but nothing about properties or how i could save something as a 
// property from a method (function) so i just tried the classic way to save 
// them as a property and boom that was the solution, i mean so far it passes all the test 
// cases so 

let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

// uhm okay, that is interesting. i was close.
// so basically instead of using calculator i should use this, as was the point 
// in one of the above sections, since if i use calculator and then copy it to another variable
// it'll be referenced and then i'll be changing original values while this 
// provides the flexibility 




// There’s a ladder object that allows you to go up and down:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};
// Now, if we need to make several calls in sequence, we can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
// Modify the code of up, down, and showStep to make the calls chainable, like this:

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
// Such an approach is widely used across JavaScript libraries.


 let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
};

// the above is called method chaning, Fluent API


// By ending every method with return this;, you are essentially saying: "Once you are 
// done modifying the data, hand the whole object back to me so I can do something else with
// it immediately."

// 1. `ladder.up()`

// What happens inside: `this.step++` changes `step` from `0` to `1`.
// What it returns: It returns the `ladder` object.
// What JavaScript sees now: `ladder.up().down().showStep()...` becomes `ladder.down().showStep()...`



ladder
  .up()
  .up()
  .down()
  .showStep();

  // a more standard way of chaining.
  