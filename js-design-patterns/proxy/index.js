// Proxy is the concept of doing things via an intermediatory, for example, if you want to change something in the original source, 
// you hand your changes to your proxy which can do all sorts of validations on it to make sure only legit things are passed and 
// then it forwards to the original source.

// It takes two parameters as input,

// 1. Target – The target object that needs to proxied.
// 2. Handler – An object that defines the methods that need to be intercepted. Handlers have many different methods such as get, set.

const obj = {
    name: "Allan",
    age: 23,
    gender: "Male"
}

const proxy = new Proxy(obj, {
    get: function(obj, prop){
        // return obj[prop];
        return Reflect.get(obj, prop);
    },
    set: function(obj, prop, value){
        if(prop === "gender" && typeof value !== "string"){
            console.log(`The value for ${prop} is expected to be a string but got different value`);
        }else{
            // obj[prop] = value;
            Reflect.set(obj, prop, value);
        }

        return true;
    }
})

proxy.gender = 3;

console.log(proxy);

// Use-cases: it can help with 
// - validation, formatting, notifications, debugging, intercepting, monitoring, alerting.
// Overusing them can drastically hamper the performance of the application
