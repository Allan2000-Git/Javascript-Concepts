// everytime we type and leave the key, API is called. but we dont want hat to happen. we want API to be called only when user leaves the key once for some milliseconds
// eg: call the API only when there is difference of 300ms between 2 key events

// implement a debounce function in JavaScript to limit the frequency of API calls when a user types in a key.

let counter=0;
const getData = () =>{
    console.log("Fetching data...", counter++);
}

const debounce = (func, delay) => {
    let timeoutID = null;
    return function (...args) {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            timeoutID = null;
            func.apply(this, args);
        }, delay);
    };
}

const betterFunction = debounce(getData, 300); // each time called, it creates a copy of the function and clears the timer

// 1. Debouncing is a programming technique that helps to improve the performance of web applications by limiting the frequency of function calls.
// 2. Debouncing is a way of delaying the execution of a function until a certain amount of time has passed since the last time it was called. 
// This can be useful for scenarios where we want to avoid unnecessary or repeated function calls that might be expensive or time-consuming.