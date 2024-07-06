// function myName(){
//     console.log("S");
//     console.log("O");
//     console.log("H");
//     console.log("A");
//     console.log("I");
//     console.log("B");
// }
// myName()


// function addTwoNumbers(num1, num2){  //  the value inside the paranthesis is call parameters (while defining function)
//     console.log(num1 + num2);
// }
// addTwoNumbers(5, 6) // The value inside the paranthesis is call arguments  (while calling function)


// function addTwoNumbers(num1, num2){ // for known number of parameters
    // let result = num1 + num2
    // return num1 + num2
    // return result
// }
// const result = addTwoNumbers(5, 6)
// console.log(`Result ${result}.`);


// function userLogin(username = "sohaib"){
//     return `${username} you are logged in`
// }
// console.log(userLogin("Hello"));


// function calculateCartPrice(...item1){ // for unknown numbers of parameters
//     return item1  // the return value will be in array
// }
// console.log(calculateCartPrice(100, 200, 3000));


// const user = {
//     name : "Muhammad Sohaib",
//     email : "sohaib@example.com"
// }
// function handleObject(anyObject){
//     console.log(`${anyObject.name} email is ${anyObject.email}.`);
// }
// // handleObject(user)
// handleObject({
//     name: "Muhammad Sohaib",
//     email : "Sohaib@example.com"
// })


// const myArray = [100, 200, 300, 500]
// function retuenSecondValue(getArray){
//     return getArray[1]
// }
// // console.log(retuenSecondValue(myArray));
// console.log(retuenSecondValue([100, 200, 300, 500]));