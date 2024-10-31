// Same as pub/sub
class Observer {
    constructor(){
        this.observers = [];
    }
    
    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter((ob) => observer !== ob);
    }

    notifyObserver(data) {
        this.observers.map((observer) => observer(data));
    }
}

const observer = new Observer();

function observer1(data) {
    console.log(`observer1: ${data}`)
}

function observer2(data) {
    console.log(`observer2: ${data}`)
}

observer.addObserver(observer1);
observer.addObserver(observer2);

observer.notifyObserver("foo");

observer.removeObserver(observer1);

observer.notifyObserver("observer1 removed");
