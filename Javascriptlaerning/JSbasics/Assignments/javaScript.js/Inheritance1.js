class Person{








}

class Epmloyee extends Person{
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


const student name