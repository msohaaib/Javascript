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



Array.prototype.hello = function(){
    console.log("Hey");
}
// myArray.hello()
// myObject.hello()