// ... on the right hand side of the equation is spread operator 
// while left hand side of the equation is rest parameter


function sum (...args){
    let sum = 0;

    for (let arg of args) sum += arg;
    return sum ;
       
}

console.log(sum(5, 2, 5, 2, 6, 8, 3, 7, 2, 6, 2, 7, 2, 6));

y = [3,5,2];

sum (y);
console.log(sum(...y));

const fruits = ["apple", "Grape", "Banana", "Orange","Mango"];
let [apple, grape, ...others] = fruits;

console.log(apple, grape,others);
