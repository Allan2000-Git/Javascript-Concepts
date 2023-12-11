const user1={
    fname:"allan",
    lname:"fernandes",
    printName: function(age){
        console.log(this.fname, this.lname, age); 
    }
}

const user2={
    fname:"tony",
    lname:"stark",
}

Object.prototype.myCall = function(obj, ...args){
    if (typeof this !== 'function') {
        throw new TypeError('myCall can only be used on functions');
    }

    obj.myMethod = this;
    obj.myMethod(...args);
}

Object.prototype.myApply = function(obj, args){
    if (typeof this !== 'function') {
        throw new TypeError('myCall can only be used on functions');
    }

    obj.myMethod = this;
    obj.myMethod(...args);
}

user1.printName.call(user2, 55)
user1.printName.myApply(user2, [55])
