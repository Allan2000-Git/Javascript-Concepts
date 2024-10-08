// A base case: If depth is reached then push arr in output and return it.
// A recursion case: Loop over array and check if its an Array or not. If its an array flat it, else push the number in output.

function flatArray(arr, depth = 1, output=[]){
    if(depth === -1){
        output.push(arr)
        return output
    }

    for(let item of arr){
        if(Array.isArray(item)){
            flatArray(item, depth-1, output)
        }else{
            output.push(item)
        }
    }

    return output
}

const arr = [1, 2, [3, [7]], 4];

console.log("Before: ", arr);
console.log("After using built-in flat method: ", arr.flat());
console.log("After using flat polyfill: ", flatArray([1, 2, [3, [7]], 4], Infinity));


// method-2
const flatten2 = (arr) => {
    return arr.reduce((acc, currVal) => {
        return acc.concat(Array.isArray(currVal) ? flatten(currVal) : currVal);
    }, []);
}

// method-3
const flatten3 = (arr) => {
    const result = [];
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            result.push(...flatten3(item));
        } else {
            result.push(item);
        }
    });
    return result;
};

