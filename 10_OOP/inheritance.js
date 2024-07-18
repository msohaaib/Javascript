class User{
    constructor(username){
        this.username = username 
    }

    logMe(){
        console.log(`User Name is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`new course was added by ${this.username}`);
    }
}

const tea = new Teacher("sohaib", "sohaib@email.com", "abc")
console.log(tea.addCourse());
tea.addCourse()

const user3 = new User("MSOHAIB")
user3.logMe()