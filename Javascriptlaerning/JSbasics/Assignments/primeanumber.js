function isprimenumber(n){
if (n===0 || n===1) return false;   
for (i=2; i <= n/2;i++){
if (n % i == 0) return false;
}
{
return true;
}
}
let x = 100; 
let first10PrimeNumbers = 0;
    for (i=0; i <= x; i++ ){
    if (isprimenumber()){
        console.log(i);
        first10PrimeNumbers++;
    }
    if (first10PrimeNumbers === 10){
        break;
    }}