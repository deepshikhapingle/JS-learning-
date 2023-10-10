class Car{
    #speed
    constructor(brand, speed)     {
    this.brand = brand
    this.speed = speed
      }
       CarBrandAndSpeed(){
        console.log(`${this.brand} ${this.speed}`);
    }
    accelrate(speed){
        this.speed = this.speed + speed
       console.log(`The car brand is ${this.brand} and the speed is ${this.speed}`)
    }
       get speed (){
        return this.#speed

       }

       set speed(speed){
        if (speed <= 140){
            this.#speed = speed
        }
        else {
            console.log("over speed")
        }
       }       
    brake(speed){
        this.speed = this.speed - speed

        console.log (`The car brand is ${this.brand} and the speed is ${this.speed}`)
    }
 
}
let car1 = new Car("BMW" , 130) // we can change the 'let' but not 'const'
let car2 = new Car("Merc", 95)
car1.accelrate(100);
car1.brake(10);
car2.accelrate(5);
car2.brake(10);

console.log(car1.speed);
car1.speed = 4000;
console.log(car1.speed);


class ElectricCar extends Car {
#batteryLife
constructor (brand, speed, batteryLife){
    super(brand, speed);
this.batteryLife= batteryLife

}

charging(){

    console.log(`the car with ${this.batteryLife} is charging`)
}
accelrate(speed){
    this.speed = this.speed + speed
   console.log(`The car brand is ${this.brand} and the speed is ${this.speed} and batterylife is ${this.#batteryLife}`)
}
   get batteryLife (){
    return this.#batteryLife

   }

   set batteryLife(batteryLife){
    if (batteryLife <= 5){
        this.#batteryLife = batteryLife
    }
    else {
        console.log("Batterylife is invalid")
        this.#batteryLife = 0
    }
   }   
   
}
let car3 = new ElectricCar ("Audi" , 140, 6)
car3.accelrate(8)