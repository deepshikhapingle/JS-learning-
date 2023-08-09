// special varial created for every 
"use strict"

console.log(this);

const calcDist = fucntion (dist) 

    console.log(20 + dist);
    console.log (`This is ${this}`);

calcDist(32);
const calcDistArrow = (dist) =>{
    console.log(20 + dist);
    console.log (`This inside function which is inside an object ${this}`);

    }
calcDistArrow(25);

const mak = {

    dist: 15,
calcDist: function(){
    console.log (`This inside function which is inside an object ${this}`);
    console.log(20 + this.dist);

}

}
mak.calcDist();

const steven = {
dist: 18,

};

steven.calcDist = mak.calcDist;
steven.calcDist();



