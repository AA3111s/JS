# Javascript by [javascript.info](https://javascript.info/) (notes)

- We use camelCase as a variable naming convention in Javascript
- ```.getElementById``` and ```.log``` are functions that are hooked onto the document object and console object and therefore called methods.
- methods are functions that are hooked to objects

## The DOM

- Short for Document Object Model
- basically how we use javascript to modify our website
- the document keyword in javascript is of the datatype object
- model is the representation of the actual HTML element in javascript

## Strings

- the strings can be enclosed in either single or double quotes, both works
- two strings concatenate with the '+' sign in javascript
- the concatenation does not include any space in between the strings

- for concepts that needs to be searched online, adding MDN at the end of the search query helps a ton

## "use strict”

- The directive looks like a string: "use strict" or 'use strict'. When it is located at the **top** of a script, the whole script works the “modern” way.
- "use strict" can be put at the beginning of a function. Doing that enables strict mode in that function only.
- not necessary to use as the modules, etc enable it automatically

## Variables

- multiple variables in this multiline style or even in the “comma-first” style:

```javascript
let user = 'John',
  age = 25,
  message = 'Hello';

 let user = 'John'
  , age = 25
  , message = 'Hello';
```

- The name must contain only letters, digits, or the symbols ```$``` and ```_```.
- The first character must not be a digit.
- ```let```, ```class```, ```return```, and ```function``` are reserved.

## Constants

- ```const``` keyword is used to declare constsants
- for hard-coded values we use all caps constant naming

## Data Types

- Javascript is “dynamically typed”, meaning that there exist data types, but variables are not bound to any of them.
- spcial numeric values in Javascript, ```Infinity```, ```-Infinity``` and ```NaN```, they mean what their names are with ```NaN``` representing computational error which is the result of an incorrect or an undefined mathematical operation.
- Any operation on ```NaN``` returns ```NaN```.
- So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).
- Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:

```javascript
let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3

<------------------------------------------------------------>

let name = "Ilya";

// the expression is a number 1
alert( `hello ${1}` ); // hello 1

// the expression is a string "name"
alert( `hello ${"name"}` ); // hello name

// the expression is a variable, embed it
alert( `hello ${name}` ); // hello Ilya
```

- The "null" value, it’s just a special value which represents “nothing”, “empty” or “value unknown”.
- The "undefined" value, the meaning of undefined is “value is not assigned”.

```javascript
let age;

alert(age); // shows "undefined"
```

### Primitive

- called primitive as these can store only one thing, as in could be a string or number
- ```number```, (2^53-1) to -(2^53-1) (technically can store larger numbers but precision errors might occur as the value might not fit in the 64 bit storage)
- ```BitInt```, used to represent numbers of arbritary length, add ```n``` at the end of the digits to represent it as BigInt, ```2347347502387054897n```, used in cryptograhy and microsecond-precision timestamps.
- ```string```, could be empty, one character or as many
- ```boolean```, true or false
- ```"null"```
- ```"undefined"```

- ```object```, are used to store collections of data and more complex entities.
- ```symbol```, type is used to create unique identifiers for objects.

### typeof operator

- returns the type of the operand.

```javascript
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
```

- Math is a built-in object that provides mathematical operations.
- The result of typeof null is "object". That’s an officially recognized error in typeof, coming from very early days of JavaScript and kept for compatibility. Definitely, null is not an object. It is a special value with a separate type of its own. The behavior of typeof is wrong here.
- alert is a function. Functions belong to the object type. But typeof treats them differently, returning "function". That also comes from the early days of JavaScript. Technically, such behavior isn’t correct, but can be convenient in practice.
- typeof(x) and typeof x are the same thing

## Interaction

### alert

- it shows a message and waits for the user to press “OK”.
- The mini-window with the message is called a modal window. The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, etc, until they have dealt with the window. In this case – until they press “OK”.

### prompt

- it shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel. Accepts two arguments.

