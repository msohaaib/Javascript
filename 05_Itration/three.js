// for of loop

// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
// }

// const greeting = "Hello World!"
// for (const greet of greeting) {
//     console.log(greet);
// }


// Map

// const map = new Map()
// map.set("Pk", "Pakistan")
// map.set("IN", "India")
// map.set("USA", "United States Of America")
// map.set("UAE", "United Arab Emirate")

// // console.log(map);
// for (const [key, value] of map) {
//     console.log(key, ":", value);
// }



const myObject = {
    pk : "Pakistan",
    USA : "United States Of America"
}
for (const [key, value] of myObject) {
    console.log(key, ":>", value);
}