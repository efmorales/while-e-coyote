/*
## `number-summer.js`

In a file called `number-summer.js` file, write a program that continually prompts the user for numbers greater than 0 until the user enters a 0 at which point the sum of all the inputted numbers is logged out.

#### Example

```
Enter some numbers (type 0 when complete):
> 20
> 10
> 3.2
> 0

Those numbers sum to 33.2
```

*/

// How do I create a program that asks the users for their inputs multiple times and, at the end, sum all the numbers that have been inputed?

// What do I need to set the foundations of this?

const prompt = require('prompt-sync')({sigint: true});

let num = Number(prompt(`Enter some numbers (type 0 when complete): `))

let sum = 0

// What do I need to create a prompt that repeats the prompt until I say it to finish?

while (num > 0) {
    sum += num;
    num = Number(prompt(`> `))
}

console.log (`Those numbers sum to ${sum}`)