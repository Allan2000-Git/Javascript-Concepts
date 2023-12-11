const reduce = (arr, callback, initialValue) => {
    let result = initialValue;
    for(let i=0;i<arr.length;i++) {
        result = callback(result, arr[i]);
    }
    return result;
}

const arr = [1, 2, 3, 4, 5];

const result = arr.reduce((acc, currVal) => acc + currVal, 0);

console.log(result);
console.log(reduce(arr, (acc, currVal) => acc + currVal, 0));