class User {
    static id = 1;
    static cache = {
        1: 'some value',
    };

    constructor(username){
        this.username = username
        this.id = User.id++;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }

    static printCache() {
        console.log(this.cache);
    }

    static hasInCache() {
        this.printCache();
    }
}

const allan = new User("allan")
// console.log(allan.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
const samsung = new Teacher("samsung", "samsung@phone.com")
// console.log(iphone.createId()); // error

// console.log(User.createId());
// console.log(Teacher.createId());

console.log(User.hasInCache());


// built-in static methods
// Math.random(), Object.hasOwnProperty()