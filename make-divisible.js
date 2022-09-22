/*
## `make-divisible.js`

Write a program that prompts the user for two numberx, x and y. The program should add one to x until it is divisble by y.

#### Examples

```
Enter x: 
> 9
Enter y: 
> 1

9 is divisible by 1

Enter x: 
> 9
Enter y: 
> 2

9
10 is divisible by 2

Enter x: 
> 10
Enter y: 
> 3

10
11
12 is divisible by 3

Enter x: 
> 5
Enter y: 
> 4

5
6
7
8 is divisible by 4
```
*/

// Write a program that prompts the user for TWO numberx, x and y. The program should add one to x until it is divisible by y.

// Foundation

const prompt = require('prompt-sync')({sigint: true});

let x = Number(prompt(`First number :`))
let y = Number(prompt(`Second number :`))

// Problem solving

while (x % y != 0) {
        console.log (x);
        x++;
    }

console.log (`${x} is divisible by ${y}`);