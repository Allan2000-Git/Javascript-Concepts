/*

[1,2,3].myReduce((acc, item, index) => {}, initalValue)

*/

Array.prototype.myReduce = function(callback, initialValue) {
    let result = initialValue;
    for (let index = 0; index < this.length; index++) {
        result = callback(result, this[index], index);
    }

    return result;
}

console.log([1,2,3].myReduce((acc, item, index) => acc += item, 0));