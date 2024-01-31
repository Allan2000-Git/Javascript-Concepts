
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

const memoizedFunction = (func) => {
    let cache = {};
    return function(...args){
        let n = args[0];
        if(n in cache){
            return cache[n];
        }else{
            let value = func(n);
            cache[n] = value;
            return value;
        }
    }
}

console.time();
console.log(memoizedFunction(calculateSum)(5));
console.timeEnd();