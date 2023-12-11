const filter = (arr, callback) => {
    const result = [];
    for(let i=0;i<arr.length;i++) {
        callback(arr[i]) && result.push(arr[i]);
    }
    return result;
}

const arr = [1, 2, 3, 4, 4, 5];

const result = arr.filter(item => item % 2 === 0);

console.log(result);
console.log(filter(arr, (item) => item % 2 === 0));