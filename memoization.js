
const calculateSum = (n) => {
    let sum = 0;
    for (let index = 0; index <= n; index++) {
        sum += index;
    }
    return sum;
}   

console.time();
console.log(calculateSum(5));
console.timeEnd();

// Closure with additional variable based memoization
const memoizedFunction = (func) => {
    let cache = {};
    return function(...args){
        // let n = args[0];
        if(args in cache){
            return cache[args];
        }else{
            let value = func(args);
            cache[args] = value;
            return value;
        }
    }
}

function memoizedFunction(fn) {
    const cache = {};
    
    return function(...args) {
        const key = String(args);
        if(key in cache) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    }
}

console.time();
console.log(memoizedFunction(calculateSum)(5));
console.timeEnd();
