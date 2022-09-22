/*
## `number-doubler.js`

Write a program that prompts the user for a number, then repeatedly doubles that number until it is greater than or equal to 100.

#### Example

```
Enter a number:
> 23

23
46
92
184
```
*/

// How do I write a program that PROMPTS the user for a NUMBER, and then STARTS until it reaches ONCE equal or more than 100?

// 1. Dependencies
// 2. Variables and the only prompt. num.
// 3. While (num <= 100) {} 

// Foundations

const prompt = require('prompt-sync')({sigint: true});

let num = Number(prompt(`Enter your desired number: `))

// Problem solving

console.log (num)

while (num <= 100) {
    num = num * 2;
    console.log (num);
}

