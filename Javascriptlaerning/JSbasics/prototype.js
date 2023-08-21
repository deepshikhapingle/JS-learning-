Person = function(fName, lName){
this.fName = fName ;
this.lName = lName;

// consol.log(this);

};

console.log (Person.prototype);

Person.prototype.getFullName = function(){

    console.log(`${this.fName} ${this.lName}`);
};