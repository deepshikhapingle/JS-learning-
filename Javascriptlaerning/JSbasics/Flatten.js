let myList = [3,5,4, [4,5,4,5,6,7], 7]
let converted = [3,5,4 ,4,5,64,5,6,7,]

console.log(myList.flat())

let myList1 = [3,5,4, [4,5,4,[4,5,6], 5,6,7],7]
console.log(myList1.flat())
console.log(myList1.flat(2)) // level of flattening is 2 here



const arr1 = ["it's Sunny in", "", "California"];

let arr2 = arr1.map ((value) => value.split(" "));

console.log(arr2);

arr2 = arr1.flatMap((value)=> value.split(" "))

console.log(arr2);

age = [1, 12, 56, 89, 9, 21, 45,3]

console.log(age.includes(12));

console.log(age.some((value) => value < 0));

console.log(age.every((value) => value < 0));