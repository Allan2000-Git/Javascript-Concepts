const user = {
    name: "John",
    age: 42
}

const user2 = user;
user.name = "Mary";

// console.log(user);
// console.log(user2); 
// Both user and user2 are same because when you copy an object, its address or its copied by reference
// but when you copy a variable, its copied by value.


// ---------------- Shallow copy -------------------------
const obj = {
    name: "John",
    age: 42
}

// const newObj = Object.assign({}, obj);
const newObj = {...obj};
newObj.name = "Mary";

// console.log(obj);
// console.log(newObj);

// ---------------------------------------------- 

// const obj1 = {
//     name: "John",
//     age: 42,
//     address: {
//         city: "Mangalore",
//         pincode: 575005
//     }
// }

// const obj2 = {...obj1};
// obj2.address.city = "Bangalore";

// console.log(obj1);
// console.log(obj2);

// -------------------- Deep Copy ---------------------
const obj1 = {
    name: "John",
    age: 42,
    address: {
        city: "Mangalore",
        pincode: 575005
    }
}

const obj2 = JSON.parse(JSON.stringify(obj1));
obj2.address.city = "Bangalore";

console.log(obj1);
console.log(obj2);

// deep copy doesnt work incase of functions

// custom deep clone function
function deepClone(obj) {
    if (typeof obj !== "object" ||
        typeof obj === undefined ||
        obj === null ||
        Array.isArray(obj) ||
        typeof obj == "function") {
        return obj;
    }

    const result = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        result[key] = deepClone(obj[key])
    }
    return result;
}

// handles circular references
function deepClone(obj, seen = new WeakMap()) {
    if (typeof obj !== "object" || obj === null) {
        return obj; // Return primitive values or null directly
    }

    if (seen.has(obj)) {
        return seen.get(obj); // Handle circular reference
    }

    const result = Array.isArray(obj) ? [] : {};
    seen.set(obj, result); // Mark current object as visited

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key], seen); // Recursively clone properties
        }
    }

    return result;
}

// TL;DR – When to Use WeakMap vs. Map
// Use WeakMap when you want automatic cleanup (✅ best for deepClone).
// Use Map when you need iteration or tracking over time.
