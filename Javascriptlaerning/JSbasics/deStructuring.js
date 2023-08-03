"use strict"

let fullName = ["K", "S", "R"]

let [fName, mName, lName] = fullName;
console.log(`First name is ${fName}, and the last Name is ${lName}`);
fullName = ["M" , "D" , "P"];
[fName, mName] = fullName;
console.log(`First name is ${fName}, and the middle Name is ${mName}`);
fullName = ["G", "H", "I"];
console.log(`First name is ${fName}, and the last Name is ${lName}`);

[lName, fName] = [fName , lName]
console.log(`First name is ${fName}, and the last Name is ${lName}`);

function splitInitials(initials) {
let [f, m, l] =initials 
return [f, m, l];

}

let [f, m , l] = splitInitials("HJK")
console.log (f, m, l);

let myArr = [4, 3, [2,8]];
const [p, , [x,y], q=6] = myArr; // destructing the array and giving q a value if not defined in array
console.log(p,q);

// objects

const car = {type: "Fiat", model: 500, color: "White", owners: {Pune: 4, Mum: 6 }};
//let {type: typeOfCar, model, color} = car;
//console.log(typeOfCar, model, color);

let {type = "Maruti", year=2023 } = car; // type is restructered here but value is 
//there above do it will take previous value i.e. Fiat
console.log(type, year);
console.log(car);
let {Pune, Mum} = car.owners
console.log(Pune, Mum);

function getCarDetails(obj) {

    let {type} = obj;
    return type;

}

console.log(getCarDetails(car));

function getCarDet({type, color}){
return [type, color];

}

console.log(getCarDet(car));

