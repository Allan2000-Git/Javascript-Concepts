/*
The Singleton Pattern limits the number of instances of a particular object to just one. This single instance is called the singleton.
Ex: database connection pool
*/

function Counter() {
    this.count = 0;

    this.increment = () => {
        this.count++;
    }

    this.decrement = () => {
        this.count--;
    }
}

// In a singleton design pattern, only one object is created for each interface (class or function) 
// and the same object is returned every time when called.

let Singleton = (function () {
    let instance;

    return {
        getInstance: function () {
            if(!instance){
                instance = new Counter();
            }
            return instance;
        }
    }
})();

let counter1 = Singleton.getInstance();
let counter2 = Singleton.getInstance();

console.log(counter1 === counter2)
