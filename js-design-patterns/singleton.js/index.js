/*
The Singleton Pattern limits the number of instances of a particular object to just one. This single instance is called the singleton.
Ex: database connection pool

Advantages:
- It ensures that there is only one instance of a class, which can be useful for coordinating actions across a system. 
- It provides a global point of access to that instance, which can be useful for sharing resources or communicating between different parts of an application. 
- It can help to reduce the memory footprint of your application, as you only need to create one instance of a class.

Disadvantages:
- Testing becomes more difficult.
- Use of a Singleton can lead to tight coupling between classes, which can make your code less flexible and harder to maintain.
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
