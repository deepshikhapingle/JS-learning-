// values, object, stored , 
// higher order functions - pass them as function, return a function from a function 

const sum = (a,b) => a + b;
const mult = (a,b) => a * b;

function highsum (p, fn) {

    console.log (p + fn (5 ,4));
    console.log (fn.name);

}
highsum (6, sum);
highsum (6, mult);


const greet = function (greeting){
return function (name){

   console.log(`${greeting} ${name}`) ;
};

};

const greeter = greet ("Hello");
greeter("Mark")

// closure 

greet ("Hello")("Mark");

const greet2 = (greeting) => (name) =>console.log(`${greeting} ${name}`) ;

greet ("Hello")("Bill");


// call(), apply(), bind()

const person = {

    firstName:"Joan",
    lastName: "Doe",

    fullName(){

        return this.firstName + " " + this.lastName;
        },
    };

    console.log(person.fullName());

    const abc = person.fullName;

    //console.log(abc());

    const person1 = {

        firstName:"Jaa",
        lastName: "Don",

};

console.log(abc.call(person1));

function salutation(salutation) {

    console.log(`Hello ${salutation} ${this.firstName} ${this.lastName}, how are you?`);
  
  }
  
salutation.call(person, "Mr.") // this = person, inside salutation method
salutation.call(person1, "Mrs.") // this = person1, inside salutation method 
abc();
abc.call(person1)

function allocation(salutation,location) {

    console.log(`Hello ${salutation} ${this.firstName} ${this.lastName}, today your assigned location is` );
}

allocation.call(person, "Mr", "Indore");
allocation.apply (person1, ["Mrs", "Pune"]);
