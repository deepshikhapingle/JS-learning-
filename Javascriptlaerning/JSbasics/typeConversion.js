const a = "234";
const b = 45;
console.log(a+String(b)); // convert number into string
console.log(Number(a)+ b) ; // convert string into number

console.log("30" - 20 - "30") // with - string get converted into number // coercion
console.log("30" - 20 - "ABC");
console.log("30" * 4);

let n = "1" + 1 // 11
n = n -1 ; // 10
console.log(n); //10