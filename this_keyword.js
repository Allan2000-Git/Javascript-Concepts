console.log(this); // window object

var a=10;
console.log(this.a); // 10

function log(){
    console.log(this); // window object
}
log()

// constructor function => points to function itself (new keyboard)

const user={
    fname:"allan",
    lname:"fernandes",
    printName: function(){
        console.log(this); 
    }
}

user.printName() // user object

const fullName = user.printName
fullName() // window

// *** this keyword depends on how the function is called ***
// arrow function: this keyword doesn't have a context. it takes its parent context


const newUser = {
    name:"new user",
    printName: function(){
        console.log("outer: ", this);
        const fullName = function(){
            console.log("inner: ", this);
        }
        fullName()
    }
}

newUser.printName()