const input = [4,5,6,-8,0,-6,7,-3,0,9,-5]
const output = []

for (let i=0;i<input.length;i++){
    if (input[i]==0){
    output.push(input[i])
}
}

for (let i=0;i<input.length;i++){
    if (input[i]!=0){
        output.push(input[i])
    }
   
}
console.log(output)
