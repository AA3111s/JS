# Javascript by [javascript.info](https://javascript.info/) notes

## Objects - the basics

### Objects

- used to store keyed collections of various data and more complex entities

created with curly braces ```{…}``` with an optional list of properties. A property is a “key: value” pair, where ```key``` is a string (also called a “property name”), and ```value``` can be anything.

![object key relation](./images/okr.png)

#### Literals and properties

```javascript
let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};

// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30

user.isAdmin = true;

// to remove a property, we can use the delete operator:

delete user.age;

// we can also use multiword property names, but then they must be quoted:

let user = {
  ...,
  "likes birds": true  // multiword property name must be quoted
};

// the last property in the list may end with a comma:

let user = {
  name: "John",
  age: 30,
}

That is called a “trailing” or “hanging” comma. Makes it easier to add/remove/move around properties, because all lines become alike.

```

#### Square brackets

```javascript
// this would give a syntax error
user.likes birds = true

// javaScript doesn’t understand that. It thinks that we address user.likes, and then gives a syntax error when comes across unexpected birds.

// the dot requires the key to be a valid variable identifier. That implies: contains no spaces, doesn’t start with a digit and doesn’t include special characters ($ and _ are allowed).

// there’s an alternative “square bracket notation” that works with any string:

 let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];
```

- square brackets also provide a way to obtain the property name as the result of any expression – as opposed to a literal string – like from a variable as follows:

```javascript
let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;
```

- the variable key may be calculated at run-time or depend on the user input. And then we use it to access the property.

for instance:

```javascript
 let user = {
  name: "John",
  age: 30
};

let key = prompt("What do you want to know about the user?", "name");

// access by variable
alert( user[key] ); // John (if enter "name")

// the dot notation cannot be used in a similar way:

 let user = {
  name: "John",
  age: 30
};

let key = "name";
alert( user.key ) // undefined
```

Why ```user[key]``` works

When you use square brackets without quotes, JavaScript evaluates what is inside the brackets first. It looks at the variable ```key```, sees that it holds the value ```"name"```, and swaps it out.

```javascript
alert(user[key]); //  "John"
```

- user[key] is translated into user["name"].

#### Computed properties

using square brackets in an object literal, when creating an object is called computed properties.

For instance:

```javascript
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"
```

The meaning of a computed property is simple: ```[fruit]``` means that the property name should be taken from ```fruit```.

So, if a visitor enters ````"apple"````, ````bag```` will become ````{apple: 5}````.

Essentially, that works the same as:

```javascript
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

// take property name from the fruit variable
bag[fruit] = 5;
```

We can use more complex expressions inside square brackets:

```javascript
let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};
```

#### Property value shorthands

When the property name is the same as the variable name, we can just write it once.

```javascript
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name); // John

// in the example above, properties have the same names as variables. The use-case of making a property from a variable is so common, that there’s a special property value shorthand to make it shorter.

// instead of name:name we can just write name, like this:

function makeUser(name, age) {
  return {
    name, // same as name: name
    age,  // same as age: age
    // ...
  };
}

// we can use both normal properties and shorthands in the same object:

let user = {
  name,  // same as name:name
  age: 30
};
```

- unlike variables which can't take names like for, let, return, etc.

- there are no limitations on property names, can be any strings or symbols (a special type for identifiers, to be covered later).

- other types are automatically converted to strings.

- for instance, a number 0 becomes a string "0" when used as a property key

> a special property named __proto__ can’t be set to a non-object value:

```javascript
let obj = {};
obj.__proto__ = 5; // assign a number
alert(obj.__proto__); // [object Object] - the value is an object, didn't work as intended
```

- the assignment to a primitive 5 is ignored.

#### Property existence test, “in” operator

- in javascript, it's possible to access any properties no matter if it exists or not, if the property doesn't exist, it will return undefined.

```javascript
let user = {};

alert( user.noSuchProperty === undefined ); // true means "no such property"

// there’s also a special operator "in" for that
"key" in object

let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist
```

- the left side of ```in``` must be a property name and quoted string
- if we omit quotes then variable should contain the actual name to be tested

```javascript
let user = { age: 30 };

let key = "age";
alert( key in user ); // true, property "age" exists
```

- the ```in``` operator exists for the one special case when comparing against undefined fails, that is when the object property exists but stores the value undefined.

```javascript
let obj = {
  test: undefined
};

alert( obj.test ); // it's undefined, so - no such property?

alert( "test" in obj ); // true, the property does exist!
```

### For..in loop

- to walk over all keys of an object

```javascript
for (key in object) {
  // executes the body for each key among object properties
}

//for instance:

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}
```

- the order of keys is not guaranteed, so don’t rely on it. In practice, modern engines enumerate object keys in the same order as they were added, but that’s not something we should rely on.
- we could use another variable name here instead of key. For instance, "for (let prop in obj)" is also widely used.

