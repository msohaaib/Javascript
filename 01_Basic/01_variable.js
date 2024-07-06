const accountId = 1223345  // const variable is not allowed to modify
let accountName = "Muhammad Sohaib" // let variable can be modified
var accountPassword = "12345" // prefer not to use var because of issue in block scope and functional scope
accountCity = "Swat"
let accountState; // in Javascript variable can be declared and it will be undefined in output


console.log(accountId);
console.table([accountId, accountName, accountPassword, accountCity, accountState])




let x=2
if (true){
    let x = 3
}
console.log(x);
