numArr = [2, 6, 7, 3, 7, 1, 7, 9];

let newNumber = numArr.map(function(val){

    return val - 1 ;
    
})

console.log (newNumber);
newNumber = numArr.map((val) => val - 1 );
