/*
## `fibonacci.js`

Write a program, `fibonacci.js` that accepts a number, `n`, from the user and consequently logs the first `n` values in the fibonacci sequence.

The fibonacci sequence starts with 0 then 1. Each subsequent value can be obtained by summing the previous two values:
```
0 1 1 2 3 5 8 13 21 34 ...
```

#### Example

```
Enter a value for "n":
> 9

0
1
1
2
3
5
8
13
21
```
*/

// How might we create a Fibonacci sequence that goes as long as the number the user inputs?

// Put the dependency formula

const prompt = require('prompt-sync')({sigint: true});

// Create a number prompt variable

let userInput = Number(prompt(`Enter the max sequence of Fibonacci:`))

// How many variables do we need to work with?
// A Fibonacci starts with 0 and 1
// then the value of the second variable will be summed to the first one (n = n1 + n2) to recreate a fibonnaci

let n1 = 0; 
let n2 = 1;
let n = 0;
let i = 2; // this variable is for the LOOP. It has a value of two to account for the first two console.logs bellow

// this has to loop indefinetely until it gets until the number the USER put at the beginning 

console.log(n);
console.log(n+1);

n = n1 + n2;

while (i < userInput) {
    console.log(n)
    n1 = n2;
    n2 = n;
    n = n1 + n2;
    i = i + 1
} if (i <= 2) {
    console.log(`Please input a number greater than 2 to see the potential of this program!`)
}



// Fn = fn.1 + fn.2




