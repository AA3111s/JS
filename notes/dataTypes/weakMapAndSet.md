# WeakMap and WeakSet

```js
let john = { name: "John" };

// the object can be accessed, john is the reference to it

// overwrite the reference
john = null;

// the object will be removed from memory
```

- as we know the garbage collector removes values that are are not reachable
- properties of objects or elements of an array are considered reachable while the data strcuture exists on the memory

```js
let john = { name: "John" };

let array = [ john ];

john = null; // overwrite the reference

// the object previously referenced by john is stored inside the array
// therefore it won't be garbage-collected
// we can get it as array[0]
```

- if we use an object as the key in a regular Map, then while the Map exists, that object exists as well. It occupies memory and may not be garbage collected.

```js
let john = { name: "John" };

let map = new Map();
map.set(john, "...");

john = null; // overwrite the reference

// john is stored inside the map,
// we can get it by using map.keys()
```

- WeakMaps doesn't prevent garbage collection of key-objects

## WeakMap

```js
let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // works fine (object key)

// can't use a string as the key
weakMap.set("test", "Whoops"); // Error, because "test" is not an object
```

- WeakMap only accepts objects as keys, not primitive values

```js
let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null; // overwrite the reference

// john is removed from memory!
```

WeakMap does not support iteration and methods keys(), values(), entries(), so there’s no way to get all keys or values from it.

WeakMap has only the following methods:

- weakMap.set(key, value)
- weakMap.get(key)
- weakMap.delete(key)
- weakMap.has(key)

>Why such a limitation? That’s for technical reasons. If an object has lost all other references (like john in the code above), then it is to be garbage-collected automatically. But technically it’s not exactly specified when the cleanup happens.
>
>The JavaScript engine decides that. It may choose to perform the memory cleanup immediately or to wait and do the cleaning later when more deletions happen. So, technically, the current element count of a WeakMap is not known. The engine may have cleaned it

### Usecase: additional data

- main area of application being additional data storage
