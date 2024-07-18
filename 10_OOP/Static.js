class User{
    constructor(username){
        this.username = username 
    }

    logMe(){
        console.log(`User Name is ${this.username}`);
    }
    static createId(){
        return `123`
    }
}

const sohaib = new User("Sohaib")
// console.log(sohaib.createId());


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const tea = new Teacher("tea", "tea@example.com")
console.log(tea.logMe());