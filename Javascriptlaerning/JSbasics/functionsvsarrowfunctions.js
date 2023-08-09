//Function and arrow function

 

//Normal function gets its own this keyword. That depends upon how you call the function.

 

//Function at a global scope. i.e. not definied inside any other blocks, or objects
//will not get "this".

 

//If a function is inside a object and inside a method. When you call from within the 
//outer function, it is a normal call, not with a object.method()
//In such cases there is no this keyword available to these functions.