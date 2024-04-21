// A circuit breaker is a design pattern that helps to prevent cascading failures.

// Imagine you are making an API call and the request keeps failing, rather than keep on bombarding the server, 
// we can halt the request sending for a certain time. That is how a circuit breaker works.

// https://learnersbucket.com/ezoimgfmt/i0.wp.com/learnersbucket.com/wp-content/uploads/2023/07/Circuit-Breaker-pattern-flow-in-JavaScript1.png?w=1280&ssl=1&ezimgfmt=ng:webp/ngcb1

const circuitBreaker = (func, totalFailures, timeThreshold) => {
    let failures = 0;
    let timeSinceLastFailure = 0;
    let isClosed = false;

    return function(...args){
        if(isClosed){
            let diff = Date.now() - timeSinceLastFailure;
            if(diff > timeThreshold){
                isClosed = false;
            }else{
                console.error("Service unavailable");
                return;
            }
        }

        try {
            const result = func(args);
            failures = 0;
            return result;
        } catch (error) {
            failures++;
            timeSinceLastFailure = Date.now();
            if(failures >= totalFailures){
                isClosed = true;
            }
            console.log("Error");
        }
    }
}

// test function
const testFunction = () => {
    let count = 0;
    
    return function(){
        count++;
        if(count < 4){
            throw "failed";
        }else{
            return "hello";
        }
    }
};


let t = testFunction();
let c = circuitBreaker(t, 3, 200);

c(); // "error"
c(); // "error"
c(); // "error"

// service is closed for 200 MS
c(); // "service unavailable" 
c(); // "service unavailable"
c(); // "service unavailable"
c(); // "service unavailable"
c(); // "service unavailable"

// service becomes available after 300ms
setTimeout(() => {console.log(c());}, 300); // "hello";