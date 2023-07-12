const now = 2023;
const independence = 1947;
const country = "India"

// India is in 76th year of Independence 
sum = 6+6; // addition
const statement = country + " is into " + (now - independence) + "th year of Independence " ;

// above "+" does concetenation 
console.log (statement)
// const are in all capital (good practice)
//template string

const statementwithTemplate = `${country} is into ${now - independence} th year of Independence.`
console.log(statementwithTemplate);

//multiline string

let quote = `when there is a 
will thare is a way `
console.log(quote);

