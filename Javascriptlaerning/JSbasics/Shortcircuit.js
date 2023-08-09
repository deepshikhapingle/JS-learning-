console.log(7 ||"Mark");
console.log("" || 7);
console.log   (true|| 7);
console.log   (undefined|| null);

console.log   (undefined || 0 || "" || "Great"|| 56 || null);

var person = {

    name:"Jack",
    age:34,
};

console.log (person.age || "unemployeed");
console.log("*****  && *********")

console.log("" && 7);
console.log(7 && "Mark");   
console.log(5 && "Mark" && null && "Deric");  

var person = {

    name:"Jack",
    age:14,
};

console.log(person.age >18 && "Driving allowed");

var person = {

    name:"Jack",
    age:40,
};

console.log(person.age >21 && "Marriage allowed");

var person = {

    name:"Jack",
    age:2,
};

console.log(person.age >3 && "get the addmission" || "do not get the addmission");

var person = {

    name:"Jack",
    age:5,
};

console.log(person.age >3 && "get the addmission" || "do not get the addmission");