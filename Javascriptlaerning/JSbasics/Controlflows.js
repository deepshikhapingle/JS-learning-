const movie = ["Naseeb" , "Sholey", "Sharabi", "ABC"]



console.log(`1- Movie Name is ${movie[0]}`);
console.log(`2- Movie Name is ${movie[1]}`);
console.log(`3- Movie Name is ${movie[2]}`);

for (let i = 0; i < movie.length; i++){

    console.log(`${i+1}- Movie Name is ${movie[i]}` );
}
let i=0;
for (let mov of movie){

    console.log(`${i+1} - Movie Name is ${movie}`);
    console.log(`Movie Name (for each way ) is ${movie}`);
}

for (let i = movie.length -1 ; i >= 0; i--){

    console.log(`${i+1}- Movie Name is ${movie[i]}` );
}