#### Ordered like an object

- integer properties are sorted, while string properties are listed in creation order.
- integer properties are those that can be converted to and from a 32-bit non-negative integer (0, 1, 2, etc.) without a change

```javascript
// explicitly converts to a number
// Math.trunc is a built-in function that removes the decimal part
alert( String(Math.trunc(Number("49"))) ); // "49", same, integer property
alert( String(Math.trunc(Number("+49"))) ); // "49", not same "+49" ⇒ not integer property
alert( String(Math.trunc(Number("1.2"))) ); // "1", not same "1.2" ⇒ not integer property
```

- integers are always sorted in ascending order

- string properties are listed in the order they were created.

for the integer values to also show up in order, we can add a non-integer property before them:

```javascript
let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1
}
```

## Object references and copying

- objects are stored and copied “by reference” unlike primitive values that are copied by their value

![referencing as cabinet analogy](./images/raca.png)

- when an object variable is copied, the reference is copied, but the object itself is not duplicated

there’s still one object, but now with two variables that reference it.
either variable can be used to access the object and modify its contents:

```javascript
let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference
```

It’s as if we had a cabinet with two keys and used one of them (admin) to get into it and make changes. Then, if we later use another key (user), we are still opening the same cabinet and can access the changed contents.

- two variables are equal if they reference the same object, even with strict equality ===

- two variables that reference different objects are not equal, even if those objects look the same

>[!NOTE]
>
>Const objects can be modified
>An important side effect of storing objects as references is that an object declared as const can be modified.
>
>For instance:
>

```javascript
const user = {
 name: "John"
};

user.name = "Pete"; // (*)

alert(user.name); // Pete
```

>It might seem that the line (*) would cause an error, but it does not. The value of user
>is constant, it must always reference the same object, but properties of that object are
>free to change.
>
>In other words, the const user gives an error only if we try to set user=... as a whole.
>
>That said, if we really need to make constant object properties, it’s also possible, but using totally different methods. We’ll mention that in the chapter Property flags and descriptors.

### Cloning and merging, Object.assign

- for cloning an object, intuitively we would loop and store the key value pairs

```javascript
let user = {
  name: "John",
  age: 30,
}

let clone = {};

for (let prop in user){
  clone[prop] = user[prop];
}
```

- or we can use Object.assign for that

```javascript
Object.assign(dest, ...sources)
```

1. The first argument dest is a target object.
2. Further arguments is a list of source objects.
3. It copies the properties of all source objects into the target dest, and then returns it as the result.

```javascript
et user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
```

- If the copied property name already exists, it gets overwritten:

```javascript
let user = { name: "John" };

Object.assign(user, { name: "Pete" });

// now user = { name: "Pete" }
```

- something about spread syntax, we'll do that later it says

#### Nested cloning

- until now we assumed that objects were primitive but they can also be a reference to another object

- in this case, cloning an object would create a reference to the same inner object, which means if we decide to change a value only in the clone object, it will also change the original object

```javascript
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 60, get the result from the other one
```

- to fix that, we use a deep clone or structured cloning algorithm, that examines each value of ```user[key]``` and, if it’s an object, then replicate its structure as well

#### Structured cloning

- the call structuredClone(object) clones the object with all nested properties.

```javascript
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = structuredClone(user);

alert( user.sizes === clone.sizes ); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 50, not related
```

- the structuredClone method can clone most data types, such as objects, arrays, primitive values.

- it also supports circular references, when an object property references the object itself (directly or via a chain or references).

For instance:

```javascript
let user = {};
// let's create a circular reference:
// user.me references the user itself
user.me = user;

let clone = structuredClone(user);
alert(clone.me === clone); // true
```

BUT WHY WOULD YOU DO THAT

- structuredClone fails when the object contains functions, DOM nodes, and some other special objects. In that case, it throws an error
- to get around these, we can use a method ```_.cloneDeep(obj)``` from the lodash library

## Garbage collection

- memory management is automatic in JavaScript. Memory is allocated when objects are created and freed when they are not needed anymore. The process of freeing memory is called garbage collection.

### Reachability

- reachability is the main concept of memory management in JS

- “reachable” values are those that are accessible or usable somehow

- There’s a base set of inherently reachable values, that cannot be deleted for obvious reasons.
  for instance:

  - The currently executing function, its local variables and parameters.
  - Other functions on the current chain of nested calls, their local variables and parameters.
  - Global variables.

// (there are some other, internal ones as well)

These values are called roots.

Any other value is considered reachable if it’s reachable from a root by a reference or   by a chain of references.

For instance, if there’s an object in a global variable, and that object has a property referencing another object, that object is considered reachable. And those that it references are also reachable. Detailed examples to follow.

- there’s a background process in the JS engine that is called garbage collector. It monitors all objects and removes those that have become unreachable.

