const map = (arr, callback) => {
    const result = [];
    for(let i=0;i<arr.length;i++) {
        result[i] = callback(arr[i]);
    }
    return result;
}

const arr = [1, 2, 3, 4, 5];

const result = arr.map(item => item  * 2);

console.log(result);    
console.log(map(arr, (item) => item * 2));