// To create the observer design pattern, we need to have two types of participants.

// 1. Host
// It will maintain the list of observers.
// Provides option to subscribe and unsubscribe to the observers.
// Notifies the observer when state changes.

// 2. Observer
// Has a function that gets called/invoked every time a state changes.

// A subscription model in which an object subscribes to a host and the host notifies the object whenever an event occurs is known as the observer pattern.

function Events() {
    this.subscriptionList = new Map();
    this.subscribeOnceList = new Map();
    this.subscribeOnceAsyncList = new Map();
    
    this.subscribe = function(name, callback){
        if(!this.subscriptionList.has(name)){
            this.subscriptionList.set(name, [callback]);
        }else{
            const existingCallbacks = this.subscriptionList.get(name);
            this.subscriptionList.set(name, [...existingCallbacks, callback]);
        }

        return {
            // creating a closure here. so remove() will remember which callback to remove
            remove: function(){
                const existingCallbacks = this.subscriptionList.get(name);
                const filteredCallbacks = existingCallbacks.filter((cb) => cb !== callback);
                this.subscriptionList.set(name, filteredCallbacks);
            }
        }
    }

    this.subscribeOnce = function(name, callback){
        if(!this.subscribeOnceList.has(name)){
            this.subscribeOnceList.set(name, [callback]);
        }else{
            const existingCallbacks = this.subscribeOnceList.get(name);
            this.subscribeOnceList.set(name, [...existingCallbacks, callback]);
        }
    }

    this.subscribeOnceAsync = async function (name) {
        return new Promise((resolve, reject) => {
            if (!this.subscribeOnceAsyncList.has(name)) {
                this.subscribeOnceAsyncList.set(name, [resolve]);
            } else {
                const exisitngCallbacks = this.subscribeOnceAsyncList.get(name);
                this.subscribeOnceAsyncList.set(name, [...exisitngCallbacks, resolve]);
            }
        });
    };

    this.publish = function(name, data){
        const callbacks = this.subscriptionList.get(name);
        callbacks.forEach(cb => {
            cb(data);
        });

        // subscribe once
        const subscribeOnceCallbacks = this.subscribeOnceList.get(name) || [];
        subscribeOnceCallbacks.forEach((cb) => {
            cb(data);
        });

        this.subscribeOnceList.set(name, []);

        // subscribe once asynchronous
        const subscribeOnceAsyncCallbacks = this.subscribeOnceAsyncList.get(name) || [];
        subscribeOnceAsyncCallbacks.forEach((cb) => {
            cb(data);
        });

        this.subscribeOnceAsyncList.set(name, []);
    }

    this.publishAll = function(data){
        const entries = this.subscriptionList.entries();
        for(let [key, value] of entries){
            value.forEach(cb => {
                cb(data);
            });
        }
    }
}