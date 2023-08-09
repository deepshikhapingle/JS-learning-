const iPhone = "APPLE iPhone 13 (Blue, 128GB) APPLE phone"
// String is an array of character

console.log(iPhone[0]);
console.log(iPhone[10]);
console.log("Blackberry"[4]);
console.log(iPhone.length);
console.log(iPhone.indexOf(13));
console.log(iPhone.indexOf(128));
console.log(iPhone.indexOf("APPLE"));
console.log(iPhone.lastIndexOf("APPLE"));
console.log(iPhone.slice(6));
console.log(iPhone.slice(6,12));
console.log(iPhone.slice(0, iPhone.indexOf("Blue")));
console.log(iPhone.slice(0, iPhone.indexOf(" "))); //first word
console.log(iPhone.slice(iPhone.lastIndexOf(" ") + 1)); // last word

// Write a fucntion getDomainFromEmail. Which should accept array of emails

// Function should validate the email and log the message in case email is not valid
// If the email is valid, then function sjould print the domain name of email.

//marl@apple.com, it should print apple.com



getDomainNameFromEmail = (["mark@apple.com", "Steve@gmail.com", "Bill@hotmail.com"]) 

function getDomainNameFromEmail(emails){

    
    if (emails.indexOf("@")){

        console.log("email is valid")
    }
    else 
    {
        console.log ("email is invalid")
    }


}





