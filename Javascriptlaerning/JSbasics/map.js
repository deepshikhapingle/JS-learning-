const nameAge = new Map();
nameAge.set("Mark" , 25).set("Steve" , 65).set ("Bill", 45)
console.log(nameAge.size);
console.log(nameAge);
console.log(nameAge.get("Mark"))
console.log(nameAge.get("Steve"))
console.log(nameAge);


const salaryData = new Map([
    ["Mark" , 32000],
    ["Steve" , 31000],
    ["Bill" , 42000],


])
console.log(salaryData);
console.log(salaryData.entries());
const newSal = new Map (salaryData.entries());

for (const value of salaryData){

    console.log(value);
}

for (const [key, value] of salaryData){

    console.log(`salary for $ {key} is ${value}`);

}

for (const [key, value] of salaryData.keys()){

    console.log("Key" + key + value);

}

for (const value of salaryData.values()){

    console.log("Value" +value );

}

const arr = [...salaryData];
console.log(arr);
// arrays, set,objects, maps

//objects

const car = {type: "Fiat", modal: "500", color: "White"};
for(let key of Object.keys(car)){

    console.log(key);
}

for(let entry of Object.entries(car)){

    console.log(entry);
}

iPhone = "APPLE iPhone 13 (Blue, 128 GB) APPLE phone"