class User{
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    set password(value){
        this._password = value
    }

    get password(){
        return this._password.toUpperCase()
    }
}
const soh = new User("sohaib@example.com", "abcd")
console.log(soh.password);