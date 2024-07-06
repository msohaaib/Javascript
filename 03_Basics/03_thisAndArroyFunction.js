//++++++++++++++ This keyword +++++++++++++++++++++
// const user = {
//     username : "Muhammad Sohaib",
//     welcomMessage : function(){
//         console.log(`${this.username}, welcom to my website`); // this keyword work for current context
//     }
// }
// user.welcomMessage()
// user.username = "Someone"
// user.welcomMessage()



// ++++++++++++++++ Arrow function ++++++++++++++++++==

// const addTwo = (num1, num2) => { // in arrow funtion when we use curly braces we must write return to return any value
//         return num1 + num2
// }
// console.log(addTwo(3, 5));

// const addTwo = (num1, num2) => (num1 + num2)  // in arrow function when we don't use brackets or use paranthesis we don't need to write return to return any value
// console.log(addTwo(3, 6)); // this arrow function is call implilcit return


// to return object in arrow function
const addTwo = () => ({username : "Muhammad Sohaib"}) // we need to wrap object in paranthesis otherwise it will return undefine
console.log(addTwo());