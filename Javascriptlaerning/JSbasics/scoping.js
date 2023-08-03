// global scope //declare variable at outside the function
// function scope 
// block scope //declare withinh the fucntion
"use strict"

let fName= "Mark";

function state() {
const state = "Maha" ; // function scope 

if (state === "Maha"){

    const isMumInMaha = true ; // block scope
    var isPuneInMaha = true ; // this does not block scope // dont use var as far as possible 

    function insideBlock (a){

        console.log ("I am inside a block and not accesible outside block");

    
    }
    insideBlock(5)
}

//insideBlock(5)


}
state()
console.log (fName);

function a(){
console.log(b);


}
a();

let b = 6; // you cannot use let and const before they are declared or initialize 
