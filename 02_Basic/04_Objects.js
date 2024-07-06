// Singleton Object
// const tinderUser = new Object()
// console.log(tinderUser);


// Object Literal
// const tinderUser = {}
// tinderUser.id ="123abc"
// tinderUser.name = "Sohaib"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);


// Nested Objects
// const regularUser = {
//     emali: "Someone@example.com",
//     fullName: {
//             userFullName : {
//                 fName : "Muhammad",
//                 lName : "Sohaib"
//             }
//     }
// }
// console.log(regularUser);
// console.log(regularUser.fullName)
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.fName);


// Merging Objects
// const obj1 = {
//     1: 'a',
//     2: 'b',
//     3: 'c'
// }
// const obj2 = {
//     4: 'd',
//     5: 'e',
//     6: 'f'
// }
// const obj3 = { obj1, obj2 }
// console.log(obj3);

// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

// const obj3 ={...obj1, ...obj2}
// console.log(obj3);


// console.log(Object.keys(obj1)); // finding keys of an object
// console.log(Object.values(obj1)); // finding values of an object
// console.log(Object.entries(obj1)); // converting every key and value of an Object to an array
// console.log(obj1.hasOwnProperty('2')); // finding that property is available or not

// Objects in Array
// const users = [
//     {
//         name: "name1",
//         email: "email1#example.com"
//     },
//     {
//         name: "name2",
//         email: "email2#example.com"
//     },
//     {
//         name: "name3",
//         email: "email3#example.com"
//     }
// ]
// console.log(users[0].name);


// ********************* Destructuring of an Object **************************

// const course = {
//     courseName : "Javascript",
//     instructor : "SomeOne",
//     courseCode : "CS200"
// }
// const {courseName} = course
// const {courseName : name} = course
// console.log(courseName);
// console.log(name);