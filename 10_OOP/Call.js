function setUserName(username){
    this.username = username
}
function createUser(username, email, password){
    setUserName.call(this, username)
    this.email = email
    this.password = password
}

const user = new createUser("Hello", "someone@example.com", "12344")
console.log(user);