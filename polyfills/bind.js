const user1={
    fname:"allan",
    lname:"fernandes",
    printName: function(){
        console.log(this.fname, this.lname); 
    }
}

const user2={
    fname:"tony",
    lname:"stark",
}

Object.prototype.myBind = function(bindObj){
    bindObj.myMethod = this;
    return function(){
        bindObj.myMethod();
    }
}

const result = user1.printName.bind(user2)
const customBind = user1.printName.myBind(user2)

console.log(result());
console.log(customBind());