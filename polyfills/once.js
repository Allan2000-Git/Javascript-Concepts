// Creates a function that is restricted to invoking func once

function once(func, context) {
    let ran;

    return function() {
        if(func) {
            ran = func.apply(context || this, arguments);
            func = null;
        }

        return ran;
    }
}

const printHello = once(() => console.log("Hello World!"));

printHello();
printHello();
printHello();
printHello();
printHello();
printHello();