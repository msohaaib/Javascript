const address = Symbol("Odigram")

const jsUser = {
    name : "Muhamma Sohaib",
    email : "msohaib@exampl.com",
    "Regid" : 8719,
    [address] : "Odigram"
}
// console.log(jsUser["name"]);
// console.log(jsUser[address]);
// jsUser.Regid = 9699 
// console.log(jsUser["Regid"]);
// Object.freeze(jsUser)  // freez the object and then value can't be changed
// jsUser.email = "msohaib@google.com"
// console.log(jsUser);

// jsUser.greeting = function(){
//     console.log("Hello JS User");
// }
// jsUser.greetingTwo = function(){
//     console.log(`Hello ${this.name}`);
// }
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());