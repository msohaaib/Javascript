// injecting object to array and object
let myArray = ["sohaib", "Asad"]
let myObject = {
    name: "sohaib",
    id : 948309
}
// Object.prototype.hey = function () {
//     console.log("Hello msohaib");
// }
// myArray.hey()
// myObject.hey()



// Array.prototype.hello = function(){
//     console.log("Hey");
// }
// myArray.hello()
// myObject.hello()



// inheritance
// Old Syntax

const user ={
    name : "student",
    email : "student@example.com"
}

const teacher = {
    makeVideo : true,
}
const teachingAssist = {
    isAvailable : true
}
const taSupport = {
    assignment : "JS assignment",
    fullTime : true,
    __proto__ : teachingAssist
}
teacher.__proto__ = user

// console.log(teacher.name);
// console.log(taSupport.isAvailable);

// Modern Syntax
Object.setPrototypeOf(teacher, user)
console.log(teacher.name);