function reverseNum(number){
    console.log(number)
    let rev_number = 0; //54321 => 12345
    console.log(number % 10)
    while (number > 0) {
    rev_number = rev_number*10 + number % 10; // number % 10 used to get the remainder 
    number = Math.floor(number / 10); // math.floor (round of the number to the lower limit) 
    //math.ceil (round of the number to the upper limit)
    }
    console.log(rev_number);
    };
   reverseNum(35346);
    