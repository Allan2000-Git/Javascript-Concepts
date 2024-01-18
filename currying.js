// let multiply = (x,y) => {
//     console.log(x*y);
// }

// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(5);


// using closure
// let multiply = (x) => {
//     return function(y){
//         console.log(x*y);
//     }
// }

// let multiplyByTwo = multiply(2);
// multiplyByTwo(5);

function Add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

const ans = Add(2)(3)(4);
// console.log(ans);


// Infinite Currying
function Addition(a){
    return function(b){
        if(b){
            return Addition(a+b);
        }
        return a;
    }
}

const res = Addition(2)(3)(4)();
console.log(res);