![simple example of garbage collector](./images/seogc.png)

- if instead the object was referenced by two variables and one was set to ```null```, then the object would still have been reachable and thus not removed by the garbage collector

![interlinked object example](./images/ioe.png)

![incoming outgoing reference example](./images/iore.png)

#### Unreachable islands

- it is possible that the whole island of interlinked objects becomes unreachable and is removed from the memory.

- the source object is the same as above. Then:

```javascript
family = null;
```

- John and Ann are still linked, both have incoming references

- the former "family" object has been unlinked from the root, there’s no reference to it any more, so the whole island becomes unreachable and will be removed.

### Internal algorithms

- the basic garbage collectoin algorithm is called mark-and-sweep

- the garbage collector takes roots and “marks” (remembers) them.
- then it visits and “marks” all references from them.
- then it visits marked objects and marks their references. All visited objects are remembered, so as not to visit the same object twice in the future.
- …and so on until every reachable (from the roots) references are visited.
- all objects except marked ones are removed.

![mark and sweep 1](./images/ms_1.png)
![mark and sweep 2](./images/ms_2.png)
![mark and sweep 3](./images/ms_3.png)
![mark and sweep 4](./images/ms_4.png)

- Javascript engines run a lot of optimizations to make the garbage collection process more efficient

Some of the optimizations:

- __Generational collection__ – objects are split into two sets: “new ones” and “old ones”. In typical code, many objects have a short life span: they appear, do their job and die fast, so it makes sense to track new objects and clear the memory from them if that’s the case. Those that survive for long enough, become “old” and are examined less often.

- __Incremental collection__ – if there are many objects, and we try to walk and mark the whole object set at once, it may take some time and introduce visible delays in the execution. So the engine splits the whole set of existing objects into multiple parts. And then clear these parts one after another. There are many small garbage collections instead of a total one. That requires some extra bookkeeping between them to track changes, but we get many tiny delays instead of a big one.

- __Idle-time collection__ – the garbage collector tries to run only while the CPU is idle, to reduce the possible effect on the execution.

>[!IMPORTANT]
>
> I'M NOT SURE WHAT LINTER I'M USING BUT THIS FUCKASS LINTER THINKS ITS MORE STANDARD TO USE
> UNDERSCORES FOR STRONG STYLE THAN ASTERISKS

## Object methods, "this"

- actions are represented in JavaScript by functions in properties.

### method examples

```javascript
let user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  alert("Hello!");
};

user.sayHi(); // Hello!
```

- a function that is a property of an object is called its method.

- to use a pre-declared function as a method

```javascript
let user = {
  // ...
};

// first, declare
function sayHi() {
  alert("Hello!");
}

// then add as a method
user.sayHi = sayHi;

user.sayHi(); // Hello!
```

- since we are writing our code using objects to represent entities, this is OOP, object oriented programming

### method shorthand

- we can omit using the function keyword when declaring a method in an object literal:

```javascript

// these objects do the same

user = {
  sayHi: function() {
    alert("Hello");
  }
};

// method shorthand looks better, right?
user = {
  sayHi() { // same as "sayHi: function(){...}"
    alert("Hello");
  }
};
```

- there are subtle differences between the two syntaxes related to object inheritance but almost always the method shorthand is used in practice

### "this" in methods

- to access the object, a method can use the ```this``` keyword

```javascript
let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    alert(this.name);
  }

};

user.sayHi(); // John
```

instead of ```this.name``` we could also write ```user.name```, but that would be less flexible. If we assign user to another variable, then ```user.name``` would not work anymore, while ```this.name``` would still work.

### "this" is not bound

- the value of ```this``` is evaluated based on context and can be used in any function

```javascript
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)
```

[!NOTE]
>
> Calling without an object: this == undefined
> We can even call the function without an object at all:

```javascript
 function sayHi() {
  alert(this);
}
```

> sayHi(); // undefined
> In this case this is undefined in strict mode. If we try to access this.name, there will be an error.
>
> In non-strict mode the value of this in such case will be the global object (window in a browser, we’ll get to it later in the chapter Global object). This is a historical behavior that "use strict" fixes.
>
> Usually such call is a programming error. If there’s this inside a function, it expects to be called in an object context.

### arrow functions have no "this"

- arrow functions don't have their own this, if ```this``` is referenced then it's is taken from the outer normal function

```javascript
let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ilya
```

### summary

1. Functions that are stored in object properties are called “methods”.
2. Methods allow objects to “act” like ```object.doSomething()```.
3. Methods can reference the object as ```this```.
4. The value of ```this``` is defined at run-time.
5. When a function is declared, it may use ```this```, but that ```this``` has no value until the function is called.
6. A function can be copied between objects.
7. When a function is called in the “method” syntax: ```object.method()```, the value of ```this``` during the call is ```object```.

