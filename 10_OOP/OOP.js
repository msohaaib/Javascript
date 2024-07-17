// const user = {
//     username : "msohaib",
//     id : 4384,
//     SignedIn : true,
//     getUserDetails : function(){
//         console.log(`Welcom ${this.username}`);
//     }
// }




// this method overwrite values
function user(username, id, SignedIn){
    this.username = username
    this.id = id
    this.SignedIn = SignedIn

    // return this
}

////// Constructor Function

// const userOne = user("msohaib", 7776, false)
// const userTwo = user("khan", 7776, false)




// to avoid overwriting we need to add new key
const userOne = new user("msohaib", 7776, false) // the new keyword create new instance of a function
const userTwo = new user("khan", 7776, false)
console.log(userOne);
console.log(userTwo);
