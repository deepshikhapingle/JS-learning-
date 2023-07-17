let name = "India";
let salary = 50000;
const movies = ["Naseeb", "Sholey", "Sharabi"]; // this is array
const address = [2 , "lodha", "majiwada", "400601" , "Thane"]; // you can add d/f type of data under the same array

const actors = new Array("Amit", "Dharam","Vinod")
console.log(movies);
console.log (movies[2]); // it will print the data at number 2 (specific data)
console.log(movies.length); // it will print the length of the array (starts from 0)

actors[3]= "salman"; // to add the data at particular location
console.log(actors);
console.log(movies);
actors [0]= "Saif";
console.log(actors);

noOfShows= 100;
const movieData = ["Sholey" , 1983 , "Action/Comedy" , actors , noOfShows];
console.log(movieData);
console.log(movieData[3]);
movieData[2] = "Horror"; // to change the particular data from particular location
console.log(movieData);

actors.push("Dilip"); // to push the data at the end of the array
console.log(actors);

actors.unshift("Akshay") // to push the data at the start of the array 
console.log(actors);
actors.pop();// delete the last entry
console.log(actors);

actors.shift(); // delete the first entry 
console.log(actors);

console.log(movieData.indexOf(1983)); // search the data

console.log(actors.includes("Saif")); //verify the value that the array contains the value or not 

// we can call functions also inside the array declaration 

function calTip (bill) {
    let tip = bill <300 && bill >50 ? bill 
}
