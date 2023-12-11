// Immediately Invoked Function Expression

(function one(){
    console.log("ONE");
})(); // need to put ; to tell the end of the function

(() => {
    console.log("TWO");
})()