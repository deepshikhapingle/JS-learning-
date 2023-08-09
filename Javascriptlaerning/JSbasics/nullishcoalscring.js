let value = 500;
let value2 = null;

let value3 = value2 ?? value;

console.log(value3);

// it return left hand side but it print righthand side operant if left hand side operant is undefined

value2 = "ABC"

 value3 = value ?? value2;