```javascript
result = prompt(title, [default]);
```

- ```title``` the text to show the visitor. ```default``` an optional second parameter, the initial value for the input field.
- the call to prompt returns the text from the input field or null if the input was canceled.

### confirm

- the function confirm shows a modal window with a question and two buttons: OK and Cancel.
- the result is true if OK is pressed and false otherwise.

```javascript
let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed
```

## Type Conversions

### String(value)

- is used to convert the value to string

```javascript
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string
```

- String conversion is mostly obvious. A false becomes "false", null becomes "null", etc.

### Numeric conversion

- these happen automatically

```javascript
alert( "6" / "2" ); // 3, strings are converted to numbers
```

- can use the ```Number(value)``` function to explicitly convert a value to a number:

```javascript
let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number
```

- Explicit conversion is usually required when we read a value from a string-based source like a text form but expect a number to be entered.

- If the string is not a valid number, the result of such a conversion is ```NaN```. For instance:

```javascript
let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, conversion failed
```

![numeric conversion rules table](./images/ncrt.png "numeric conversion rules table")

```javascript
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0
```

### Boolean conversion

- performed explicitly with a call to Boolean(value).

The conversion rule:

- Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false. Other values become true.

```javascript
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
```

Please note: the string with zero "0" is true, in JavaScript, a non-empty string is always true.

```javascript
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)
```

## Basic operators, maths

- operands can also be reffered to as arguments
- unary refers to an operator that works with one operand and binary operators are those that work with two operands

### Maths

The following math operations are supported:

- Addition +,
- Subtraction -,
- Multiplication *,
- Division /,
- Remainder %,
- Exponentiation **.

only the (+) operator concatenates strings on being used with them, all other operators convert the string into numbers **if possible**

#### Unary +

- if the operand is not a number, the unary plus converts it into a number

```javascript
// No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0
```

It actually does the same thing as Number(...), but is shorter.

The need to convert strings to numbers arises very often. For example, if we are getting values from HTML form fields, they are usually strings. What if we want to sum them?

The binary plus would add them as strings:

```javascript
let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5
```

### Operator Precendence

| Precedence | Name | Sign |
| :---------------- | :------: | ----: |
| 14 | unary plus | + |
| 14 | unary negation | - |
| 13 | exponentiation | ** |
| 12 | multiplication | * |
| 12 | division | / |
| 11 | addition | + |
| 11 | subtraction | - |
| … | … | … |
| 2 | assignment | = |
| … | … | … |

As we can see, the “unary plus” has a priority of 14 which is higher than the 11 of “addition” (binary plus). That’s why, in the expression "+apples + +oranges", unary pluses work before the addition.

If the result of increment/decrement is not used, there is no difference in which form to use:

```javascript
let counter = 0;
counter++;
++counter;

alert( counter ); // 2, the lines above did the same
```

If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:

```javascript
let counter = 0;
alert( ++counter ); // 1
```

If we’d like to increment a value but use its previous value, we need the postfix form:

```javascript
 let counter = 0;
alert( counter++ ); // 0
```

### Bitwise operators

Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

- AND ( & )
- OR ( | )
- XOR ( ^ )
- NOT ( ~ )
- LEFT SHIFT ( << )
- RIGHT SHIFT ( >> )
- ZERO-FILL RIGHT SHIFT ( >>> )

### Comma (very rarely used)

The comma operator allows us to evaluate several expressions, dividing them with a comma ```,```. Each of them is evaluated but only the result of the last one is returned.

```javascript
let a = (1 + 2, 3 + 4);

alert( a ); // 7 (the result of 3 + 4)
```

>[!TIP]
>Please note that the comma operator has very low precedence, lower than =, so parentheses are important in the example above.
>Without them: a = 1 + 2, 3 + 4 evaluates + first, summing the numbers into a = 3, 7, then the assignment operator = assigns a = 3, and the rest is ignored. It’s like (a = 1 + 2), 3 + 4.

