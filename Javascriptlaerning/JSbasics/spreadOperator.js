"use strict"
 
const cars = ["saab" , "volvo", "BMW"];
const fruits = ["apple", "Grape", "Banana"];

let combined = ["Maruti", "Hundai", cars[0], cars[1], cars[2]];
let combined1 = ["Maruti", "Hundai", ...cars];

console.log(combined1);


const merge = [...cars , ...fruits];

console.log(merge);

const fName = "Steven"; // here array is not there so it will take each letter as separate entity and print it as array
const out = [...fName];
console.log(out); 

function myBestChoice(car1, car2, car3)
console.log(car1, car2, car3);

myBestChoice