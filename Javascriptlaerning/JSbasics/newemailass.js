emails = (["mark@apple.com", "Steve@gmail.com", "Bill@hotmail.com"]) 

function getDomainNameFromEmail(mails){

   
    for ( const mail of mails) {
        if (mail.indexOf("@") != -1 && mail.indexOf(".") != -1){

            console.log("email is valid")
        }
        else 
        {
            console.log ("email is invalid")
        }

    }


}

getDomainNameFromEmail(["mark@apple.com", "Steve@gmail.com", "Bill@hotmailcom"])
//getDomainNameFromEmail("mark@apple.com")


