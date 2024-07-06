// Primitive DataTypes   (Call by value)
// const name =  "Sohaib" // 1) String
// const age = 21// 2) Number
// const isLoggedIn = false// 3) Booleam
// const num = null;// 4) null
// let email;// 5) undefined
// const id = Symbol("1223")// 6) Symbol
// const bigint = 465464687897654654967846546;// 7) BigInt



// Reference Type or Non-Primitive DataTypes

// 1) Arrays
// const members = ["Sohaib", "khan", "etc"] 


// 2) Objects
// let detail = {
//                 name: "MSohaib",
//                 age : 21,
//                 email : "sohaib@example.com"
// }

// 3) Function
// const myFunction = function(){
//     console.log("Hello world");
// }



// +++++++++++++++++ Memory ++++++++++++++++
// types => Stack memory (Primitive DataType) and Heap memory (Non-Primitive/Reference DataType)

// Example of Stack Memory
// let myYoutubeName = "Something"
// let anotherName = myYoutubeName
// anotherName = "everything"
// console.log(myYoutubeName);
// console.log(anotherName);


// Example of Heap Memory
// let userOne = {
//     name : "Sohaib",
//     email : "Sohaib@example.com"
// }
// let userTwo = userOne
// userTwo.name = "Asad"
// userTwo.email = "Asad@example.com"
// console.log(userOne);
// console.log(userTwo);