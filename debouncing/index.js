// everytime we type and leave the key, API is called. but we dont want hat to happen. we want API to be called only when user leaves the key once for some milliseconds
// eg: call the API only when there is difference of 300ms between 2 key events

// implement a debounce function in JavaScript to limit the frequency of API calls when a user types in a key.

let counter=0;
const getData = () =>{
    console.log("Fetching data...", counter++);
}

const debounce = (fn, delay) => {
    let timer;
    return function(...args){
        let context=this;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(context, args);
        }, delay)
    }
}

const betterFunction = debounce(getData, 300); // each time called, it creates a copy of the function and clears the timer