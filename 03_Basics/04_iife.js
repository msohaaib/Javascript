// Immediately Invoked Function Expression (IIFE)
// to Immediately invoke function we need to wrap function in paranthesis
// we use IIFE to avoid global scope variables pollution 
(function dataBase(){
    // this is named IIFE
    console.log("DB Connected");
})(); // Here First paranthesis is to immediately invoke function and second paranthesis is to execute function

// we can also do it in arrow function
( (name) =>{
    // this is simple or unnamed IIFE
    console.log(`DB 2 Connected : ${name}`); // we can also pass parameter in IIFE
})("Online"); // Here First paranthesis is to immediately invoke function and second paranthesis is to execute function

// when we use two IIFE we need to put terminator at the end of IIFE