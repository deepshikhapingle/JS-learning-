// constructor function 
// how it differ from normal function?

let person = function(fName, lName){

    console.log("ABC");
};

person("Mark","Twain");

//constructor fn
let Person = function(fName, lName){

    console.log("ABC");
};

let mark = new Person("Mark", "Twain");
let steve = new Person("Steve", "Jobs");
let myArr = [3,4,2,5,8,9];

console.log(mark instanceof Person);
console.log(steve instanceof Array);