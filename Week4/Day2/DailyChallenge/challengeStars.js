// Write a JavaScript program that recreates the pattern below.
//     Do this challenge twice: first by using one loop, then by using two nested
// for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *

let star = '*';
for (let i = 1; i < 7; i++) {
    console.log(star.repeat(i));
}
let result = '';
for (let i = 1; i < 7; i++) {
    for (let j = 1; j <= i; j++) {
        result += star;
    }
    result += '\n';
}
console.log(result);