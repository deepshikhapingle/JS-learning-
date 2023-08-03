let fName = "Mark";
let age = 50;
myName = fName;
fName = "Steve";

console.log (fName); // steve
console.log (myName); // mark

const info = {

    fName: "Derik",
    age: 50,
};

const info1 = info;
 info1.age =60;

 console.log(info.age); //60
 console.log(info1.age);//60 (diffrent for objects)

