const address ={
houseNo :2,
houseName : "Lodha",
street : "Majiwada",
pin : "400601",
city : "Thane",
country: "India",
facilities: ["Swimming Pool" , "Garden" , "Gym" , "Water"],

formulateAddress: function (){
    let fullAdress = `${this.name},
    ${this.houseNo},
    ${this.houseName},
    ${this.street},
    ${this.pin},
    ${this.city},
    ${this.country},
    ${this.facilities}`;
    console.log(this);
    return fullAdress;

}

};

console.log(typeof address);

console.log(address.pin);
console.log(address ["pin"]);

let no = "No";
console.log(address["house" + no]);
console.log (address ["street" + no]);
address.landmark = "Near CCD"
console.log(address);
address ["Locality"] = "safe";
console.log(address);
console.log(address.facilities[2]);
console.log(address.facilities);
console.log(address.formulateAddress());
console.log(address["formulateAddress"]());

