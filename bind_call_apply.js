const user1={
    fname:"allan",
    lname:"fernandes",
    printName: function(){
        console.log(this.fname, this.lname); 
    }
}

const user2={
    fname:"frontend",
    lname:"developer",
}

// bind => change the context of this keyword
const name = user1.printName.bind(user2) // 2nd argument is the parameters to be passed to the function | returns a new function
// name()


// Function Borrowing
const user3={
    fname:"allan",
    lname:"fernandes",
    printName: function(greeting, time){
        console.log(greeting, time, this.fname, this.lname); 
    }
}

const user4={
    fname:"frontend",
    lname:"developer",
}

const printName = user3.printName.bind(user4, "hello", "morning")
printName()
user3.printName.call(user4, "hello", "morning") // sequence of arguments
user3.printName.apply(user4, ["hello", "morning"]) // array of arguments

// call & apply differs in arguments
