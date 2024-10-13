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
function deepCopy(obj) {
    const result = {};

    if (typeof obj !== "object" ||
        typeof obj === undefined ||
        obj === null ||
        Array.isArray(obj) ||
        typeof obj == "function") {
        return obj;
    }

    const keys = Object.keys(obj);

    for (let key in keys) {
        result[keys[key]] = deepCopy(obj[keys[key]])
    }
    return result;
}

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