## Comparisons

### String Comparison

- strings are compared lexicographically, in other words, compared word-by-word

```javascript
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true
```

- the strings are compared according to the internal encoding table JavaScript uses (Unicode).

When comparing values of different types, JavaScript converts the values to numbers.

For example:

```javascript
 alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1
```

It is possible that at the same time:

Two values are equal.
One of them is true as a boolean and the other one is false as a boolean.
For example:

```javascript
 let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!
```

### Strict Equality

A regular equality check == has a problem. It cannot differentiate 0 from false:

```javascript
alert( 0 == false ); // true
```

The same thing happens with an empty string:

```javascript
alert( '' == false ); // true
```

This happens because operands of different types are converted to numbers by the equality operator ```==```. An empty string, just like false, becomes a zero.

What to do if we’d like to differentiate ```0``` from ```false```?

A strict equality operator ```===``` checks the equality without type conversion.

In other words, if ```a``` and ```b``` are of different types, then ```a === b``` immediately returns false without an attempt to convert them.

There is also a “strict non-equality” operator !== analogous to !=.

### Comparison with null and undefined

The values null and undefined are equal ```==``` to themselves and each other, but do not equal any other value.

For maths and other comparisons ```< > <= >=```
null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

```javascript
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
```

Mathematically, that’s strange. The last result states that “null is greater than or equal to zero”, so in one of the comparisons above it must be true, but they are both false.

The reason is that an equality check ```==``` and comparisons ```> < >= <=``` work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) ```null >= 0``` is true and (1) ```null > 0``` is false.

On the other hand, the equality check ```==``` for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) ```null == 0``` is false.

## Conditional branching: if, '?'

- if
- else
- else if
- ?, the only ternary operator in javascript

```javascript
let result = condition ? value1 : value2;

let accessAllowed = (age > 18) ? true : false;
```

Multiple ?

```javascript
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
```

## Logical operators

- || (OR)
- && (AND)
- ! (NOT)
- ?? (Nullish Coalescing)

### || OR

a chain of OR || returns the first truthy value or the last one if no truthy value is found.

For instance:

```javascript
alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)
```

1. Getting the first truthy value from a list of variables or expressions.

    For instance, we have ```firstName```, ```lastName``` and ```nickName``` variables, all optional    (i.e. can be undefined or have falsy values).

    Let’s use ```OR ||``` to choose the one that has the data and show it (or "Anonymous" if nothing    set):

    ```javascript
    let firstName = "";
    let lastName = "";
    let nickName = "SuperCoder";

    alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder
    ```

    If all variables were falsy, "Anonymous" would show up.

2. Short-circuit evaluation.

    Another feature of ```OR ||``` operator is the so-called “short-circuit” evaluation.

    It means that ```||``` processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument.

    The importance of this feature becomes obvious if an operand isn’t just a value, but an expression with a side effect, such as a variable assignment or a function call.

    In the example below, only the second message is printed:

    ```javascript
    true || alert("not printed");
    false || alert("printed");
    ```

    In the first line, the ```OR ||``` operator stops the evaluation immediately upon seeing true, so the alert isn’t run.

    Sometimes, people use this feature to execute commands only if the condition on the left part is falsy.

### && AND

```AND``` returns the first falsy value or the last value if none were found.

The rules above are similar to ```OR```. The difference is that ```AND``` returns the first falsy value while ```OR``` returns the first truthy one.

```javascript
// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0
```

- AND has a higher precendence than OR

### ! NOT

A double NOT !! is sometimes used for converting a value to boolean type:

```javascript
alert( !!"non-empty string" ); // true
alert( !!null ); // false
```

That is, the first NOT converts the value to boolean and returns the inverse, and the second NOT inverses it again. In the end, we have a plain value-to-boolean conversion.

- can also be done using Boolean()

```javascript
alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false
```

- the precendence of NOT is the highest among all logical operators

## Nullish coalescing operator '??'

