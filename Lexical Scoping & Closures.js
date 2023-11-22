//Lexical Scoping
function outer(){
    let username="allan";

    //console.log("INNER ONE: " + secretMessage);//gives error message

    function innerOne(){
        let secretMessage="password";
        console.log("INNER ONE: " + username);//no error message
        console.log("INNER ONE: " + secretMessage);//no error message
    }
    function innerTwo(){
        console.log("INNER TWO: " + username);//no error message
        //console.log("INNER ONE: " + secretMessage);//gives error message
    }
    innerOne();
    innerTwo();
}

outer();

// --------------------------------
var user="allan"
if(true){
    var user="joston"
    console.log(user);
}
console.log(user);
// OUTPUT: joston joston




//Closures
//a closure gives you access to an outer function's scope from an inner function. 
//In JavaScript, closures are created every time a function is created, at function creation time.
function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
    }
    
    const myFunc = makeFunc(); //passes the lexical scope of the function
    myFunc(); //executes the function
    console.log(myFunc);//gives the name of the function and not the execution of the function