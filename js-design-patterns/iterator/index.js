function createIterator(collection){
    let i = 0;
    return {
        next: function(){
            if(i < collection.length){
                return {value: collection[i++], done: false};
            }
            
            return {value: null, done: true};
        }
    }
};

const arr = [1, 2, 3];
const iterator = createIterator(arr);
console.log(iterator.next());
// {"value": 1, "done": false }

console.log(iterator.next());
// {"value": 2, "done": false }

console.log(iterator.next());
// {"value": 3, "done": false }

console.log(iterator.next());
// {"value": null, "done": true }