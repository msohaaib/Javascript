// const userEmail = "Sohaib@example.com"
// if (userEmail) { // Here we don't check condition but we check that value is available or not
//     console.log("Email Available");
// } else {
//     console.log("Email not available");
// }


// falsy values 

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Thruthy values
// "0", 'false', " ", [], {}, function () {}, 
// other than the falsy values or true values


// Checking array in condition that its empty or not
// const userEmail = []
// if (userEmail.length === 0){
    //     console.log("Array is Empty");
    // }
    // else{
        //     console.log("Array");
        // }


// Checking Object in condition that its empty or not
// const myObject = {}
// if (Object.keys(myObject).length === 0) {
//     console.log("object is empty");
// }
// else{
//     console.log("Object is not empty");
// }


// Nullish coaleacing operator (??) : null, undefined
// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = null ?? undefined

// console.log(val1);



// terniary Operator
// condition ? true: fase
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less than 80");