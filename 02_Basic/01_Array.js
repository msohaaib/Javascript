const myArr= [1, 2, 3, 4, 5, 6]
// const name = ["name1", "name2", "name3"]
// const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[2]);


// +++++++++ Array Methods ++++++++

// myArr.push(7) // add value at the end
// myArr.pop()  // remove last value in Array
// myArr.unshift(0) // add value at start
// myArr.shift() // remove the first value of array
// console.log(myArr.includes(4)); // .include is for search in array
// console.log(myArr.indexOf(4)); // .indexOf is for finding index of an element in array

// const newArray = myArr.join()
// console.log(myArr);
// console.log(newArray);


// slice and splice method
console.log("A", myArr);
const myn1 = myArr.slice(1, 4)
console.log(myn1);


const myn2 = myArr.splice(1, 4)
console.log(myn2);