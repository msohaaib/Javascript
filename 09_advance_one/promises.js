// const promiseOne = new Promise( (resolve, reject) =>{
// // Do an async task
// // Datase calls, cryptography, network call
// setTimeout(() => {
//     console.log('asyn task is complete');
//     resolve()
// }, 1000);
// } )
// promiseOne.then( () =>{
//     console.log("promise consumed");
// } )

// new Promise( (resolve, reject) =>{
//     setTimeout(() => {
//         console.log("Async task 2");
//         resolve()
//     }, 1000);
// } ).then( () =>{
//     console.log("Asyn 2 resolved");
// } )

// const promiseThree = new Promise( (resolve, reject)=>{
//     setTimeout(() => {
//         resolve({username: "msohaaib", email: "msohaaib@example.com"})
//     }, 1000);
// } )
// promiseThree.then((user)=>{
//     console.log(user);
// })

// const promisFour = new Promise((resolve, reject) => {
// setTimeout(() => {
//     let error = true;
//     if (!error) {
//     resolve({ username: "sohaib", Pass: "12345" });
//     } else {
//     reject("ERROR: Something went wrong");
//     }
// }, 1000);
// })
// .then((user) => {
//     console.log(user);
//     return user.username;
// })
// .then((username) => {
//     console.log(username);
// })
// .catch((error) => {
//     console.log(error);
// }).finally(()=>{
//     console.log("The promise either resolved or rejected");
// })



// const promiseFive = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//         resolve({ username: "Javascript", Pass: "12345" });
//         } else {
//         reject("ERROR: JS Went Wrong");
//         }
//     }, 1000);
// });

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
    return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})