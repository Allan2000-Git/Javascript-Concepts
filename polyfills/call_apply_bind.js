let nameObj = { 
    name: "Tony"
} 

let PrintName = { 
    name: "Steve", 
    sayHi: function (age) { 
        console.log(this.name + " age is " + age); 
    } 
} 

// Bind
Function.prototype.MyBind = function (bindObj, ...args) { 
    if(typeof bindObj !== "function"){
        throw new Error("Not a function");
    }

    bindObj.myMethod = this; 
    
    return function () { 
        bindObj.myMethod(...args); 
    } 
} 

let HiFun = PrintName.sayHi.MyBind(nameObj, 42); 
// HiFun();

// ---------------------------

// Call
Function.prototype.MyCall = function (bindObj, ...args) { 
    if(typeof bindObj !== "function"){
        throw new Error("Not a function");
    }

    bindObj.myMethod = this; 

    bindObj.myMethod(...args); 
} 

// Apply
Function.prototype.MyApply = function (bindObj, args) { 
    if(typeof bindObj !== "function"){
        throw new Error("Not a function");
    }

    if(!Array.isArray(args)){
        throw new Error("Not an array");
    }

    bindObj.myMethod = this; 
    
    bindObj.myMethod(...args); 
} 