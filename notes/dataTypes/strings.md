# Strings

- the internal format for strings is always UTF-16, it is not tied to the page encoding

## Quotes

- double and single quotes are boring little things with very limited standard functionality as in most common programming languages

- the backticks however are much more powerful and allow for a wider range of string manipulation and formatting options

- it allows for string interpolation, multi-line strings, and tagged templates

```javascript
function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // a list of guests, multiple line
```

## Special characters

- ```\n```, ```\r```, ```\t```, ```\b```, ```\f```, and ```\\``` are the most common special characters
- ```\uXXXX``` is used to represent a Unicode character with the hexadecimal code XXXX

## String length

```javascript 
alert( `My\n`.length ); // 3
```

> length is a property
>
> People with a background in some other languages sometimes mistype by calling str.length() instead of just str.length. That doesn’t work.
>
> Please note that str.length is a numeric property, not a function. There is no need to add parenthesis after it. Not .length(), but .length.

## Accessing characters

- to get a character at position ```pos```, use square brackets ```[pos]``` or call the method ```str.at(pos)```. The first character starts from the zero position:

```javascript
let str = `Hello`;

// the first character
alert( str[0] ); // H
alert( str.at(0) ); // H

// the last character
alert( str[str.length - 1] ); // o
alert( str.at(-1) );

let str = `Hello`;

alert( str[-2] ); // undefined
alert( str.at(-2) ); // l

//using for..of to iterate over characters of the string

for (let char of "Hello") {
  alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}
```

- if pos is negative, its counting goes from the end of the string, so -1 is the last character, -2 is the second to last, and so on.

- if there is no character at the given position, then str[pos] returns undefined, while str.at(pos) returns an empty string.

## Strings are immutable

```javascript
let str = 'Hi';

str[0] = 'h'; // error
alert( str[0] ); // doesn't work

// The usual workaround is to create a whole new string and assign it to str instead of the old one.

let str = 'Hi';

str = 'h' + str[1]; // replace the string

alert( str ); // hi
```

## Changing the case

```javascript
alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface

alert( 'Interface'[0].toLowerCase() ); // 'i' //for a single character lowercased
```

## Searching for a substring

### str.indexOf(substr, pos)

- looks for the substr in str, starting from the given position pos, and returns the position where the match was found or -1 if nothing can be found

```javascript
let str = 'Widget with id';

alert( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
alert( str.indexOf('widget') ); // -1, not found, the search is case-sensitive

alert( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)
alert( str.indexOf("id", 2) ); // 12, looking for "id" from the position 2, so the first word is skipped
```

The optional second parameter allows us to start searching from a given position.

For instance, the first occurrence of "id" is at position 1. To look for the next occurrence, let’s start the search from position 2:

```javascript
 let str = 'Widget with id';

alert( str.indexOf('id', 2) ) // 12
```

If we’re interested in all occurrences, we can run indexOf in a loop. Every new call is made with the position after the previous match:

```javascript
 let str = 'As sly as a fox, as strong as an ox';

let target = 'as'; // let's look for it

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( `Found at ${foundPos}` );
  pos = foundPos + 1; // continue the search from the next position
}
```

The same algorithm can be layed out shorter:

```javascript
 let str = "As sly as a fox, as strong as an ox";
let target = "as";

let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}
```

- str.lastIndexOf(substr, position)
  - There is also a similar method str.lastIndexOf(substr, position) that searches from the end of a string to its beginning.

  - It would list the occurrences in the reverse order.
