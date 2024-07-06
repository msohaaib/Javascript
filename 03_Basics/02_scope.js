function one(){
    const username = "sohaaib"
    function two(){
        const email = "sohaib@example.com"
        console.log(username);  // scope => child element can access parent element
    }
    console.log(email);  // Scope => parent element can't access child elecment
    two() // calling internal function
}
one() // calling external function


// same rules apply in ifelse