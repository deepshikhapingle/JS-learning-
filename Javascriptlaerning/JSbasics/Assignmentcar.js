Car = function(brand, speed){
    this.brand = brand
    this.speed = speed

}
    Car.prototype.accelarate = function(){
        this.speed = this.speed + 10;
        console.log(`speed is ${this.speed} and brand is ${this.brand}`)

};

    Car.prototype.brake = function(){

        this.speed = this.speed-5;
        console.log (`speed is ${this.speed} and brand is ${this.brand}`)
    }



let car1 = new Car("BMW", 120)
let car2 = new Car("Mercerdes", 95)
car1.accelarate();
car1.brake();
car2.accelarate();
car2.brake();


// constructor is used to initialize  the instance variable/properties of the object 

class Person{
    #salary
    constructor(fName, lName, designation, salary)     {
    this.fName = fName
    this.lName = lName
    this.designation = designation
    this.salary = salary
    }
    
    getFullName(){
        console.log(`${this.fName} ${this.lName}`);
    }

    promote (designation, salary){

        this.designation = designation
        this.salary = salary
    }

    getDesignationAndSalary(){

        console.log(`The designation of ${this.fName} ${this.lName} is ${this.designation} and salary is ${this.salary}`)
    }

    get salary(){

        return this.#salary
    }

    set salary(salary){

        if (salary <=50000){
        this.#salary = salary

    }
    else{
      
    console.log("Input is invalid")

    }
}
    greet (){
        console.log(`Hello ${this.fName} ${this.lName}`)
    }
}

let mark = new Person("Mark" , "Steven", "Manager", "34000" ) // we can change the 'let' but not 'const'
mark.greet();
mark.getDesignationAndSalary();
mark.promote("Sr. Manager", "68000" );
mark.getDesignationAndSalary();
mark.promote("DGM", "150000");
mark.getDesignationAndSalary();
mark.salary =2342;
