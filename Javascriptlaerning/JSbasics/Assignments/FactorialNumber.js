function factorial(num){
fact = 1;

if (num<=0){
    console.log("Error")
}
else {
    for (let i=1;i<=num;i++){
    fact = fact*i
}
console.log(`The factorial of ${num} is ${fact}`)

}}

factorial(7)