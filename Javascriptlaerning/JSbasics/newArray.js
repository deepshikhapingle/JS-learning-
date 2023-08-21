ages = [23, 37, 5, 65, 75, 85, 22, 21, 7]

const ageDetails = ages.map(function(value, index, arr){
if (value > 60){

    return `${index}: ${value}: Senior`;
}

else{

    return `${index}: ${value}: Junior`;
}

});


console.log(ageDetails);
// filter

num = [4,5,12,16,8,902,1,302];
val = num.filter((value) => value >= 30);
console.log(val);

const sumOfAll = num.reduce ((sum, value) => sum + value, 6);
console.log(sumOfAll)

/*

0. sum = 6, value is undefined.

1. sum = 6, value = 4, o 10, this o is assigned to sum

2. sum = 10, value = 5, 0 - 15

3.sum = 15,

*/
const max = num.reduce((max, value) => Math.max (max, value) , 2 )
console.log(max);

// max = 2 , value = 4 = after iteration max = 4
//max = 4 , value = 5 = after iteration max = 5 ans so on