- This is a recent addition to the language. Old browsers may need polyfills.

- ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.

We can rewrite ```result = a ?? b``` using the operators that we already know, like this:

```javascript
result = (a !== null && a !== undefined) ? a : b;
```

- common use case is to provide with a default value

```javascript

let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined)

let user = "John";

alert(user ?? "Anonymous"); // John (user is not null/undefined)
```

Let’s say we have a user’s data in variables firstName, lastName or nickName. All of them may be not defined, if the user decided not to fill in the corresponding values.

```javascript
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder
```

```javascript
let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000
```

since ```*``` has a higher precedence than ```??```, the parentheses are required in the example above, otherwise it would be evaluated as ```height ?? (100 * width) ?? 50```, which is not what we want.

## Loops: while and for

- while
- do..while
- for
- break
- continue

Please note that syntax constructs that are not expressions cannot be used with the ternary operator ?. In particular, directives such as break/continue aren’t allowed there.

For example, if we take this code:

```javascript
if (i > 5) {
  alert(i);
} else {
  continue;
}
```

…and rewrite it using a question mark:

```javascript
(i > 5) ? alert(i) : continue; // continue isn't allowed here
```

…it stops working: there’s a syntax error.

This is just another reason not to use the question mark operator ? instead of if.

### Labels for break/continue

A label is an identifier with a colon before a loop. It allows us to break out of a specific loop from nested loops.

```javascript
labelName: for (...) {
  ...
}

outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}

alert('Done!');
```

## Switch Statement

The switch statement is an alternative to if..else when we need to compare the same value with many different variants.

```javascript
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}
```

- Both switch and case allow arbitrary expressions.

```javascript
let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}
```

Grouping of cases

```javascript
let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}
```

- the equality check is strict when comparing switch value with case values

## Functions

- function declaration

```javascript
function name(parameter1, parameter2, ... parameterN) {
 // body
}
```

- local variables
- outer variables
- parameters

A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
An argument is the value that is passed to the function when it is called (it’s a call time term).

- default values for parameters

```javascript
function showMessage(from, text = "no text given") {
  alert(from + ": " + text);
}

showMessage("Ann"); // Ann: no text given


function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}
```

- return

A function with an empty return or without it returns undefined
If a function does not return a value, it is the same as if it returns undefined:

```javascript
function doNothing() { /* empty */ }

alert( doNothing() === undefined ); // true
An empty return is also the same as return undefined:

function doNothing() {
  return;
}

alert( doNothing() === undefined ); // true
```

- "get…" – return a value,
- "calc…" – calculate something,
- "create…" – create something,
- "check…" – check something and return a boolean, etc.

### Function Expressions

- allows us to create a new function in the middle of any expression.

```javascript
let sayHi = function() {
  alert( "Hello" );
};
```

- we can omit giving a name to function expressions, they are called anonymous functions

### Callback functions

```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
```

- The arguments showOk and showCancel of ask are called callback functions or just callbacks.

```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
    );
```

- A Function Expression is created when the execution reaches it and is usable only from that moment.

- A Function Declaration can be called earlier than it is defined. (global functions)

```javascript
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // ok now
```

Scope differences between Function Declarations and Function Expressions through above example

## Arrow functions, the basics

```javascript
let func = (arg1, arg2, ..., argN) => expression;```

This creates a function func that accepts arguments arg1..argN, then evaluates the expression on the right side with their use and returns its result.

In other words, it’s the shorter version of:

```javascript
let func = function(arg1, arg2, ..., argN) {
  return expression;
};
```

- arrow functions could be used just like function expressions

```javascript
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();
```

- when there's no arguments, we should use empty parentheses

### Multiline arrow functions

If we need more than one expression, we can put them into curly braces {...}, just like in a regular function. In this case, we should use an explicit return if we want to return something.

```javascript
let sum = (a, b) => {
  let result = a + b;
  return result;
};
```

## Javascript specials

- revision of the basics
