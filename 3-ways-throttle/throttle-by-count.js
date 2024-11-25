function throttleByCount(callback, count) {
    let counter = 0;

    return function(...args) {
        if(++counter !== count) return
        counter = 0;
        callback.apply(this, args);
    }
}