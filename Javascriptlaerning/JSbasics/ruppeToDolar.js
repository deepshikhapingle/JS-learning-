const accDeposits = [300, -1000, 600, -300, 2300, 430, 750, -2000];

val = accDeposits.filter ((value) => value > 0);
let accDeposit = val.map(function(val){

    return val * 80 ;
    
})

console.log (accDeposit);

let final = accDeposit.reduce((sum, value)=> sum + value)
console.log (final)

