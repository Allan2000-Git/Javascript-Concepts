const user = {
    username: "allan",
    loginCount: 3,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);//gives current object
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this); //gives an empty object {}


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

// const userOne = User("allan", 10, true)
// const userTwo = User("joston", 1, false)

const userOne = new User("allan", 10, true)
const userTwo = new User("joston", 1, false)
console.log(userOne.constructor);

// console.log(userOne);//same as userTwo without 'new'