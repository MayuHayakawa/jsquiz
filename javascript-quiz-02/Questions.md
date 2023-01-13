###### Question 1: What's the output?

```js
function greeting() {
console.log(name);
console.log(age);
var name = "Hana";
let age = 21;
}

greeting();

// A: Hana and undefined
// B: Hana and ReferenceError
// C: ReferenceError and 21
// D: undefined and ReferenceError

// Ans: Hana and ReferenceError (B)
// Short explanation: var can be used everywhere be created but let need to be created before call it.
```
###### Question 2: What's the output?

```js
+true;
!"Lydia";

// A: 1 and false
// B: false and NaN
// C: false and false

// Ans: 1 and false (A)
// Short explanation: true == 1 then it's positive value, !value = false
```
###### Question 3: What's the output?

```js
function sum(a, b) {
return a + b;
}

sum(1, "2");

// A: NaN
// B: TypeError
// C: "12"
// D: 3

// Ans: 3 (D)
// Short explanation:
```
###### Question 4: What's the output?

```js
let number = 0;
console.log(number++); //return number before +1 -> 0
console.log(++number); //return number after +1 -> 1+1 -> 2
console.log(number);

// A: 1 1 2
// B: 1 2 2
// C: 0 2 2
// D: 0 1 2

// Ans: (C)
// Short explanation: i++ returns i and i becomes i+1, ++i retuens i+1 and becomes i+1
```

###### Question 5: What's the output?

```js
!!null; //not not null -> false
!!""; //not not "" -> false
!!1; //not not 1 -> true

// A: false true false
// B: false false true
// C: false true true
// D: true true false

// Ans: (B)
// Short explanation: double not(!!) changes value bloolean type.

```
###### Question 6: What's the output?

```js
console.log(3 + 4 + "5");

// A: "345"
// B: "75"
// C: 12
// D: "12"

// Ans: (B)
// Short explanation: first number 3 + number 4 = number 7, then number 7 + string 5 is string 7 + 5. It's 75
```
###### Question 7: What's the value of num?

```js
const num = parseInt("7*6", 10);

// A: 42
// B: "42"
// C: 7
// D: NaN

// Ans: (C)
// Short explanation: parseInt() is make first argument changes number from string(this case is just 7) referd second argument as radix.
```

###### Question 8:

Write a function indexOfIgnoreCase taking two strings
and determining the first occurrence of the second
string in the first string. The function should be
case insensitive.

Example: indexOfIgnoreCase('bit','it') and
indexOfIgnoreCase('bit','IT') should return 1.

```js
//Hint
// Change s1 and s2
// first to lowercase.
// Then use the
// indexOf method.
function indexOfIgnoreCase(s1, s2) {
    let s1ToLowercase = s1.toLowerCase();
    let s2ToLowercase = s2.toLowerCase();
    return s1ToLowercase.indexOf(s2ToLowercase);
}
```

###### Question 9:
Write a function firstChar, which returns the
first character that is not a space when a string
is passed.

Example: firstChar(' Rosa Parks ') should return 'R'.

```js
//Hint:
// Trim first.
// Then use the
// charAt method.
function firstChar(text) {
    return (text.trim()).charAt(0);
}
```

###### Question 10:
Write a function normalize, that replaces '-'
with '/' in a date string.

Example: normalize('20-05-2017') should return
'20/05/2017'.

```js
function replace(data) {
    return data.replace(/-/g,'/');
}
```

