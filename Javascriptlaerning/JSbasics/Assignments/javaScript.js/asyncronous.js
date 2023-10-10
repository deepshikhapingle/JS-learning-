// asynchronous
setTimeout(()=> {
console.log ("1st instance passed");
}, 4000);
setTimeout(()=> {
console.log ("2nd instance passed");
 }, 3000);
setTimeout(()=> {
console.log ("3rd instance passed");
}, 2000);
setTimeout(()=> {
console.log ("4th instance passed");
}, 1000);

// synchrnous 
setTimeout(()=> {
console.log ("1st instance passed");
setTimeout(() => {
console.log ("2nd instance passed")
setTimeout(() => {
    console.log ("3rd instance passed")
    setTimeout(() => {
        console.log ("4th instance passed")
            },1000);
        },2000);
    },3000);
}, 4000);
