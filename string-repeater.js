/*
## `string-repeater.js`

Write a program that takes a string and 'repeats it' until the string's length is greater than or equal to 10.

#### Examples

```
Enter a string:
> abc

abc
abcabc
abcabcabc
abcabcabcabc
```

```
Enter a string:
> a

a
aa
aaa
aaaa
aaaaa
aaaaaa
aaaaaaa
aaaaaaaa
aaaaaaaaa
aaaaaaaaaa
```
*/

// How might we create a program that takes a string and 'repeats it' until the string's length is greater than or equal to 10.

// str + str


// Foundations

const prompt = require('prompt-sync')({sigint: true});

let str = String(prompt(`Enter your desired words: `));

// Problem solving

while (str.length <= 10) {
    console.log(str+str);
    str = str + str;
}
